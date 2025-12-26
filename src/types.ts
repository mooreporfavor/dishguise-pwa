
export enum Difficulty {
    KIDS = 'Little Chef',
    EASY = 'Sous Chef',
    MEDIUM = 'Chef de Partie',
    HARD = 'Executive Chef'
}

export enum AppState {
    MENU = 'MENU',
    LOADING = 'LOADING',
    PLAYING = 'PLAYING',
    ROUND_OVER = 'ROUND_OVER',
    GAME_OVER = 'GAME_OVER',
    INTERMISSION = 'INTERMISSION',
    PROFILE = 'PROFILE'
}

export enum GamePhase {
    PLAYING = 'PLAYING',
    REVEAL = 'REVEAL'
}

export type GameMode = 'DETECTIVE' | 'CHEF';
export type DifficultyLevel = 'EASY' | 'MEDIUM' | 'HARD';

export interface DishOption {
    id: string;
    name: string;
    isCorrect: boolean;
    reason?: string;
}

export interface IngredientOption {
    id: string;
    name: string;
    isCorrect: boolean;
}

export interface RoundData {
    id: string;
    targetDish: string;
    description: string;
    cuisine: string;
    region: string;
    originCity: string;
    category: string;
    flagEmoji: string;
    countryCode?: string; // NEW: ISO code for image flags
    procurementDifficulty: DifficultyLevel; // NEW: Shopping difficulty
    executionDifficulty: DifficultyLevel;   // NEW: Cooking difficulty
    mainIngredients: string[];
    triviaClues: string[];
    dishOptions: DishOption[];
    ingredientOptions: IngredientOption[];
    difficulty: Difficulty | string;
    dayId: string;
    isMakeable?: boolean;
}

export interface DailyProgress {
    [key: string]: boolean;
}

export interface DishStamp {
    id: string;
    dishName: string;
    date: string;
    score: number;
    flagEmoji: string;
    countryCode?: string; // NEW
}

export interface UserProfile {
    xp: number;
    level: number;
    title: string;
    dishHistory: string[];
    collection: DishStamp[];
    stats: {
        gamesPlayed: number;
        perfectGames: number;
        currentStreak: number;
        maxStreak: number;
        lastPlayedDate: string | null;
    };
}

export interface GameResult {
    totalScore: number;
    rounds: {
        dish: string;
        score: number;
        correct: boolean;
        flagEmoji: string;
        countryCode?: string; // NEW
        mode: GameMode;
        category?: string; // NEW for redacted receipts
        region?: string;   // NEW for redacted receipts
        emoji?: string; // NEW for share grid
        isMakeable?: boolean;
    }[];
    difficulty: Difficulty;
}
