
import { RoundData, Difficulty, GameMode } from '../types';

// This is your "Database". 
// You can populate this using the Admin Console in the app.
// Key format: `${Difficulty}-${RoundNumber}-${GameMode}` (e.g., "Medium-1-DETECTIVE")
// OR map them by Day Index if you want a daily rotation.

export const STATIC_MENU: Record<string, RoundData> = {
  // --- SAMPLE ROUND (You will paste more below this) ---
  "Head Chef-1-DETECTIVE": {
    "id": "static-sample-1",
    "dayId": "sample",
    "targetDish": "Pad Thai",
    "description": "A stir-fried rice noodle dish commonly served as street food in Thailand. It is typically made with rice noodles, chicken, beef or tofu, peanuts, a scrambled egg, and bean sprouts.",
    "cuisine": "Thailand",
    "region": "Southeast Asia",
    "originCity": "Bangkok",
    "category": "Noodle Dish",
    "homeChefDifficulty": "MEDIUM",
    "flagEmoji": "🇹🇭",
    "mainIngredients": [
      "Rice Noodles",
      "Tamarind Paste",
      "Fish Sauce",
      "Peanuts",
      "Bean Sprouts"
    ],
    "triviaClues": [
      "Popularized during World War II to reduce rice consumption.",
      "The full name means 'Thai stir-fried noodles'.",
      "It represents one of the country's national dishes."
    ],
    "dishOptions": [
      { "id": "opt-1", "name": "Pad Thai", "isCorrect": true },
      { "id": "opt-2", "name": "Pad See Ew", "isCorrect": false, "reason": "Uses soy sauce instead of tamarind." },
      { "id": "opt-3", "name": "Drunken Noodles", "isCorrect": false, "reason": "Spicier and lacks the peanut/tamarind profile." },
      { "id": "opt-4", "name": "Laksa", "isCorrect": false, "reason": "This is a soup, not a stir-fry." }
    ],
    "ingredientOptions": [
      { "id": "ing-1", "name": "Rice Noodles", "isCorrect": true },
      { "id": "ing-2", "name": "Tamarind Paste", "isCorrect": true },
      { "id": "ing-3", "name": "Fish Sauce", "isCorrect": true },
      { "id": "ing-4", "name": "Peanuts", "isCorrect": true },
      { "id": "ing-5", "name": "Bean Sprouts", "isCorrect": true },
      { "id": "ing-6", "name": "Soy Sauce", "isCorrect": false },
      { "id": "ing-7", "name": "Basil", "isCorrect": false },
      { "id": "ing-8", "name": "Coconut Milk", "isCorrect": false },
      { "id": "ing-9", "name": "Curry Paste", "isCorrect": false },
      { "id": "ing-10", "name": "Galangal", "isCorrect": false },
      { "id": "ing-11", "name": "Lemongrass", "isCorrect": false }
    ],
    "difficulty": "Head Chef" as Difficulty
  }
};
