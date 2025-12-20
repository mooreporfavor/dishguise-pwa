import { RoundData, Difficulty } from "../types";

const KIDS_DISHES = [
    {
        name: "Pizza",
        desc: "A round dough topped with red sauce and melted cheese.",
        origin: "Italy",
        clues: ["Shape: Circle", "Color: Red & Yellow", "Taste: Cheesy and Salty"],
        ingredients: ["Dough", "Tomato Sauce", "Cheese", "Pepperoni"],
        icon: "🍕",
        cc: "IT"
    },
    {
        name: "Hamburger",
        desc: "A grilled meat patty served in a bun with toppings.",
        origin: "USA",
        clues: ["Shape: Round Bun", "Color: Brown & Green", "Type: Sandwich"],
        ingredients: ["Bun", "Beef Patty", "Lettuce", "Ketchup"],
        icon: "🍔",
        cc: "US"
    },
    {
        name: "Taco",
        desc: "A folded tortilla filled with meat and cheese.",
        origin: "Mexico",
        clues: ["Shape: Half Moon", "Color: Yellow & Brown", "Texture: Crunchy or Soft"],
        ingredients: ["Tortilla", "Meat", "Cheese", "Salsa"],
        icon: "🌮",
        cc: "MX"
    },
    {
        name: "Sushi",
        desc: "Rice rolled up with fish on the inside.",
        origin: "Japan",
        clues: ["Shape: Small Cylinder", "Color: Black & White", "Ingredient: Rice"],
        ingredients: ["Rice", "Seaweed", "Fish", "Soy Sauce"],
        icon: "🍣",
        cc: "JP"
    },
    {
        name: "Donut",
        desc: "Fried dough with a hole in the middle and frosting.",
        origin: "Global",
        clues: ["Shape: Circle with Hole", "Color: Pink / Brown", "Taste: Sweet"],
        ingredients: ["Dough", "Sugar", "Glaze", "Sprinkles"],
        icon: "🍩",
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
    originCity: "Fun Town",
    category: "Yummy",
    flagEmoji: d.icon,
    countryCode: d.cc, // Correct Country Code
    procurementDifficulty: "EASY",
    executionDifficulty: "EASY",
    mainIngredients: d.ingredients,
    triviaClues: d.clues,
    dishOptions: [
        { id: `opt-${i}-1`, name: d.name, isCorrect: true },
        { id: `opt-${i}-2`, name: "Salad", isCorrect: false },
        { id: `opt-${i}-3`, name: "Soup", isCorrect: false },
        { id: `opt-${i}-4`, name: "Broccoli", isCorrect: false }
    ],
    ingredientOptions: [
        ...d.ingredients.map((ing, idx) => ({ id: `ing-${i}-${idx}`, name: ing, isCorrect: true })),
        { id: `ing-${i}-wrong-1`, name: "Rocks", isCorrect: false },
        { id: `ing-${i}-wrong-2`, name: "Sand", isCorrect: false },
        { id: `ing-${i}-wrong-3`, name: "Paper", isCorrect: false },
        { id: `ing-${i}-wrong-4`, name: "Glue", isCorrect: false }
    ].sort(() => Math.random() - 0.5),
    difficulty: Difficulty.EASY,
    isMakeable: true
}));
