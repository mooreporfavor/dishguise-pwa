
import { Difficulty, GameMode, RoundData } from '../types';
import { THE_PANTRY } from '../data/ThePantry';
import { generateDailyRound } from './geminiService';

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

/**
 * The Master Fetcher.
 * 1. Checks THE_PANTRY for Today (Fast, Free, Reliable)
 * 2. Fallback to Live AI (Slow, Costly, Infinite)
 */
export const getGameRound = async (
    difficulty: Difficulty,
    roundIndex: number,
    mode: GameMode,
    excludeList: string[] = []
): Promise<RoundData> => {

    const today = new Date().toISOString().split('T')[0];
    const diffKey = getDifficultyKey(difficulty);

    // 1. Check The Pantry
    const dailyMenu = THE_PANTRY[today];

    if (dailyMenu) {
        const rounds = dailyMenu.rounds[diffKey];
        if (rounds && rounds.length > 0) {
            // Cycle through rounds if the user plays more than 5 in a day
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
