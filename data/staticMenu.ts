
import { RoundData, Difficulty, GameMode } from '../types';

export const STATIC_MENU: Record<string, RoundData> = {
  // --- SAMPLE ROUND (You will paste more below this) ---
  "Chef de Partie-1-DETECTIVE": {
    "id": "static-sample-1",
    "dayId": "sample",
    "targetDish": "Pad Thai",
    "description": "A stir-fried rice noodle dish commonly served as street food in Thailand. It is typically made with rice noodles, chicken, beef or tofu, peanuts, a scrambled egg, and bean sprouts.",
    "cuisine": "Thailand",
    "region": "Southeast Asia",
    "originCity": "Bangkok",
    "category": "Noodle Dish",
    "procurementDifficulty": "MEDIUM",
    "executionDifficulty": "MEDIUM",
    "flagEmoji": "🇹🇭",
    "countryCode": "TH",
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
    "difficulty": "Chef de Partie" as Difficulty
  },
  "Chef de Partie-1-CHEF": {
    "id": "static-sample-1-chef",
    "dayId": "sample",
    "targetDish": "Pad Thai",
    "description": "A stir-fried rice noodle dish commonly served as street food in Thailand. It is typically made with rice noodles, chicken, beef or tofu, peanuts, a scrambled egg, and bean sprouts.",
    "cuisine": "Thailand",
    "region": "Southeast Asia",
    "originCity": "Bangkok",
    "category": "Noodle Dish",
    "procurementDifficulty": "MEDIUM",
    "executionDifficulty": "MEDIUM",
    "flagEmoji": "🇹🇭",
    "countryCode": "TH",
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
    "difficulty": "Chef de Partie" as Difficulty
  },
  "Chef de Partie-2-DETECTIVE": {
    "id": "static-sample-2",
    "dayId": "sample-2",
    "targetDish": "Coq au Vin",
    "description": "A French dish of chicken braised with wine, lardons, mushrooms, and optional garlic.",
    "cuisine": "France",
    "region": "Western Europe",
    "originCity": "Burgundy",
    "category": "Stew",
    "procurementDifficulty": "EASY",
    "executionDifficulty": "HARD",
    "flagEmoji": "🇫🇷",
    "countryCode": "FR",
    "mainIngredients": [
        "Chicken",
        "Red Wine",
        "Mushrooms",
        "Pearl Onions",
        "Bacon Lardons"
    ],
    "triviaClues": [
        "Traditionally made with a rooster, hence the name.",
        "A staple of Julia Child's repertoire.",
        "Often served with potatoes or noodles."
    ],
    "dishOptions": [
        { "id": "d1", "name": "Coq au Vin", "isCorrect": true },
        { "id": "d2", "name": "Boeuf Bourguignon", "isCorrect": false, "reason": "Uses beef instead of chicken." },
        { "id": "d3", "name": "Cassoulet", "isCorrect": false, "reason": "Features beans and sausage prominently." },
        { "id": "d4", "name": "Chicken Marsala", "isCorrect": false, "reason": "Italian dish using sweet Marsala wine." }
    ],
    "ingredientOptions": [
        { "id": "i1", "name": "Chicken", "isCorrect": true },
        { "id": "i2", "name": "Red Wine", "isCorrect": true },
        { "id": "i3", "name": "Mushrooms", "isCorrect": true },
        { "id": "i4", "name": "Pearl Onions", "isCorrect": true },
        { "id": "i5", "name": "Bacon Lardons", "isCorrect": true },
        { "id": "i6", "name": "Beef Stock", "isCorrect": false },
        { "id": "i7", "name": "White Wine", "isCorrect": false },
        { "id": "i8", "name": "Heavy Cream", "isCorrect": false },
        { "id": "i9", "name": "Capers", "isCorrect": false },
        { "id": "i10", "name": "Lemon", "isCorrect": false },
        { "id": "i11", "name": "Saffron", "isCorrect": false }
    ],
    "difficulty": "Chef de Partie" as Difficulty
  },
  "Chef de Partie-2-CHEF": {
    "id": "static-sample-2-chef",
    "dayId": "sample-2",
    "targetDish": "Coq au Vin",
    "description": "A French dish of chicken braised with wine, lardons, mushrooms, and optional garlic.",
    "cuisine": "France",
    "region": "Western Europe",
    "originCity": "Burgundy",
    "category": "Stew",
    "procurementDifficulty": "EASY",
    "executionDifficulty": "HARD",
    "flagEmoji": "🇫🇷",
    "countryCode": "FR",
    "mainIngredients": [
        "Chicken",
        "Red Wine",
        "Mushrooms",
        "Pearl Onions",
        "Bacon Lardons"
    ],
    "triviaClues": [
        "Traditionally made with a rooster, hence the name.",
        "A staple of Julia Child's repertoire.",
        "Often served with potatoes or noodles."
    ],
    "dishOptions": [
        { "id": "d1", "name": "Coq au Vin", "isCorrect": true },
        { "id": "d2", "name": "Boeuf Bourguignon", "isCorrect": false, "reason": "Uses beef instead of chicken." },
        { "id": "d3", "name": "Cassoulet", "isCorrect": false, "reason": "Features beans and sausage prominently." },
        { "id": "d4", "name": "Chicken Marsala", "isCorrect": false, "reason": "Italian dish using sweet Marsala wine." }
    ],
    "ingredientOptions": [
        { "id": "i1", "name": "Chicken", "isCorrect": true },
        { "id": "i2", "name": "Red Wine", "isCorrect": true },
        { "id": "i3", "name": "Mushrooms", "isCorrect": true },
        { "id": "i4", "name": "Pearl Onions", "isCorrect": true },
        { "id": "i5", "name": "Bacon Lardons", "isCorrect": true },
        { "id": "i6", "name": "Beef Stock", "isCorrect": false },
        { "id": "i7", "name": "White Wine", "isCorrect": false },
        { "id": "i8", "name": "Heavy Cream", "isCorrect": false },
        { "id": "i9", "name": "Capers", "isCorrect": false },
        { "id": "i10", "name": "Lemon", "isCorrect": false },
        { "id": "i11", "name": "Saffron", "isCorrect": false }
    ],
    "difficulty": "Chef de Partie" as Difficulty
  }
};
