import { RoundData } from "../types";
import pantryData from "./pantry.json";

export interface DailyMenu {
    date: string; // "YYYY-MM-DD"
    theme: string;
    heroDishIndex?: number;
    rounds: {
        EASY: RoundData[];
        MEDIUM: RoundData[];
        HARD: RoundData[];
    };
}

// The Pantry: A read-only database of pre-generated content.
// Now loaded from a JSON file to prevent TypeScript syntax errors during pasting.
export const THE_PANTRY: Record<string, DailyMenu> = pantryData as unknown as Record<string, DailyMenu>;
