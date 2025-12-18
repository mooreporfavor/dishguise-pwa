
import { GoogleGenAI, Type } from "@google/genai";
import { RoundData, DishOption, IngredientOption, Difficulty, GameMode } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Simple UUID generator that works in all browsers/contexts
const generateSafeId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

// --- HELPER: ISO Code to Flag Emoji ---
const getFlagEmoji = (countryCode: string) => {
  if (!countryCode || countryCode.length !== 2) return "🏳️";
  const codePoints = countryCode
    .toUpperCase()
    .split('')
    .map(char =>  127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
};

// --- SEEDING SYSTEM ---
const getDaySeed = (str: string) => {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 16777619);
  }
  return function() {
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
  const rng = getDaySeed(seedKey);

  const region = REGIONS[Math.floor(rng() * REGIONS.length)];
  const category = CATEGORIES[Math.floor(rng() * CATEGORIES.length)];
  
  return { region, category, seedKey };
};

// Simple delay helper to avoid hitting rate limits too fast
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

/**
 * Generates a Daily Round based on the date + difficulty + round number.
 * @param excludeList List of dish names to strictly avoid generating.
 */
export const generateDailyRound = async (
    difficulty: Difficulty, 
    roundIndex: number, 
    mode: GameMode,
    excludeList: string[] = []
): Promise<RoundData> => {
  const model = "gemini-2.5-flash";
  const { region, category, seedKey } = getDailyTopic(difficulty, roundIndex);
  
  const MAX_RETRIES = 2;

  // Configuration based on difficulty
  let difficultyPrompt = "";
  let numDistractorDishes = 3;
  let numDistractorIngredients = 4;

  if (difficulty === Difficulty.EASY) {
    numDistractorDishes = 3; 
    numDistractorIngredients = 4;
    difficultyPrompt = `
        TARGET: A Top 20 Globally Famous dish from ${region}. Must be recognizable by a non-foodie (e.g., Tacos, Sushi, Pizza level fame).
        CLUES: Very direct "101" level facts. Mention key ingredients or signature appearance clearly.
    `;
  } else if (difficulty === Difficulty.MEDIUM) {
    numDistractorDishes = 3; 
    numDistractorIngredients = 6; 
    difficultyPrompt = `
        TARGET: A National Standard from ${region}, specifically a ${category}. A "must-try" for tourists.
        CLUES: Focus on cultural significance, eating habits, and general composition.
    `;
  } else {
    // HARD
    numDistractorDishes = 5; 
    numDistractorIngredients = 8; 
    difficultyPrompt = `
        TARGET: A Deep Cut / Regional Specialty / Technique-heavy dish from ${region}. A "Chef's favorite" or "Grandma's secret".
        CLUES: Obscure history, etymology, or very specific cooking technique. Do NOT give obvious hints.
    `;
  }

  // Cap exclude list to avoid token limits
  const exclusionString = excludeList.slice(-20).join(', ');

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      // Add a small delay for retries to respect RPM
      if (attempt > 0) await delay(2000);

      const prompt = `
        Create a 'DishGuise' game round.
        Seed: ${seedKey}
        Region Constraint: ${region}
        Category Constraint: ${category}
        
        AVOID THESE DISHES (Already Played): ${exclusionString}

        ${difficultyPrompt}

        CRITICAL RULES:
        1. NEVER use the Target Dish name in the 'reason' field of distractors. Use "The Ordered Dish" instead.
        2. Distractor reasons must be based on the INGREDIENTS LIST.
        3. Provide the ISO 3166-1 alpha-2 Country Code (e.g. 'CN' for China).
        4. In 'triviaClues', DO NOT mention the Target Dish name, the Country, or the specific Region name. Use broad cultural or historical terms to avoid spoilers.

        1. TargetDish: The name of the dish.
        2. CountryOfOrigin: The specific country (Noun).
        3. CountryCode: 2-letter ISO code.
        4. ProcurementDifficulty: Difficulty of finding ingredients in a standard North American grocery store.
           - EASY: Standard Supermarket (Walmart/Kroger).
           - MEDIUM: Asian/Latino/Specialty Aisle or Market.
           - HARD: Requires online ordering or very specific ethnic market.
        5. ExecutionDifficulty: Difficulty of cooking technique.
           - EASY: One pot, stir fry, or simple assembly.
           - MEDIUM: Requires specific timing, temperature control, or multiple steps.
           - HARD: Advanced techniques (fermentation, complex pastry, multi-day prep).
        6. MainIngredients: Exactly 5 distinct core ingredients.
        7. DistractorDishes: Exactly ${numDistractorDishes} incorrect dish names (with reasons).
        8. DistractorIngredients: Exactly ${numDistractorIngredients} incorrect ingredients.
        9. TriviaClues: 3 interesting facts. MUST NOT contain the dish name, country name, or region name.
        
        Return JSON.
      `;

      const response = await ai.models.generateContent({
        model,
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              targetDish: { type: Type.STRING },
              description: { type: Type.STRING },
              cuisine: { type: Type.STRING },
              countryOfOrigin: { type: Type.STRING },
              countryCode: { type: Type.STRING },
              region: { type: Type.STRING },
              originCity: { type: Type.STRING },
              category: { type: Type.STRING },
              procurementDifficulty: { type: Type.STRING, enum: ["EASY", "MEDIUM", "HARD"] },
              executionDifficulty: { type: Type.STRING, enum: ["EASY", "MEDIUM", "HARD"] },
              mainIngredients: { type: Type.ARRAY, items: { type: Type.STRING } },
              triviaClues: { type: Type.ARRAY, items: { type: Type.STRING } },
              distractorDishes: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    reason: { type: Type.STRING }
                  }
                }
              },
              distractorIngredients: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              }
            },
            required: ["targetDish", "description", "cuisine", "countryOfOrigin", "countryCode", "region", "originCity", "category", "procurementDifficulty", "executionDifficulty", "mainIngredients", "distractorDishes", "distractorIngredients", "triviaClues"]
          }
        }
      });

      const text = response.text;
      if (!text) throw new Error("No response from AI");
      const data = JSON.parse(text);

      // --- Process Dish Options (For Detective Mode) ---
      const dishDistractors = data.distractorDishes.map((d: any) => ({
        name: d.name,
        reason: d.reason,
        isCorrect: false
      }));
      const dishTarget = { name: data.targetDish, isCorrect: true, reason: undefined };
      const allDishOptions = [dishTarget, ...dishDistractors];
      // Shuffle
      for (let i = allDishOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allDishOptions[i], allDishOptions[j]] = [allDishOptions[j], allDishOptions[i]];
      }
      const dishOptions: DishOption[] = allDishOptions.map((opt, index) => ({
        id: `dish-${index}`,
        name: opt.name,
        isCorrect: opt.isCorrect,
        reason: opt.reason
      }));

      // --- Process Ingredient Options (For Chef Mode) ---
      const correctIngredients = data.mainIngredients.slice(0, 5).map((name: string) => ({
        name, isCorrect: true
      }));
      const wrongIngredients = data.distractorIngredients.map((name: string) => ({
        name, isCorrect: false
      }));
      
      const allIngOptions = [...correctIngredients, ...wrongIngredients];
      // Shuffle
      for (let i = allIngOptions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allIngOptions[i], allIngOptions[j]] = [allIngOptions[j], allIngOptions[i]];
      }
      const ingredientOptions: IngredientOption[] = allIngOptions.map((opt, index) => ({
        id: `ing-${index}`,
        name: opt.name,
        isCorrect: opt.isCorrect
      }));

      // Generate accurate flag from code
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

    } catch (error) {
      console.error(`Error generating round (Attempt ${attempt + 1}):`, error);
      if (attempt === MAX_RETRIES) break;
    }
  }

  // Emergency Fallback if API completely fails
  return {
    id: `fallback-${Date.now()}`,
    dayId: `fallback-${Date.now()}`,
    targetDish: "Avocado Toast",
    description: "Service temporarily unavailable. Please check your connection.",
    cuisine: "Cafe",
    region: "Global",
    originCity: "Los Angeles",
    category: "Breakfast",
    procurementDifficulty: "EASY",
    executionDifficulty: "EASY",
    flagEmoji: "🇺🇸",
    countryCode: "US",
    mainIngredients: ["Sourdough Bread", "Avocado", "Red Pepper Flakes", "Lemon", "Sea Salt"],
    triviaClues: ["It costs $18.", "It prevents you from buying a house.", "It's green."],
    dishOptions: [
      { id: '1', name: "Avocado Toast", isCorrect: true },
      { id: '2', name: "Bruschetta", isCorrect: false, reason: "Requires tomatoes and garlic, not avocado." }
    ],
    ingredientOptions: [
       { id: '1', name: "Avocado", isCorrect: true },
       { id: '2', name: "Bread", isCorrect: true },
       { id: '3', name: "Steak", isCorrect: false }
    ],
    difficulty
  };
};
