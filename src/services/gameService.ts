import { Difficulty, GameMode, RoundData } from '../types';
import { THE_PANTRY } from '../data/ThePantry';

import { KIDS_MENU } from '../data/KidsMenu';

// Simple UUID generator
const generateSafeId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

const getDifficultyKey = (d: Difficulty): 'EASY' | 'MEDIUM' | 'HARD' => {
    switch (d) {
        case Difficulty.KIDS: return 'EASY'; // Fallback to EASY text if needed, though Kids Mode has custom logic
        case Difficulty.EASY: return 'EASY';
        case Difficulty.MEDIUM: return 'MEDIUM';
        default: return 'HARD';
    }
}

export const getGameRound = async (
    difficulty: Difficulty,
    roundIndex: number,
    mode: GameMode,
    excludeList: string[] = []
): Promise<RoundData> => {

    // 0. KIDS MODE (LITTLE CHEF)
    if (difficulty === Difficulty.KIDS) {
        const kidRound = KIDS_MENU[roundIndex % KIDS_MENU.length];
        console.log(`[GameService] 👶 Kids Mode Active: Serving ${kidRound.targetDish}`);
        // Return mostly static, but generate unique ID just in case
        return { ...kidRound, id: generateSafeId() };
    }

    const today = new Date().toISOString().split('T')[0];
    const diffKey = getDifficultyKey(difficulty);

    // ... (Rest of existing logic)

    // 1. Check The Pantry
    // 1. Check The Pantry
    let dailyMenu = THE_PANTRY[today];

    // 1.5 Smart Fallback: If today is missing, check tomorrow (or any future date)
    if (!dailyMenu) {
        // Find the next available date in the pantry
        const futureDate = Object.keys(THE_PANTRY).sort().find(d => d > today);
        if (futureDate) {
            console.warn(`[GameService] ⚠️ Pantry missing for ${today}. Time Traveling to ${futureDate}...`);
            dailyMenu = THE_PANTRY[futureDate];
        }
    }

    if (dailyMenu) {
        const rounds = dailyMenu.rounds[diffKey];
        if (rounds && rounds.length > 0) {
            // Cycle through rounds if the user plays more than 5 in a day
            // But usually this means "Round 1 = Index 0", "Round 2 = Index 1"
            const round = rounds[roundIndex % rounds.length];
            console.log(`[GameService] 🥫 Served from Pantry: ${today} / ${diffKey} / Round ${roundIndex + 1}`);

            // Return fresh object with new ID (crucial for React keys)
            return { ...round, id: generateSafeId() };
        }
    }

    // 2. Kitchen Closed Fallback
    console.warn(`[GameService] 🤖 Pantry empty for ${today}. Kitchen Closed.`);
    return {
        id: `closed-${Date.now()}`,
        dayId: `closed-${Date.now()}`,
        targetDish: "Kitchen Closed",
        description: "The AI Chef is offline. Please generate a new batch menu to continue playing.",
        cuisine: "System",
        region: "Offline",
        originCity: "404 City",
        category: "Maintenance",
        procurementDifficulty: "HARD",
        executionDifficulty: "HARD",
        flagEmoji: "🚫",
        countryCode: "UN",
        mainIngredients: ["Void", "Null", "Empty Pantry"],
        triviaClues: ["I am not a real dish.", "Generate more rounds.", "Check pantry.json"],
        dishOptions: [],
        ingredientOptions: [],
        difficulty
    } as any;
};

export const getTomorrowTeaser = (): { label: string, value: string } | null => {
    try {
        const today = new Date();
        const tomorrow = new Date(today);
        tomorrow.setDate(tomorrow.getDate() + 1);
        const tomorrowStr = tomorrow.toISOString().split('T')[0];

        const dayData = THE_PANTRY[tomorrowStr];

        if (!dayData) return null;

        // Extract a teaser from the Easy mode data (usually representative)
        const round = dayData.rounds.EASY[0];

        if (!round) return null;

        // Prioritize interesting fields
        if (round.region && round.region !== "International") {
            return { label: "Region", value: round.region };
        }

        if (round.cuisine) {
            return { label: "Cuisine", value: round.cuisine };
        }

        if (round.category) {
            return { label: "Category", value: round.category };
        }

        return { label: "Mystery", value: "Something Delicious" };

    } catch (e) {
        console.error("Failed to get teaser", e);
        return null;
    }
};
