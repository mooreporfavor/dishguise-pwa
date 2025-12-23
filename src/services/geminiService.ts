
import { GoogleGenAI } from "@google/genai";
import { RoundData, DishOption, IngredientOption, Difficulty, GameMode } from "../types";
import { DailyMenu } from "../data/ThePantry";

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_API_KEY });

// Simple UUID generator
const generateSafeId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

// ISO Code to Flag Emoji
const getFlagEmoji = (countryCode: string) => {
    if (!countryCode || countryCode.length !== 2) return "🏳️";
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
};

// SEEDING SYSTEM
const getDaySeed = (str: string) => {
    let h = 2166136261 >>> 0;
    for (let i = 0; i < str.length; i++) {
        h = Math.imul(h ^ str.charCodeAt(i), 16777619);
    }
    return function () {
        h += h << 13;
        h ^= h >>> 7;
        h += h << 3;
        h ^= h >>> 17;
        return (h >>> 0) / 4294967296;
    };
};

const REGIONS = [
    "Southeast Asia", "Mediterranean", "Latin America", "Eastern Europe",
    "Middle East", "Nordic", "Sub-Saharan Africa", "Indian Subcontinent",
    "East Asia", "American South", "Caribbean", "Polynesia", "French Provinces", "Italian Regions"
];

const CATEGORIES = [
    "Street Food", "Celebratory Feast", "Comfort Stew", "Fermented Dish",
    "Breakfast Staple", "Dessert", "Seafood Delicacy", "Noodle Dish", "Rice Dish", "Sandwich"
];

const getDailyTopic = (difficulty: Difficulty, roundIndex: number) => {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const seedKey = `${today}-${difficulty}-${roundIndex}`;
    const rng = getDaySeed(seedKey); // Use this if you want deterministic daily randomness
    // Ideally for batch generation we just pick random ones
    const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

    return { region, category, seedKey };
};

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// --- SHARED PROCESSING LOGIC ---
const processRawRound = (data: any, difficulty: Difficulty, seedKey: string): RoundData => {
    // 1. Dish Options
    const dishDistractors = data.distractorDishes.map((d: any) => ({
        name: d.name,
        reason: d.reason,
        isCorrect: false
    }));
    const dishTarget = { name: data.targetDish, isCorrect: true, reason: undefined };
    const allDishOptions = [dishTarget, ...dishDistractors];
    // Shuffle Dishes
    for (let i = allDishOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allDishOptions[i], allDishOptions[j]] = [allDishOptions[j], allDishOptions[i]];
    }
    const dishOptions: DishOption[] = allDishOptions.map((opt, index) => ({
        id: `dish-${index}-${generateSafeId()}`,
        name: opt.name,
        isCorrect: opt.isCorrect,
        reason: opt.reason
    }));

    // 2. Ingredient Options
    const correctIngredients = data.mainIngredients.slice(0, 5).map((name: string) => ({
        name, isCorrect: true
    }));
    const wrongIngredients = data.distractorIngredients.map((name: string) => ({
        name, isCorrect: false
    }));
    const allIngOptions = [...correctIngredients, ...wrongIngredients];
    // Shuffle Ingredients
    for (let i = allIngOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allIngOptions[i], allIngOptions[j]] = [allIngOptions[j], allIngOptions[i]];
    }
    const ingredientOptions: IngredientOption[] = allIngOptions.map((opt, index) => ({
        id: `ing-${index}-${generateSafeId()}`,
        name: opt.name,
        isCorrect: opt.isCorrect
    }));

    const flagEmoji = getFlagEmoji(data.countryCode);

    return {
        id: generateSafeId(),
        dayId: seedKey,
        targetDish: data.targetDish,
        description: data.description,
        cuisine: data.countryOfOrigin || data.cuisine,
        region: data.region || "International",
        originCity: data.originCity || "Unknown City",
        category: data.category || "Special",
        procurementDifficulty: data.procurementDifficulty || "MEDIUM",
        executionDifficulty: data.executionDifficulty || "MEDIUM",
        flagEmoji: flagEmoji,
        countryCode: data.countryCode,
        mainIngredients: data.mainIngredients,
        triviaClues: data.triviaClues || ["A mystery dish.", "Unknown origins.", "Secret recipe."],
        dishOptions,
        ingredientOptions,
        difficulty
    };
};

const ROUND_SCHEMA = {
    type: "OBJECT",
    properties: {
        targetDish: { type: "STRING" },
        description: { type: "STRING" },
        cuisine: { type: "STRING" },
        countryOfOrigin: { type: "STRING" },
        countryCode: { type: "STRING" },
        region: { type: "STRING" },
        originCity: { type: "STRING" },
        category: { type: "STRING" },
        procurementDifficulty: { type: "STRING", enum: ["EASY", "MEDIUM", "HARD"] },
        executionDifficulty: { type: "STRING", enum: ["EASY", "MEDIUM", "HARD"] },
        mainIngredients: { type: "ARRAY", items: { type: "STRING" } },
        triviaClues: { type: "ARRAY", items: { type: "STRING" } },
        distractorDishes: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                properties: {
                    name: { type: "STRING" },
                    reason: { type: "STRING" }
                }
            }
        },
        distractorIngredients: { type: "ARRAY", items: { type: "STRING" } }
    },
    required: ["targetDish", "description", "cuisine", "countryOfOrigin", "countryCode", "region", "originCity", "category", "procurementDifficulty", "executionDifficulty", "mainIngredients", "distractorDishes", "distractorIngredients", "triviaClues"]
};

// SCHEMA DEFINITION FOR FULL ROUND DATA
const ROUND_GENERATION_SCHEMA = {
    type: "OBJECT",
    properties: {
        targetDish: { type: "STRING" },
        description: { type: "STRING" },
        cuisine: { type: "STRING" },
        countryCode: { type: "STRING" },
        region: { type: "STRING" },
        originCity: { type: "STRING" },
        category: { type: "STRING" },
        flagEmoji: { type: "STRING" },
        procurementDifficulty: { type: "STRING", enum: ["EASY", "MEDIUM", "HARD"] },
        executionDifficulty: { type: "STRING", enum: ["EASY", "MEDIUM", "HARD"] },
        mainIngredients: {
            type: "ARRAY",
            items: { type: "STRING" }
        },
        distractorIngredients: {
            type: "ARRAY",
            items: { type: "STRING" }
        },
        distractorDishes: {
            type: "ARRAY",
            items: {
                type: "OBJECT",
                properties: {
                    name: { type: "STRING" },
                    reason: { type: "STRING" }
                },
                required: ["name", "reason"]
            }
        },
        triviaClues: {
            type: "ARRAY",
            items: { type: "STRING" }
        }
    },
    required: [
        "targetDish", "description", "cuisine", "countryCode", "region",
        "originCity", "category", "mainIngredients", "distractorIngredients",
        "distractorDishes", "triviaClues"
    ]
};

/**
 * BATCH GENERATOR (The Pantry)
 */
export const generateBatchMenu = async (date: string): Promise<DailyMenu> => {
    const model = "gemini-2.5-flash"; // User specified format

    // Pick a random daily theme
    const region = REGIONS[Math.floor(Math.random() * REGIONS.length)];
    const category = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)];

    const prompt = `
    Generate a full Daily Menu for DishGuise.
    Date: ${date}
    Theme: ${category} from ${region}
    
    I need exactly 15 rounds of content:
    - 5 EASY rounds
    - 5 MEDIUM rounds
    - 5 HARD rounds

    1. TARGET DISH: Must fit the theme '${category}' and region '${region}'.
       *EXCEPTION FOR EASY ROUNDS*: If the regional theme is obscure or lacks globally famous dishes, you MUST pivot to broadly famous "Continental Classics" or "International Comfort Food" to ensure playability. Easy rounds must never be obscure.
    2. UNIQUE: No duplicate dishes across the 15 rounds.
    3. DISTRACTORS: Must be plausible but incorrect.
       - Distractor Dishes: Provide a specific reason why this similar dish is NOT the target (e.g., "Uses rice flour instead of wheat").
    4. NO SPOILERS: Ingredients MUST NOT share the name of the dish.
       - BAD: Dish="Apple Pie", Ingredient="Apple". (Too obvious).
       - GOOD: Dish="Apple Pie", Ingredient="Granny Smith Fruit".
    5. SEO: The final item in 'triviaClues' for every round MUST be exactly: "Play the daily challenge at DishGuise.com".
    
    DIFFICULTY DEFINITIONS:
    - EASY: Global Superstar / Ubiquitous Dishes. (3 distractors, 4 wrong ingredients).
      Example: If theme is "Ethiopian", Easy might be "Roast Chicken" if "Doro Wat" is deemed too hard.
    - MEDIUM: National Standard dishes. (3 distractors, 6 wrong ingredients)
    - HARD: Regional Specialty / Chef's Secret. (5 distractors, 8 wrong ingredients)

    Return a single JSON object.
    `;

    const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseSchema: {
                type: "OBJECT",
                properties: {
                    theme: { type: "STRING" },
                    rounds_easy: { type: "ARRAY", items: ROUND_GENERATION_SCHEMA },
                    rounds_medium: { type: "ARRAY", items: ROUND_GENERATION_SCHEMA },
                    rounds_hard: { type: "ARRAY", items: ROUND_GENERATION_SCHEMA }
                },
                required: ["theme", "rounds_easy", "rounds_medium", "rounds_hard"]
            },
            temperature: 0.7,
            topP: 0.95,
            systemInstruction: 'You are the DishGuise Head Chef. You generate balanced, culturally accurate daily game menus. You never repeat a dish from the provided history.'
        }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    const data = JSON.parse(text);

    // Reuse the existing processor to handle ID generation and shuffling
    return {
        date,
        theme: data.theme,
        rounds: {
            EASY: data.rounds_easy.map((r: any) => processRawRound(r, Difficulty.EASY, `${date}-EASY`)),
            MEDIUM: data.rounds_medium.map((r: any) => processRawRound(r, Difficulty.MEDIUM, `${date}-MEDIUM`)),
            HARD: data.rounds_hard.map((r: any) => processRawRound(r, Difficulty.HARD, `${date}-HARD`)),
        }
    };
};

/**
 * LIVE GENERATOR (Fallback)
 */
export const generateDailyRound = async (
    difficulty: Difficulty,
    roundIndex: number,
    mode: GameMode,
    excludeList: string[] = []
): Promise<RoundData> => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const model = "gemini-2.5-flash"; // Fix: Define model locally

    // SECURITY CHECK: If no API key (Production), go straight to Fallback
    if (!apiKey) {
        console.warn("Kitchen Closed: No API Key detected. Using static fallback.");
        return {
            id: `fallback-${Date.now()}`,
            dayId: `fallback-${Date.now()}`,
            targetDish: "Kitchen Closed",
            description: "The AI Chef is currently offline. Please check back later or contact the admin.",
            cuisine: "System",
            region: "Server Room",
            originCity: "404 City",
            category: "Maintenance",
            procurementDifficulty: "HARD",
            executionDifficulty: "HARD",
            flagEmoji: "🤖",
            countryCode: "UN", // United Nations / Neutral
            mainIngredients: ["Void", "Null", "Undefined", "NaN", "Empty String"],
            triviaClues: ["I am not real.", "I am a placeholder.", "Feed me data."],
            dishOptions: [],
            ingredientOptions: [],
            difficulty
        } as any;
    }

    const { region, category, seedKey } = getDailyTopic(difficulty, roundIndex);
    const MAX_RETRIES = 2;

    // ... (Keep existing difficulty prompt logic if needed, or simplify)
    // For brevity, using a simplified prompt structure since we have the shared schema now

    let numDistractorDishes = 3;
    let numDistractorIngredients = 4;
    let difficultyDesc = "Target famous global dishes.";

    if (difficulty === Difficulty.MEDIUM) {
        numDistractorIngredients = 6;
        difficultyDesc = "Target national standards.";
    } else if (difficulty === Difficulty.HARD) {
        numDistractorDishes = 5;
        numDistractorIngredients = 8;
        difficultyDesc = "Target obscure regional specialties.";
    }

    const exclusionString = excludeList.slice(-20).join(', ');

    for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
        try {
            if (attempt > 0) await delay(2000);

            const prompt = `
                Create a single 'DishGuise' game round.
                Region: ${region}
                Category: ${category}
                Difficulty: ${difficulty} (${difficultyDesc})
                
                Avoid: ${exclusionString}

                Requirements:
                - Target Dish Name
                - 101 Clues
                - ${numDistractorDishes} Distractor Dishes (with reasons based on ingredients)
                - ${numDistractorIngredients} Distractor Ingredients
                - CRITICAL: NO SPOILERS. Ingredients MUST NOT contain the dish name.
                  (e.g. If dish is "Matoke", do not list "Matoke Bananas" as ingredient. Use "Green Cooking Bananas" instead).
                - SEO: The final item in 'triviaClues' MUST be exactly: "Play the daily challenge at DishGuise.com".
            `;

            // NOTE: Using 'any' cast here because we haven't refactored generateDailyRound to use the new exact schema yet
            // and keeping it compatible with the rest of the app for now.
            // The prompt above asks for the OLD complex structure.
            // TO DO: Refactor this to use new schema + enrichment later.
            const response = await ai.models.generateContent({
                model,
                contents: prompt,
                config: {
                    responseMimeType: "application/json",
                    // fallback to unstructured or old schema? 
                    // Ideally we would share schema, but the new one is too simple for live play.
                    // Leaving this as "text -> parse" or old behaviour for now as user only targeted batch menu.
                }
            });

            const text = response.text;
            if (!text) throw new Error("No response");
            const data = JSON.parse(text);

            return processRawRound(data, difficulty, seedKey);

        } catch (error) {
            console.error(`Error generating round (Attempt ${attempt + 1}):`, error);
            if (attempt === MAX_RETRIES) break;
        }
    }

    // Emergency Fallback (API Error, but Key Existed)
    return {
        id: `fallback-${Date.now()}`,
        dayId: `fallback-${Date.now()}`,
        targetDish: "Avocado Toast",
        description: "Service temporarily unavailable.",
        cuisine: "Cafe",
        region: "Global",
        originCity: "Los Angeles",
        category: "Breakfast",
        procurementDifficulty: "EASY",
        executionDifficulty: "EASY",
        flagEmoji: "🇺🇸",
        countryCode: "US",
        mainIngredients: ["Bread", "Avocado", "Salt", "Lemon", "Chilli"],
        triviaClues: ["Millennial favorite.", "Expensive.", "Green."],
        dishOptions: [],
        ingredientOptions: [],
        difficulty
    } as any; // Type assertion for the quick fallback
};
