import { RoundData, Difficulty } from "../types";

const KIDS_DISHES = [
    {
        name: "Sushi Roll",
        desc: "Rice rolled in seaweed with fish or veggies inside.",
        origin: "Japan",
        clues: ["Rolled up tight", "Uses sticky rice", "Wrapped in green seaweed"],
        ingredients: ["Rice", "Nori (Seaweed)", "Cucumber", "Salmon"],
        icon: "🍣",
        cc: "JP"
    },
    {
        name: "Tacos",
        desc: "A folded tortilla filled with tasty meat and cheese.",
        origin: "Mexico",
        clues: ["Crunchy or soft shell", "Held in your hand", "Great on Tuesdays"],
        ingredients: ["Tortilla", "Ground Beef", "Cheese", "Salsa"],
        icon: "🌮",
        cc: "MX"
    },
    {
        name: "Croissant",
        desc: "A flaky, buttery pastry shaped like a crescent moon.",
        origin: "France",
        clues: ["Buttery and flaky", "Moon shaped", "Crunchy outside, soft inside"],
        ingredients: ["Flour", "Butter", "Yeast", "Milk"],
        icon: "🥐",
        cc: "FR"
    },
    {
        name: "Dumplings",
        desc: "Dough pockets filled with meat or veggies, then steamed or fried.",
        origin: "China",
        clues: ["Small dough pockets", "Steamed or fried", "Good with soy sauce"],
        ingredients: ["Dough Wrapper", "Pork", "Cabbage", "Ginger"],
        icon: "🥟",
        cc: "CN"
    },
    {
        name: "Brioche Burger",
        desc: "A juicy burger served on a sweet, fluffy French bun.",
        origin: "USA / France",
        clues: ["Fancy fluffy bun", "Juicy meat patty", "Sweet bread"],
        ingredients: ["Brioche Bun", "Beef Patty", "Lettuce", "Tomato"],
        icon: "🍔",
        cc: "US"
    }
];

export const KIDS_MENU: RoundData[] = KIDS_DISHES.map((d, i) => ({
    id: `kids-dish-${i}`,
    dayId: `kids-${i}`,
    targetDish: d.name,
    description: d.desc,
    cuisine: d.origin,
    region: "Kids World",
    originCity: "Yum City",
    category: "Curious Cuisine",
    flagEmoji: d.icon,
    countryCode: d.cc,
    procurementDifficulty: "EASY",
    executionDifficulty: "EASY",
    mainIngredients: d.ingredients,
    triviaClues: [...d.clues, "Play the daily challenge at DishGuise.com"],
    dishOptions: [
        { id: `opt-${i}-1`, name: d.name, isCorrect: true },
        { id: `opt-${i}-2`, name: "Sandwich", isCorrect: false },
        { id: `opt-${i}-3`, name: "Soup", isCorrect: false },
        { id: `opt-${i}-4`, name: "Salad", isCorrect: false }
    ],
    ingredientOptions: [
        ...d.ingredients.map((ing, idx) => ({ id: `ing-${i}-${idx}`, name: ing, isCorrect: true })),
        { id: `ing-${i}-wrong-1`, name: "Spoon", isCorrect: false },
        { id: `ing-${i}-wrong-2`, name: "Napkin", isCorrect: false },
        { id: `ing-${i}-wrong-3`, name: "Chocolate Sauce", isCorrect: false },
        { id: `ing-${i}-wrong-4`, name: "Spaghetti", isCorrect: false }
    ].sort(() => Math.random() - 0.5),
    difficulty: Difficulty.EASY,
    isMakeable: true
}));
