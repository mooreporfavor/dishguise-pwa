
import { Difficulty, GameMode, RoundData } from '../types';
import { STATIC_MENU } from '../data/staticMenu';
import { generateDailyRound } from './geminiService';

// Simple UUID generator that works in all browsers/contexts
const generateSafeId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

/**
 * The Master Fetcher.
 * 1. Checks Static Menu (Fast, Free, Reliable)
 * 2. Fallback to AI (Slow, Costly, Infinite)
 */
export const getGameRound = async (
    difficulty: Difficulty, 
    roundIndex: number, 
    mode: GameMode,
    excludeList: string[] = []
): Promise<RoundData> => {
    
    // 1. Try Static Menu
    const staticKey = `${difficulty}-${roundIndex}-${mode}`;
    const staticData = STATIC_MENU[staticKey];
    
    if (staticData) {
        console.log(`[GameService] Served static round: ${staticKey}`);
        // Ensure we simulate a tiny network delay for UX consistency if needed, 
        // but instant is better.
        return { ...staticData, id: generateSafeId() }; // Refresh ID for React keys
    }

    // 2. Fallback to AI
    console.warn(`[GameService] Static round not found for ${staticKey}. Falling back to AI.`);
    return await generateDailyRound(difficulty, roundIndex, mode, excludeList);
};
