import { Difficulty, GameMode, RoundData } from '../types';
import { THE_PANTRY } from '../data/ThePantry';
import { generateDailyRound } from './geminiService';
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

    // 0. KIDS MODE (EASY)
    if (difficulty === Difficulty.EASY) {
        const kidRound = KIDS_MENU[roundIndex % KIDS_MENU.length];
        console.log(`[GameService] 👶 Kids Mode Active: Serving ${kidRound.targetDish}`);
        // Return mostly static, but generate unique ID just in case
        return { ...kidRound, id: generateSafeId() };
    }

    const today = new Date().toISOString().split('T')[0];
    const diffKey = getDifficultyKey(difficulty);

    // ... (Rest of existing logic)

    // 1. Check The Pantry
    const dailyMenu = THE_PANTRY[today];

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

    // 2. Fallback to Live AI
    console.warn(`[GameService] 🤖 Pantry empty for ${today}. Cooking live with generic AI...`);
    return await generateDailyRound(difficulty, roundIndex, mode, excludeList);
};
