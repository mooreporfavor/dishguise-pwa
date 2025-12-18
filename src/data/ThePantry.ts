import { RoundData } from "../types";

export interface DailyMenu {
    date: string; // "YYYY-MM-DD"
    theme: string;
    rounds: {
        EASY: RoundData[];   // Array of 5 rounds
        MEDIUM: RoundData[]; // Array of 5 rounds
        HARD: RoundData[];   // Array of 5 rounds
    };
}

// The Pantry: A read-only database of pre-generated content.
// Keys are "YYYY-MM-DD" date strings.
export const THE_PANTRY: Record<string, DailyMenu> = {
    // Example entry structure (uncomment to test):
    // "2023-12-25": {
    //   date: "2023-12-25",
    //   theme: "Christmas Feast",
    //   rounds: { EASY: [], MEDIUM: [], HARD: [] }
    // }
    "2025-12-16": {
        "date": "2025-12-16",
        "theme": "Celebratory Feast from Sub-Saharan Africa",
        "rounds": {
            "EASY": [
                {
                    "id": "20f18a83-459c-4aaa-8a91-dcdb588caec2",
                    "dayId": "2025-12-16-EASY",
                    "targetDish": "Jollof Rice",
                    "description": "A classic West African one-pot rice dish, simmered in a rich tomato and pepper base, often with meat or fish. A staple at celebrations.",
                    "cuisine": "Nigeria",
                    "region": "West Africa",
                    "originCity": "Lagos",
                    "category": "Main Course, Rice Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇳🇬",
                    "countryCode": "NG",
                    "mainIngredients": [
                        "Rice",
                        "Tomatoes",
                        "Red Bell Peppers",
                        "Onions",
                        "Scotch Bonnet",
                        "Tomato Paste",
                        "Vegetable Oil",
                        "Chicken/Beef Stock",
                        "Thyme",
                        "Curry Powder",
                        "Bay Leaves"
                    ],
                    "triviaClues": [
                        "Often the subject of friendly rivalry between two neighboring West African nations.",
                        "Its signature reddish hue comes primarily from tomatoes and bell peppers.",
                        "A one-pot wonder, it's a must-have at most West African parties and gatherings."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-77d14ad4-daea-4e94-bdc8-b812b5fb5099",
                            "name": "Fried Rice",
                            "isCorrect": false,
                            "reason": "Asian, common, but different preparation and flavor profile."
                        },
                        {
                            "id": "dish-1-22994115-60e1-45e3-86fb-c473a440e9d0",
                            "name": "Jollof Rice",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-c6241a82-5b14-4ff8-b92c-551cbbeedfda",
                            "name": "Biryani",
                            "isCorrect": false,
                            "reason": "South Asian rice dish, distinct spices and preparation."
                        },
                        {
                            "id": "dish-3-783c2fda-f022-43b2-aa14-a3c211bcf6e1",
                            "name": "Paella",
                            "isCorrect": false,
                            "reason": "Spanish rice dish, similar color but different spices and ingredients."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-1e2d5eac-3fac-4b81-aca6-e741a9d267a9",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-469a0862-4e69-4c08-8fb2-28393491d281",
                            "name": "Soy Sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-8cf2c7f8-2dea-4824-8567-f5ad488547fe",
                            "name": "Scotch Bonnet",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-8a8009e9-52fa-4686-979f-7e06ffeaba47",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-c2759b5b-e8da-47bc-9be6-b16cf5aeaa75",
                            "name": "Turmeric",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-e22ef7ec-020e-4064-bb34-09ca9954ef8b",
                            "name": "Rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-dfc39d97-513f-414f-8e95-506f0f148140",
                            "name": "Cilantro",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-03df2c57-9573-4083-b179-364f506fb482",
                            "name": "Red Bell Peppers",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-972342a6-b792-4ca0-a0d1-c6d5bd32c38d",
                            "name": "Tomatoes",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "f7ce6b0b-a7cb-4677-ad7c-f02a18a523f5",
                    "dayId": "2025-12-16-EASY",
                    "targetDish": "Injera with Doro Wat",
                    "description": "A festive and spicy Ethiopian chicken stew, slow-cooked with berbere spice, served atop a large, sourdough-risen flatbread called Injera.",
                    "cuisine": "Ethiopia",
                    "region": "East Africa",
                    "originCity": "Addis Ababa",
                    "category": "Main Course, Stew, Bread",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇪🇹",
                    "countryCode": "ET",
                    "mainIngredients": [
                        "Chicken",
                        "Eggs",
                        "Niter Kibbeh",
                        "Berbere Spice Blend",
                        "Onions",
                        "Garlic",
                        "Ginger",
                        "Injera (teff flour, water, starter)"
                    ],
                    "triviaClues": [
                        "This dish is famously eaten communally, using pieces of its spongy bread to scoop up the stew.",
                        "Its characteristic fiery flavor comes from a unique spice blend known as berbere.",
                        "The main protein is often reserved for special occasions and is served with hard-boiled eggs."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-7d11bf37-f531-4e5b-91e5-d1584aaba46d",
                            "name": "Injera with Doro Wat",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-a0effa10-4464-4133-bf92-16352053e51d",
                            "name": "Butter Chicken",
                            "isCorrect": false,
                            "reason": "Indian, creamy chicken dish with a different sauce base."
                        },
                        {
                            "id": "dish-2-33c5e917-a4a4-485a-9afe-1b2fda2a1ad2",
                            "name": "Indian Curry with Naan",
                            "isCorrect": false,
                            "reason": "South Asian, similar concept of stew with bread, but distinct flavors."
                        },
                        {
                            "id": "dish-3-90b6ef31-7c66-4136-a0af-f66e4df3d0e5",
                            "name": "Moroccan Tagine",
                            "isCorrect": false,
                            "reason": "North African stew, uses different spices and served with couscous."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-228a799f-07c0-4176-900a-ce397e3314d9",
                            "name": "Berbere Spice Blend",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-9573ad9e-c7b5-4915-8d74-d59d726a8a4d",
                            "name": "Niter Kibbeh",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-caadd993-531f-421f-b499-43a805111c79",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-eafdd3bf-8d1f-4b39-9b4d-4dd6409d7dd5",
                            "name": "Eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-f79c28f1-dc81-4ac8-b378-c99d29f3bd68",
                            "name": "Yogurt",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-d848d240-701d-4ed5-af07-17154b1aea97",
                            "name": "Chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-05be3c8f-e45a-4c43-8fc4-8108f7660fc2",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-3730e429-15a4-4202-89dd-4c1ede592c28",
                            "name": "Coriander Leaves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-aa628e65-42a8-43af-8939-e017ebe76a30",
                            "name": "Cumin",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "21627866-5730-4f18-844c-da150675bae4",
                    "dayId": "2025-12-16-EASY",
                    "targetDish": "Ugali/Sadza with Sukuma Wiki",
                    "description": "A stiff porridge made from maize flour (ugali/sadza) served with collard greens (sukuma wiki) sautéed with onions and tomatoes, a common and comforting meal across East and Southern Africa.",
                    "cuisine": "Kenya",
                    "region": "East Africa",
                    "originCity": "Nairobi",
                    "category": "Staple, Side Dish, Vegetable",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇰🇪",
                    "countryCode": "KE",
                    "mainIngredients": [
                        "Maize Flour",
                        "Water",
                        "Collard Greens (Sukuma Wiki)",
                        "Onions",
                        "Tomatoes",
                        "Vegetable Oil"
                    ],
                    "triviaClues": [
                        "This staple porridge is traditionally eaten with the right hand, shaping it into a scoop.",
                        "Its name for the greens literally translates to 'push the week' or 'stretch the week', referring to its affordability.",
                        "It's a foundational meal across many nations, often paired with stews, meat, or fish."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-3c3556ef-1abf-45f0-abc3-71c77f71372f",
                            "name": "Amasi/Maas",
                            "isCorrect": false,
                            "reason": "South African fermented milk, often served with pap/ugali, but not the greens themselves."
                        },
                        {
                            "id": "dish-1-9b283456-f574-491d-a832-1e99446fa164",
                            "name": "Polenta",
                            "isCorrect": false,
                            "reason": "Italian cornmeal porridge, different texture and culinary context."
                        },
                        {
                            "id": "dish-2-ab7e2003-6812-4e54-adc3-df9f565335de",
                            "name": "Ugali/Sadza with Sukuma Wiki",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-2ffc736a-da46-42b5-99f2-ed944ca23309",
                            "name": "Grits",
                            "isCorrect": false,
                            "reason": "American Southern corn porridge, distinct preparation and accompaniments."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-3c5c1054-162f-4a8f-b928-e1c5276ecb78",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-e4f930f2-cd6c-4820-945c-2225785ea8f6",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-bda1ed8a-4e01-47e6-9560-0125b869e69c",
                            "name": "Okra",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-c8374e35-af09-469a-ae1f-8a8261067d5c",
                            "name": "Cassava Flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-e999ee76-355c-48c9-be97-632f89ad9043",
                            "name": "Collard Greens (Sukuma Wiki)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-91c3fb00-af2b-4514-bad5-6c29c42bb438",
                            "name": "Maize Flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-c4480823-3f8c-4355-939d-f47d6a355432",
                            "name": "Tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-62e2dcbc-e1e2-41ab-866b-b00e74fd54ba",
                            "name": "Coconut Cream",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-21e74108-837d-47ff-a4e8-98eefbbe6485",
                            "name": "Peanut Butter",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "67ba4c02-3774-45a9-87f1-dbc814e3e1dd",
                    "dayId": "2025-12-16-EASY",
                    "targetDish": "Bobotie",
                    "description": "A classic South African dish of spiced minced meat baked with an egg-based topping, often with fruit or chutney, reflecting Cape Malay influences.",
                    "cuisine": "South Africa",
                    "region": "Southern Africa",
                    "originCity": "Cape Town",
                    "category": "Baked Dish, Meat Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇿🇦",
                    "countryCode": "ZA",
                    "mainIngredients": [
                        "Minced Beef/Lamb",
                        "Onions",
                        "Eggs",
                        "Milk",
                        "Bread",
                        "Apricot Jam/Chutney",
                        "Curry Powder",
                        "Turmeric",
                        "Bay Leaves",
                        "Almonds"
                    ],
                    "triviaClues": [
                        "Often considered a national dish, it combines sweet and savory flavors, often with a hint of curry.",
                        "Its distinctive golden-brown topping is an eggy custard, sometimes decorated with bay leaves.",
                        "This dish is a delicious fusion, showcasing the historical culinary influences of the Cape Malay community."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-1c4243e3-9099-4a17-b06f-95295368244d",
                            "name": "Meatloaf",
                            "isCorrect": false,
                            "reason": "American baked ground meat dish, different texture and flavor profile."
                        },
                        {
                            "id": "dish-1-a50bbe7b-dd4e-4bc1-bba3-9a75d8d52760",
                            "name": "Bobotie",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-30f996d6-e9e7-4262-b7a1-4968f69eeaa7",
                            "name": "Moussaka",
                            "isCorrect": false,
                            "reason": "Greek layered meat and eggplant dish, distinct ingredients."
                        },
                        {
                            "id": "dish-3-823e4327-95be-4088-94eb-76d2ae3c1fd6",
                            "name": "Shepherd's Pie",
                            "isCorrect": false,
                            "reason": "British meat and potato topping dish, different spices and topping."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-4425c3bb-2022-432c-aa9e-f572c94065e3",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-9f0aa31d-4e97-4d58-9c3e-22bad2c273f4",
                            "name": "Minced Beef/Lamb",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-83a09302-cc79-4cf3-9577-c17456ded50c",
                            "name": "Cilantro",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-fdb984c8-4756-4bd1-9969-87f5cd5c5f22",
                            "name": "Bread",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-206943f1-e74b-425c-98c1-ca6ed9c67997",
                            "name": "Eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-521b2083-0c5e-4b87-8067-5fb71a2a35ec",
                            "name": "Milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-27576413-e20e-45ed-be83-5a570310532b",
                            "name": "Paprika",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-cd52b4d1-a093-4cf9-b77e-69b0ea4ec5ff",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-9217259b-c352-4506-8160-d3d59db8e619",
                            "name": "Soy Sauce",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "237c4d46-1c0c-4e83-a9ea-ba9510f67b45",
                    "dayId": "2025-12-16-EASY",
                    "targetDish": "Thieboudienne",
                    "description": "The national dish of Senegal, a flavorful one-pot meal of fish, rice, and various vegetables cooked in a rich tomato sauce.",
                    "cuisine": "Senegal",
                    "region": "West Africa",
                    "originCity": "Dakar",
                    "category": "Main Course, Fish Dish, Rice Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇸🇳",
                    "countryCode": "SN",
                    "mainIngredients": [
                        "Fish (often Thiof/Grouper)",
                        "Rice",
                        "Tomatoes",
                        "Onions",
                        "Carrots",
                        "Cassava",
                        "Eggplant",
                        "Cabbage",
                        "Tomato Paste",
                        "Garlic",
                        "Chili"
                    ],
                    "triviaClues": [
                        "Widely considered the national dish of its originating country, it translates to 'rice and fish'.",
                        "The fish is typically stuffed with a mixture of garlic, parsley, and chili before being cooked.",
                        "This colorful and hearty meal is traditionally served communally from a large platter."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-9221991c-ca73-4b3d-b979-020799243dbc",
                            "name": "Jollof Rice",
                            "isCorrect": false,
                            "reason": "Another West African rice dish, but features different main protein and vegetable focus."
                        },
                        {
                            "id": "dish-1-0356fc6c-6178-49f1-98bf-5fab088b525f",
                            "name": "Fish Curry",
                            "isCorrect": false,
                            "reason": "Indian fish stew, but with different spices and preparation."
                        },
                        {
                            "id": "dish-2-a9544ac5-d3fb-4ccf-90b2-f68b573f0be0",
                            "name": "Thieboudienne",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-72eaadf8-8727-4088-b0fb-84e0540c90ac",
                            "name": "Bouillabaisse",
                            "isCorrect": false,
                            "reason": "French fish stew, but with distinct flavors and ingredients."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-b7e7228c-c4ef-4bde-b47b-d32374db8ff5",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-611dee56-b91a-4e06-b645-28f50346c085",
                            "name": "Fish (often Thiof/Grouper)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-a99b73a5-b628-4a22-8e27-877a04ce3d2d",
                            "name": "Tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-e75eee4a-70ca-403b-9f8b-c17c2589d6ec",
                            "name": "Carrots",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-7b121459-18ad-4d32-add3-235a18da5ddc",
                            "name": "Potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-71da7e44-cfd6-4d2d-9127-60c2d7b59080",
                            "name": "Rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-a483d1cc-ed5f-44b8-a603-a7240b1bb06e",
                            "name": "Lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-1bea2742-f335-4502-8e2e-0f13903e82ed",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-606660f4-d31d-41ea-9721-bd350c5417b2",
                            "name": "Sweet Potatoes",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                }
            ],
            "MEDIUM": [
                {
                    "id": "44d62ce8-9f17-4b3e-ba1e-61bcc4dc8e13",
                    "dayId": "2025-12-16-MEDIUM",
                    "targetDish": "Piri Piri Chicken",
                    "description": "A spicy and flavorful chicken dish marinated in piri-piri sauce, grilled or roasted, popular in Southern Africa, particularly Mozambique.",
                    "cuisine": "Mozambique",
                    "region": "Southern Africa",
                    "originCity": "Maputo",
                    "category": "Grilled Meat, Spicy Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇲🇿",
                    "countryCode": "MZ",
                    "mainIngredients": [
                        "Chicken",
                        "Piri-Piri Chilies",
                        "Garlic",
                        "Lemon Juice",
                        "Paprika",
                        "Olive Oil",
                        "Vinegar"
                    ],
                    "triviaClues": [
                        "The key ingredient for its fiery kick is a specific type of chili pepper, originally from the Americas but thriving in Africa.",
                        "Often associated with Portuguese colonial heritage, it's a staple on grills and braais in its home region.",
                        "The name literally translates to 'pepper-pepper' in Swahili, highlighting its defining characteristic."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-14ec4df9-d78d-4900-8746-27b308c428d8",
                            "name": "Buffalo Wings",
                            "isCorrect": false,
                            "reason": "American fried chicken with hot sauce, different preparation."
                        },
                        {
                            "id": "dish-1-c7d27034-50a3-414c-8da9-65d96c73518c",
                            "name": "Jerk Chicken",
                            "isCorrect": false,
                            "reason": "Jamaican spicy grilled chicken, but with a different spice profile."
                        },
                        {
                            "id": "dish-2-e5243e12-4151-4b46-956d-abe8189b463c",
                            "name": "Tandoori Chicken",
                            "isCorrect": false,
                            "reason": "Indian yogurt-marinated grilled chicken, distinct flavors."
                        },
                        {
                            "id": "dish-3-865d9989-3421-4707-8c27-60a5fc4c8cc8",
                            "name": "Piri Piri Chicken",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-e95aa2fa-3d4b-46a9-bd63-422eacfda6e4",
                            "name": "Garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-a39e5288-10ad-4ac2-91dc-48adcfc494d0",
                            "name": "Piri-Piri Chilies",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-e33a75f6-ec52-4f5a-a4e4-201b1a56123b",
                            "name": "Paprika",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-c62e0965-9997-4beb-b31d-552aabcfd592",
                            "name": "Cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-d08cecce-fcce-4e63-a52d-dbc5bb6e5978",
                            "name": "Lemon Juice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-d3e7f53b-40f8-4f2e-97cf-e12cd6fdf5cc",
                            "name": "Chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-5a51c329-5d54-4b65-a169-53526970962e",
                            "name": "Rosemary",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-629718a4-257a-4503-be50-7b8555fb70bc",
                            "name": "Ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-0bd9bf47-ac54-42a4-8dec-31971293267e",
                            "name": "Soy Sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-72b6b2bb-537f-4875-b486-9c773042592d",
                            "name": "Nutmeg",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-ebccf78c-b0a7-42b3-97e0-9de39d0b7bc2",
                            "name": "Brown Sugar",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "0dc792fd-ae4e-4b3a-a9d6-c65f94baba62",
                    "dayId": "2025-12-16-MEDIUM",
                    "targetDish": "Egusi Soup",
                    "description": "A rich, hearty, and thick West African soup made with ground melon seeds (egusi), often containing leafy vegetables, palm oil, and various meats or fish.",
                    "cuisine": "Nigeria",
                    "region": "West Africa",
                    "originCity": "Lagos",
                    "category": "Soup, Stew, Vegetable",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇳🇬",
                    "countryCode": "NG",
                    "mainIngredients": [
                        "Egusi Seeds (ground melon seeds)",
                        "Palm Oil",
                        "Leafy Greens (e.g., Ugu/pumpkin leaves, spinach)",
                        "Assorted Meats (beef, fish, tripe)",
                        "Crayfish",
                        "Scotch Bonnet",
                        "Onions",
                        "Tomato"
                    ],
                    "triviaClues": [
                        "The distinctive thick texture of this soup comes from a unique ingredient: ground melon seeds.",
                        "It's a celebratory staple, especially popular during holidays and special occasions in its country of origin.",
                        "Often served with a starchy side like pounded yam, fufu, or eba, it's a truly satisfying meal."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-f4da1436-6f27-4f1d-a6a4-1a9a9d5358d9",
                            "name": "Egusi Soup",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-bd643a57-5752-4645-9c20-4bb11accf009",
                            "name": "Okra Soup",
                            "isCorrect": false,
                            "reason": "West African, but features okra as the primary vegetable and thickener."
                        },
                        {
                            "id": "dish-2-2d610f6c-d1cb-41c9-bde4-1c95bd0812d6",
                            "name": "Gumbo",
                            "isCorrect": false,
                            "reason": "American Southern stew, uses a different roux base and distinct flavor profile."
                        },
                        {
                            "id": "dish-3-7f48631b-ea24-4da3-ad5e-9524e4d7afab",
                            "name": "Peanut Soup/Stew",
                            "isCorrect": false,
                            "reason": "West African, similar texture, but uses peanut as the main thickener."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-ec8b3313-f6d3-42b9-9cbc-2710b1f2a801",
                            "name": "Palm Oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-04a49f28-7929-42be-844e-db4e2065fbb9",
                            "name": "Leafy Greens (e.g., Ugu/pumpkin leaves, spinach)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-a3d6c6d0-298c-4e8d-9dd2-39fdedc5e587",
                            "name": "Crayfish",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-55534033-4607-45a6-bc31-4c64859a3021",
                            "name": "Egusi Seeds (ground melon seeds)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-e0862752-873e-4f40-ad29-1eecd44d105d",
                            "name": "Assorted Meats (beef, fish, tripe)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-c69a5196-bd0b-40ce-940d-19b4bd545927",
                            "name": "Sweet Potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-1aa54163-288b-4046-9777-be09b0378297",
                            "name": "Turmeric",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-9cb94443-c944-49b8-b75f-1feb9d8f9efe",
                            "name": "Ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-b93b650f-eaa0-4006-bff3-6bb0a4d8a76b",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-70148d4a-a4a5-444f-8243-2e0714ac3969",
                            "name": "Curry Powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-c8e7baf4-d93c-44f6-83f2-b44db23dc168",
                            "name": "Lentils",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "369553e7-1317-4e92-ac6f-06cda341697a",
                    "dayId": "2025-12-16-MEDIUM",
                    "targetDish": "Muamba de Galinha",
                    "description": "A traditional Angolan chicken stew cooked with palm oil (dendê oil), okra, and sometimes funje (a cassava porridge), known for its rich flavor and vibrant color.",
                    "cuisine": "Angola",
                    "region": "Central Africa",
                    "originCity": "Luanda",
                    "category": "Stew, Chicken Dish",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇦🇴",
                    "countryCode": "AO",
                    "mainIngredients": [
                        "Chicken",
                        "Palm Oil (Dendê oil)",
                        "Okra",
                        "Garlic",
                        "Chili",
                        "Lemon",
                        "Onions"
                    ],
                    "triviaClues": [
                        "This national dish of Angola is famously characterized by the use of red palm oil, giving it a distinctive color and flavor.",
                        "Often prepared for special occasions, it typically includes okra, sometimes referred to as 'lady's fingers'.",
                        "It is commonly served with funje, a thick cassava or corn flour porridge."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-131ef31f-ecd1-4ba5-a333-9284d31301e9",
                            "name": "Curry Chicken",
                            "isCorrect": false,
                            "reason": "Various cuisines, but with different spice blends and preparation methods."
                        },
                        {
                            "id": "dish-1-f1e883bf-071d-4482-93c1-f2e4003203d2",
                            "name": "Muamba de Galinha",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-667941d7-c792-4e09-9082-677507c7c885",
                            "name": "Jollof Rice",
                            "isCorrect": false,
                            "reason": "West African rice dish, not a stew with okra and palm oil."
                        },
                        {
                            "id": "dish-3-51b9ca3d-91d4-4398-bd8d-7d88a647f74d",
                            "name": "Mafé",
                            "isCorrect": false,
                            "reason": "West African peanut stew, uses a different thickener (peanuts) and flavor profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-229fee64-d546-4c59-b852-972cc9ba9fb0",
                            "name": "Tomato Paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-6749b436-f8ee-4a44-9338-736433dbe0ad",
                            "name": "Okra",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-00b39eb3-3101-41c9-afac-e0f4b36d9da7",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-01c66aa6-3cb8-4c26-bc28-137c3b780fea",
                            "name": "Cumin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-20987588-1f7e-4f30-835a-1579abbfbcc6",
                            "name": "Coriander Powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-042742a3-c8ce-4a62-a008-eff57a0ff2e3",
                            "name": "Chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-f168741c-93d9-4f9d-9bbd-cbfd0b315199",
                            "name": "Bell Peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-0bc3f0d7-8f7a-40e7-b0db-2e5861b81b38",
                            "name": "Palm Oil (Dendê oil)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-dce77d76-1881-4883-b88d-06dc0f262f4d",
                            "name": "Chili",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-4008d49a-133f-470c-a2bd-f3fc81dd53ec",
                            "name": "Peanut Butter",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-bc5105ac-c3e1-44d1-9f7d-fd899ea01de7",
                            "name": "Garlic",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "8e736392-8833-412a-b8ab-ddd60d1c4bd7",
                    "dayId": "2025-12-16-MEDIUM",
                    "targetDish": "Matoke",
                    "description": "A staple Ugandan dish made from steamed, mashed green bananas (matoke), often cooked with groundnut sauce, meat, or vegetables, popular as a hearty celebratory meal.",
                    "cuisine": "Uganda",
                    "region": "East Africa",
                    "originCity": "Kampala",
                    "category": "Staple, Side Dish, Vegetable/Fruit",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇬",
                    "countryCode": "UG",
                    "mainIngredients": [
                        "Green Bananas (Matoke)",
                        "Beef/Groundnut Sauce",
                        "Onions",
                        "Tomatoes",
                        "Curry Powder",
                        "Vegetable Oil"
                    ],
                    "triviaClues": [
                        "This staple food of Uganda is made from a specific type of cooking banana, which is green when used.",
                        "The bananas are typically peeled, wrapped in banana leaves, and steamed until tender, then mashed.",
                        "It is often served at important gatherings and celebrations, alongside stews and sauces."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-9011e9da-1118-4f8e-b5d0-18083d50b91c",
                            "name": "Mashed Potatoes",
                            "isCorrect": false,
                            "reason": "Western, uses potatoes as the base ingredient, completely different flavor."
                        },
                        {
                            "id": "dish-1-fe9a897e-a0dc-41e9-9a85-e7ce65e4f3f1",
                            "name": "Matoke",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-c0db451e-6763-42ce-9df6-529d9d212dcd",
                            "name": "Fried Plantains",
                            "isCorrect": false,
                            "reason": "Various cuisines, uses ripe plantains and a different cooking method."
                        },
                        {
                            "id": "dish-3-bf4e563e-d2cc-4b7d-887b-32acf583b107",
                            "name": "Plantain Fufu",
                            "isCorrect": false,
                            "reason": "West African, made from plantains, different preparation and serving method."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-8d9c92b4-ba77-45f9-9134-a781ae724566",
                            "name": "Tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-810c6ea0-98fd-43ca-b2ac-eabfeae65023",
                            "name": "Cassava",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-3e9c2f79-42d7-4194-91ce-a453c9d588f0",
                            "name": "Fish",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-8a70ba1e-ccd1-47df-8115-b4d33a2ee1c1",
                            "name": "Scotch Bonnet Peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-bcccf258-10c4-40c2-b7bc-4c45d187fc34",
                            "name": "Curry Powder",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-e4a2d7c0-1c3d-4437-930f-59086fd8f194",
                            "name": "Beef/Groundnut Sauce",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-9766a862-9d4b-4d55-b35f-6a0aedd98b12",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-19988ca7-31cb-4b82-a98b-5cc97d5ab376",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-958faba4-562d-4424-83bf-25b29f29cb66",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-eaa22a0d-ee3a-4090-b646-5fad75bc3544",
                            "name": "Garlic",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-c7b62fe4-f7fc-4a66-9b39-0b5488da4aba",
                            "name": "Green Bananas (Matoke)",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "2911ef44-c551-4741-8b96-17459946a1fd",
                    "dayId": "2025-12-16-MEDIUM",
                    "targetDish": "Nshima with Kapenta",
                    "description": "Nshima is a thick porridge made from maize meal, a staple starch across Southern Africa. Kapenta refers to small, dried fish, often fried or stewed, served as an accompanying protein.",
                    "cuisine": "Zambia",
                    "region": "Southern Africa",
                    "originCity": "Lusaka",
                    "category": "Staple, Fish Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇿🇲",
                    "countryCode": "ZM",
                    "mainIngredients": [
                        "Maize Meal",
                        "Water",
                        "Kapenta (dried tiny fish)",
                        "Tomatoes",
                        "Onions",
                        "Vegetable Oil"
                    ],
                    "triviaClues": [
                        "This staple porridge is often served communally, providing energy for daily life across several Southern African countries.",
                        "The small, silvery fish accompaniment is often sourced from large freshwater lakes in the region.",
                        "It's traditionally eaten with the bare hands, forming small balls of the porridge to scoop up the relish."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-4680d181-ec87-4948-ae53-9bf4138dadec",
                            "name": "Fish and Chips",
                            "isCorrect": false,
                            "reason": "Western fried fish and potatoes, completely different meal."
                        },
                        {
                            "id": "dish-1-993cf801-308c-4acc-b046-dd94269fd645",
                            "name": "Fufu with Soup",
                            "isCorrect": false,
                            "reason": "West African, uses a different starch base for the porridge."
                        },
                        {
                            "id": "dish-2-96d5b728-464c-442c-bd56-dcf4509cbed0",
                            "name": "Nshima with Kapenta",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-e52e8cbb-d8ca-48c4-903b-078948618a13",
                            "name": "Ugali with Sukuma Wiki",
                            "isCorrect": false,
                            "reason": "East African, similar porridge, but with different greens accompaniment."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-f36f7a50-480b-45a3-b887-1d68b79e4317",
                            "name": "Plantains",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-1f62f787-7e14-4f6c-b12b-7e592230fdbc",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-ceb05e06-cecc-4905-b758-aa0bff463610",
                            "name": "Peanut Butter",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-e0fb8c2a-53ae-40d1-9f85-eef61f8adb89",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-f76df49c-8c18-491c-b071-8fd4affc6474",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-bacff125-38ea-4801-82ba-7f999cc627db",
                            "name": "Ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-10dc8651-9d97-4ea7-9e04-667ef3ca5e77",
                            "name": "Maize Meal",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-3dddf272-aa22-4885-a965-102dc6aff7ae",
                            "name": "Tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-2aec6244-7002-48b2-9fc6-06f5be8fccc4",
                            "name": "Kapenta (dried tiny fish)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-f813b971-d533-4170-885f-f76a72218524",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-81e5e9d0-12b5-4d3b-9926-3882e461f273",
                            "name": "Okra",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                }
            ],
            "HARD": [
                {
                    "id": "6f1fc030-3a84-491f-be91-365507e6084b",
                    "dayId": "2025-12-16-HARD",
                    "targetDish": "Domoda",
                    "description": "A rich and savory Gambian peanut stew, typically made with meat (beef, lamb, or chicken), vegetables like carrots and potatoes, and a thick, creamy peanut butter base.",
                    "cuisine": "The Gambia",
                    "region": "West Africa",
                    "originCity": "Banjul",
                    "category": "Stew, Peanut Stew",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇬🇲",
                    "countryCode": "GM",
                    "mainIngredients": [
                        "Beef/Chicken/Lamb",
                        "Peanut Butter",
                        "Tomato Paste",
                        "Onions",
                        "Carrots",
                        "Potatoes",
                        "Sweet Potatoes",
                        "Cabbage",
                        "Bell Peppers",
                        "Vegetable Oil",
                        "Scotch Bonnet"
                    ],
                    "triviaClues": [
                        "Considered a national dish, its name in Mandinka means 'peanut sauce'.",
                        "The stew's rich, nutty flavor comes from a generous amount of groundnuts, or peanuts.",
                        "Often served with white rice, it's a hearty meal reserved for special occasions and family gatherings."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-2372dd51-a1cd-4ce5-b978-5e9a97109773",
                            "name": "Muamba de Galinha",
                            "isCorrect": false,
                            "reason": "Angolan palm oil chicken stew, distinct flavor profile."
                        },
                        {
                            "id": "dish-1-618d54f9-7675-410b-a82b-2047e3d76dc8",
                            "name": "Indian Curry",
                            "isCorrect": false,
                            "reason": "South Asian dish with different spices and base."
                        },
                        {
                            "id": "dish-2-2e893a00-a19c-4391-8f27-565ab63e1b4f",
                            "name": "Egusi Soup",
                            "isCorrect": false,
                            "reason": "Nigerian melon seed soup, uses different thickener."
                        },
                        {
                            "id": "dish-3-c7504d82-ad79-464c-9153-46b41d933057",
                            "name": "Domoda",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-4-40659f67-8b96-4052-916b-57a8abe63c97",
                            "name": "Mafé",
                            "isCorrect": false,
                            "reason": "Senegalese/Malian peanut stew, very similar but with specific regional variations."
                        },
                        {
                            "id": "dish-5-f838c196-2319-492e-a7e6-74e7197b7fb5",
                            "name": "Piri Piri Chicken",
                            "isCorrect": false,
                            "reason": "Mozambican grilled chicken, not a stew."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-7016d2fe-475c-4f1d-a48e-45cfb05b2354",
                            "name": "Curry Powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-5583b338-abc2-4fa2-8e3f-bf7287500914",
                            "name": "Carrots",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-8ffe9c05-043a-4c2a-ac91-b86fb706f0c8",
                            "name": "Okra",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-b9e55cfe-48da-4bd0-83b0-cf58b9146aec",
                            "name": "Rice Flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-a14a19af-6dac-4962-b05d-0aea2854097a",
                            "name": "Thyme",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-deb68696-556a-4b28-805a-0dc0f62f37d4",
                            "name": "Crayfish",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-a16b52e3-e56c-443f-842d-0b43f910a304",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-26720059-0a8f-4d39-903e-6191bab02088",
                            "name": "Ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-d45cd257-441e-4bf9-9096-ad9b4633acbb",
                            "name": "Tomato Paste",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-0a5aa16a-9595-4d21-8f1d-ee807fcbe160",
                            "name": "Peanut Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-c4a33ee6-9198-47ee-b411-961764450c54",
                            "name": "Beef/Chicken/Lamb",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-04283aa8-a796-4c25-bb1c-88540fca4d64",
                            "name": "Cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-e111967c-fb9b-428c-a0bc-c5b4f77f5f71",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "b39c3ec5-5eef-4583-8654-543d6a5b03b6",
                    "dayId": "2025-12-16-HARD",
                    "targetDish": "Bunny Chow",
                    "description": "A South African fast food dish consisting of a hollowed-out loaf of white bread filled with a spicy curry, typically mutton, beef, or chicken.",
                    "cuisine": "South Africa",
                    "region": "Southern Africa",
                    "originCity": "Durban",
                    "category": "Street Food, Curry, Bread",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇿🇦",
                    "countryCode": "ZA",
                    "mainIngredients": [
                        "White Bread",
                        "Mutton/Beef/Chicken",
                        "Potatoes",
                        "Onions",
                        "Tomatoes",
                        "Curry Powder",
                        "Garlic",
                        "Ginger",
                        "Chili"
                    ],
                    "triviaClues": [
                        "Despite its name, this dish contains no rabbit and is thought to originate from Indian migrant workers in South Africa.",
                        "It is traditionally eaten without cutlery, using the bread itself to scoop up the spicy filling.",
                        "The city of Durban is widely regarded as the birthplace and spiritual home of this iconic street food."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-18c8d4ff-d593-4444-bcb2-1c9ba8d3c5cf",
                            "name": "Curry and Rice",
                            "isCorrect": false,
                            "reason": "Standard Indian meal, but not served in a hollowed-out bread."
                        },
                        {
                            "id": "dish-1-0ae5ae55-d861-40a8-ba0d-507bd066e5bd",
                            "name": "Samosa",
                            "isCorrect": false,
                            "reason": "Indian/African pastry, different form and serving."
                        },
                        {
                            "id": "dish-2-b6c5ef27-1690-46c7-a62b-9f04ab1a9bb4",
                            "name": "Bobotie",
                            "isCorrect": false,
                            "reason": "South African baked meat dish, different preparation and flavor."
                        },
                        {
                            "id": "dish-3-2a564433-a707-4977-abd0-8b32efb6f641",
                            "name": "Roti",
                            "isCorrect": false,
                            "reason": "Indian flatbread, a different carbohydrate accompaniment for curry."
                        },
                        {
                            "id": "dish-4-5e2dbf15-f1a8-49a1-befa-3781c52730e0",
                            "name": "Submarine Sandwich",
                            "isCorrect": false,
                            "reason": "Western sandwich, different filling and concept."
                        },
                        {
                            "id": "dish-5-5b8bb461-dd4f-46c4-8387-5df76c573611",
                            "name": "Bunny Chow",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-55092f5f-7925-4227-a79d-1d5e0e9a0823",
                            "name": "Lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-e0ae5e11-d24a-4b88-ae35-d13ed0e006f4",
                            "name": "Fish",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-bfc626e9-3acd-47bd-adbe-bd9b81671131",
                            "name": "Mutton/Beef/Chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-838d2670-0767-4fce-a2b3-5805f63ce9dd",
                            "name": "White Bread",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-3b0621ee-0287-4a07-8991-a2ea3c117443",
                            "name": "Okra",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-f3d8f423-fc18-4a15-a8a0-15014c97bdaf",
                            "name": "Peanut Butter",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-e97cd7f3-9e53-47cd-af95-833103d07abe",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-e86070d0-2076-4bd6-99bc-b6e3bead272c",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-bf8cfad5-31c5-478c-b849-fc5122302e79",
                            "name": "Tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-a498da17-7f9f-4dcc-b854-1de0f974fa75",
                            "name": "Yogurt",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-d904afa3-6105-4af2-b95c-2e8504b98c51",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-47e8dcb6-af6d-4635-8255-f81c76b650b3",
                            "name": "Potatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-d5e69c2a-b4aa-45bd-9da2-54a5414a6ff7",
                            "name": "Cream",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "abdf53ba-add7-4fa3-895a-24f22a2b25c0",
                    "dayId": "2025-12-16-HARD",
                    "targetDish": "Ndole",
                    "description": "The national dish of Cameroon, a rich and savory stew made from bitter leaves (Ndole leaves, typically vernonia), groundnuts (peanuts), and served with meat or fish, often plantains or miondo.",
                    "cuisine": "Cameroon",
                    "region": "Central Africa",
                    "originCity": "Douala",
                    "category": "Stew, Vegetable, Peanut Stew",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇨🇲",
                    "countryCode": "CM",
                    "mainIngredients": [
                        "Bitter Leaves (Vernonia amygdalina)",
                        "Groundnuts/Peanuts",
                        "Beef/Shrimp/Smoked Fish",
                        "Onions",
                        "Garlic",
                        "Scotch Bonnet",
                        "Palm Oil (optional)"
                    ],
                    "triviaClues": [
                        "This national dish is famed for its slightly bitter taste, derived from its namesake leafy green.",
                        "The bitterness is often carefully removed through a process of boiling and rinsing the leaves.",
                        "It's a celebratory meal, often prepared with groundnuts and various proteins like beef, shrimp, or smoked fish."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-344756c9-1115-4ae2-9280-48a591c552ab",
                            "name": "Egusi Soup",
                            "isCorrect": false,
                            "reason": "Nigerian melon seed soup, uses different main vegetable and thickener."
                        },
                        {
                            "id": "dish-1-c4eb88b5-095c-4c78-b70a-2694cdf497f8",
                            "name": "Ndole",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-0c5cd26d-c11f-4091-87bd-9c0a651f0030",
                            "name": "Spinach Stew",
                            "isCorrect": false,
                            "reason": "General term, but lacks specific bitter leaf profile and groundnut base."
                        },
                        {
                            "id": "dish-3-f5ee1319-db86-417a-954b-7526686aea60",
                            "name": "Domoda",
                            "isCorrect": false,
                            "reason": "Gambian peanut stew, different main vegetable and regional variations."
                        },
                        {
                            "id": "dish-4-e4781eb7-e954-4e24-bf59-184b46b0e41a",
                            "name": "Mafé",
                            "isCorrect": false,
                            "reason": "Senegalese peanut stew, different vegetable focus."
                        },
                        {
                            "id": "dish-5-b4984f67-3bc9-4ebb-948c-b39ef1635f11",
                            "name": "Okra Stew",
                            "isCorrect": false,
                            "reason": "African stew, but with okra as the primary vegetable."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-2b4b7f20-8f96-41e2-9eef-21bb399491b2",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-211e00d0-cb1d-42f5-90f5-a4b7771c9535",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-59f6ae48-377a-4986-aca3-334f8331d03b",
                            "name": "Tomato Paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-81f5b6ae-c9f4-4822-9d49-5484bd24c1e4",
                            "name": "Beef/Shrimp/Smoked Fish",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-4e2a655b-a01f-4514-8524-36aa5f66654d",
                            "name": "Ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-528aceb5-a632-4da5-9433-ecbfd8a39e3c",
                            "name": "Garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-7ffc7bbd-78fb-45f5-8743-c138520489cd",
                            "name": "Bitter Leaves (Vernonia amygdalina)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-c2c8117a-d7e7-4cb2-848e-e8a59c5cd3e6",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-2121198a-a130-4f77-b63f-c081e4a4044c",
                            "name": "Groundnuts/Peanuts",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-d460ac11-6a7a-490d-8440-7937c22a1c3c",
                            "name": "Cassava",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-762bcbf4-bffb-4e47-99a5-4c4dc56387c6",
                            "name": "Curry Powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-8c1c31f3-9afa-4eb7-a828-3b468ae3025b",
                            "name": "Thyme",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-580612f3-afe2-47ec-97cf-15c65330f96c",
                            "name": "Sweet Potatoes",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "66de6982-3182-4aff-892e-e004fefe774d",
                    "dayId": "2025-12-16-HARD",
                    "targetDish": "Fufu and Gboma Soup",
                    "description": "A staple dish from Sierra Leone, featuring Gboma soup – a rich stew made with a specific leafy green (Gboma/African eggplant leaves), palm oil, and various meats/fish, served with fufu (pounded cassava or yam).",
                    "cuisine": "Sierra Leone",
                    "region": "West Africa",
                    "originCity": "Freetown",
                    "category": "Staple, Stew, Vegetable",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇸🇱",
                    "countryCode": "SL",
                    "mainIngredients": [
                        "Gboma Leaves",
                        "Palm Oil",
                        "Assorted Meats (beef, chicken, smoked fish)",
                        "Onions",
                        "Garlic",
                        "Scotch Bonnet",
                        "Fufu (cassava or yam flour)"
                    ],
                    "triviaClues": [
                        "The main leafy green in this soup is named after the local Krio word for 'African eggplant leaves'.",
                        "Its distinct flavor profile often comes from the generous use of red palm oil and smoked fish.",
                        "The accompanying fufu requires considerable effort, often involving pounding boiled roots into a smooth dough."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-b7ef895c-8abb-4da8-9f72-ba3ccbb1bccf",
                            "name": "Ndole",
                            "isCorrect": false,
                            "reason": "Cameroonian bitter leaf stew, similar concept but different leaf and regional variations."
                        },
                        {
                            "id": "dish-1-74093fe2-853a-4d91-bed2-95033b7facd9",
                            "name": "Fufu and Gboma Soup",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-cf509cab-2830-4bc6-8024-5a4b1ce5284c",
                            "name": "Okra Soup",
                            "isCorrect": false,
                            "reason": "West African, different main vegetable."
                        },
                        {
                            "id": "dish-3-361be97c-7b59-45b7-bb1e-d3bd9871c27a",
                            "name": "Light Soup",
                            "isCorrect": false,
                            "reason": "Ghanaian, typically a clear, tomato-based soup, not a thick leafy green stew."
                        },
                        {
                            "id": "dish-4-176e5bba-7e1d-47fc-9bac-7193e031fec0",
                            "name": "Egusi Soup",
                            "isCorrect": false,
                            "reason": "Nigerian melon seed soup, different primary vegetable and thickener."
                        },
                        {
                            "id": "dish-5-3d43b4e9-3dd0-4147-92ce-49102fd45a51",
                            "name": "Peanut Stew",
                            "isCorrect": false,
                            "reason": "General term, but not based on gboma leaves and palm oil."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-edae7055-2c35-472d-8c5b-3b4785605d9b",
                            "name": "Garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-c18b8f8e-e4e2-4dce-97ab-89093b171741",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-251568e5-ab1d-478d-abb7-a10023b17c54",
                            "name": "Peanut Butter",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-ae4887b4-597e-4747-9042-b8e30a1c0b9e",
                            "name": "Plantains",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-24c45b56-fb06-428b-811b-ef7dfe1df1d1",
                            "name": "Tomato Paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-3a0e1760-ad20-49c8-8063-4a3566942376",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-4dbe8fd6-ae9f-464c-9878-fbed520293e5",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-30754e35-43a3-462c-ad9b-9803faf7c177",
                            "name": "Sweet Potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-ce3e6e76-3a21-4476-a96d-1d4a2d11f9d7",
                            "name": "Palm Oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-02dcaf8d-efad-4bfd-bb16-5bbb6169cac0",
                            "name": "Assorted Meats (beef, chicken, smoked fish)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-134186cc-81a0-4dd3-aa9d-a42d6b686c45",
                            "name": "Gboma Leaves",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-1b37655f-2110-4c30-a30b-4514e1127185",
                            "name": "Lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-3a97880e-34f9-47e6-9ce8-083d4b767885",
                            "name": "Curry Powder",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "808b0214-fcc6-4d0d-be86-cedd1effea27",
                    "dayId": "2025-12-16-HARD",
                    "targetDish": "Fumbwa",
                    "description": "A flavorful and healthy stew from the Democratic Republic of Congo, made with wild spinach or \"fumbwa\" leaves (Gnetum africanum), groundnuts, palm oil, and often smoked fish or meat.",
                    "cuisine": "Democratic Republic of Congo",
                    "region": "Central Africa",
                    "originCity": "Kinshasa",
                    "category": "Stew, Vegetable, Peanut Stew",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇨🇩",
                    "countryCode": "CD",
                    "mainIngredients": [
                        "Fumbwa Leaves (Gnetum africanum)",
                        "Groundnuts/Peanuts",
                        "Palm Oil",
                        "Smoked Fish/Meat",
                        "Onions",
                        "Garlic",
                        "Chili"
                    ],
                    "triviaClues": [
                        "This stew features a unique leafy green, often gathered from wild vines in the Central African rainforests.",
                        "The combination of this specific leaf, groundnuts, and palm oil gives it its signature taste and texture.",
                        "A beloved celebratory dish, it is often served with kwanga (fermented cassava bread) or fufu."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-f8514a12-1064-4837-8a74-e6beec42c084",
                            "name": "Mafé",
                            "isCorrect": false,
                            "reason": "West African peanut stew, but with different vegetable focus."
                        },
                        {
                            "id": "dish-1-ac88a606-dedc-472c-8c8d-17888242ff94",
                            "name": "Okra Stew",
                            "isCorrect": false,
                            "reason": "African stew, but with okra as the primary vegetable."
                        },
                        {
                            "id": "dish-2-362e819f-36bc-412d-b003-50d1935d4818",
                            "name": "Ndole",
                            "isCorrect": false,
                            "reason": "Cameroonian bitter leaf stew, similar concept but uses different specific leafy greens."
                        },
                        {
                            "id": "dish-3-95e5d482-d440-4bb1-a244-cdb598014bd5",
                            "name": "Egusi Soup",
                            "isCorrect": false,
                            "reason": "Nigerian melon seed soup, uses a different main thickener."
                        },
                        {
                            "id": "dish-4-a3556d1e-d6b6-4be7-89de-28503868f390",
                            "name": "Fumbwa",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-378834d2-2a3e-4ee2-acf5-c31fc24e8b1d",
                            "name": "Spinach Stew",
                            "isCorrect": false,
                            "reason": "General term, but lacks the specific fumbwa leaf and groundnut/palm oil profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-2842ea61-c729-4387-aaad-5e0e1b83f996",
                            "name": "Cassava Flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-3a941902-df12-47b1-b8b2-92c026327a76",
                            "name": "Yams",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-ed5c085f-0e05-4756-b511-635d4316adeb",
                            "name": "Coconut Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-86bb6ac7-0e2c-47b8-91f1-197a11309607",
                            "name": "Smoked Fish/Meat",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-039db84d-ac16-42b1-b098-a150ea46e892",
                            "name": "Fumbwa Leaves (Gnetum africanum)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-edb04877-c4f3-4864-b7c9-aa43373f9178",
                            "name": "Curry Powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-d0f9a883-f902-41d0-9c22-af52b6ed22ce",
                            "name": "Coriander",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-be453df2-0c15-4f34-b560-a55c3b9eabab",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-47d2fbb8-d800-4031-a36e-21bfd3ed76e8",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-33b90ab9-b47b-49e7-b3fc-bb2e270c355a",
                            "name": "Tomato Paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-6eb07a40-2088-4a5c-8580-ae3c858cf1bc",
                            "name": "Palm Oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-d6263e4b-4b19-4e5b-9ac5-944d13c3b356",
                            "name": "Plantains",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-f1717904-e395-4cd6-8ef6-ba2090401af5",
                            "name": "Groundnuts/Peanuts",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                }
            ]
        }
    },
    "2025-12-17": {
        "date": "2025-12-17",
        "theme": "Rice Dish from Italian Regions",
        "rounds": {
            "EASY": [
                {
                    "id": "5662c755-c1d4-4260-b5ed-17ce238baeb3",
                    "dayId": "2025-12-17-EASY",
                    "targetDish": "Risotto alla Milanese",
                    "description": "A classic creamy saffron-infused rice dish from Lombardy, known for its vibrant yellow color and rich, savory flavor.",
                    "cuisine": "Italy",
                    "region": "Lombardy",
                    "originCity": "Milan",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Arborio rice",
                        "saffron",
                        "onion",
                        "white wine",
                        "butter",
                        "Parmigiano-Reggiano",
                        "beef broth"
                    ],
                    "triviaClues": [
                        "This dish gets its signature color from a precious spice.",
                        "It's often served alongside 'ossobuco'.",
                        "Its name directly references a major Italian fashion capital."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-ac0f2530-ad56-41e7-a938-763230a7bbe7",
                            "name": "Paella Valenciana",
                            "isCorrect": false,
                            "reason": "While also a rice dish, Paella is Spanish and typically includes seafood, chicken, and often vegetables, having a drier texture."
                        },
                        {
                            "id": "dish-1-2ac61a16-0a50-4101-ae7d-cc77bab8ecee",
                            "name": "Risotto alla Milanese",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-8e56cb8a-c273-4415-8f52-f235f31b8d8b",
                            "name": "Jambalaya",
                            "isCorrect": false,
                            "reason": "A Louisiana Creole dish, Jambalaya features rice cooked with meat (like sausage and chicken) and vegetables, with a distinct spice profile and different texture."
                        },
                        {
                            "id": "dish-3-efda3fd0-347e-43c6-aa21-57055818a0f2",
                            "name": "Biryani",
                            "isCorrect": false,
                            "reason": "A spiced rice dish from the Indian subcontinent, Biryani uses basmati rice and a much broader array of spices and meats."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-427cbd86-1bce-443b-9312-0c1bda3d34ed",
                            "name": "butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-42c458f2-8ca5-432b-bdd6-6c878aaf41c3",
                            "name": "white wine",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-be69cc88-ef5c-49a4-a7aa-84e27045f74d",
                            "name": "Arborio rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-620e82ff-e9b1-499c-88fd-82975127d82a",
                            "name": "turmeric",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-9d2dd571-5f08-4163-9e18-7e42ef71064c",
                            "name": "black beans",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-6e0b9a1f-f1ef-413a-b0a5-75aa05b82805",
                            "name": "saffron",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-99977687-4b24-42f3-8841-8f06f847f29a",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-ea100f58-44aa-4a29-bea8-4661ef2ef5f5",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-e33624d4-769b-4e28-b9b9-347d8eb78a23",
                            "name": "onion",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "8669bad0-bef4-4aa9-bdd8-aed05f37b460",
                    "dayId": "2025-12-17-EASY",
                    "targetDish": "Arancini",
                    "description": "Crispy, deep-fried rice balls typically filled with ragù (meat sauce), mozzarella, and peas, a popular street food from Sicily.",
                    "cuisine": "Italy",
                    "region": "Sicily",
                    "originCity": "Palermo",
                    "category": "Antipasto",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Arborio rice",
                        "ragù (meat sauce)",
                        "mozzarella",
                        "peas",
                        "breadcrumbs",
                        "eggs",
                        "frying oil"
                    ],
                    "triviaClues": [
                        "Their name means 'little oranges' due to their shape and color.",
                        "They are a staple street food, particularly in Sicily.",
                        "These savory snacks are often served hot, with a string of melted cheese inside."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-410e9db6-d578-4674-ab03-3923d991d931",
                            "name": "Crocchette di Patate",
                            "isCorrect": false,
                            "reason": "These are fried potato croquettes, not rice-based, although similar in form and preparation."
                        },
                        {
                            "id": "dish-1-3eb5201f-dfd9-4d25-90a5-9437d9389d09",
                            "name": "Supplí",
                            "isCorrect": false,
                            "reason": "Another Italian fried rice ball, but typically Roman, oval-shaped, and usually with a simpler tomato and mozzarella filling."
                        },
                        {
                            "id": "dish-2-1879157e-df07-4153-a3d8-7b5effe25480",
                            "name": "Arancini",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-d27accbf-7fe7-4a8d-af95-4de6ac110cb0",
                            "name": "Scotch Egg",
                            "isCorrect": false,
                            "reason": "A British dish consisting of a hard-boiled egg wrapped in sausage meat, coated in breadcrumbs, and deep-fried, not rice-based."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-e315b3f5-8e2d-4be9-af52-a8b23d2cfd8c",
                            "name": "peas",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-2bf28086-cf06-4971-b17b-bf3aa70fb24a",
                            "name": "fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-a3901a42-72c9-4162-8d56-72b015de6a55",
                            "name": "kimchi",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-40c4653f-59d8-4086-afd9-f2d6777d518d",
                            "name": "breadcrumbs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-2fd3445e-4e55-424c-a621-c45216eedc7a",
                            "name": "tofu",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-ec9a89aa-9b20-4c47-b0df-ff193185f0ba",
                            "name": "ragù (meat sauce)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-35519092-23ed-4f27-95bc-adb358a6c807",
                            "name": "mozzarella",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-36bc36f2-f721-4572-a522-5a30c6c67531",
                            "name": "chickpeas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-6f4dd70e-07be-4d88-abe6-2c5e913d8662",
                            "name": "Arborio rice",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "9e3e9c6a-5369-4978-9b11-f05c1e06ec44",
                    "dayId": "2025-12-17-EASY",
                    "targetDish": "Risotto ai Funghi Porcini",
                    "description": "A rich and earthy risotto made with fragrant porcini mushrooms, a beloved dish throughout Northern Italy.",
                    "cuisine": "Italy",
                    "region": "Northern Italy",
                    "originCity": "Various Northern Italian cities",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Arborio rice",
                        "porcini mushrooms",
                        "onion",
                        "garlic",
                        "white wine",
                        "vegetable broth",
                        "Parmigiano-Reggiano",
                        "butter",
                        "parsley"
                    ],
                    "triviaClues": [
                        "This dish celebrates a highly prized forest ingredient.",
                        "It's a common vegetarian risotto option.",
                        "The best versions use fresh, locally foraged mushrooms."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-ff34085f-6504-455e-bc06-7b87e5f4aa82",
                            "name": "Mushroom Stroganoff",
                            "isCorrect": false,
                            "reason": "A Russian dish typically served with noodles, featuring mushrooms in a sour cream sauce, not a rice dish."
                        },
                        {
                            "id": "dish-1-a3ddaf2b-5d90-47fa-bcf9-d7f0e357d688",
                            "name": "Risotto ai Funghi Porcini",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-812b3fd1-b25e-41b3-b807-b5d494b51171",
                            "name": "Bò Lúc Lắc (Shaking Beef)",
                            "isCorrect": false,
                            "reason": "A Vietnamese stir-fried beef dish often served with rice, but the rice is a side, not the primary component of the dish."
                        },
                        {
                            "id": "dish-3-22847514-92b1-4842-8e7a-5c33fedf126a",
                            "name": "Wild Rice Pilaf",
                            "isCorrect": false,
                            "reason": "A side dish often associated with North American cuisine, using wild rice with a drier texture and different flavor profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-46c6c8dd-faec-455d-8da9-04b28af83bfa",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-b9f5b655-86f5-41f7-a56c-4839752f3559",
                            "name": "white wine",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-36f35f1b-4544-4b7c-991c-2683449287db",
                            "name": "Arborio rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-5ef86967-a4dd-4daf-8841-59899e4cfbe5",
                            "name": "paprika",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-7032ada7-2209-4bad-80e6-c48a49467618",
                            "name": "garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-e02aa539-2e69-4544-84b3-fbab867bb056",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-bba9ec6e-6471-49a5-b4dd-4db532786fd4",
                            "name": "sour cream",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-2627170c-c2a6-4d6d-bfce-007c63e415ae",
                            "name": "bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-6420b9e3-07d8-4ddf-a311-485839c614ae",
                            "name": "porcini mushrooms",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "6968c609-441d-4133-8f4a-3dca6a0ab6a4",
                    "dayId": "2025-12-17-EASY",
                    "targetDish": "Risi e Bisi",
                    "description": "A classic Venetian dish that is a cross between a soup and a risotto, featuring Vialone Nano rice and fresh peas.",
                    "cuisine": "Italy",
                    "region": "Veneto",
                    "originCity": "Venice",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Vialone Nano rice",
                        "fresh peas",
                        "pancetta",
                        "onion",
                        "butter",
                        "Parmigiano-Reggiano",
                        "vegetable broth",
                        "parsley"
                    ],
                    "triviaClues": [
                        "This dish is traditionally served on the Feast of St. Mark.",
                        "It's often described as 'halfway between a soup and a risotto'.",
                        "The name literally translates to 'rice and peas'."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-61cd4bc3-a4ef-474b-9c02-254493ba4fb0",
                            "name": "Minestrone",
                            "isCorrect": false,
                            "reason": "A hearty Italian vegetable soup that sometimes contains rice or pasta, but it's a soup, not a creamy rice dish."
                        },
                        {
                            "id": "dish-1-19b39e66-9801-4102-9978-ac695f72be84",
                            "name": "Pea and Ham Soup",
                            "isCorrect": false,
                            "reason": "A British and Irish soup, much thinner in consistency and without the risotto-like preparation."
                        },
                        {
                            "id": "dish-2-58a4e1c0-e6b3-48ec-b879-e7024a038b6f",
                            "name": "Dal Makhani",
                            "isCorrect": false,
                            "reason": "An Indian lentil dish, not rice-based, with a very different spice profile."
                        },
                        {
                            "id": "dish-3-d53b7a6c-e163-4a82-8271-323fccf23608",
                            "name": "Risi e Bisi",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-212e68f5-d0a4-4463-8756-fdc252df8fd2",
                            "name": "Vialone Nano rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-aa5fc3d3-72ec-44a4-9f34-9a077fee8521",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-61835b76-fdd9-48ac-b8f5-f7ec5f2a1bdb",
                            "name": "curry powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-114b3d4e-cbc6-413f-aa4f-99e026ac3fec",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-15f29d22-c98c-44d0-81ee-c93a6f8aa591",
                            "name": "fresh peas",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-4c4caa68-229a-4d89-abba-5d09e8b06908",
                            "name": "butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-c296edcd-1ea6-445c-98dd-4bafc0e560d0",
                            "name": "pancetta",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-6aa2232f-106c-462e-a2f1-1710776b8a20",
                            "name": "chickpeas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-1027d546-15fc-4351-8d34-3503a8a4b3b8",
                            "name": "lentils",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "52700c48-0045-4fb5-9e76-3d32075448fa",
                    "dayId": "2025-12-17-EASY",
                    "targetDish": "Risotto al Nero di Seppia",
                    "description": "A striking black risotto made with squid ink, giving it a unique briny flavor and dramatic appearance, popular in coastal Italian regions.",
                    "cuisine": "Italy",
                    "region": "Veneto",
                    "originCity": "Venice",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Carnaroli rice",
                        "squid",
                        "squid ink",
                        "onion",
                        "garlic",
                        "white wine",
                        "fish broth",
                        "olive oil",
                        "parsley"
                    ],
                    "triviaClues": [
                        "Its distinctive color comes from a cephalopod.",
                        "It's a specialty of Venice and other Italian coastal areas.",
                        "The flavor is distinctly briny and savory."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-789ba87c-63f2-4f58-b7c8-93317a32d0ac",
                            "name": "Black Rice Paella",
                            "isCorrect": false,
                            "reason": "While also black from squid ink, this is a Spanish paella, has a drier texture, and usually contains other seafood."
                        },
                        {
                            "id": "dish-1-b9fad7c8-bcf2-4b4b-b885-fdd708a23db0",
                            "name": "Nasi Goreng",
                            "isCorrect": false,
                            "reason": "An Indonesian fried rice dish that is typically brown from soy sauce, not black from squid ink, and has very different flavors."
                        },
                        {
                            "id": "dish-2-9ce28230-2e04-4edb-9989-460b98012854",
                            "name": "Risotto al Nero di Seppia",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-13e24005-9728-4838-b8ed-a21919d094da",
                            "name": "Fideuà",
                            "isCorrect": false,
                            "reason": "A Spanish seafood dish similar to paella but made with short pasta noodles instead of rice."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-71e8d9a5-35dd-4db7-ab20-2d89d0e37ec6",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-6990a744-e7c6-4369-95e5-6362b44ffc31",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-a9a16ba5-ab02-4148-b555-8dafafab1c04",
                            "name": "squid ink",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-b9772216-7a09-4c45-9e74-1266938523e0",
                            "name": "turmeric",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-1d1a2866-d1ea-4a6d-8caa-013dd1996825",
                            "name": "garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-0ce4d760-e0f1-4763-a4ae-a866b0ac926c",
                            "name": "squid",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-b001c897-bd02-4f62-8b2f-cf269abe49f3",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-87e07eb7-b8ea-4614-b5ef-fe08408488e5",
                            "name": "Carnaroli rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-6021e2b5-16dd-4540-a115-6ba2ae595a34",
                            "name": "shrimp paste",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                }
            ],
            "MEDIUM": [
                {
                    "id": "efabbb4a-3558-48ef-ab84-f57fc0b8fac5",
                    "dayId": "2025-12-17-MEDIUM",
                    "targetDish": "Risotto alla Pescatora",
                    "description": "A flavorful seafood risotto, brimming with a variety of fresh shellfish and fish, a staple in Italy's coastal regions.",
                    "cuisine": "Italy",
                    "region": "Coastal Regions",
                    "originCity": "Various Coastal Italian cities",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Carnaroli rice",
                        "mixed seafood (clams, mussels, shrimp, calamari)",
                        "cherry tomatoes",
                        "garlic",
                        "white wine",
                        "fish broth",
                        "parsley",
                        "olive oil"
                    ],
                    "triviaClues": [
                        "This dish literally means 'fisherman's risotto'.",
                        "It typically features a medley of marine ingredients.",
                        "A good quality fish broth is essential for its depth of flavor."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-cdf501bd-cbd8-48f4-bf22-0cc6c3199ae2",
                            "name": "Risotto alla Pescatora",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-7bf8677e-9cc4-4eff-80e9-4ba814920f43",
                            "name": "Gumbo",
                            "isCorrect": false,
                            "reason": "A hearty stew from Louisiana Creole and Cajun cuisine, featuring a roux, meat, and seafood, served over rice, but not a risotto."
                        },
                        {
                            "id": "dish-2-63b3335e-7492-4168-bcb9-e7e1b26e489c",
                            "name": "Bouillabaisse",
                            "isCorrect": false,
                            "reason": "A French fish stew from Marseille, not a rice dish, though it can be served with rice on the side."
                        },
                        {
                            "id": "dish-3-3df272fa-bfa6-4c2d-be49-d618edeeba39",
                            "name": "Tom Yum",
                            "isCorrect": false,
                            "reason": "A hot and sour Thai soup, not a rice dish, with distinctly Southeast Asian flavors and ingredients."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-1027d48c-66e8-4310-b6f9-df5a20e4e368",
                            "name": "garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-ad792c3c-f138-4a3a-bc5c-e4a7aeef2a1c",
                            "name": "lemongrass",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-18799c7a-af80-462c-b5f4-98b8203414d7",
                            "name": "mixed seafood (clams, mussels, shrimp, calamari)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-a54664f7-ac27-4c80-9329-b85068a640da",
                            "name": "chorizo",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-1766d936-fec5-4e7d-aaaa-3d085d81a6c3",
                            "name": "saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-dc23bb1f-6a48-4b59-9b95-b98f14c7d462",
                            "name": "Carnaroli rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-089dc28b-1f86-4caa-adba-12ae29d9d2bf",
                            "name": "galangal",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-ddb127e6-2140-42c3-ab7e-5b4b645767fd",
                            "name": "white wine",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-e89cb842-5526-4730-ad2c-132f412dfa49",
                            "name": "cherry tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-00cb4615-938b-4c7a-8556-7ddb3cb33886",
                            "name": "kimchi",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-04bed0e6-2e44-46ad-b523-a4466f8ec82d",
                            "name": "oyster sauce",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "4d013bf6-1f71-469a-a465-c55d5e0a17a0",
                    "dayId": "2025-12-17-MEDIUM",
                    "targetDish": "Panissa Vercellese",
                    "description": "A traditional, hearty risotto from Piedmont, specifically Vercelli, made with Borlotti beans and a local salami called 'salam d'la duja'.",
                    "cuisine": "Italy",
                    "region": "Piedmont",
                    "originCity": "Vercelli",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Carnaroli rice",
                        "Borlotti beans",
                        "onion",
                        "celery",
                        "carrots",
                        "salam d'la duja",
                        "red wine",
                        "vegetable broth",
                        "Parmigiano-Reggiano"
                    ],
                    "triviaClues": [
                        "This dish is a specialty of the 'rice bowl' of Italy.",
                        "It often includes a unique cured sausage aged in lard.",
                        "Its preparation includes specific local rice varieties like Carnaroli or Baldo."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-e58d37fa-ac0e-4679-b855-3c561bf3c104",
                            "name": "Panissa Vercellese",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-7d6560c7-5766-4a9f-acab-b9d5b0302c8c",
                            "name": "Feijoada",
                            "isCorrect": false,
                            "reason": "A Brazilian or Portuguese stew of black beans with various meats, served with rice, but not a risotto."
                        },
                        {
                            "id": "dish-2-f4720bb1-2b03-489f-b152-70981f52cfdf",
                            "name": "Cassoulet",
                            "isCorrect": false,
                            "reason": "A rich, slow-cooked bean stew originating from southern France, featuring various meats, not a rice dish."
                        },
                        {
                            "id": "dish-3-118d8ee2-9b11-4284-a1d7-51d4df89ef49",
                            "name": "Risotto al Salto",
                            "isCorrect": false,
                            "reason": "A Milanese crispy risotto pancake made from leftover risotto, entirely different in preparation and main ingredients."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-52c43d70-1483-4253-a915-0b8322db26ec",
                            "name": "cilantro",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-0761b2eb-2b66-41a7-b3e6-d41d623e8d6b",
                            "name": "chorizo",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-e7142dac-5a9e-4152-9a85-bb98ec6a1e58",
                            "name": "kidney beans",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-75bdc676-a462-4569-8e7e-122558a648ef",
                            "name": "sweet potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-4da31df2-fa13-47fd-9e41-4a9e514545b2",
                            "name": "curry powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-102fced7-5878-436c-925e-58272b3297ba",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-b6cee3ec-7e22-41de-b184-564348ac1782",
                            "name": "Carnaroli rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-58dbc095-5d6a-4be1-aade-0cd77ecaca47",
                            "name": "carrots",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-116935dc-951a-48ab-897b-e149c72316f7",
                            "name": "Borlotti beans",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-5b932312-d399-42db-9662-9536ba724c8b",
                            "name": "celery",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-09c06d55-49d3-43c4-b908-25ab26d42d93",
                            "name": "onion",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "afe20029-fe40-4842-afbb-62203e2339da",
                    "dayId": "2025-12-17-MEDIUM",
                    "targetDish": "Supplí al Telefono",
                    "description": "Oval-shaped Roman fried rice balls, traditionally filled with tomato sauce, rice, and a piece of mozzarella that stretches like a 'telephone cord' when broken open.",
                    "cuisine": "Italy",
                    "region": "Lazio",
                    "originCity": "Rome",
                    "category": "Antipasto",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Carnaroli rice",
                        "tomato sauce",
                        "mozzarella",
                        "breadcrumbs",
                        "eggs",
                        "frying oil",
                        "Pecorino Romano"
                    ],
                    "triviaClues": [
                        "Its name refers to the 'telephone' effect created by its melted cheese filling.",
                        "It's a popular Roman street food, often eaten before pizza.",
                        "The outer crust is made crispy by frying after breading."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-c0800935-5459-4e95-828c-5110b1c4a5cb",
                            "name": "Supplí al Telefono",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-30aaac71-21d5-408f-bf6b-1d593152eb98",
                            "name": "Korokke",
                            "isCorrect": false,
                            "reason": "A Japanese deep-fried dish similar to croquettes, but typically made with mashed potato or cream, not rice."
                        },
                        {
                            "id": "dish-2-9e3964f3-2009-4030-a070-2975d06723c6",
                            "name": "Fritter (e.g., Corn Fritter)",
                            "isCorrect": false,
                            "reason": "A fried cake of batter containing savory ingredients, generally not rice-based and without a distinct melting cheese center."
                        },
                        {
                            "id": "dish-3-5fd40750-057b-4a2a-80d6-5253fcedac8c",
                            "name": "Arancini",
                            "isCorrect": false,
                            "reason": "Sicilian rice balls, often round and typically filled with ragù, peas, and mozzarella, distinct from the Roman version."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-161d20b5-52ec-4337-916e-426d5ef90542",
                            "name": "peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-a7a8fd86-c6ea-4f3e-aee7-e1e938fde46f",
                            "name": "fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-2b0a5b8c-9e89-43c7-ab10-afc1d1f63379",
                            "name": "mozzarella",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-e954c5e8-120a-4755-a3db-5a2950413460",
                            "name": "kimchi",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-168111ff-6c31-49f9-9c7d-0de1ff1a7616",
                            "name": "breadcrumbs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-c2884d22-07c7-4d22-95b0-8757f282edca",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-01b2921c-c4c5-4f21-b507-72b3d497b88b",
                            "name": "Carnaroli rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-d4298b4f-57e5-4a0e-8539-cac6275f5749",
                            "name": "chickpeas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-a661c9a7-1fe5-4abb-8aed-6856157fb006",
                            "name": "eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-e246f11d-720d-4ab0-93bf-aaccf82754db",
                            "name": "tomato sauce",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-5a732fd6-92ae-40f2-8e0e-dcfd40be77e1",
                            "name": "potato",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "3f5250c6-18f8-42ff-8e7e-5ef66ec43ccc",
                    "dayId": "2025-12-17-MEDIUM",
                    "targetDish": "Risotto alla Zucca",
                    "description": "A creamy and comforting pumpkin risotto, featuring the sweet and earthy flavors of roasted pumpkin or squash, popular across Northern Italy in autumn.",
                    "cuisine": "Italy",
                    "region": "Northern Italy",
                    "originCity": "Various Northern Italian cities",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Carnaroli rice",
                        "pumpkin/squash",
                        "onion",
                        "white wine",
                        "vegetable broth",
                        "butter",
                        "Parmigiano-Reggiano",
                        "sage"
                    ],
                    "triviaClues": [
                        "This risotto is a favorite during the autumn season.",
                        "It often includes a fragrant herb as a key flavor enhancer.",
                        "Its natural sweetness pairs well with savory cheese."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-b9a78232-b87e-43fa-ae84-8f2a351723f9",
                            "name": "Risotto alla Zucca",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-9aae053b-1ffc-4bf8-bb38-26d865a29914",
                            "name": "Risotto ai Funghi",
                            "isCorrect": false,
                            "reason": "While also a Northern Italian risotto, its primary flavor comes from mushrooms, not pumpkin."
                        },
                        {
                            "id": "dish-2-e02dca88-0dc1-4cf7-a606-b3e135be5adb",
                            "name": "Butternut Squash Soup",
                            "isCorrect": false,
                            "reason": "A pureed soup made from squash, not a rice dish, though it shares the main vegetable ingredient."
                        },
                        {
                            "id": "dish-3-6d3ce84d-0e5d-490d-83bc-1c48ec1a24da",
                            "name": "Pumpkin Curry",
                            "isCorrect": false,
                            "reason": "An Indian or Thai dish with a very different flavor profile from spices like curry paste and coconut milk, not a risotto."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-67fb9e11-e772-4171-ab0d-625deb48d7cf",
                            "name": "cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-747f190c-9d86-47b8-97ff-d5750d55e977",
                            "name": "Carnaroli rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-6df319bc-b695-4993-9cc6-11faf0a9e7a1",
                            "name": "curry paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-101f879a-1da2-4764-b840-13042bf39e4d",
                            "name": "pumpkin/squash",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-531eade3-c399-45dc-9299-b3bd697b26b9",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-4318c380-fb62-4478-9bc6-4d0c6e18d68b",
                            "name": "star anise",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-d2a14697-2c05-4535-a485-93f041ca833a",
                            "name": "ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-cea30b31-9d42-447a-ab4f-98d3ee5992dc",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-3c14cd7e-37ac-46ec-b73b-be30084b0b67",
                            "name": "chili",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-ddf7cda6-b27f-404f-a5f3-8caa49b21dbe",
                            "name": "white wine",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-1ec9205a-9170-490d-9519-c4a445fe2a1e",
                            "name": "vegetable broth",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "c80a4971-9499-4daf-a77f-15a62700772a",
                    "dayId": "2025-12-17-MEDIUM",
                    "targetDish": "Risotto al Barolo",
                    "description": "A luxurious risotto from Piedmont, infused with the rich, deep flavors of Barolo, one of Italy's most prestigious red wines.",
                    "cuisine": "Italy",
                    "region": "Piedmont",
                    "originCity": "Barolo",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Carnaroli rice",
                        "Barolo wine",
                        "onion",
                        "beef broth",
                        "butter",
                        "Parmigiano-Reggiano"
                    ],
                    "triviaClues": [
                        "This risotto is named after a renowned 'King of Wines and Wine of Kings'.",
                        "It gets its vibrant color and robust flavor from a specific red grape.",
                        "It's a staple of the Langhe region's culinary traditions."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-3dcb9729-3c7a-4f99-ac24-4a76cda7c0e5",
                            "name": "Beef Bourguignon",
                            "isCorrect": false,
                            "reason": "Another French stew of beef braised in red wine, often served with potatoes or noodles, not a risotto."
                        },
                        {
                            "id": "dish-1-620547f5-c873-4c54-8917-28df985da4a5",
                            "name": "Coq au Vin",
                            "isCorrect": false,
                            "reason": "A French dish of chicken braised with red wine, mushrooms, and bacon, not a rice dish."
                        },
                        {
                            "id": "dish-2-098e1e26-1067-44b3-967a-4103f9c022f0",
                            "name": "Risotto al Barolo",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-b03a6076-6175-4761-b278-06e9517b3648",
                            "name": "Risotto al Chianti",
                            "isCorrect": false,
                            "reason": "A Tuscan risotto, also made with red wine, but using Chianti from a different region and having a distinct flavor profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-37d6720a-14f2-4296-8c23-b58529ba24d1",
                            "name": "Carnaroli rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-1ea81813-55bb-491f-ad73-092868ba7a1e",
                            "name": "mushrooms",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-4dee75c0-0612-4cec-86a1-ca39538cfbdd",
                            "name": "Champagne",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-e5f45b58-6eab-433a-86fb-e17e6482d789",
                            "name": "balsamic vinegar",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-3647b25f-8e03-4a46-983a-4693d16003ed",
                            "name": "rosemary",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-562cc5ed-2392-4c32-a2a0-864beb48d14f",
                            "name": "Barolo wine",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-d70c1ac3-b68f-4fbd-be19-a07b4fdb7ea7",
                            "name": "bay leaf",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-d93688f1-9e22-4dda-a107-a1f090c4f07a",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-e112db49-ea96-4c7a-bd49-d1ab326fd583",
                            "name": "chicken",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-c9e3e5bb-3a4b-421b-a10f-f6b81c50d306",
                            "name": "beef broth",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-8d8f5ad2-8894-446b-8e41-5837e6868ade",
                            "name": "butter",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                }
            ],
            "HARD": [
                {
                    "id": "76a225ad-116c-4e10-9e04-8e08971669b6",
                    "dayId": "2025-12-17-HARD",
                    "targetDish": "Risotto al Salto",
                    "description": "A unique Milanese dish often made from leftover saffron risotto, pan-fried until golden and crispy on both sides, forming a delicious rice pancake.",
                    "cuisine": "Italy",
                    "region": "Lombardy",
                    "originCity": "Milan",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "cooked saffron risotto",
                        "butter",
                        "Parmigiano-Reggiano",
                        "frying oil"
                    ],
                    "triviaClues": [
                        "This dish repurposes a famous Lombard risotto.",
                        "Its name means 'jumped' or 'tossed' in a pan.",
                        "The ideal version has a crispy exterior and a soft, warm interior."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-5fed592b-d679-4642-a6ba-1aa65439e597",
                            "name": "Hash Browns",
                            "isCorrect": false,
                            "reason": "A North American breakfast dish made from shredded or diced potatoes, pan-fried until crispy, not rice-based."
                        },
                        {
                            "id": "dish-1-400a9f6e-fe72-4ca5-9e5a-591402f989c3",
                            "name": "Arepa",
                            "isCorrect": false,
                            "reason": "A South American flatbread made from ground maize dough, not rice, though it can be fried or grilled."
                        },
                        {
                            "id": "dish-2-c8178329-7216-4027-af7c-f2641f8955fe",
                            "name": "Risotto al Salto",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-ede5e586-6543-45ed-bbda-d4623597225c",
                            "name": "Rosti",
                            "isCorrect": false,
                            "reason": "A Swiss potato pancake, similar to hash browns but typically larger, not rice-based."
                        },
                        {
                            "id": "dish-4-38a89f21-598d-4ef8-b2d2-75c6e3abf966",
                            "name": "Okonomiyaki",
                            "isCorrect": false,
                            "reason": "A Japanese savory pancake made with flour, eggs, and shredded cabbage, not rice-based, although pan-fried."
                        },
                        {
                            "id": "dish-5-e24f96ef-4f66-47a2-aa65-4743edc047ae",
                            "name": "Spanish Tortilla",
                            "isCorrect": false,
                            "reason": "A thick Spanish omelette made with eggs and potatoes, not rice-based."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-5d9d73ae-8423-4148-9e6e-289847eee2b7",
                            "name": "sesame oil",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-036b4529-b67a-4832-8827-c40d72e90fa1",
                            "name": "eggs",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-7bad9baf-b63f-4541-9705-b6f70db6a1dd",
                            "name": "butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-af90ac0f-c197-456f-990a-65a323cbbe3d",
                            "name": "Worcestershire sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-b207a329-54c9-42c2-acc9-3ea5a88b9da3",
                            "name": "potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-416d2a0e-c26e-4b44-a637-9d09dba46170",
                            "name": "bacon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-130f7f67-9830-4d3b-8f37-db57785e7c48",
                            "name": "flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-52875547-4ebf-4b74-986a-df4e279632ae",
                            "name": "cooked saffron risotto",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-21f44ce8-9d36-4ea6-96ab-d2dd34dffd06",
                            "name": "frying oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-888c1312-3353-40d5-8308-c912b2b26449",
                            "name": "Parmigiano-Reggiano",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-6105b76c-eda7-41f6-81fb-a7a27114478c",
                            "name": "cabbage",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-0d150ad8-7cda-4181-ab5e-3f4342a9367a",
                            "name": "soy sauce",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "8fc29060-a7a1-4188-8156-d5f3edc90f0e",
                    "dayId": "2025-12-17-HARD",
                    "targetDish": "Risotto alla Pilota",
                    "description": "A robust and rustic risotto from Mantua, known for its preparation with specific pork products like ribs and sausage, cooked 'al dente'.",
                    "cuisine": "Italy",
                    "region": "Lombardy",
                    "originCity": "Mantua",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Vialone Nano rice",
                        "pork ribs",
                        "pork sausage",
                        "onion",
                        "garlic",
                        "red wine",
                        "tomato paste",
                        "vegetable broth",
                        "Grana Padano"
                    ],
                    "triviaClues": [
                        "This risotto takes its name from the 'piloti', workers who husked rice.",
                        "It's a staple of Mantuan cuisine, particularly in the autumn.",
                        "The rice is traditionally cooked without stirring until the end, achieving an 'al dente' texture."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-d5d9d96e-e2eb-4d65-bdee-930ebc8acf47",
                            "name": "Jambalaya",
                            "isCorrect": false,
                            "reason": "A Louisiana Creole rice dish with a different spice profile, containing chicken, sausage, and sometimes seafood, but not a creamy risotto."
                        },
                        {
                            "id": "dish-1-7a72d547-5385-400f-a8de-511d0823a3a3",
                            "name": "Arroz con Pollo",
                            "isCorrect": false,
                            "reason": "A Latin American dish of rice with chicken, distinct in preparation and flavor from an Italian risotto."
                        },
                        {
                            "id": "dish-2-31bde956-2520-41e7-917c-d90438b4b075",
                            "name": "Risotto alla Pilota",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-18af8738-96a5-445a-82f2-754e37d198b9",
                            "name": "Risotto alla Salsiccia",
                            "isCorrect": false,
                            "reason": "While a sausage risotto exists in Italy, 'Pilota' refers to a very specific, traditional Mantuan preparation with specific pork cuts and technique."
                        },
                        {
                            "id": "dish-4-9ca04033-379a-4791-9d75-b869bc5a86f4",
                            "name": "Risotto alla Milanese",
                            "isCorrect": false,
                            "reason": "While also from Lombardy, this risotto is saffron-based and vegetarian (traditionally), without the heavy meat components."
                        },
                        {
                            "id": "dish-5-233c7233-f4d1-4b7b-b14c-48c3001cf81a",
                            "name": "Paella Valenciana",
                            "isCorrect": false,
                            "reason": "A Spanish rice dish that often includes rabbit, chicken, and beans, but has a distinct saffron flavor and drier texture."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-044920a3-4252-4695-8e21-47d7485496e6",
                            "name": "chorizo",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-f6f05a98-e647-4be7-a8fd-5426fd9e0001",
                            "name": "seafood",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-249233c2-7491-4910-a713-da62dae306fe",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-f945dfde-8a92-4710-b5d8-31d6d0a8287f",
                            "name": "saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-5c6ec000-d4a5-4e60-848a-24192d99fe5f",
                            "name": "Vialone Nano rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-55f3cc74-7fdd-4b5b-9268-12252463d841",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-e0056f41-2429-4702-8fb3-ae448f534d26",
                            "name": "pork ribs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-faf69542-97e7-4d14-b45c-a97a098361e1",
                            "name": "garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-4179615c-0c3f-4563-b7b6-d190596e0095",
                            "name": "pork sausage",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-db961c59-1b15-40fd-b64b-397b57fbfbfe",
                            "name": "chili",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-13e1a512-dfbd-4c57-a1e6-1ab41664a48e",
                            "name": "curry powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-76a94403-d9d6-4d10-8596-b028561d8bcf",
                            "name": "chickpeas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-73b4ab5c-9052-4655-b867-602db351e64a",
                            "name": "bell peppers",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "036a2901-d27a-42fe-a8e1-ad43e4ee97fc",
                    "dayId": "2025-12-17-HARD",
                    "targetDish": "Torta di Riso Salata",
                    "description": "A savory baked rice pie or cake, often enriched with eggs, cheese, and cured meats or vegetables, found in various regional Italian cuisines.",
                    "cuisine": "Italy",
                    "region": "Emilia-Romagna",
                    "originCity": "Various cities in Emilia-Romagna and Tuscany",
                    "category": "Piatto Unico",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Arborio rice",
                        "eggs",
                        "Parmigiano-Reggiano",
                        "ricotta",
                        "pancetta",
                        "onion",
                        "breadcrumbs",
                        "nutmeg",
                        "shortcrust pastry",
                        "parsley"
                    ],
                    "triviaClues": [
                        "This dish can be served as a substantial main course or a picnic item.",
                        "It often features a combination of creamy cheese and savory meats.",
                        "Regional variations include different herbs and filling combinations."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-563c5e21-b8de-44a1-aaa1-23ea1ebe10c5",
                            "name": "Torta di Riso Salata",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-2e8d0ae3-e807-4829-99b6-42e426e38a23",
                            "name": "Quiche Lorraine",
                            "isCorrect": false,
                            "reason": "A French savory tart with a custard filling, not rice-based."
                        },
                        {
                            "id": "dish-2-aaa790e7-077a-4689-a52a-f249eb8710c8",
                            "name": "Arroz al Horno",
                            "isCorrect": false,
                            "reason": "A Spanish baked rice dish, typically more like a casserole with meat and vegetables, not a pie/cake format."
                        },
                        {
                            "id": "dish-3-cd2f5543-b6c5-417b-9d53-7e41de5f0e02",
                            "name": "Timpano",
                            "isCorrect": false,
                            "reason": "While a baked pasta dish, Timpano is typically pasta-based, often baked in a pastry crust, but not rice-based."
                        },
                        {
                            "id": "dish-4-e7392aed-d852-4cc0-8b76-e1dbe49dabcb",
                            "name": "Moussaka",
                            "isCorrect": false,
                            "reason": "A baked eggplant or potato-based dish from the Balkans and Middle East, often with minced meat and béchamel, not a rice pie."
                        },
                        {
                            "id": "dish-5-fdea16e4-849e-4d99-8ffb-f7aee9061c8e",
                            "name": "Frittata",
                            "isCorrect": false,
                            "reason": "An Italian omelette-like dish, primarily egg-based with fillings, not a baked rice dish."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-04f9f74d-6f71-4965-8f53-95229248d650",
                            "name": "pancetta",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-d10c8ab0-c207-4771-966b-b2e2fcf317f1",
                            "name": "Arborio rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-326f2149-cc0f-4bd5-bed1-da89ce21369e",
                            "name": "mushrooms",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-8666b8f3-cc63-4547-9459-2c9d231d2e4f",
                            "name": "fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-4b83b334-0328-4db8-839a-2075d1df9ede",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-6d337d1e-732d-431b-b72d-a53612e1f47a",
                            "name": "leeks",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-b4572e17-ac28-48cf-8c61-d3680dce8275",
                            "name": "potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-cd83264e-8909-4a23-b007-98eaee27fdbe",
                            "name": "Parmigiano-Reggiano",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-030f47ea-ec53-4c82-a18f-23f2dc18c464",
                            "name": "feta cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-216ea8c1-8ad7-42d8-a05a-b563854eaef4",
                            "name": "eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-5c773319-1bc5-402a-8481-be4e4860c476",
                            "name": "spinach",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-3148645a-e02d-43e3-ad36-1bf61dd4c328",
                            "name": "curry powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-426b69f1-2fca-4f79-8450-058f8088df45",
                            "name": "ricotta",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "c9b65d73-0676-4d39-b242-51b2d4162dba",
                    "dayId": "2025-12-17-HARD",
                    "targetDish": "Risotto allo Zafferano con Gremolata",
                    "description": "A highly refined saffron risotto, traditionally enriched with beef marrow and served with a zesty gremolata garnish (lemon zest, garlic, parsley), often as an accompaniment to ossobuco.",
                    "cuisine": "Italy",
                    "region": "Lombardy",
                    "originCity": "Milan",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Arborio rice",
                        "saffron",
                        "onion",
                        "white wine",
                        "beef marrow",
                        "beef broth",
                        "butter",
                        "Parmigiano-Reggiano",
                        "lemon zest",
                        "garlic",
                        "parsley"
                    ],
                    "triviaClues": [
                        "This dish often traditionally incorporates a specific animal bone marrow.",
                        "It's frequently paired with a slow-braised veal shank.",
                        "The fresh herb and citrus garnish provides a bright counterpoint to its richness."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-d2d70ba3-045c-4ddf-ae14-493f1db2c153",
                            "name": "Kedgeree",
                            "isCorrect": false,
                            "reason": "A British-Indian dish of flaked fish, rice, parsley, hard-boiled eggs, and curry powder, completely different from Italian risotto."
                        },
                        {
                            "id": "dish-1-b3f28d41-d433-400f-95a8-f08eec66c1f1",
                            "name": "Paella Valenciana",
                            "isCorrect": false,
                            "reason": "A Spanish rice dish with saffron, but a drier texture, often containing seafood, chicken, and rabbit, distinct from a creamy Milanese risotto."
                        },
                        {
                            "id": "dish-2-26f1c0af-bd5a-4490-bbbc-0c789e1a45b4",
                            "name": "Risotto alla Milanese (simple version)",
                            "isCorrect": false,
                            "reason": "While the base is the same, this target dish specifies the traditional inclusion of beef marrow and the distinct gremolata garnish, making it a more complex and complete preparation than a 'simple' Milanese."
                        },
                        {
                            "id": "dish-3-d6ae5442-d422-4a83-8fc0-a85a4092a470",
                            "name": "Biryani",
                            "isCorrect": false,
                            "reason": "An Indian subcontinent rice dish, uses basmati rice and a complex blend of spices, far from Italian risotto."
                        },
                        {
                            "id": "dish-4-460cfc37-cc51-4590-9f70-fbcb720998c5",
                            "name": "Risotto allo Zafferano con Gremolata",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-dc8105a8-2b64-48fc-8a59-12faade43f67",
                            "name": "Arroz de Marisco",
                            "isCorrect": false,
                            "reason": "A Portuguese seafood rice dish, more akin to a stew and without saffron or gremolata."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-2023bb23-b94c-4eda-b583-42f29e80a1b7",
                            "name": "beef marrow",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-f2c5ca3c-bc5c-4fd3-a271-fddc7e74c499",
                            "name": "paprika",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-ceeb5816-5719-475d-980d-86e43aae8203",
                            "name": "tomatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-08ddba4b-acd0-484d-86a4-aa4ae50f9c22",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-ab5b4646-044a-45d2-b878-4dbd05668115",
                            "name": "ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-fbb8c325-f9b0-4f71-b36f-ae70c3f30c2f",
                            "name": "saffron",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-37eabf98-75b9-42df-b0df-3ecb211b554c",
                            "name": "cilantro",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-235897f5-ca7b-4bb3-abcc-eca153283544",
                            "name": "turmeric",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-d350a2ed-a662-490a-ab03-3936f245238f",
                            "name": "Arborio rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-6cb2b0c2-4170-41ce-a490-4d71b6bdd0dd",
                            "name": "cumin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-f512c42e-a4b2-4350-9224-3459cec5428a",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-dc4b38d3-3d0f-4784-a64c-181225443f83",
                            "name": "capers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-d6607997-9fb4-4566-a423-b79759aba04d",
                            "name": "white wine",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "aff06d9c-f14b-453e-b6ce-865f6af8d66f",
                    "dayId": "2025-12-17-HARD",
                    "targetDish": "Risotto al Castelmagno e Pere",
                    "description": "A sophisticated Piedmontese risotto combining the intense, pungent flavor of Castelmagno cheese with the sweet, delicate notes of ripe pears.",
                    "cuisine": "Italy",
                    "region": "Piedmont",
                    "originCity": "Cuneo",
                    "category": "Primo Piatto",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇹",
                    "countryCode": "IT",
                    "mainIngredients": [
                        "Carnaroli rice",
                        "Castelmagno cheese",
                        "ripe pears",
                        "onion",
                        "white wine",
                        "vegetable broth",
                        "butter",
                        "Parmigiano-Reggiano",
                        "black pepper"
                    ],
                    "triviaClues": [
                        "This dish features a PDO cheese from the Piedmontese Alps.",
                        "The combination of cheese and fruit creates a balance of savory and sweet.",
                        "The chosen cheese is known for its crumbly texture and strong flavor."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-e6c4545f-3352-4f20-9f79-d4010f0fe1ee",
                            "name": "Risotto al Castelmagno e Pere",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-9da722b9-daf9-4d7d-ae0f-557851c5be4b",
                            "name": "Risotto ai Quattro Formaggi",
                            "isCorrect": false,
                            "reason": "A general four-cheese risotto, without the specific regional cheese and fruit pairing."
                        },
                        {
                            "id": "dish-2-ba004928-65ad-4182-9366-8988a0864c50",
                            "name": "Fondue",
                            "isCorrect": false,
                            "reason": "A Swiss dish of melted cheese served for dipping, not a rice dish."
                        },
                        {
                            "id": "dish-3-310cbbc3-5d1a-43f5-99f6-55b7a6633422",
                            "name": "Waldorf Salad",
                            "isCorrect": false,
                            "reason": "An American fruit and nut salad, completely unrelated to a warm, savory rice dish."
                        },
                        {
                            "id": "dish-4-79c7204c-f35f-4e3d-86ca-3fbc9722427b",
                            "name": "Risotto alla Zucca",
                            "isCorrect": false,
                            "reason": "While a vegetable risotto, it features pumpkin and no cheese pairing with fruit."
                        },
                        {
                            "id": "dish-5-42f5eda0-0417-4fe1-8078-5637aa33e690",
                            "name": "Gorgonzola Risotto",
                            "isCorrect": false,
                            "reason": "A risotto with Gorgonzola cheese, which is a different type of blue cheese from Lombardy, lacking the pear element."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-8102a62c-2846-4ac2-bc19-663cb27205db",
                            "name": "Carnaroli rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-216af243-02f2-4fb1-902a-ce2c966ad38c",
                            "name": "cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-765140f9-59d0-411f-9874-2a9694a5f3df",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-2c3c5230-4054-4151-9515-0f021c283ec4",
                            "name": "walnuts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-0d3a999b-177b-47e3-a427-71ebf3d2e208",
                            "name": "ripe pears",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-eab2492d-1f4d-46c1-b37f-da85573710cd",
                            "name": "apples",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-c1b506c7-6bda-4310-a9b7-f587a5ced53e",
                            "name": "blue cheese (other types)",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-05d8ec24-1c3d-4b69-b71f-253ddcc3b5ae",
                            "name": "bacon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-6cfa1f4b-ff3d-42ff-ab4f-097a6db2ba76",
                            "name": "cloves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-671b9c9e-4689-44e2-94ef-ba0775d89288",
                            "name": "white wine",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-9a4369fe-dc95-4ef6-a28c-d1b697104e45",
                            "name": "balsamic glaze",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-d06f61ef-da99-40e0-a7da-328a321bc446",
                            "name": "Castelmagno cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-0d63f93c-413d-43c0-8534-032179068033",
                            "name": "honey",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                }
            ]
        }
    },
    "2025-12-18": {
        "date": "2025-12-18",
        "theme": "Rice Dish from Polynesia",
        "rounds": {
            "EASY": [
                {
                    "id": "9019690b-5c48-4896-a97f-4eed12056d12",
                    "dayId": "2025-12-18-EASY",
                    "targetDish": "Loco Moco",
                    "description": "A classic Hawaiian comfort food featuring a scoop of white rice, topped with a hamburger patty, a fried egg, and smothered in brown gravy.",
                    "cuisine": "USA",
                    "region": "Polynesia",
                    "originCity": "Hilo, Hawaii",
                    "category": "Main Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "White rice",
                        "Ground beef patty",
                        "Fried egg",
                        "Brown gravy"
                    ],
                    "triviaClues": [
                        "Often served for breakfast or lunch, it's a popular plate lunch item.",
                        "It originated on the Big Island of Hawaii in the late 1940s.",
                        "The name 'moco' is said to have come from one of the first customer's nicknames."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-2ee6c13f-0926-4a5e-b621-49b205cf48c7",
                            "name": "Bibimbap",
                            "isCorrect": false,
                            "reason": "A Korean mixed rice dish with different ingredients and flavor profile."
                        },
                        {
                            "id": "dish-1-d3bd1649-5d4e-4630-82ca-26d4f9d40802",
                            "name": "Loco Moco",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-f7db425b-14d8-444b-881f-cadf1e1b9225",
                            "name": "Omurice",
                            "isCorrect": false,
                            "reason": "A Japanese dish with rice, egg, but different meat and sauce."
                        },
                        {
                            "id": "dish-3-149ff5f9-019b-4ed5-aea8-d3c506c128f5",
                            "name": "Salisbury Steak",
                            "isCorrect": false,
                            "reason": "An American dish with patty and gravy, but typically without rice or egg."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-79f565d9-a31f-4e16-94a4-47096886ae6d",
                            "name": "Soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-2980c3dc-8ef3-4c97-ba68-985efd27399a",
                            "name": "Fried egg",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-9b74fbe9-a91b-40d4-9052-140bb15f5a83",
                            "name": "Sriracha",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-4bef24ba-26c3-4c36-b17b-36e604b49849",
                            "name": "White rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-3c130c6a-7374-4bea-9673-f1f925e09cca",
                            "name": "Ground beef patty",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-c87faa56-ece5-4d91-b427-e2392ad4d2a9",
                            "name": "Miso paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-4b65c4a4-2114-4eee-b613-28dcc88ee610",
                            "name": "Kimchi",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-86835c87-e38c-41d3-9c41-40f055333221",
                            "name": "Brown gravy",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "f74acb96-26a1-4589-bcd5-c2bd007dc95f",
                    "dayId": "2025-12-18-EASY",
                    "targetDish": "Poke Bowl (Classic Tuna Poke on Rice)",
                    "description": "Cubed raw 'ahi tuna, marinated in soy sauce, sesame oil, and other seasonings, served over a bed of white rice.",
                    "cuisine": "USA",
                    "region": "Polynesia",
                    "originCity": "Honolulu, Hawaii",
                    "category": "Main Dish",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "'Ahi tuna",
                        "White rice",
                        "Soy sauce",
                        "Sesame oil",
                        "Green onions",
                        "Limu (seaweed)"
                    ],
                    "triviaClues": [
                        "'Poke' means 'to slice or cut' in Hawaiian.",
                        "This dish has been a staple in Hawaii for centuries, traditionally made with reef fish.",
                        "Its global popularity surged in the 21st century."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-0f766edd-ed3d-4b22-a8b4-a92a99c1ea5c",
                            "name": "Sushi Roll",
                            "isCorrect": false,
                            "reason": "A Japanese dish with raw fish and rice, but presented in a rolled format."
                        },
                        {
                            "id": "dish-1-b0991328-595f-4e68-98cf-c5fc58413b86",
                            "name": "Chirashi Bowl",
                            "isCorrect": false,
                            "reason": "A Japanese dish with raw fish and rice, but fish is typically arranged and not marinated in the same way."
                        },
                        {
                            "id": "dish-2-3e275b42-57bb-4ce5-beb9-61af46d5a327",
                            "name": "Poke Bowl (Classic Tuna Poke on Rice)",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-8e8797cc-f2c6-4e76-b65d-cbaaffbd588c",
                            "name": "Ceviche",
                            "isCorrect": false,
                            "reason": "A Latin American raw fish dish, but cured in citrus juice rather than marinated in soy/sesame, and typically no rice."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-29af59e9-e77d-4b52-9231-666e04a3a8dc",
                            "name": "Sesame oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-6d0e7a79-dc05-4e41-9e49-aca7de98b164",
                            "name": "'Ahi tuna",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-26a9795d-0e21-4643-8a60-cb9750157c4b",
                            "name": "Green onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-97de8e73-d2de-4835-a86e-e55f3f7b613b",
                            "name": "Lime juice (as primary marinade)",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-005e1d60-94ed-4616-93b5-14ff7f576c55",
                            "name": "Avocado (common in modern poke but not classic)",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-025a9237-7662-4c7c-a131-6208939b7c0d",
                            "name": "Jalapeño",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-f6dfa911-87e9-46ff-9c06-c60e4b157119",
                            "name": "Soy sauce",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-e8a5e052-7607-49f8-8af5-d9544123b7bc",
                            "name": "Tortilla chips",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-2baef96c-f492-4ca2-ba91-0cee5e150899",
                            "name": "White rice",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "9d62fdf3-0732-4350-a026-75f1b3a58e9e",
                    "dayId": "2025-12-18-EASY",
                    "targetDish": "Huli Huli Chicken Plate",
                    "description": "Grilled chicken marinated in a sweet and savory sauce, often cooked on a rotisserie, served typically with two scoops of white rice.",
                    "cuisine": "USA",
                    "region": "Polynesia",
                    "originCity": "Waiahole, Oahu",
                    "category": "Main Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Chicken",
                        "White rice",
                        "Soy sauce",
                        "Brown sugar",
                        "Ginger",
                        "Garlic",
                        "Pineapple juice"
                    ],
                    "triviaClues": [
                        "The term 'Huli Huli' means 'turn turn' in Hawaiian, referring to the rotating grill method.",
                        "It was popularized at roadside stands and fundraisers starting in the 1950s.",
                        "The original sauce recipe is a closely guarded family secret."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-ebb17c12-d204-4c9a-8b7e-344c6f8bf7c7",
                            "name": "Huli Huli Chicken Plate",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-d55c7a64-6ca7-4b4e-b876-c09ebb30024f",
                            "name": "American BBQ Chicken",
                            "isCorrect": false,
                            "reason": "A broad category of grilled chicken, but typically uses different sauces and smoking methods."
                        },
                        {
                            "id": "dish-2-aebbd728-1602-4b29-aef1-110a375810bb",
                            "name": "Adobo Chicken",
                            "isCorrect": false,
                            "reason": "A Filipino chicken dish, but marinated in vinegar and soy sauce."
                        },
                        {
                            "id": "dish-3-44ff13e5-1ad9-4f48-904a-5c459d642f86",
                            "name": "Teriyaki Chicken",
                            "isCorrect": false,
                            "reason": "A Japanese dish with a similar sweet and savory glaze, but distinct preparation and origin."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-c1048d13-40a6-4833-9fa9-5159c57be7ae",
                            "name": "Curry powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-bffbfdf8-8aa3-40bd-b1d6-2b5d962d8840",
                            "name": "Lemongrass",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-793605fc-b5df-42b3-971a-44857b4ac49d",
                            "name": "Ginger",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-d6362ff8-8726-4c0d-bacf-7f39676b7916",
                            "name": "Chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-5190623d-f6f1-4600-8a5c-7b5a41f3d10c",
                            "name": "Soy sauce",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-a57816d6-ddf0-4d51-bcf8-1475cb59718f",
                            "name": "Brown sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-b0ab2208-a28d-4d82-a520-52397cc92a1d",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-def691e4-f22e-46f8-845c-846806b552af",
                            "name": "White rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-4be8e505-0649-45a1-8724-9d6e67fe36ad",
                            "name": "Fish sauce",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "8b04ec20-994c-4443-af11-fdd390af544c",
                    "dayId": "2025-12-18-EASY",
                    "targetDish": "Kalua Pig and Cabbage with Rice",
                    "description": "Slow-cooked, smoky pulled pork traditionally prepared in an imu (underground oven), often mixed with cabbage and served with white rice.",
                    "cuisine": "USA",
                    "region": "Polynesia",
                    "originCity": "General Hawaiian islands",
                    "category": "Main Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Pork shoulder",
                        "Cabbage",
                        "Liquid smoke (for home version)",
                        "White rice",
                        "Hawaiian sea salt"
                    ],
                    "triviaClues": [
                        "'Kalua' refers to the traditional cooking method in an underground oven, an 'imu'.",
                        "It's a staple dish at luaus and other Hawaiian celebrations.",
                        "The pork is known for its incredibly tender texture and distinct smoky flavor."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-9901579a-87fb-49df-bd95-07a9f62271af",
                            "name": "Cochinita Pibil",
                            "isCorrect": false,
                            "reason": "A Mexican slow-cooked pork dish, but uses annatto seed for color and flavor."
                        },
                        {
                            "id": "dish-1-d444c44a-7f6f-4df3-a81a-f4ef5dde4093",
                            "name": "Kalua Pig and Cabbage with Rice",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-d8c2b545-d2d6-4f64-bff3-e1fbf4a3d895",
                            "name": "Pulled Pork Sandwich",
                            "isCorrect": false,
                            "reason": "A common American BBQ dish, but with a distinct smoky and tangy flavor profile."
                        },
                        {
                            "id": "dish-3-e0320af7-4b76-4d14-b72d-147ea98a0998",
                            "name": "Carnitas",
                            "isCorrect": false,
                            "reason": "A Mexican slow-cooked pork dish, but prepared with different spices and cooking liquid."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-ce570344-1fee-49ad-90bc-f45fb3a2e492",
                            "name": "Chili powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-9ff05017-5754-4358-a927-cc5899e6d4ee",
                            "name": "Pork shoulder",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-54798369-010a-4be2-9b04-d825248130ff",
                            "name": "Tortillas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-789b8944-9eec-4982-a0fc-e1e26e83bbec",
                            "name": "White rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-11e0d00a-6d42-4c60-a0b2-69fa6c75f41d",
                            "name": "Cabbage",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-910bfeb6-a0da-4252-a7b2-ed25e4645300",
                            "name": "Oranges",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-094e3108-46e7-42a3-ac6f-26e98122ce9d",
                            "name": "Liquid smoke (for home version)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-7bd6fee2-920a-407a-b8ab-7e77ef1ebeb1",
                            "name": "Cumin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-44635883-4eb1-4653-884a-d3ee2fc420e2",
                            "name": "Hawaiian sea salt",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "93d4bdab-b16e-4c72-b648-4c47fa37b757",
                    "dayId": "2025-12-18-EASY",
                    "targetDish": "Coconut Rice",
                    "description": "Fluffy white rice cooked with coconut milk instead of water, giving it a rich, subtly sweet, and creamy flavor.",
                    "cuisine": "Fiji",
                    "region": "Melanesia (Polynesian cultural influence)",
                    "originCity": "N/A (General)",
                    "category": "Side Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇫🇯",
                    "countryCode": "FJ",
                    "mainIngredients": [
                        "White rice",
                        "Coconut milk",
                        "Water",
                        "Pinch of salt"
                    ],
                    "triviaClues": [
                        "This simple dish adds a tropical aroma and flavor to meals.",
                        "It is a common side dish throughout Southeast Asia and the Pacific Islands.",
                        "Often served as a base for curries or grilled meats."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-af0adaaa-c624-4cd2-a1c5-fbad87163068",
                            "name": "Paella",
                            "isCorrect": false,
                            "reason": "A Spanish rice dish, but typically includes saffron, seafood, and vegetables, cooked in a wide pan."
                        },
                        {
                            "id": "dish-1-e3b611e7-9a39-4d17-8ef3-0d45f61020dc",
                            "name": "Risotto",
                            "isCorrect": false,
                            "reason": "An Italian creamy rice dish, but uses broth, wine, and cheese."
                        },
                        {
                            "id": "dish-2-fe397565-d73a-4c8d-bdff-ba3872582b23",
                            "name": "Coconut Rice",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-fa89c560-c821-453f-b370-fb94612c9573",
                            "name": "Jollof Rice",
                            "isCorrect": false,
                            "reason": "A West African rice dish, but tomato-based and heavily spiced."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-a297112f-1e5a-46e2-bd25-a5726a5d8f69",
                            "name": "Tomatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-13a7aeaf-8b7e-403b-9f3f-d51dc0c20bb2",
                            "name": "Saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-3f3d755e-7312-4014-8bb1-0c266303cc14",
                            "name": "Vegetable stock",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-0970d5fa-ea8f-4f79-8623-421a3c8a8364",
                            "name": "Pinch of salt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-26d95bfc-7f23-4447-9951-7a5ac4270100",
                            "name": "Parmesan cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-1b2a5791-bc87-49b3-93b1-53f091732bc4",
                            "name": "White rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-5e800657-ce86-490c-8354-50f29d6a0002",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-8f759cb2-5879-4198-aeca-bcc701fd16bd",
                            "name": "Coconut milk",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                }
            ],
            "MEDIUM": [
                {
                    "id": "66bc1e79-3e32-438e-8ead-e28f6e194921",
                    "dayId": "2025-12-18-MEDIUM",
                    "targetDish": "Hawaiian Fried Rice",
                    "description": "A local take on fried rice, often including ingredients like Spam, Portuguese sausage, green onions, and egg, along with day-old rice.",
                    "cuisine": "USA",
                    "region": "Polynesia",
                    "originCity": "Honolulu, Hawaii",
                    "category": "Main Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Cold cooked rice",
                        "Spam",
                        "Portuguese sausage",
                        "Eggs",
                        "Green onions",
                        "Soy sauce",
                        "Sesame oil"
                    ],
                    "triviaClues": [
                        "This dish reflects the diverse cultural influences present in Hawaii.",
                        "Spam became a popular ingredient during WWII due to its availability and shelf life.",
                        "It's often enjoyed for breakfast or as part of a hearty plate lunch."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-f8d55ea9-c8b8-4def-b79a-f24fd4dde400",
                            "name": "Nasi Goreng",
                            "isCorrect": false,
                            "reason": "An Indonesian fried rice with a distinct spice paste, often including shrimp paste and kecap manis."
                        },
                        {
                            "id": "dish-1-8de1e4c7-9df6-4228-8fc2-e0920621f935",
                            "name": "Kimchi Fried Rice",
                            "isCorrect": false,
                            "reason": "A Korean fried rice dish centered around the flavor of fermented kimchi."
                        },
                        {
                            "id": "dish-2-47eb1b2c-5b16-4627-b0d8-28b98d1d7e80",
                            "name": "Hawaiian Fried Rice",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-927ab648-bed7-48f3-9533-d60b8abacf80",
                            "name": "Yangzhou Fried Rice",
                            "isCorrect": false,
                            "reason": "A classic Chinese fried rice with different meats (shrimp, char siu) and vegetables."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-becc6e6d-8a59-49ce-990a-8f7816e4b6fd",
                            "name": "Bean sprouts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-25ede761-b2de-425d-aba5-eb1779be0490",
                            "name": "Spam",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-92558bc6-fa7f-43ff-8842-97afbf63f017",
                            "name": "Cold cooked rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-030a7ec5-54c9-4522-822b-b2116c1035d9",
                            "name": "Peanuts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-52aca326-79ae-4ca4-ab27-de79114d52ec",
                            "name": "Shrimp paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-88a021da-c802-40f1-a678-abab7fe557f0",
                            "name": "Portuguese sausage",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-20ceb26e-ca9d-44a7-9d2d-cf9e1eee464c",
                            "name": "Gochujang",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-6f2e8735-a294-4191-a7d0-21b2471942e3",
                            "name": "Eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-ea79ad61-8941-4235-9414-1f68e7a6e9d7",
                            "name": "Green onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-ec6787f3-8cbf-40a3-af21-e8a19eaffc78",
                            "name": "Kimchi",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-033c93eb-d734-457a-8ff5-d5be587994d3",
                            "name": "Bok choy",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "59aec978-1f4b-44d7-8baf-1c3f57b370f2",
                    "dayId": "2025-12-18-MEDIUM",
                    "targetDish": "Vakalolo Lolo (Fijian Sweet Coconut Rice Pudding)",
                    "description": "A sweet Fijian dessert made with glutinous rice cooked in rich coconut milk, often sweetened with brown sugar and subtly flavored.",
                    "cuisine": "Fiji",
                    "region": "Melanesia (Polynesian cultural influence)",
                    "originCity": "Suva, Fiji",
                    "category": "Dessert",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇯",
                    "countryCode": "FJ",
                    "mainIngredients": [
                        "Glutinous rice",
                        "Coconut milk",
                        "Brown sugar",
                        "Vanilla extract or ginger"
                    ],
                    "triviaClues": [
                        "'Vakalolo' broadly refers to a type of coconut pudding in Fiji.",
                        "This dessert is often prepared for special occasions and communal feasts.",
                        "It showcases the abundant use of coconut in Fijian cuisine."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-a342d255-d3ab-437d-8b97-a87f9b28e4cf",
                            "name": "Rice Kheer",
                            "isCorrect": false,
                            "reason": "An Indian rice pudding, also milk-based, often flavored with cardamom and nuts."
                        },
                        {
                            "id": "dish-1-e3118a53-1dd9-47a9-b415-9406d3119a87",
                            "name": "Mango Sticky Rice",
                            "isCorrect": false,
                            "reason": "A Thai dessert that uses glutinous rice and coconut milk, but served with fresh mango."
                        },
                        {
                            "id": "dish-2-b340fac3-6dcb-467a-92e6-651498cd75bf",
                            "name": "Arroz con Leche",
                            "isCorrect": false,
                            "reason": "A Spanish/Latin American rice pudding, but milk-based and typically flavored with cinnamon."
                        },
                        {
                            "id": "dish-3-96d977e0-b3f5-4c38-a4ee-6065a69d8ee2",
                            "name": "Vakalolo Lolo (Fijian Sweet Coconut Rice Pudding)",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-865c3222-27e2-491c-ab70-72c2ae3dab6c",
                            "name": "Coconut milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-315a4edc-051e-4737-8846-8cddd57b06ea",
                            "name": "Saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-0512d3e0-1b37-4e67-a40b-1e31752b09dc",
                            "name": "Glutinous rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-57c4ddb1-65b7-46dc-85b4-6370abb9ce7d",
                            "name": "Vanilla extract or ginger",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-a4ba917d-0bbb-4511-9127-de04311451a1",
                            "name": "Mango",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-785a98a2-2f06-4729-af00-33c36015f7ae",
                            "name": "Condensed milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-63507bb6-9c61-4a22-9c39-6f85d58ff3ad",
                            "name": "Brown sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-bb8bcb59-2e78-4608-9e83-df07e45b6f65",
                            "name": "Cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-1b3d71aa-9e4f-41e6-8edb-5eda2fc68a7d",
                            "name": "Cardamom",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-39d07f73-c63b-4cab-a218-c82222fa0bd4",
                            "name": "Rosewater",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "6e48a1ec-3121-41fb-90d7-b9c020bbd38a",
                    "dayId": "2025-12-18-MEDIUM",
                    "targetDish": "Taro Leaf & Coconut Cream Rice (Palusami inspired)",
                    "description": "White rice cooked or served with a creamy blend of tender taro leaves (lū'au leaves) and rich coconut cream, often seasoned with onion.",
                    "cuisine": "Samoa",
                    "region": "Polynesia",
                    "originCity": "Apia, Samoa",
                    "category": "Side Dish / Light Main",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇼🇸",
                    "countryCode": "WS",
                    "mainIngredients": [
                        "White rice",
                        "Taro leaves",
                        "Coconut cream",
                        "Onion",
                        "Salt"
                    ],
                    "triviaClues": [
                        "Inspired by 'Palusami', a traditional dish where taro leaves and coconut cream are baked.",
                        "Taro leaves must be cooked thoroughly to neutralize naturally occurring irritants.",
                        "This dish represents a modern way of incorporating traditional staples with rice."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-35d85541-d58a-4db7-846b-b53263f6aa9a",
                            "name": "Spinach and Rice (Spanakoryzo)",
                            "isCorrect": false,
                            "reason": "A Greek dish with spinach and rice, but uses olive oil and lemon, not coconut cream."
                        },
                        {
                            "id": "dish-1-e6aae1c5-249c-48e1-993c-c3b457bdca75",
                            "name": "Taro Leaf & Coconut Cream Rice (Palusami inspired)",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-137a7e71-4090-4bb6-bfc2-c573ef9c1244",
                            "name": "Callaloo",
                            "isCorrect": false,
                            "reason": "A Caribbean leafy green stew, often with okra or crab, distinct flavor profile."
                        },
                        {
                            "id": "dish-3-49425e51-4b66-49ff-930e-924e544f6fcf",
                            "name": "Creamed Spinach",
                            "isCorrect": false,
                            "reason": "A Western dish of spinach in a creamy sauce, but without rice."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-97e1acd3-0a13-4292-a42b-2453f1d69781",
                            "name": "Onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-56b48d60-71dc-4414-b7c9-788d3d6f460d",
                            "name": "Taro leaves",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-79d1a2ec-0ac2-4605-b348-96884ff79455",
                            "name": "White rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-23c31972-006a-40d4-95fa-1084514cbe43",
                            "name": "Feta cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-f8834ac7-fc98-426a-9239-6d0de96d7c76",
                            "name": "Red pepper flakes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-9783b561-8737-4dca-bfdb-6f151c9bec4e",
                            "name": "Coconut cream",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-e92017ac-35ce-466e-9cc4-4b6baf9f267b",
                            "name": "Okra",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-8ea0f3f4-5e73-4e9a-bb19-8ce295952986",
                            "name": "Salt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-207978d7-39f1-4ccf-8b14-f3ea1fc1f58b",
                            "name": "Spinach",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-3f99261f-4aa7-481d-b65f-bdcd57ce1fc6",
                            "name": "Nutmeg",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-62c7128e-2644-4a9d-94d9-a9f9ab6e03b5",
                            "name": "Lemon juice",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "8a5c2b8c-75e1-4626-9dbf-e83579b798a0",
                    "dayId": "2025-12-18-MEDIUM",
                    "targetDish": "Tahitian Red Rice (Riz Rouge)",
                    "description": "A savory rice dish prepared by sautéing white rice with finely diced tomatoes, onions, and garlic, resulting in a reddish hue and robust flavor.",
                    "cuisine": "French Polynesia",
                    "region": "Polynesia",
                    "originCity": "Papeete, Tahiti",
                    "category": "Side Dish",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇵🇫",
                    "countryCode": "PF",
                    "mainIngredients": [
                        "White rice",
                        "Tomatoes",
                        "Onions",
                        "Garlic",
                        "Vegetable oil",
                        "Salt",
                        "Pepper"
                    ],
                    "triviaClues": [
                        "The distinctive red color comes naturally from the tomatoes used in its preparation.",
                        "It is a common accompaniment to fresh seafood dishes in Tahiti, especially Poisson Cru.",
                        "This dish reflects the blend of local Polynesian ingredients with French culinary techniques."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-81c672ad-b76f-4c41-8756-21b07663a0ee",
                            "name": "Tahitian Red Rice (Riz Rouge)",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-f6fddbf4-12a3-4bc4-870d-63c12ddb9f3c",
                            "name": "Spanish Rice (Paella-style)",
                            "isCorrect": false,
                            "reason": "Often red, but cooked in a specific wide pan with saffron and a wider range of ingredients."
                        },
                        {
                            "id": "dish-2-334a20c9-51f4-4161-ad5b-71551344c2c5",
                            "name": "Mexican Rice (Arroz Rojo)",
                            "isCorrect": false,
                            "reason": "Similar red color from tomatoes, but uses different spices like cumin and chili powder."
                        },
                        {
                            "id": "dish-3-58de3116-55c6-4c7d-9dc9-70069a69bb1a",
                            "name": "Pilaf",
                            "isCorrect": false,
                            "reason": "A Middle Eastern/Central Asian rice dish, typically broth-based and spiced differently."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-7b72d97d-eb3d-4194-8c65-c4fc8484562d",
                            "name": "Chili powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-62643606-0d8e-4118-9831-a42ffb631a68",
                            "name": "Bell peppers (unless specifically stated in recipe)",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-9ce872ad-3c64-48bf-b119-35e63c29c12d",
                            "name": "Chorizo",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-304cb6cf-f106-4af0-9cf9-01b34315ef67",
                            "name": "Garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-22eafb18-6f58-48b1-8a34-3c88399370f6",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-d1c5da2e-ed3e-4830-948d-e24180687d2f",
                            "name": "Peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-fe0326a8-a8cd-42b4-9bcf-dbde07428e3f",
                            "name": "White rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-e7398f83-6fc5-4266-892e-bcd360f6ad39",
                            "name": "Saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-84c30f5f-5f1d-4ec8-9393-a799526bea5d",
                            "name": "Cumin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-12a1eac2-05c9-4787-8fa9-8d5c547ab2ad",
                            "name": "Tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-dbaff8b1-ca7e-411a-bd9a-faff88e2e634",
                            "name": "Vegetable oil",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "95832d89-8b37-45cb-b6c6-4bdf50e01399",
                    "dayId": "2025-12-18-MEDIUM",
                    "targetDish": "Coconut Fish Curry with Rice (Fijian/Samoan style)",
                    "description": "A mild, creamy curry featuring local white fish cooked in rich coconut milk with aromatic spices, typically served over steamed white rice.",
                    "cuisine": "Fiji",
                    "region": "Melanesia (Polynesian cultural influence)",
                    "originCity": "Suva, Fiji",
                    "category": "Main Dish",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇯",
                    "countryCode": "FJ",
                    "mainIngredients": [
                        "White fish fillets",
                        "Coconut milk",
                        "Curry powder",
                        "Onion",
                        "Garlic",
                        "Ginger",
                        "Tomatoes",
                        "White rice"
                    ],
                    "triviaClues": [
                        "This dish often uses freshly caught reef fish, a staple in island diets.",
                        "It reflects the blend of indigenous South Pacific and Indian culinary traditions in Fiji.",
                        "A comforting and flavorful meal, showcasing the region's abundant seafood and coconuts."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-358a10f7-e65a-4d76-86ee-66f6972cddb9",
                            "name": "Coconut Fish Curry with Rice (Fijian/Samoan style)",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-51da596a-011c-4c14-b206-09740d71dd0b",
                            "name": "Indian Fish Curry",
                            "isCorrect": false,
                            "reason": "Often uses a more complex blend of ground spices and different cooking methods."
                        },
                        {
                            "id": "dish-2-0da5a7c7-6e09-4f6f-b976-bd2f7f4ef572",
                            "name": "Laksa",
                            "isCorrect": false,
                            "reason": "A Malaysian/Singaporean noodle soup with a distinct spicy coconut broth."
                        },
                        {
                            "id": "dish-3-cf4af63f-e65f-4966-b46b-22b7eedefaba",
                            "name": "Thai Green Curry",
                            "isCorrect": false,
                            "reason": "A spicier curry with distinct Thai herbs like lemongrass and kaffir lime leaves."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-efee3296-b780-4b7b-a06b-cdb439b41d35",
                            "name": "Garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-bec6edb3-6ce3-4492-b2a4-9d2d321a87f6",
                            "name": "White fish fillets",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-e9fcf3c0-4fd6-4928-a0b4-dc0fd429f65f",
                            "name": "Fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-2a38bcf5-8a16-44a0-80be-21422f0b7c22",
                            "name": "Coconut milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-15df9d69-5477-46a2-a377-a24f677bf339",
                            "name": "Curry powder",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-c4dec850-c3e0-4bc8-8dc2-0712092ac2bb",
                            "name": "Noodles",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-d6ba7403-16be-4974-ba94-e4377ea388fe",
                            "name": "Tamarind paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-fc751967-8407-4b7c-a7b5-e9263855a49f",
                            "name": "Lemongrass",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-bc1c35dc-dd8c-4466-93c4-165e0e83d239",
                            "name": "Galangal",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-7526352b-ca19-4ace-ab0c-f72b4e05dc50",
                            "name": "Onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-23cac3ad-2ea6-4115-be10-b2e7be2d550c",
                            "name": "Kaffir lime leaves",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                }
            ],
            "HARD": [
                {
                    "id": "8d048f3c-b90d-402e-a1ac-e1f209866e7b",
                    "dayId": "2025-12-18-HARD",
                    "targetDish": "'Ota 'ika Rice Salad",
                    "description": "A refreshing salad where cubes of raw white fish (like tuna or snapper) marinated in lime juice and coconut cream are mixed with cooked rice, crisp vegetables, and fresh herbs.",
                    "cuisine": "Cook Islands",
                    "region": "Polynesia",
                    "originCity": "Rarotonga, Cook Islands",
                    "category": "Main Dish",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇨🇰",
                    "countryCode": "CK",
                    "mainIngredients": [
                        "Sashimi-grade white fish",
                        "Cooked white rice",
                        "Lime juice",
                        "Coconut cream",
                        "Cucumber",
                        "Tomato",
                        "Red onion",
                        "Cilantro"
                    ],
                    "triviaClues": [
                        "'Ota 'ika' literally means 'raw fish' in many Polynesian languages.",
                        "The acidity of the lime juice 'cooks' the fish, changing its texture and flavor.",
                        "This dish is a staple for celebrations and family gatherings in the Cook Islands and Tonga."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-8e3f9581-a2d2-4a45-8157-c06b1cb64f1e",
                            "name": "Kinilaw",
                            "isCorrect": false,
                            "reason": "A Filipino raw fish dish, often marinated in vinegar, without rice."
                        },
                        {
                            "id": "dish-1-40073477-0259-4e11-addb-8d67c8bfb7d4",
                            "name": "Nicoise Salad",
                            "isCorrect": false,
                            "reason": "A French salad with tuna and vegetables, but uses cooked tuna and no rice."
                        },
                        {
                            "id": "dish-2-4c698d8f-3b5a-4c2a-8b33-b44a06028257",
                            "name": "Poke Bowl",
                            "isCorrect": false,
                            "reason": "A Hawaiian raw fish dish with rice, but different marinade and preparation style."
                        },
                        {
                            "id": "dish-3-a51f81a8-5002-4cb5-b8d1-c4446df9bf9c",
                            "name": "Ceviche",
                            "isCorrect": false,
                            "reason": "A Latin American raw fish dish, but typically cured in citrus, without rice, and different vegetables."
                        },
                        {
                            "id": "dish-4-d4650fea-32fc-40e1-b04b-7d596d99b3f9",
                            "name": "Summer Rolls",
                            "isCorrect": false,
                            "reason": "A Vietnamese fresh roll with rice vermicelli, but different fish preparation and overall format."
                        },
                        {
                            "id": "dish-5-d8f4d529-609d-4dad-ad8e-c4b4f4a37184",
                            "name": "'Ota 'ika Rice Salad",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-d6b47da0-d759-461b-8491-c28ebcf8d85e",
                            "name": "Jalapeño",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-5ce319fc-183e-4c6e-97ee-dd84488f0217",
                            "name": "Cooked white rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-33b29b7a-b029-436b-8f5d-32c551816c1a",
                            "name": "Black beans",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-753e27f9-a98c-4b38-adf8-93a2176a33ad",
                            "name": "Bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-06e80624-ad32-46bc-bd64-dd78aeb71f34",
                            "name": "Coconut cream",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-da240435-0f33-44a9-be54-8752e181085e",
                            "name": "Cucumber",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-16d63a58-1ac1-4f17-9d0b-2bcce07ab110",
                            "name": "Mango",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-ff881289-b520-4274-8565-8e343fed5846",
                            "name": "Sashimi-grade white fish",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-20ed7020-0ff4-49a1-b3fc-fb92c8116873",
                            "name": "Lime juice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-17f7fe5a-7657-4657-9f4f-4d126f80ada6",
                            "name": "Tortilla chips",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-6cb16f4c-9a9d-433c-9a23-92337d1fe653",
                            "name": "Soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-28898c8d-aeed-4dfc-8340-88e2197daf2c",
                            "name": "Avocado",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-c6a4a3a8-c880-459b-8962-67cca9c514aa",
                            "name": "Corn",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "de237314-bcbe-486e-a5af-2d3a64ed6059",
                    "dayId": "2025-12-18-HARD",
                    "targetDish": "Lu'au Stew Rice Bowl",
                    "description": "A hearty Hawaiian stew made with tender taro leaves, often pork, beef, or chicken, cooked in rich coconut milk, served mixed into or over a bed of white rice.",
                    "cuisine": "USA",
                    "region": "Polynesia",
                    "originCity": "Honolulu, Hawaii",
                    "category": "Main Dish",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "White rice",
                        "Taro leaves",
                        "Pork shoulder (or beef/chicken)",
                        "Coconut milk",
                        "Onion",
                        "Garlic",
                        "Hawaiian salt"
                    ],
                    "triviaClues": [
                        "Taro leaves must be cooked extensively (several hours) to remove irritating calcium oxalate crystals.",
                        "This dish is a comforting 'plate lunch' staple and often prepared in large batches.",
                        "It is a deeply traditional Hawaiian dish, utilizing one of the most important indigenous crops."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-c635f88a-f7de-44be-9cb1-caf24f3198bc",
                            "name": "Callaloo Soup",
                            "isCorrect": false,
                            "reason": "A Caribbean leafy green stew, but with different spices and broth base."
                        },
                        {
                            "id": "dish-1-458c8671-3d91-4348-b47f-50b0a52f6f4d",
                            "name": "Laulau",
                            "isCorrect": false,
                            "reason": "A Hawaiian dish with similar ingredients, but traditionally steamed in taro or banana leaves."
                        },
                        {
                            "id": "dish-2-bf0b1ac9-3b48-419b-9cca-235e6e07a1f3",
                            "name": "Gumbo",
                            "isCorrect": false,
                            "reason": "A Southern US stew with rice, but distinct flavor profile, roux, and ingredients like okra."
                        },
                        {
                            "id": "dish-3-20ec7a6f-d8e2-4cbf-8f7f-ce8b3d31a891",
                            "name": "Creamed Spinach with Meat",
                            "isCorrect": false,
                            "reason": "A Western dish with similar texture but different core ingredients and cultural context."
                        },
                        {
                            "id": "dish-4-6445565d-2ad3-442b-bdb8-f5e6c588cedd",
                            "name": "Lu'au Stew Rice Bowl",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-e3815c14-8728-4858-a00a-1a1d1dc8f72c",
                            "name": "Adobo",
                            "isCorrect": false,
                            "reason": "A Filipino meat stew, but with a vinegar and soy sauce base."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-6433c6d9-1c8c-4726-8ef0-474bdc218436",
                            "name": "Taro leaves",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-c18d9a45-4f41-4379-91ae-1a64702c122b",
                            "name": "Pork shoulder (or beef/chicken)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-af2fac52-36b3-48a8-a9c4-732b29925fae",
                            "name": "Onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-52da7947-9449-46a0-a422-7aaf8da8ddce",
                            "name": "Vinegar",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-fc4dbe65-5ca2-41be-af4c-c47869ab8406",
                            "name": "Coconut milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-704125d5-9a30-446b-9a35-16dd027abdba",
                            "name": "Bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-c5b5f4e0-b5c6-4cfd-9838-8b35b316e61d",
                            "name": "Andouille sausage",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-60516195-f4e9-4fee-a2fa-3f4087ea5fb5",
                            "name": "White rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-03a95a97-3e8c-4cfc-9e0b-5a367a673a33",
                            "name": "Okra",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-6090647c-0d02-46cb-b176-d6c4deec2da4",
                            "name": "Sweet potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-001a59b7-741a-456f-bd74-468ee83cea40",
                            "name": "Bay leaf",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-7020e8c3-10a7-41b0-9611-7eaf6f266f30",
                            "name": "Fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-61fd14c3-0608-4ce9-85cf-59464890a130",
                            "name": "Soy sauce",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "8a27c106-7785-48d6-9c5c-51aba09c401a",
                    "dayId": "2025-12-18-HARD",
                    "targetDish": "Tongan Fe'i (Banana) and Coconut Rice Pudding",
                    "description": "A sweet and rich dessert pudding featuring mashed fe'i bananas, cooked with glutinous rice and generous amounts of coconut cream and brown sugar.",
                    "cuisine": "Tonga",
                    "region": "Polynesia",
                    "originCity": "Nuku'alofa, Tonga",
                    "category": "Dessert",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇹🇴",
                    "countryCode": "TO",
                    "mainIngredients": [
                        "Fe'i bananas",
                        "Glutinous rice",
                        "Coconut cream",
                        "Brown sugar",
                        "Vanilla extract"
                    ],
                    "triviaClues": [
                        "Fe'i bananas are a unique variety, often bright orange or red, and are typically cooked before eating.",
                        "This pudding is a deeply satisfying and energy-rich dessert, showcasing local produce.",
                        "It's a testament to the importance of bananas and coconuts in Tongan cuisine."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-a1e65837-f351-4956-b3d0-877e24e52fc6",
                            "name": "Tongan Fe'i (Banana) and Coconut Rice Pudding",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-975b6e36-505d-44f4-ae85-c7e584b381e2",
                            "name": "Suman Malagkit",
                            "isCorrect": false,
                            "reason": "A Filipino glutinous rice cake, but typically without banana mixed in."
                        },
                        {
                            "id": "dish-2-acb671fa-7745-4de7-b209-0c1851211191",
                            "name": "Banana Foster",
                            "isCorrect": false,
                            "reason": "An American dessert featuring caramelized bananas, but without rice and different preparation."
                        },
                        {
                            "id": "dish-3-9a1b7aa6-2800-403e-a161-1c99bf397a42",
                            "name": "Banana Fritters",
                            "isCorrect": false,
                            "reason": "A general dessert, but no rice and typically fried."
                        },
                        {
                            "id": "dish-4-9edc51dc-b694-4693-aecb-9b682e07971a",
                            "name": "Rice Pudding (Western style)",
                            "isCorrect": false,
                            "reason": "A general dessert, but usually milk-based with different flavorings and no banana."
                        },
                        {
                            "id": "dish-5-7729b659-26ea-456f-9de3-a325becadd0f",
                            "name": "Pudding de Pan (Bread Pudding)",
                            "isCorrect": false,
                            "reason": "A Latin American dessert, but using bread as a base instead of rice."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-a06d8104-74f3-49c5-a30e-8867d6b85a83",
                            "name": "Cornstarch",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-dae67006-a77a-4324-8007-9207915bf1ab",
                            "name": "Brown sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-0a1eb40b-dfbd-49f5-aaaa-55fc7b5b572f",
                            "name": "Coconut cream",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-8e5062f5-65f4-4769-8669-cf9aaa110f0e",
                            "name": "Fe'i bananas",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-32f53fc6-95b0-4612-a8c3-1e2aeb75a17d",
                            "name": "Chocolate",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-91419f83-d055-4723-83ee-bbb9a35cca05",
                            "name": "Vanilla extract",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-ab3bca8a-0c60-4f8d-bc20-be2ac7ab2318",
                            "name": "Glutinous rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-2b893fed-6258-471a-bd06-4fac68dc1f38",
                            "name": "Bread",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-e7f82dc1-6896-4bef-b782-eebfa97c54e8",
                            "name": "Brandy",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-3f585856-8ee0-41aa-8533-495c62682903",
                            "name": "Cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-c4e1bd9e-5f47-49cb-af53-eeb210928e37",
                            "name": "Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-57389fed-0c2b-40f7-9130-ad12da366470",
                            "name": "Eggs",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-d80286a0-a40e-4f38-8333-d5b74068c1e5",
                            "name": "Raisins",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "0d92d8f8-ae66-4e14-9466-eb7ac16bee46",
                    "dayId": "2025-12-18-HARD",
                    "targetDish": "Pipi (Clam) with Coconut Rice",
                    "description": "A savory dish featuring local clams or other small shellfish simmered in a rich coconut milk broth, often with ginger, garlic, and onion, served over or mixed directly with white rice.",
                    "cuisine": "Samoa",
                    "region": "Polynesia",
                    "originCity": "Apia, Samoa",
                    "category": "Main Dish",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇼🇸",
                    "countryCode": "WS",
                    "mainIngredients": [
                        "White rice",
                        "Fresh pipi (clams or local bivalves)",
                        "Coconut milk",
                        "Ginger",
                        "Garlic",
                        "Onion",
                        "Chili (optional)",
                        "Lime juice"
                    ],
                    "triviaClues": [
                        "'Pipi' is a general term for various bivalves or shellfish found in Polynesian waters.",
                        "This dish highlights the abundance of fresh seafood in the islands, paired with the ubiquitous coconut.",
                        "It's a comforting dish often prepared for family meals, showcasing local flavors."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-49abeffb-cdd0-4c18-a072-b93e54f32d5b",
                            "name": "Clam Chowder",
                            "isCorrect": false,
                            "reason": "An American soup, but cream- or broth-based without rice and different seasonings."
                        },
                        {
                            "id": "dish-1-dc0be18f-9ecc-4cca-ace3-133de96f70f7",
                            "name": "Mussel Curry",
                            "isCorrect": false,
                            "reason": "A Southeast Asian dish with shellfish in curry, but distinct spices and herbs."
                        },
                        {
                            "id": "dish-2-012cd246-53e9-4fc2-b872-50e37063e563",
                            "name": "Bouillabaisse",
                            "isCorrect": false,
                            "reason": "A French fish stew, typically with a variety of fish and shellfish, saffron, and fennel."
                        },
                        {
                            "id": "dish-3-6584dd05-5cc3-4bff-ab34-c19e592121f6",
                            "name": "Arroz con Mariscos",
                            "isCorrect": false,
                            "reason": "A Latin American rice and seafood dish, often tomato-based and different spices."
                        },
                        {
                            "id": "dish-4-429be371-2441-4b5b-a47c-a1b3cdbd5db3",
                            "name": "Pipi (Clam) with Coconut Rice",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-532b497c-8041-49e9-9d77-be2f6474d71d",
                            "name": "Seafood Paella",
                            "isCorrect": false,
                            "reason": "A Spanish rice dish with seafood, but uses saffron and a specific cooking method."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-f70b1acc-20ff-4720-97b5-43764b91e758",
                            "name": "Saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-a4d56a0c-10c2-468f-9b52-1c1c514220c9",
                            "name": "Fresh pipi (clams or local bivalves)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-46a448d8-a077-4287-a2c1-20bcd4a1200a",
                            "name": "Garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-7ababac9-57f2-41d2-92d3-3e0359ad6bcf",
                            "name": "Tomato paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-9019fd00-474c-4129-ad6f-f42a9e2b40c5",
                            "name": "Parsley",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-69ba36e3-06be-430e-a2b0-f571e38e828f",
                            "name": "White wine",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-5ab5159e-cda4-4cbd-a815-90dc32a4f6b6",
                            "name": "Bacon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-e8b327b7-058f-414e-9d58-6891904cbb4c",
                            "name": "Ginger",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-811bd67e-81b3-41a0-9282-43c8e55bfe87",
                            "name": "Fennel",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-fcfb7f68-bfc6-4d2d-bcd1-2d28bfe0fb44",
                            "name": "White rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-85904eb4-04a0-4dc5-95bd-20c3318893b6",
                            "name": "Turmeric",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-a6b829cc-0d95-4fbb-9325-6830653083c1",
                            "name": "Coconut milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-daa7cc25-45d0-4f65-adfa-80e53203283e",
                            "name": "Cream",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "6163f638-b286-4f9f-bd8f-15e6480ad2c1",
                    "dayId": "2025-12-18-HARD",
                    "targetDish": "Haupia Rice Pudding with Macadamia Nuts",
                    "description": "A creamy, tropical rice pudding infused with the distinctive flavor and texture of haupia (traditional Hawaiian coconut milk dessert), often topped with toasted macadamia nuts.",
                    "cuisine": "USA",
                    "region": "Polynesia",
                    "originCity": "Honolulu, Hawaii",
                    "category": "Dessert",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Glutinous rice",
                        "Coconut milk",
                        "Sugar",
                        "Cornstarch (for haupia)",
                        "Macadamia nuts",
                        "Vanilla extract"
                    ],
                    "triviaClues": [
                        "Haupia is a traditional Hawaiian dessert made from coconut milk, often served in squares.",
                        "Macadamia nuts are a popular agricultural product of Hawaii, adding a buttery crunch.",
                        "This dessert combines two comforting forms into a unique tropical treat, blending texture and flavor."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-4df78abd-5a93-484f-a37e-dcd49ae383f2",
                            "name": "Haupia Rice Pudding with Macadamia Nuts",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-93557e79-e249-4b44-b915-1c913447ef54",
                            "name": "Rice Kheer",
                            "isCorrect": false,
                            "reason": "An Indian rice pudding, but milk-based with different spices like cardamom."
                        },
                        {
                            "id": "dish-2-9b2b7b13-10d1-4606-9148-201070b05d81",
                            "name": "Coconut Panna Cotta",
                            "isCorrect": false,
                            "reason": "An Italian-inspired dessert, but a gelatin-set cream without rice."
                        },
                        {
                            "id": "dish-3-ee692129-0854-4c56-89bc-1b44610f0c26",
                            "name": "Coconut Cream Pie",
                            "isCorrect": false,
                            "reason": "An American dessert with a crust and creamy filling, but not a pudding."
                        },
                        {
                            "id": "dish-4-97eef441-fe80-455e-8a4c-e969a4a18950",
                            "name": "Flan",
                            "isCorrect": false,
                            "reason": "A Latin American egg custard dessert, typically caramel-topped, with no rice."
                        },
                        {
                            "id": "dish-5-9d9eba3a-2bab-4300-b839-e25286beb5b1",
                            "name": "Tapioca Pudding",
                            "isCorrect": false,
                            "reason": "A general dessert, but uses tapioca pearls instead of rice."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-c1de4b5a-6dae-47e5-803d-1f29945ccb4d",
                            "name": "Cornstarch (for haupia)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-4efe2dfa-85c8-434e-bcdc-e7b057013192",
                            "name": "Gelatin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-b5b665da-0ffa-4b34-8c2a-61e4b4ec4aea",
                            "name": "Fresh fruit (like mango)",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-4ef65f92-7ace-4ea1-97b2-08f241706368",
                            "name": "Flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-9132323e-bc45-4a23-b67c-153ea53353cf",
                            "name": "Glutinous rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-6687508f-2c62-4521-98cf-f4e44df49540",
                            "name": "Chocolate",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-72e9cda4-0db1-4f03-9488-7ec8541c39cd",
                            "name": "Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-90cbfe3d-476a-4fcf-929e-a717004863cf",
                            "name": "Caramel sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-9628b17f-5b78-41a1-845e-ab6d9e39bea7",
                            "name": "Macadamia nuts",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-6eb15943-5fa6-42b9-88a0-588031d6d674",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-e2e8dcc1-12e5-481b-951c-0215ba8ba8a7",
                            "name": "Coconut milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-504d5152-dd27-44a5-8861-105fa92b5135",
                            "name": "Cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-5da4a0a1-43bf-4d31-ac10-a5fe5c6cb00e",
                            "name": "Eggs",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                }
            ]
        }
    },
    "2025-12-19": {
        "date": "2025-12-19",
        "theme": "Breakfast Staple from Sub-Saharan Africa",
        "rounds": {
            "EASY": [
                {
                    "id": "42834c56-0791-479a-a11e-df42e195d28d",
                    "dayId": "2025-12-19-EASY",
                    "targetDish": "Mandazi",
                    "description": "A slightly sweet, fried dough pastry similar to a doughnut, often flavored with coconut milk and cardamom, popular in East African countries for breakfast or as a snack.",
                    "cuisine": "Kenya",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Mombasa",
                    "category": "Breakfast Pastry",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇰🇪",
                    "countryCode": "KE",
                    "mainIngredients": [
                        "Wheat flour",
                        "Sugar",
                        "Coconut milk",
                        "Cardamom",
                        "Yeast",
                        "Frying oil"
                    ],
                    "triviaClues": [
                        "This sweet treat is often enjoyed with chai tea for breakfast in its country of origin.",
                        "Its name is derived from the Swahili word for 'swollen' or 'inflated'.",
                        "Commonly found in coastal regions, its distinct flavor often comes from coconut milk and a popular spice."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-269e7d48-a78c-4a2a-8389-5bf582e67662",
                            "name": "Vitumbua",
                            "isCorrect": false,
                            "reason": "These are East African rice and coconut pancakes, distinct in texture and preparation (steamed or pan-fried, not deep-fried dough)."
                        },
                        {
                            "id": "dish-1-b85568c0-2c9e-4a04-a452-031a47b1b474",
                            "name": "Puff-puff",
                            "isCorrect": false,
                            "reason": "While similar fried dough, Puff-puff is typically less sweet and often made without coconut milk or cardamom, originating from West Africa."
                        },
                        {
                            "id": "dish-2-13cd5567-8ba8-4686-9217-b395ed15469e",
                            "name": "Mandazi",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-605e5292-6972-4769-be35-f11e936226b7",
                            "name": "Beignets",
                            "isCorrect": false,
                            "reason": "French-style fried dough, similar in concept but distinct in flavor profile and cultural origin."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-9605472b-6121-425c-89d6-d134e803c74d",
                            "name": "Coconut milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-bf8166bd-6c54-44c0-ad73-b8849d58b8a5",
                            "name": "Cassava flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-5c3b5187-9c90-43c5-8dd3-6ebb2f3554b3",
                            "name": "Semolina",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-c6428f80-fb8a-46f6-a8b0-af9cd55919a3",
                            "name": "Wheat flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-1ce05607-28ed-46c6-b69e-ded584f9619b",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-80b056b3-a2c4-4da1-a4e7-0fbf0dc11198",
                            "name": "Cardamom",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-b52836c1-03bd-43b5-841f-a41c088739a0",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-a9beec75-1992-49b4-a4bd-ceb0369021e7",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-6cf3c20a-fa9a-452e-aab4-a9465a4b414e",
                            "name": "Black-eyed peas",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "bcd0dc73-f196-4f37-af97-a88c2a94c2c7",
                    "dayId": "2025-12-19-EASY",
                    "targetDish": "Akara",
                    "description": "A savory, deep-fried fritter made from peeled black-eyed peas, onions, and chili peppers, a popular breakfast food across West Africa.",
                    "cuisine": "Nigeria",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Lagos",
                    "category": "Breakfast Fritter",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇳🇬",
                    "countryCode": "NG",
                    "mainIngredients": [
                        "Black-eyed peas",
                        "Onions",
                        "Habanero pepper",
                        "Salt",
                        "Vegetable oil"
                    ],
                    "triviaClues": [
                        "This dish is a staple street food, often sold by vendors for breakfast or a snack.",
                        "It's traditionally served with bread or a fermented cereal pudding called Ogi.",
                        "The primary ingredient is a type of legume that is peeled and blended before frying."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-a4a7ff44-0ff8-4b8c-907a-aa63bcf540ab",
                            "name": "Akara",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-90e990a1-5d67-4273-9234-ddd9165fd50d",
                            "name": "Kose",
                            "isCorrect": false,
                            "reason": "A very similar dish often referring to Akara in Ghana and other West African countries, but Akara is the more widely recognized name."
                        },
                        {
                            "id": "dish-2-9c21815d-a404-4228-bd27-997419350849",
                            "name": "Bofrot",
                            "isCorrect": false,
                            "reason": "A Ghanaian fried dough, similar to Mandazi or Puff-puff, but not made from black-eyed peas."
                        },
                        {
                            "id": "dish-3-3fd07fe7-872e-4db4-a9a5-b9611518bbc2",
                            "name": "Moi-moi",
                            "isCorrect": false,
                            "reason": "Also a black-eyed pea dish, but Moi-moi is steamed in leaves or ramekins, not fried, and has a pudding-like texture."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-a35a1e0f-eb40-4eff-a104-8df5c8bae94c",
                            "name": "Palm oil (though used for frying, not a core ingredient of the batter)",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-6a79c15c-7f10-4178-9279-d3173041bed5",
                            "name": "Habanero pepper",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-8c442930-6820-4cd5-a82d-1b85d3d3df68",
                            "name": "Vegetable oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-f3f29496-5e97-440c-9c68-ae5ee2fa90a5",
                            "name": "Wheat flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-bd7a7dc3-c5ed-4a8d-8820-0161a5b6fbfe",
                            "name": "Potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-e9194e79-214c-46d5-acde-ca878ce66350",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-b859d83c-b3db-4a6c-92df-024ecf619393",
                            "name": "Salt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-ee06c852-609d-4bdf-b7a8-f89285d93655",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-247342e2-f285-4d4e-b383-69c3bf748ada",
                            "name": "Black-eyed peas",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "13ddcafc-7be9-4682-ae94-264e950fe045",
                    "dayId": "2025-12-19-EASY",
                    "targetDish": "Chapati",
                    "description": "An unleavened flatbread, though originating from the Indian subcontinent, it has become a staple breakfast item across East Africa, often served with tea or stew.",
                    "cuisine": "Kenya",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Nairobi",
                    "category": "Breakfast Bread",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇰🇪",
                    "countryCode": "KE",
                    "mainIngredients": [
                        "Wheat flour",
                        "Water",
                        "Salt",
                        "Oil"
                    ],
                    "triviaClues": [
                        "Often cooked on a flat griddle, this bread is a versatile accompaniment to many meals, especially breakfast.",
                        "Despite its foreign origins, it's considered a local staple in many East African homes.",
                        "Its simple ingredients allow for a soft, pliable texture, perfect for scooping up sauces or stews."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-60e18f32-b8c9-449f-9441-42dff33028e3",
                            "name": "Mandazi",
                            "isCorrect": false,
                            "reason": "A fried sweet dough, not a flatbread."
                        },
                        {
                            "id": "dish-1-c5f214d9-e80c-413d-8d54-7f5b63fcf3a0",
                            "name": "Injera",
                            "isCorrect": false,
                            "reason": "A fermented, spongy sourdough flatbread from Ethiopia/Eritrea, distinct from the unleavened East African version."
                        },
                        {
                            "id": "dish-2-1d199496-c20b-4e99-b97a-a67c1cd67a9b",
                            "name": "Chapati",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-3260709f-01d6-4e10-8e9a-ec6791f5b96b",
                            "name": "Roti",
                            "isCorrect": false,
                            "reason": "While similar in concept as an unleavened bread, 'Roti' typically refers to Caribbean or South Asian versions, which can differ in preparation or ingredients."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-c20c2f5c-3160-4259-a337-40671ed7224a",
                            "name": "Oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-b117b10f-16b1-417b-80fa-8ce213c59ad8",
                            "name": "Black-eyed peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-3283d161-ce6e-4668-8042-a877d990c7ea",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-771f8132-44df-47bc-8f4f-224c219e8e9c",
                            "name": "Cornmeal",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-26212c04-c1fa-426b-be09-46900aa67727",
                            "name": "Wheat flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-8962406f-8939-4d0a-8180-1da0bbf03682",
                            "name": "Salt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-48cc23da-0a1a-413c-9578-9c62ed2c3cd1",
                            "name": "Teff flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-1e91ec6b-9986-45a3-a8bf-d8770689608c",
                            "name": "Water",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "4748a0bf-9425-4eaa-9c17-902b81032699",
                    "dayId": "2025-12-19-EASY",
                    "targetDish": "Ogi / Akamu",
                    "description": "A traditional Nigerian fermented cereal pudding made from maize, sorghum, or millet, commonly eaten for breakfast, often served with milk and sugar.",
                    "cuisine": "Nigeria",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Ibadan",
                    "category": "Breakfast Porridge",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇳🇬",
                    "countryCode": "NG",
                    "mainIngredients": [
                        "Maize (corn)",
                        "Water",
                        "Sorghum (optional)",
                        "Millet (optional)"
                    ],
                    "triviaClues": [
                        "This breakfast dish is typically fermented for several days, giving it a distinctive sour taste.",
                        "It's a popular first food for babies and is often paired with Akara or Moi-moi.",
                        "Its preparation involves soaking, grinding, sieving, and fermenting grains like maize or sorghum."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-b05ed2ae-31c1-4e93-b814-885fdf7f7880",
                            "name": "Hausa Koko",
                            "isCorrect": false,
                            "reason": "A spicy millet porridge from Ghana, distinct in its spicing and typical consistency."
                        },
                        {
                            "id": "dish-1-7a46231f-a521-47f7-ba9f-3b1fc28fa1d9",
                            "name": "Fura de Nono",
                            "isCorrect": false,
                            "reason": "A traditional West African drink/gruel made from millet and fermented cow's milk, distinct from this fermented grain pudding."
                        },
                        {
                            "id": "dish-2-5bc82463-debd-442b-8899-ee53ab21e39e",
                            "name": "Ogi / Akamu",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-ebb4472b-6388-47d3-9d89-11ca123e5173",
                            "name": "Kunu Zaki",
                            "isCorrect": false,
                            "reason": "Also a millet/sorghum based drink, but Kunu Zaki is a spiced, non-fermented beverage, not a thick pudding."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-394ccc23-08fe-4d2b-8e9e-a4b2f6da0b01",
                            "name": "Millet (optional)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-a9251ee4-6f9b-4c55-a002-d7730ee05cf6",
                            "name": "Wheat flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-69529902-d7ef-4bc3-9e06-e7903b3b7c91",
                            "name": "Cassava",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-43043d69-c364-4284-8791-4e073b7c0ab6",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-45407ae1-15db-49a5-a927-959f213d0676",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-56f75577-b944-42d3-8b6c-fb171b8b88e5",
                            "name": "Coconut",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-eda7666b-f4c4-4c17-80d9-df859ccbbfe3",
                            "name": "Maize (corn)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-1a20119e-9fd0-457d-9096-881fc7c2f308",
                            "name": "Sorghum (optional)",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "16b89626-81cc-4461-9165-b794c706fe25",
                    "dayId": "2025-12-19-EASY",
                    "targetDish": "Bo-Kaap Koesisters",
                    "description": "A traditional Cape Malay doughnut, lightly spiced with cinnamon, cardamom, and aniseed, then deep-fried and soaked in a sweet, sticky syrup, often served on Sundays for breakfast.",
                    "cuisine": "South Africa",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Cape Town",
                    "category": "Breakfast Pastry",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇿🇦",
                    "countryCode": "ZA",
                    "mainIngredients": [
                        "Wheat flour",
                        "Yeast",
                        "Cinnamon",
                        "Cardamom",
                        "Ginger",
                        "Aniseed",
                        "Sugar syrup",
                        "Desiccated coconut"
                    ],
                    "triviaClues": [
                        "This breakfast treat is a Sunday morning ritual in a vibrant historical neighborhood of its origin city.",
                        "Its distinct flavor profile comes from a blend of warm spices and a sweet, syrupy glaze.",
                        "The dough is traditionally kneaded and then fried until golden, before being bathed in a sweet liquid and often sprinkled with coconut."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-4cae7a31-e377-4f24-9423-9c0421370ee2",
                            "name": "Vetkoek",
                            "isCorrect": false,
                            "reason": "A plain fried dough bread from South Africa, not typically spiced or soaked in syrup like this dish."
                        },
                        {
                            "id": "dish-1-b693b2f0-53d0-48f8-b025-e40c8847cee4",
                            "name": "Mandazi",
                            "isCorrect": false,
                            "reason": "East African fried dough, which is generally less spiced and not typically syrup-soaked."
                        },
                        {
                            "id": "dish-2-eaaf3784-850f-4b6e-8a4e-27dfa7dd1f2a",
                            "name": "Koeksisters",
                            "isCorrect": false,
                            "reason": "An Afrikaans pastry, braided and very sweet, but typically crispier and without the distinctive spices and texture of the Cape Malay version."
                        },
                        {
                            "id": "dish-3-5bbe04e8-8f58-4200-bec2-e5b2b4eddcb2",
                            "name": "Bo-Kaap Koesisters",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-7102415e-7592-4bb8-ad0c-c9cc4e2f2689",
                            "name": "Ginger",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-245affad-4a10-4a2e-be0a-9fb4f7a1c7fe",
                            "name": "Cardamom",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-93462f58-24e5-4dbf-9ec7-b9ae16a02d2f",
                            "name": "Millet flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-2a4d9bba-9430-4491-b7de-e81debb0f3dd",
                            "name": "Wheat flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-f2cccea5-247b-45eb-8b83-445ebb9cea73",
                            "name": "Cinnamon",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-13a159dd-2aa3-4b77-b394-e8de4d5df4af",
                            "name": "Black-eyed peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-fb0d09bb-28e0-4719-adf3-30325888bf37",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-5150416a-7061-409c-98df-90128925d3eb",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-0e901f1a-1760-4829-865c-f0e3e42b91cf",
                            "name": "Sorghum",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                }
            ],
            "MEDIUM": [
                {
                    "id": "b87ff499-a62a-4c18-bc47-971f8ac4f153",
                    "dayId": "2025-12-19-MEDIUM",
                    "targetDish": "Mofo Gasy",
                    "description": "A popular Malagasy breakfast food, these are small, round, slightly sweet rice flour fritters, often sold by street vendors and enjoyed with coffee.",
                    "cuisine": "Madagascar",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Antananarivo",
                    "category": "Breakfast Fritter",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇲🇬",
                    "countryCode": "MG",
                    "mainIngredients": [
                        "Rice flour",
                        "Sugar",
                        "Yeast",
                        "Water",
                        "Frying oil"
                    ],
                    "triviaClues": [
                        "The name literally translates to 'Malagasy bread' or 'Malagasy cake'.",
                        "These small, puffy snacks are a common sight at morning markets and roadside stalls.",
                        "Their unique texture and flavor come from being made primarily with a specific type of gluten-free flour."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-a7532ed2-c87e-4f88-89fa-05530ca2bcbb",
                            "name": "Mofo Gasy",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-f43958b6-359a-4f70-8e78-d702fb154e47",
                            "name": "Mofo Akondro",
                            "isCorrect": false,
                            "reason": "Another Malagasy fritter, but specifically made with bananas, not just rice flour."
                        },
                        {
                            "id": "dish-2-efd1900f-2eda-467b-806a-88ccbbcc85cf",
                            "name": "Pancakes",
                            "isCorrect": false,
                            "reason": "While similar in concept, these are specifically rice flour based and typically spherical, not flat."
                        },
                        {
                            "id": "dish-3-8c05a363-afc0-4d13-b502-e95998964865",
                            "name": "Nem",
                            "isCorrect": false,
                            "reason": "Vietnamese-style spring rolls that are also popular in Madagascar, but not a breakfast fritter."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-97e43a61-7257-4cf0-a245-ad4f658bb223",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-d335cfe7-6362-4f71-9be3-9ab65ea21991",
                            "name": "Frying oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-25326af5-a95b-412f-bffd-e4a526bd2645",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-736b05ed-b038-49d8-9356-21bf84215c81",
                            "name": "Potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-95bc4892-9f6c-4332-b8d3-2844443f0888",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-2f38ec0c-b0f6-49d8-863e-221bccde7a61",
                            "name": "Rice flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-0f56dea1-077e-4aa8-bdb0-874a3ccb8236",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-7c744767-0b69-4066-a713-041ac7ad6f47",
                            "name": "Black-eyed peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-c6fc78ce-496f-4acd-b49d-8b4c64850f60",
                            "name": "Cornmeal",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-ff152954-7af0-4a20-8593-ce241ea442e6",
                            "name": "Wheat flour (can be added, but primarily rice flour)",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-c346b9a8-af72-487c-b7eb-231401a170fb",
                            "name": "Teff flour",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "d07da320-88c5-4066-a316-88ac9ab27aae",
                    "dayId": "2025-12-19-MEDIUM",
                    "targetDish": "Hausa Koko",
                    "description": "A spicy, warming millet porridge popular in Ghana and other West African countries, often enjoyed for breakfast with Akara, Koose, or bread.",
                    "cuisine": "Ghana",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Accra",
                    "category": "Breakfast Porridge",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇬🇭",
                    "countryCode": "GH",
                    "mainIngredients": [
                        "Millet",
                        "Ginger",
                        "Black pepper",
                        "Cloves",
                        "Chili pepper",
                        "Sugar",
                        "Water"
                    ],
                    "triviaClues": [
                        "This breakfast staple is renowned for its distinctive spicy kick, derived from a blend of specific aromatics.",
                        "Often served hot, it provides a comforting start to the day, especially in cooler weather.",
                        "Its name hints at a particular ethnic group in West Africa, known for their culinary traditions."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-8cf5e387-a587-4b15-b7ca-79454e3edfe4",
                            "name": "Hausa Koko",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-9985a6e4-2a65-436f-b4cb-ca2843a16628",
                            "name": "Kunu Zaki",
                            "isCorrect": false,
                            "reason": "A spiced millet drink, but thinner and typically served cold as a beverage, not a thick porridge."
                        },
                        {
                            "id": "dish-2-ff5277b9-b5a3-41f5-82a7-9b4cd90a6a02",
                            "name": "Tom Brown",
                            "isCorrect": false,
                            "reason": "A multi-grain porridge mix, usually for babies or health reasons, not typically spiced in the same way."
                        },
                        {
                            "id": "dish-3-f2771247-e929-423d-8e8e-643a1476a349",
                            "name": "Ogi / Akamu",
                            "isCorrect": false,
                            "reason": "A Nigerian fermented corn/millet porridge, but typically lacks the distinct ginger and chili spicing of Hausa Koko."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-a96ec306-6443-44e7-8bba-951895a17cfb",
                            "name": "Cornmeal (though millet is primary)",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-5510942e-cb2d-4b82-8bed-0319b6112ecf",
                            "name": "Teff flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-43f2fa57-5bc9-42a9-bb58-3769cbb0b142",
                            "name": "Millet",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-9dd1fad3-358b-4b93-9a55-c092f8e3d81c",
                            "name": "Black pepper",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-a4283998-7e76-4835-b771-f030667d9cff",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-6957f983-7383-4cb7-b61e-986f79f21e54",
                            "name": "Chili pepper",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-2a0ba229-8688-4146-8ad6-6dc52d218fcc",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-a03d1249-7f81-449d-8a26-f6181038621a",
                            "name": "Ginger",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-72ca4d87-2812-4906-aacc-d3132478c3f6",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-d9acb685-056d-44f2-bb80-cb19abbe1111",
                            "name": "Sweet potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-8e79c782-a7f8-4137-89cd-48a827cbc2ab",
                            "name": "Cloves",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "3723ba16-6fcb-4df9-9041-f0e2e3a682cc",
                    "dayId": "2025-12-19-MEDIUM",
                    "targetDish": "Mageu / Amarhewu",
                    "description": "A traditional Southern African non-alcoholic beverage or thin porridge made from fermented maize meal, often consumed for breakfast or as an energy drink.",
                    "cuisine": "South Africa",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Johannesburg",
                    "category": "Breakfast Beverage / Porridge",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇿🇦",
                    "countryCode": "ZA",
                    "mainIngredients": [
                        "Maize meal",
                        "Water",
                        "Wheat flour (for fermentation starter)",
                        "Sugar (optional)"
                    ],
                    "triviaClues": [
                        "This fermented drink is a common source of energy and nourishment across various Southern African cultures.",
                        "Its slightly sour taste is a result of the fermentation process, which also gives it probiotic benefits.",
                        "Often prepared at home, it can vary in consistency from a thin beverage to a slightly thicker gruel."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-5ba79a4c-a82c-4ae2-b4c4-212c10508780",
                            "name": "Ting",
                            "isCorrect": false,
                            "reason": "Also a fermented porridge, but typically made from sorghum, giving it a distinct flavor and texture."
                        },
                        {
                            "id": "dish-1-26961370-e111-4480-a204-6196dfca2362",
                            "name": "Ogi / Akamu",
                            "isCorrect": false,
                            "reason": "A West African fermented corn porridge, but generally thicker and less typically served as a beverage."
                        },
                        {
                            "id": "dish-2-37b53632-aa9c-4f9e-a46f-51f34c3fcd36",
                            "name": "Mageu / Amarhewu",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-8d4d593b-51b5-4ff2-88ab-1e39642f8496",
                            "name": "Umqombothi",
                            "isCorrect": false,
                            "reason": "A traditional African beer made from maize, sorghum, yeast, and water, which is alcoholic, unlike Mageu."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-8bf341c8-19cb-4053-b9ff-e7e0f47e6927",
                            "name": "Black-eyed peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-8ec52f55-6d1d-4bbd-ac8d-2883aae4c22e",
                            "name": "Millet",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-722967e1-ca06-4255-8b44-2a1b7fbbe531",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-0c245a56-ca7f-4141-a418-46547d3b9fd2",
                            "name": "Wheat flour (for fermentation starter)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-332eb544-c0fa-4d16-818d-58050a91c20b",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-40ffd376-5733-4e0a-bde5-5d2473e19064",
                            "name": "Sugar (optional)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-1b5c7a94-41d8-4a8a-be84-7ac44019441f",
                            "name": "Honey",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-25803897-6cc6-46a3-bd8a-85a462c430fe",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-436a3b21-2eca-4845-b274-4a10f111a5a9",
                            "name": "Cassava",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-1093d0ac-87c8-4212-8054-88c90c21c2d0",
                            "name": "Maize meal",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "5708122e-5f8a-4e22-ac43-70810c0c8556",
                    "dayId": "2025-12-19-MEDIUM",
                    "targetDish": "Vetkoek",
                    "description": "A traditional South African fried dough bread, literally meaning 'fat cake', often eaten plain, with syrup, or filled with savory mince for breakfast or lunch.",
                    "cuisine": "South Africa",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Pretoria",
                    "category": "Breakfast Bread",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇿🇦",
                    "countryCode": "ZA",
                    "mainIngredients": [
                        "Wheat flour",
                        "Yeast",
                        "Sugar",
                        "Salt",
                        "Water",
                        "Frying oil"
                    ],
                    "triviaClues": [
                        "Its name in Afrikaans literally translates to 'fat cake,' referring to its preparation method.",
                        "This versatile fried bread can be enjoyed simply with jam and cheese, or as a hearty meal with a savory filling.",
                        "It's a popular item found at markets, festivals, and family gatherings throughout its country of origin."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-9584461f-d52d-48d0-9dd9-c69d41cdac95",
                            "name": "Puff-puff",
                            "isCorrect": false,
                            "reason": "A West African fried dough, often smaller and rounder, and not typically split and filled."
                        },
                        {
                            "id": "dish-1-0394b38e-0e72-4001-a0a8-c6ab1e7369ff",
                            "name": "Vetkoek",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-b3871338-b12a-4c22-a4e1-6f46103596d0",
                            "name": "Mandazi",
                            "isCorrect": false,
                            "reason": "An East African fried dough, which is sweeter and often flavored with coconut and cardamom."
                        },
                        {
                            "id": "dish-3-ec757528-1d86-45c8-9f8a-c11b9b64d825",
                            "name": "Bo-Kaap Koesisters",
                            "isCorrect": false,
                            "reason": "A Cape Malay spiced doughnut soaked in syrup, distinctly different from plain fried dough."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-1ac7f643-88c4-4250-b60d-a541351b8243",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-54820b8a-e881-4830-a47e-fe8506cfc1de",
                            "name": "Rice flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-85c53faa-9b7a-4b15-bba8-6a0c2879fec8",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-b9b0588f-0408-4b36-89d6-2f45da32af67",
                            "name": "Salt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-37d1f976-3666-4770-8d30-710eb37d03e0",
                            "name": "Millet",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-d7b9100b-43e9-4a5b-a49c-caded1d6dd78",
                            "name": "Wheat flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-d040a70f-c5b0-4a59-9c56-4d3249bf3e8f",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-7217e2ff-8372-4205-80b7-ea71252ad980",
                            "name": "Black-eyed peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-dbbac1e7-4a63-4ef3-bd09-3000efe091bd",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-caeb144a-3071-4ef6-8803-c0f9823a47bd",
                            "name": "Sorghum",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-05e3c4e5-2d8f-4bce-838a-9e53339c0150",
                            "name": "Sweet potato",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "414b77eb-fc13-48aa-beb8-204fab342892",
                    "dayId": "2025-12-19-MEDIUM",
                    "targetDish": "Fura de Nono",
                    "description": "A traditional West African, particularly Fulani, beverage or thick gruel made from cooked millet or sorghum dough (fura) mixed with fresh, fermented cow's milk or yogurt (nono).",
                    "cuisine": "Nigeria",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Kano",
                    "category": "Breakfast Beverage / Gruel",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇳🇬",
                    "countryCode": "NG",
                    "mainIngredients": [
                        "Millet (or Sorghum)",
                        "Cow's milk (fresh/fermented)",
                        "Sugar (optional)",
                        "Water"
                    ],
                    "triviaClues": [
                        "This cooling and nutritious drink is a specialty of nomadic pastoralists in the Sahel region.",
                        "The preparation involves pounding a grain into a dough ball, which is then blended with a dairy product.",
                        "It's often sold by women carrying gourds on their heads, offering a refreshing and filling start to the day."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-2b04b77a-db8b-4386-999c-b2f59c725e50",
                            "name": "Chakalaka",
                            "isCorrect": false,
                            "reason": "A South African spicy vegetable relish, completely unrelated to a breakfast drink."
                        },
                        {
                            "id": "dish-1-983d82ab-f39e-48d5-bd2b-be61d3702c0e",
                            "name": "Fura de Nono",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-c5930aab-5833-4046-b7a9-5a10d8b28f32",
                            "name": "Kunu Zaki",
                            "isCorrect": false,
                            "reason": "A spiced millet/sorghum drink, but Kunu Zaki uses a different processing of the grain and does not typically include fresh milk/yogurt."
                        },
                        {
                            "id": "dish-3-d18ac380-ee29-4ba1-93c8-80767db51c1d",
                            "name": "Ogi / Akamu",
                            "isCorrect": false,
                            "reason": "A fermented corn/millet porridge, but typically served hot and often without the fresh milk component integral to Fura de Nono."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-ebc2dc00-f7d8-4e6b-9c36-cafe316b69c4",
                            "name": "Cassava",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-47454b93-16ea-436c-b2e8-5fc4eda3033f",
                            "name": "Groundnuts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-86b80022-bbbf-4463-8ac8-46408518de47",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-556fa354-232a-45c0-9eb1-eed739d836e1",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-e9efd2dd-324b-44c8-902f-95b2055a794d",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-916065f5-5393-4e73-ac76-6a18815def4b",
                            "name": "Cow's milk (fresh/fermented)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-8f92b7e7-7768-4ce6-a72a-0ee3a52c5b66",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-ba5dbb0e-6608-47b7-b0f6-4d540d6ba3ee",
                            "name": "Millet (or Sorghum)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-87e0d2bd-c849-4802-86f5-60d8e398b6a9",
                            "name": "Sugar (optional)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-6d061a24-9599-4dd7-abc3-9c6481ac4902",
                            "name": "Wheat flour",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                }
            ],
            "HARD": [
                {
                    "id": "b8ccce11-294c-4f5a-941d-40c4afbcc5d1",
                    "dayId": "2025-12-19-HARD",
                    "targetDish": "Fatir",
                    "description": "A flaky, layered flatbread common in Ethiopia and Eritrea, often served for breakfast with scrambled eggs, honey, or niter kibbeh (spiced clarified butter).",
                    "cuisine": "Ethiopia",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Addis Ababa",
                    "category": "Breakfast Bread",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇪🇹",
                    "countryCode": "ET",
                    "mainIngredients": [
                        "Wheat flour",
                        "Water",
                        "Salt",
                        "Oil (or Niter Kibbeh)",
                        "Eggs (for serving)"
                    ],
                    "triviaClues": [
                        "This breakfast bread shares its culinary roots with a Horn of Africa nation, often found on breakfast tables in its capital city.",
                        "Unlike its more famous fermented counterpart, this bread is known for its flaky, layered texture, achieved through generous use of fat.",
                        "It's typically served with savory accompaniments like scrambled eggs or a spicy clarified butter, but can also be enjoyed with honey.",
                        "While simple in ingredients, the technique of stretching and folding the dough is key to its distinctive character.",
                        "The preparation involves a lot of stretching and folding, akin to making puff pastry or croissants."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-074e3ee9-1217-4d90-9deb-ae199683ecea",
                            "name": "Genfo",
                            "isCorrect": false,
                            "reason": "A traditional Ethiopian barley porridge, not a bread."
                        },
                        {
                            "id": "dish-1-3e3e75a0-98f0-4889-8580-fc5ebfdcb20f",
                            "name": "Fatir",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-fe69e551-07df-4933-ade6-7ae494a76c7b",
                            "name": "Kitcha",
                            "isCorrect": false,
                            "reason": "Another Ethiopian flatbread, often torn and mixed with niter kibbeh (fitfit), but it's typically thinner and not layered."
                        },
                        {
                            "id": "dish-3-d9c14bdb-1e1f-4efe-95d7-92f841d83962",
                            "name": "Ful Medames",
                            "isCorrect": false,
                            "reason": "A fava bean stew popular in North Africa and the Horn of Africa, often eaten with bread, but not a bread itself."
                        },
                        {
                            "id": "dish-4-74806c1a-9f75-439e-ac75-a40ddafec37d",
                            "name": "Injera",
                            "isCorrect": false,
                            "reason": "The staple Ethiopian/Eritrean flatbread, but it's fermented, spongy, and made from teff, not flaky wheat dough."
                        },
                        {
                            "id": "dish-5-8c7481f2-4e5d-4383-a569-f519ec3611f2",
                            "name": "Lahoh",
                            "isCorrect": false,
                            "reason": "A Yemeni/Somali pancake-like bread, similar region but distinct in texture and preparation."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-1dfafe06-2850-41da-8dfe-b5f6de830b43",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-4354443f-da68-4e12-9e0e-0cfb1e4e705a",
                            "name": "Eggs (for serving)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-35b28daf-2fc0-41be-b616-30f0c6623852",
                            "name": "Wheat flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-81e5fb16-9de1-476d-a75d-25ee43556d5f",
                            "name": "Lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-00f885f4-6949-4c74-a869-37757475a83b",
                            "name": "Sweet potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-83102d10-10c0-461d-96f2-20e33ff9e110",
                            "name": "Peanut butter",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-511ad2f0-d35d-46ca-99b2-8b165d57bb5a",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-7f3669ea-5f6a-4e74-b6f6-4db2c517176d",
                            "name": "Semolina",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-875fdc2e-bfdb-4cc5-a8ee-53869026de8c",
                            "name": "Turmeric",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-0560a78b-7569-4bdb-ac0f-847d6eea4748",
                            "name": "Oil (or Niter Kibbeh)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-2c4cfab6-b5fc-406f-9d6f-4b57f2468c56",
                            "name": "Teff flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-21cdd1ca-281c-4644-8d77-cd6dd0abda08",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-3869f261-e0a5-4a9a-bed4-10827cbfcaff",
                            "name": "Salt",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "45ff9797-6057-49f1-a73b-3872922e09c7",
                    "dayId": "2025-12-19-HARD",
                    "targetDish": "Kanyah",
                    "description": "A traditional Ghanaian breakfast or snack made from roasted groundnuts and millet flour, sweetened and sometimes spiced, forming a dense, crumbly confection.",
                    "cuisine": "Ghana",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Tamale",
                    "category": "Breakfast Confection / Snack",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇬🇭",
                    "countryCode": "GH",
                    "mainIngredients": [
                        "Roasted groundnuts",
                        "Millet flour",
                        "Sugar",
                        "Water"
                    ],
                    "triviaClues": [
                        "This unique breakfast item is highly nutritious, combining a popular legume with a staple grain.",
                        "Its texture is dense and crumbly, often enjoyed as a quick energy boost.",
                        "The preparation involves grinding and mixing roasted ingredients, then forming them into a block or balls.",
                        "It's particularly common in the northern regions of its country of origin.",
                        "Though sweet, it can also have a slightly earthy and nutty flavor profile."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-053a50e4-ec3b-4ed9-84cc-0a98d933cf99",
                            "name": "Groundnut Soup",
                            "isCorrect": false,
                            "reason": "A savory soup made with groundnut paste, not a sweet breakfast item."
                        },
                        {
                            "id": "dish-1-61ba41c4-a9f1-40c5-85a9-c68149086488",
                            "name": "Fante Kenkey",
                            "isCorrect": false,
                            "reason": "A fermented corn dough dumpling, savory and steamed, not a sweet groundnut and millet dish."
                        },
                        {
                            "id": "dish-2-e8b4e4fb-0330-42dd-96b6-607ef96ad529",
                            "name": "Waakye",
                            "isCorrect": false,
                            "reason": "A Ghanaian rice and beans dish, typically a main meal, not a sweet breakfast confection."
                        },
                        {
                            "id": "dish-3-cde9d177-7334-497e-aeca-1135235442eb",
                            "name": "Hausa Koko",
                            "isCorrect": false,
                            "reason": "A millet-based porridge, but it's a liquid, spiced gruel, not a dense, crumbly groundnut confection."
                        },
                        {
                            "id": "dish-4-358c985a-f209-4217-8d5c-c0f8e256d217",
                            "name": "Kanyah",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-61a43224-4161-43bc-a5b9-fa025bcac4f1",
                            "name": "Gari Foto",
                            "isCorrect": false,
                            "reason": "A savory dish made with gari (cassava grits), not a sweet groundnut and millet confection."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-fac3c391-ea42-4c4a-b0f6-431362eca63e",
                            "name": "Wheat flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-cd13f77c-4399-48e5-9949-31b9bf48db0a",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-896b77c6-8bce-445b-a4f6-4257a276effd",
                            "name": "Palm oil",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-1be5990b-a4fa-412a-8924-fe526cb90be0",
                            "name": "Millet flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-0cc72702-0c8b-41b2-84f6-fe2656ac756c",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-3d891394-3f4f-411b-b7f1-020554775e76",
                            "name": "Ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-6b836d86-7736-49b1-ae6c-ac931e620f6b",
                            "name": "Beans",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-5d119394-aab7-4f80-8df1-25d04e7307b8",
                            "name": "Roasted groundnuts",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-6ace4c7e-7401-4a7d-9e79-465f0c1707bb",
                            "name": "Sweet potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-75a29abc-b194-42a0-bfd6-a8c711281610",
                            "name": "Cocoa powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-e1556ae0-bc92-43cf-beec-7f3473779af9",
                            "name": "Shea butter",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-09f9d80b-1dfa-4725-ac02-5f1a9a3a3ef4",
                            "name": "Sugar",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "341f7323-2680-48ad-8568-cfde14c253a0",
                    "dayId": "2025-12-19-HARD",
                    "targetDish": "Ting",
                    "description": "A fermented sorghum porridge, particularly popular in Botswana and parts of South Africa, known for its tangy flavor and smooth texture, often served for breakfast.",
                    "cuisine": "Botswana",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Gaborone",
                    "category": "Breakfast Porridge",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇧🇼",
                    "countryCode": "BW",
                    "mainIngredients": [
                        "Sorghum meal",
                        "Water",
                        "Starter (e.g., fermented porridge from previous batch)"
                    ],
                    "triviaClues": [
                        "This traditional breakfast is characterized by its distinct sour taste, a result of its prolonged preparation process.",
                        "It's considered a highly nutritious and easily digestible food, often recommended for children and the elderly.",
                        "The key ingredient is a drought-resistant grain, widely cultivated in arid regions.",
                        "Its preparation involves fermenting the grain overnight before cooking into a smooth porridge.",
                        "A true staple in its country of origin, it reflects a deep cultural connection to traditional farming practices."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-a90363d3-f720-40fe-89b5-f8417e7dda43",
                            "name": "Bogobe",
                            "isCorrect": false,
                            "reason": "A general term for porridge in Botswana, often refers to various types, but Ting is a specific fermented variant."
                        },
                        {
                            "id": "dish-1-fedaec9c-3205-4cd2-82c3-2a5664213a94",
                            "name": "Mageu / Amarhewu",
                            "isCorrect": false,
                            "reason": "Another Southern African fermented porridge/drink, but typically made from maize meal, not sorghum."
                        },
                        {
                            "id": "dish-2-e891ab1c-a4dd-4e24-ba83-e7117054f76f",
                            "name": "Sadza",
                            "isCorrect": false,
                            "reason": "A thick maize porridge from Zimbabwe, typically stiff and unfermented."
                        },
                        {
                            "id": "dish-3-c7045f76-a67b-4342-84bf-a3a0640134f1",
                            "name": "Ogi / Akamu",
                            "isCorrect": false,
                            "reason": "A West African fermented porridge, typically maize-based and with different fermentation characteristics."
                        },
                        {
                            "id": "dish-4-53776e2e-a875-41ea-8c9e-06f9d08f613c",
                            "name": "Ting",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-c00961a9-d0f5-47e0-bb3c-e0e9e612dfac",
                            "name": "Pap",
                            "isCorrect": false,
                            "reason": "A generic term for stiff maize porridge in South Africa, but Ting specifically refers to the fermented sorghum version."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-5032eb47-fab0-40c4-a435-bc1e56cdfb26",
                            "name": "Cassava flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-4eac8957-2d85-4a3b-bd62-15dd240f31ac",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-54b9f170-5f0a-4c3b-951b-b13987fcb95b",
                            "name": "Rice flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-01892bb4-2096-425b-a029-15bb2e5a05c1",
                            "name": "Starter (e.g., fermented porridge from previous batch)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-018e5c3a-b0c2-4071-9f94-b3d895e9f0e8",
                            "name": "Peanut butter",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-e7121c82-232c-4892-90d7-01960170c0c6",
                            "name": "Sweet potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-04dd055a-926a-4e29-a1f6-b5eb5ca20977",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-9013dc1c-daf1-459c-8e90-790be9efecc2",
                            "name": "Wheat flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-7fe886c2-f17c-43b7-ac0b-942a88172a6c",
                            "name": "Lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-114b7b82-09f2-443e-b7d8-cadf039382c6",
                            "name": "Sorghum meal",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-ea79d337-8101-4a4a-a9b2-0e50c39b4e62",
                            "name": "Maize meal (main ingredient of Mageu, not Ting)",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "7d3b2192-1e23-4e0c-9b0e-bbeb488c090f",
                    "dayId": "2025-12-19-HARD",
                    "targetDish": "Vitumbua",
                    "description": "Sweet, fluffy Tanzanian rice and coconut fritters or pancakes, traditionally cooked in a special pan with hemispherical molds, offering a crispy exterior and soft interior.",
                    "cuisine": "Tanzania",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Zanzibar City",
                    "category": "Breakfast Fritter",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇹🇿",
                    "countryCode": "TZ",
                    "mainIngredients": [
                        "Rice flour",
                        "Coconut milk",
                        "Sugar",
                        "Yeast",
                        "Cardamom",
                        "Frying oil"
                    ],
                    "triviaClues": [
                        "These delightful sweet treats are often found in coastal regions of East Africa, where coconut is abundant.",
                        "Their unique shape is achieved by cooking them in a specialized pan with indentations, similar to a Dutch Poffertjes pan.",
                        "The primary ingredients give them a distinct tropical flavor and a wonderfully soft texture.",
                        "Traditionally served warm with a cup of tea or coffee, they are a beloved breakfast or snack.",
                        "Despite containing yeast, the fermentation is often very subtle, primarily for leavening."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-aa080903-5b72-4cae-8ca9-8c21523f15c8",
                            "name": "Appam",
                            "isCorrect": false,
                            "reason": "South Indian fermented rice pancakes, similar in some aspects but distinct in origin and traditional preparation."
                        },
                        {
                            "id": "dish-1-d19378df-1f89-40d5-a941-9b57a9987b98",
                            "name": "Mofo Gasy",
                            "isCorrect": false,
                            "reason": "Malagasy rice flour fritters, but often less focused on coconut and typically spherical, not hemispherical cups."
                        },
                        {
                            "id": "dish-2-0f45511f-f9cc-4606-944d-27985023e170",
                            "name": "Pancakes (Western style)",
                            "isCorrect": false,
                            "reason": "While a type of pancake, the specific ingredients (rice, coconut) and cooking method set it apart."
                        },
                        {
                            "id": "dish-3-be724de9-8a05-4489-857b-b6d2eb357562",
                            "name": "Akara",
                            "isCorrect": false,
                            "reason": "West African black-eyed pea fritters, completely different ingredients and flavor profile."
                        },
                        {
                            "id": "dish-4-8315db0e-d4b7-4500-a376-893769326b6c",
                            "name": "Vitumbua",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-341d8f13-7895-49ac-bf02-a6be2aaf58ac",
                            "name": "Mandazi",
                            "isCorrect": false,
                            "reason": "East African fried dough, but made primarily from wheat flour and lacking the distinct rice-coconut base and hemispherical shape."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-50261c13-3ffd-4ab7-809e-ea3a239eb17d",
                            "name": "Plantain",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-519eae50-a73c-4b90-bc71-c2c1770ed154",
                            "name": "Sorghum",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-69f4fcc1-e29d-4697-be56-680ce945909d",
                            "name": "Black-eyed peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-8f59d7d2-5d3c-4579-90ee-f80d9e1a5d57",
                            "name": "Garlic",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-a86c854d-5ac5-4994-807b-c628d19167b6",
                            "name": "Coconut milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-d3365fd6-dc2b-46e4-9b7f-3560282a650a",
                            "name": "Rice flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-47c65a89-7afe-462d-93fe-0b6e73f26123",
                            "name": "Sweet potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-e583491b-8438-4639-a8d3-d002aa115ded",
                            "name": "Maize meal",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-2302f498-6fb2-4fa6-aa41-6966db0ec212",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-b1dc9112-d148-49f6-ae68-07841da76bd6",
                            "name": "Wheat flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-812c87d0-48c9-48f4-adf7-74296448d902",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-a9c81461-ee89-41ac-90c3-cf44e166edd7",
                            "name": "Lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-5f22d8db-dd85-4b69-863d-1bc70296bff4",
                            "name": "Cardamom",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "c43c41e4-e33c-44d9-ba1a-2b5ab9d90703",
                    "dayId": "2025-12-19-HARD",
                    "targetDish": "Kunu Zaki",
                    "description": "A popular non-alcoholic beverage from Northern Nigeria, made from soaked, spiced, and milled millet or sorghum, offering a refreshing and nutritious start to the day.",
                    "cuisine": "Nigeria",
                    "region": "Sub-Saharan Africa",
                    "originCity": "Kaduna",
                    "category": "Breakfast Beverage",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇳🇬",
                    "countryCode": "NG",
                    "mainIngredients": [
                        "Millet (or Sorghum)",
                        "Ginger",
                        "Cloves",
                        "Sweet potato (or rice as binder)",
                        "Sugar",
                        "Water"
                    ],
                    "triviaClues": [
                        "This refreshing drink is a common sight in its country's northern regions, known for its distinct spicy kick.",
                        "Its preparation involves an elaborate process of soaking, grinding, and filtering grains, often with a binder.",
                        "The beverage is sweetened and often includes warming spices like ginger and cloves.",
                        "Despite its 'Zaki' (sweet) name, the traditional version offers a complex flavor profile from fermentation and spices.",
                        "It's considered a highly nutritious drink, perfect for providing energy in hot climates."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-ae471725-222f-4922-9cd4-e700a29b2c66",
                            "name": "Kunu Zaki",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-d7979d66-b6c0-42a4-9bb2-945588b0378b",
                            "name": "Hausa Koko",
                            "isCorrect": false,
                            "reason": "A spiced millet porridge, which is thick and consumed with a spoon, not a drink."
                        },
                        {
                            "id": "dish-2-75c2da15-59db-485b-954e-063e85f59196",
                            "name": "Mageu / Amarhewu",
                            "isCorrect": false,
                            "reason": "A Southern African fermented maize beverage, different grain and spice profile."
                        },
                        {
                            "id": "dish-3-fac2988f-4106-4668-821d-d843c55446aa",
                            "name": "Ogi / Akamu",
                            "isCorrect": false,
                            "reason": "A fermented corn/millet pudding, which is thicker and less spiced, generally served hot."
                        },
                        {
                            "id": "dish-4-2e287edd-b929-4ca5-8091-c5bb0b3880f3",
                            "name": "Zobo (Hibiscus Drink)",
                            "isCorrect": false,
                            "reason": "A popular West African drink, but made from hibiscus flowers, not grains."
                        },
                        {
                            "id": "dish-5-cb673491-05bc-4055-a0c0-2b17e1216911",
                            "name": "Fura de Nono",
                            "isCorrect": false,
                            "reason": "A millet/sorghum drink, but traditionally made with fresh or fermented cow's milk/yogurt, and often less spiced."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-ef06bfbb-638c-4c05-b73d-06556ffe4aa6",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-a9345c25-4160-46bf-820a-d3135b5c9126",
                            "name": "Ginger",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-d37651f5-1de8-4c60-9e99-5973867ea667",
                            "name": "Lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-f6996b9c-db71-4bf4-8434-d958879dfd11",
                            "name": "Tomato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-9da3c36f-ed72-4013-a975-33443d387854",
                            "name": "Sweet potato (or rice as binder)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-a36009f1-261a-424f-ad98-44112c120060",
                            "name": "Black-eyed peas",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-87b4c1e1-c825-4414-a9b0-6b04af3b944d",
                            "name": "Onion",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-eac4d9eb-f16c-46d1-88c4-47aa53e6e706",
                            "name": "Cassava flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-85a2518e-fbee-4f17-8ed8-a13dcb2046c5",
                            "name": "Millet (or Sorghum)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-2cee3198-c5b3-4eb2-8d7c-9a0c0c37e525",
                            "name": "Garlic",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-7ea6e987-0b18-4c14-9621-1c7f29eab73a",
                            "name": "Wheat flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-b8e22c9a-53ac-48a7-9c64-1693719249f2",
                            "name": "Cloves",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-67b490b4-1c82-4604-9a92-de6e10a758ec",
                            "name": "Coconut milk",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                }
            ]
        }
    },
    "2025-12-20": {
        "date": "2025-12-20",
        "theme": "Noodle Dish from American South",
        "rounds": {
            "EASY": [
                {
                    "id": "071972c7-2322-478e-95d3-6e008bccf6d1",
                    "dayId": "2025-12-20-EASY",
                    "targetDish": "Southern Baked Macaroni and Cheese",
                    "description": "A rich, creamy, and cheesy pasta dish, often baked until golden and bubbly, a staple in Southern comfort food.",
                    "cuisine": "USA",
                    "region": "American South",
                    "originCity": "Various (ubiquitous)",
                    "category": "Side Dish, Comfort Food",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Elbow macaroni",
                        "cheddar cheese",
                        "milk",
                        "butter",
                        "flour",
                        "spices"
                    ],
                    "triviaClues": [
                        "It's a foundational dish at any Southern potluck or holiday.",
                        "Often involves a combination of cheeses for maximum flavor.",
                        "Many recipes start with a roux to create a thick, creamy sauce."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-4090059e-dc73-4efb-9206-4ea43d6fcc71",
                            "name": "Southern Baked Macaroni and Cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-807a348a-f723-4a93-90f9-af75605b7593",
                            "name": "Pasta Carbonara",
                            "isCorrect": false,
                            "reason": "Italian, uses eggs and bacon, no baked cheese."
                        },
                        {
                            "id": "dish-2-7ea2deb1-2a11-4dff-abb8-d5ce84aaabf3",
                            "name": "Fettuccine Alfredo",
                            "isCorrect": false,
                            "reason": "Italian, different cheese and sauce base."
                        },
                        {
                            "id": "dish-3-dead99b9-804e-4e95-bfa0-581c2f6fda73",
                            "name": "Kraft Macaroni & Cheese",
                            "isCorrect": false,
                            "reason": "A box mix, distinct from homemade baked style."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-a1c4868b-b553-4653-ad20-23cb5bd9bc06",
                            "name": "sun-dried tomatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-cfab266d-4804-4546-b099-22141ba72e5e",
                            "name": "flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-280af79f-75d3-4c7f-a7f9-807175a821b9",
                            "name": "olives",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-02819df5-a315-4f25-9fa6-b0e8069524cb",
                            "name": "milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-fe68e023-0ba0-4674-89f3-9275098c3661",
                            "name": "butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-a3a25bdb-77e6-457d-80f4-4c4d2744eb2c",
                            "name": "cheddar cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-1fc84c0f-9d7d-4756-8430-5223e97d2f91",
                            "name": "Elbow macaroni",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-96ab0a66-2580-4c01-b1b6-bb864d7b6961",
                            "name": "basil pesto",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-e66cea35-bdeb-47fd-ab15-f60b1b7fac41",
                            "name": "Feta cheese",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "9fcc497a-d7a0-4e89-bf56-14cfe8a4d834",
                    "dayId": "2025-12-20-EASY",
                    "targetDish": "Southern Tuna Noodle Casserole",
                    "description": "A classic American comfort food featuring egg noodles, canned tuna, and peas in a creamy sauce, often topped with crushed potato chips or breadcrumbs and baked.",
                    "cuisine": "USA",
                    "region": "American South",
                    "originCity": "Various (ubiquitous)",
                    "category": "Main Dish, Comfort Food, Casserole",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Egg noodles",
                        "canned tuna",
                        "cream of mushroom soup",
                        "milk",
                        "peas",
                        "cheddar cheese"
                    ],
                    "triviaClues": [
                        "A staple weeknight meal, especially popular in the mid-20th century.",
                        "Often uses canned soup for its creamy base.",
                        "Can be topped with anything from breadcrumbs to crushed potato chips for crunch."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-b16ba4ef-0652-4e2e-8711-e2d5f1d89b4e",
                            "name": "Chicken Pot Pie",
                            "isCorrect": false,
                            "reason": "Chicken and vegetables in gravy with a pastry crust, not noodles."
                        },
                        {
                            "id": "dish-1-7f3ab00f-870d-4509-85fb-b304a30416bb",
                            "name": "Shepherd's Pie",
                            "isCorrect": false,
                            "reason": "Meat and vegetable dish topped with mashed potatoes, not noodles."
                        },
                        {
                            "id": "dish-2-03f2fb0a-9a40-4129-b7dd-727b967d7eb0",
                            "name": "Southern Tuna Noodle Casserole",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-8b106472-6a31-45ed-a59c-e944fc8c90b6",
                            "name": "Seafood Lasagna",
                            "isCorrect": false,
                            "reason": "Italian-inspired, uses different noodles and sauce structure."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-194b9bed-532c-4818-a0a3-4214d0e99fc2",
                            "name": "Salmon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-ed6cf9a0-ff06-4e31-babb-0072edf79c31",
                            "name": "milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-c2efda49-5ebb-4074-b55f-f5355ba954ec",
                            "name": "black olives",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-ad5fd91e-67d9-423f-9dd6-b3c8dea4f4ee",
                            "name": "cream of mushroom soup",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-2e555171-4fba-49d9-979d-f11d473938ad",
                            "name": "peas",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-e8d80f2a-0bc7-4d3b-8b70-f9aaeee9a195",
                            "name": "heavy cream",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-641ceaa9-4c96-4601-a450-63872a24abd4",
                            "name": "Egg noodles",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-92c35c8f-23e8-4241-97b4-11993d5a5229",
                            "name": "canned tuna",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-a222b58d-8ec2-4497-bf05-92d03203146f",
                            "name": "red pepper flakes",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "7636f14b-dc53-4333-aa7b-87886232882a",
                    "dayId": "2025-12-20-EASY",
                    "targetDish": "American Goulash (Southern style)",
                    "description": "A hearty, one-pot American comfort food dish, distinct from Hungarian goulash, typically made with ground beef, elbow macaroni, tomatoes, and seasoned with simple spices.",
                    "cuisine": "USA",
                    "region": "American South",
                    "originCity": "Various (ubiquitous)",
                    "category": "Main Dish, Comfort Food",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Elbow macaroni",
                        "ground beef",
                        "canned tomatoes",
                        "onion",
                        "bell pepper",
                        "garlic",
                        "chili powder"
                    ],
                    "triviaClues": [
                        "Often referred to as 'Johnny Marzetti' or 'Slumgullion' in some regions.",
                        "A frugal meal, popular during the Great Depression and wartime.",
                        "Characterized by its distinct elbow macaroni mixed directly into the meat and tomato sauce."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-25895a68-6f89-4f7d-a95d-86f433e98374",
                            "name": "Hungarian Goulash",
                            "isCorrect": false,
                            "reason": "A stew with beef chunks and paprika, no pasta."
                        },
                        {
                            "id": "dish-1-336825b4-4195-459a-b255-84efa5034c2c",
                            "name": "American Goulash (Southern style)",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-77f2fd50-94b1-495a-9e64-d79828c27304",
                            "name": "Chili Con Carne",
                            "isCorrect": false,
                            "reason": "A spicy bean and meat stew, no pasta."
                        },
                        {
                            "id": "dish-3-4de0d4c3-6629-4b84-aa86-7869672369d6",
                            "name": "Spaghetti Bolognese",
                            "isCorrect": false,
                            "reason": "Italian, different pasta and sauce preparation."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-d6cfd903-d8a9-42eb-9f9f-e539e424c030",
                            "name": "ground beef",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-33b35f20-67e0-4fe1-b434-d24c8e406a86",
                            "name": "Potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-e3538c99-df67-4272-b3f7-63b7c2dd0cb4",
                            "name": "caraway seeds",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-f1657685-0e6f-4c1f-9c88-e6d458392ff3",
                            "name": "bell pepper",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-44f2950d-8c0d-4276-9e05-8e943bd85895",
                            "name": "Elbow macaroni",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-3f6328f6-27c8-47bd-b9c1-6155f33c5585",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-ef9f375b-75f7-43a2-807c-4bfbd8ff4b9d",
                            "name": "canned tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-b46a3446-291b-46bb-a2f4-44573829da4e",
                            "name": "sour cream",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-76ef79fe-be34-462b-ad7f-7ac5351d7fb6",
                            "name": "dill",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "3e17c046-2d8d-44b9-960e-258169e38bd8",
                    "dayId": "2025-12-20-EASY",
                    "targetDish": "Chicken Noodle Soup (Hearty Southern style)",
                    "description": "A comforting and robust chicken broth-based soup, brimming with tender chicken, vegetables, and often wide, flat egg noodles, a popular remedy and comfort food.",
                    "cuisine": "USA",
                    "region": "American South",
                    "originCity": "Various (ubiquitous)",
                    "category": "Soup, Comfort Food",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Chicken",
                        "egg noodles",
                        "chicken broth",
                        "carrots",
                        "celery",
                        "onion",
                        "herbs"
                    ],
                    "triviaClues": [
                        "Often touted as a cure for the common cold.",
                        "Many Southern versions are richer and more seasoned than their Northern counterparts.",
                        "The noodles are typically simmered directly in the broth until tender."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-2a9478c8-23c0-41d1-9e12-fffba2f14392",
                            "name": "Italian Wedding Soup",
                            "isCorrect": false,
                            "reason": "Features meatballs and acini de pepe pasta, with a different flavor profile."
                        },
                        {
                            "id": "dish-1-81cccb7d-c81d-4d5a-9a67-91d007426542",
                            "name": "Chicken and Dumplings",
                            "isCorrect": false,
                            "reason": "Uses doughy dumplings, not distinct noodles."
                        },
                        {
                            "id": "dish-2-b1c03c13-d166-4f3d-898b-691763311b52",
                            "name": "Pho Ga",
                            "isCorrect": false,
                            "reason": "Vietnamese chicken noodle soup with different spices and broth."
                        },
                        {
                            "id": "dish-3-aa905fa1-0a66-4f60-b8e6-c2804d046681",
                            "name": "Chicken Noodle Soup (Hearty Southern style)",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-42f81cfd-831d-47de-9631-0f8aaa7914ee",
                            "name": "carrots",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-6c619587-fb89-4ba5-8cca-64ad121f3ba4",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-9ac03045-fe4c-47cc-9a98-acd352347eeb",
                            "name": "ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-ef1601b0-ae42-4a19-976b-74376c5c1314",
                            "name": "chicken broth",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-0b07a795-d8a2-410c-bc46-928d218fa280",
                            "name": "celery",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-38a2d93c-ccad-4847-802a-2d9051ea9732",
                            "name": "egg noodles",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-14bd1e6f-a462-4e82-af52-04a699b74583",
                            "name": "rice vermicelli",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-3f17f105-441e-4adc-b86e-3c9a9fe5046b",
                            "name": "lime leaves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-4629a254-804f-4794-b135-7ff79e88ba17",
                            "name": "Chicken",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "aa42fde5-84eb-49b5-a70b-ae6c70f5def2",
                    "dayId": "2025-12-20-EASY",
                    "targetDish": "Chili Mac",
                    "description": "A fusion dish combining hearty chili with macaroni, often served as a comforting one-pot meal, popular for its robust flavor and simplicity.",
                    "cuisine": "USA",
                    "region": "American South (especially Texas/Oklahoma influences)",
                    "originCity": "Various (ubiquitous in regional diners/home cooking)",
                    "category": "Main Dish, Comfort Food",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Elbow macaroni",
                        "ground beef",
                        "kidney beans",
                        "diced tomatoes",
                        "chili powder",
                        "cheddar cheese"
                    ],
                    "triviaClues": [
                        "Can be found in school cafeterias and diners across the South and Midwest.",
                        "Often topped with shredded cheese, onions, or hot sauce.",
                        "Combines two beloved comfort foods into one satisfying bowl."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-a50d7f7a-57ac-4eac-b709-3569bf582138",
                            "name": "Cincinnati Chili",
                            "isCorrect": false,
                            "reason": "Served over spaghetti, but layered with distinct toppings."
                        },
                        {
                            "id": "dish-1-1596123b-81c9-4ede-9c87-d02f7bd5cfe8",
                            "name": "Beef Stroganoff",
                            "isCorrect": false,
                            "reason": "Creamy mushroom sauce with a very different flavor profile."
                        },
                        {
                            "id": "dish-2-9c01090b-ab13-40a2-8403-9b1fa5cf6351",
                            "name": "Chili Mac",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-6c54f6f1-9532-41f5-9ee9-3fb92aa70907",
                            "name": "Taco Soup",
                            "isCorrect": false,
                            "reason": "Similar ingredients but no pasta."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-271509fd-f72b-439c-920c-f8fb93674a03",
                            "name": "cilantro",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-25cb1d25-7f5e-466f-b59d-1602d6b2513b",
                            "name": "ground beef",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-e73fb746-99ca-4bec-a0cd-e507b2c68a28",
                            "name": "kidney beans",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-697f48e3-8280-44e0-816c-1c566cec22f2",
                            "name": "Elbow macaroni",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-f19e71cf-506a-4da4-b95d-a5ada953e1c1",
                            "name": "sour cream",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-fd769edb-24b4-4ff1-bee4-74c3217949b2",
                            "name": "diced tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-f1499620-00db-45dd-a674-c7ebdd73cd66",
                            "name": "bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-0856191b-0de2-4417-8b87-c67daec7e50b",
                            "name": "chili powder",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-e05c0e20-aa80-4758-b3f1-d2fc7f7efcb4",
                            "name": "Green olives",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                }
            ],
            "MEDIUM": [
                {
                    "id": "2ae25dca-ae80-408c-9a61-cb2f342e1478",
                    "dayId": "2025-12-20-MEDIUM",
                    "targetDish": "Chicken Spaghetti",
                    "description": "A creamy, cheesy, and hearty baked pasta dish made with shredded chicken, spaghetti, cream of mushroom soup, and Rotel tomatoes, popular in Southern potlucks.",
                    "cuisine": "USA",
                    "region": "American South",
                    "originCity": "Texas (gained significant popularity there)",
                    "category": "Main Dish, Casserole, Comfort Food",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Spaghetti",
                        "cooked chicken",
                        "cream of mushroom soup",
                        "Rotel diced tomatoes with green chilies",
                        "cheddar cheese",
                        "onion",
                        "bell pepper"
                    ],
                    "triviaClues": [
                        "A quintessential casserole often brought to church gatherings or family reunions.",
                        "The inclusion of diced tomatoes with green chilies is a hallmark of many Southern recipes.",
                        "It's a fantastic way to use leftover rotisserie chicken."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-974776d8-398f-4ff3-8818-32d439823893",
                            "name": "Chicken Spaghetti",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-6eea4d21-e71f-4213-aa46-48543693f999",
                            "name": "Tetrazzini",
                            "isCorrect": false,
                            "reason": "Often uses poultry but typically a white wine/cream sauce, without Rotel."
                        },
                        {
                            "id": "dish-2-9becd25c-16fa-4c2f-b573-9b111e8344be",
                            "name": "Spaghetti Carbonara",
                            "isCorrect": false,
                            "reason": "Italian, uses eggs and bacon, not baked chicken or soup."
                        },
                        {
                            "id": "dish-3-6c2c66d8-fa11-49af-b1cf-f58e26e2ce36",
                            "name": "Lasagna",
                            "isCorrect": false,
                            "reason": "A layered pasta dish with a different structure and cheese profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-92e28a35-088b-4f5f-86fc-1f136ea2b4c1",
                            "name": "olives",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-ce6eb0ce-e45f-4366-8b3f-a5686bb10298",
                            "name": "Artichoke hearts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-36e7c410-3825-419c-a7d5-48c5147f1c57",
                            "name": "cheddar cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-fad42f14-387a-422c-ac84-29ee52773846",
                            "name": "capers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-858217fb-ab49-4429-b11d-b04c44b17c46",
                            "name": "Spaghetti",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-1918f880-249c-4599-8593-4dbdf2948e6f",
                            "name": "pesto",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-f6e03a8b-5012-45cb-af35-16eada5f8182",
                            "name": "sun-dried tomatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-82cefa0f-f9a3-4cf1-ab48-aaf07bfc2341",
                            "name": "Rotel diced tomatoes with green chilies",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-563eebf0-e1b4-4868-a15d-f07064de848c",
                            "name": "cream of mushroom soup",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-6dd6a762-73a9-4550-8190-b7632c452b6e",
                            "name": "ricotta cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-2a994eda-69a9-4695-b336-b45c9e4b4f6a",
                            "name": "cooked chicken",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "a936baa9-63f8-4549-8146-2cb1348e649e",
                    "dayId": "2025-12-20-MEDIUM",
                    "targetDish": "Baked Spaghetti (with Southern-style meat sauce)",
                    "description": "A comforting baked pasta dish featuring spaghetti tossed in a rich, slightly sweet or spicy meat sauce (often using ground beef or sausage), layered with cheese, and baked until bubbly.",
                    "cuisine": "USA",
                    "region": "American South",
                    "originCity": "Various (ubiquitous)",
                    "category": "Main Dish, Casserole, Comfort Food",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Spaghetti",
                        "ground beef",
                        "tomato sauce",
                        "onion",
                        "bell pepper",
                        "garlic",
                        "Worcestershire sauce",
                        "sugar",
                        "mozzarella",
                        "parmesan"
                    ],
                    "triviaClues": [
                        "Often makes an appearance at Sunday dinner tables throughout the South.",
                        "The meat sauce might feature a hint of sweetness or a touch of hot sauce, differentiating it.",
                        "It's a great make-ahead meal, often tasting even better the next day."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-59f78a61-1842-41bd-a0a8-b549131c3bb2",
                            "name": "Baked Spaghetti (with Southern-style meat sauce)",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-6d877d79-12ec-46c8-86bb-99ece907104f",
                            "name": "Spaghetti and Meatballs",
                            "isCorrect": false,
                            "reason": "Not typically baked and has a distinct presentation."
                        },
                        {
                            "id": "dish-2-18dfad7d-57c0-4544-96d2-e82809f704c1",
                            "name": "Pasta Bake with vegetables",
                            "isCorrect": false,
                            "reason": "Lacks the characteristic meat sauce."
                        },
                        {
                            "id": "dish-3-f491ac01-a0cd-4ab8-91ce-04d04a32eaf5",
                            "name": "Italian Lasagna",
                            "isCorrect": false,
                            "reason": "More complex layering with ricotta cheese and different flavor profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-9cc10f82-8bd9-404c-9601-09b70994a905",
                            "name": "prosciutto",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-486d1d02-399a-4374-8ea9-2103cd804740",
                            "name": "tomato sauce",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-c34cc4d7-a463-4a85-aa51-d8a56316162c",
                            "name": "ground beef",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-6d9d7cf7-735b-4709-b77d-b447604b4c1e",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-5bc23605-42e5-4d17-bf89-dc095f65666c",
                            "name": "porcini mushrooms",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-78e9f895-7e42-4452-a0ba-8f4771dc6dfe",
                            "name": "red wine",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-7947a650-a985-472d-9adf-056d79d113f0",
                            "name": "capers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-9da4520e-379f-456d-bb83-cd814d9161ac",
                            "name": "Spaghetti",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-95f7170c-1ea5-4042-8d60-e0d204e91095",
                            "name": "fresh basil",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-ffbf7fca-f1b2-4d88-8833-6a16a4cb5e7e",
                            "name": "bell pepper",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-3b841267-9526-44f5-ba11-6ac7e1b5292f",
                            "name": "Anchovies",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "2df64f73-df56-4201-a099-fbb8c152b927",
                    "dayId": "2025-12-20-MEDIUM",
                    "targetDish": "Creamy Cajun Shrimp Pasta",
                    "description": "A vibrant and flavorful pasta dish featuring plump shrimp, colorful bell peppers, and often a rich, spicy cream sauce infused with Cajun seasonings.",
                    "cuisine": "USA",
                    "region": "Louisiana (specifically Cajun country)",
                    "originCity": "Lafayette or New Orleans area",
                    "category": "Main Dish, Seafood",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Pasta",
                        "shrimp",
                        "bell peppers",
                        "onion",
                        "garlic",
                        "heavy cream",
                        "Cajun seasoning",
                        "chicken broth"
                    ],
                    "triviaClues": [
                        "Known for its 'holy trinity' of onion, celery, and bell pepper.",
                        "The spice level can vary from mild to fiery hot, depending on the cook.",
                        "Frequently found on restaurant menus throughout Louisiana and the Gulf Coast."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-37354305-a1ca-4ed3-96dd-17030f83f105",
                            "name": "Jambalaya",
                            "isCorrect": false,
                            "reason": "A rice-based dish, not pasta."
                        },
                        {
                            "id": "dish-1-bdda9c20-9e27-4d37-937d-cc17a6a1067a",
                            "name": "Fettuccine Alfredo with Chicken",
                            "isCorrect": false,
                            "reason": "No Cajun spices and features a different meat."
                        },
                        {
                            "id": "dish-2-0fe72cd7-0c5d-4a20-b800-5377455d543b",
                            "name": "Shrimp Scampi",
                            "isCorrect": false,
                            "reason": "Garlic butter and lemon-based sauce, no cream or Cajun spices."
                        },
                        {
                            "id": "dish-3-0e7d2688-af98-4e59-bc9e-58656eb2aea9",
                            "name": "Creamy Cajun Shrimp Pasta",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-37e84512-4706-4b53-a5b5-6e73989f7561",
                            "name": "balsamic vinegar",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-1304146d-3493-43c9-9cf7-2f18628eda30",
                            "name": "Pasta",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-85a937d4-4bb2-4738-a8a5-b4ad9628bf6b",
                            "name": "bell peppers",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-1428d225-a376-4cd4-8f0f-c026e280bb74",
                            "name": "Teriyaki sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-f668b463-1351-47f5-a560-c0330ab4cbbe",
                            "name": "ricotta cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-c9ad9e29-45ff-4a0d-ba40-e7d45c5e1202",
                            "name": "shrimp",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-550d8c3a-2cb0-48e5-bc56-02091c2ec724",
                            "name": "sun-dried tomatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-443432b8-967a-4b22-8f2b-2a3099563c38",
                            "name": "garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-c6210ccf-0db8-4037-80b0-a17564547a8d",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-09178b33-e705-4c77-92f1-968f4f617546",
                            "name": "artichoke hearts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-2e6ae105-c656-4917-a146-2b7ec229fe1f",
                            "name": "olives",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "08a8421f-f7dd-4017-b372-d07cd6ab1707",
                    "dayId": "2025-12-20-MEDIUM",
                    "targetDish": "Smoked Sausage and Pasta Skillet",
                    "description": "A quick and easy one-pan meal featuring flavorful smoked sausage (like Andouille or Kielbasa), pasta, diced tomatoes, and sometimes spinach or other vegetables, all simmered together.",
                    "cuisine": "USA",
                    "region": "American South",
                    "originCity": "Various (ubiquitous in home cooking)",
                    "category": "Main Dish, Skillet Meal",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Smoked sausage",
                        "pasta",
                        "diced tomatoes",
                        "onion",
                        "garlic",
                        "chicken broth",
                        "spinach"
                    ],
                    "triviaClues": [
                        "Perfect for busy weeknights, as it comes together quickly in one pan.",
                        "The smoky flavor of the sausage is central to the dish's appeal.",
                        "Often incorporates common pantry staples for a satisfying meal."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-0497f23b-9e0d-4715-8d4c-a5a508eff82a",
                            "name": "Gumbo",
                            "isCorrect": false,
                            "reason": "A stew without pasta as a main component."
                        },
                        {
                            "id": "dish-1-1858e25c-1682-472b-9d95-c2e6cc82f9c4",
                            "name": "Smoked Sausage and Pasta Skillet",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-f141e963-6594-4eb0-ba33-5dcf6643e024",
                            "name": "Paella",
                            "isCorrect": false,
                            "reason": "A Spanish rice dish with saffron and often seafood."
                        },
                        {
                            "id": "dish-3-1402f020-26ac-432d-8fec-429c96302b75",
                            "name": "Sausage and Peppers",
                            "isCorrect": false,
                            "reason": "Typically served with polenta or bread, not pasta as an integral part."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-714a20e6-6aa1-41aa-af27-5ac3327db199",
                            "name": "saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-ed93a968-e778-4b11-b664-4c41d26ae016",
                            "name": "fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-5bf8b837-cdc3-4f1c-8d96-9d4caf26cb9a",
                            "name": "Smoked sausage",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-8510bf23-370e-4ce4-bedb-7fae90789f57",
                            "name": "Prosciutto",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-63021c15-425a-43bb-891c-275a25218726",
                            "name": "pasta",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-a80c3f83-d5e9-4459-97d2-5ba8dcf91ebe",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-d9a4637f-16c5-4efb-8e44-423e4de95ebf",
                            "name": "pesto",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-d4c3fa23-6fc9-4538-8ba9-c20d9a6e04a0",
                            "name": "diced tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-79a06bf2-2ae6-4503-96ce-b2defb5b216b",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-e3d8bcbc-0d7a-4f39-8629-d9ca9a607c2d",
                            "name": "garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-b810944d-b108-428b-a9ea-ea01bacf36ee",
                            "name": "fresh mozzarella",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "f1160a47-3eba-4126-b76c-f0c6a73baad6",
                    "dayId": "2025-12-20-MEDIUM",
                    "targetDish": "Country Captain Chicken served over Wide Egg Noodles",
                    "description": "A mild, curry-spiced chicken and tomato stew, enriched with almonds and currants, originating from the Lowcountry region, often served over rice but also deliciously paired with wide egg noodles.",
                    "cuisine": "USA",
                    "region": "Lowcountry (Georgia/South Carolina coast)",
                    "originCity": "Charleston, SC or Savannah, GA",
                    "category": "Main Dish, Stew",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Chicken",
                        "wide egg noodles",
                        "diced tomatoes",
                        "bell pepper",
                        "onion",
                        "garlic",
                        "curry powder",
                        "chicken broth",
                        "currants",
                        "sliced almonds"
                    ],
                    "triviaClues": [
                        "This dish has historical ties to colonial trade routes and spice merchants.",
                        "Though featuring curry, its flavor profile is distinctly Southern and mild.",
                        "It was a favorite of President Franklin D. Roosevelt."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-a609aeaa-c1de-42d1-b7a6-d2ad8a6fbb0a",
                            "name": "Brunswick Stew",
                            "isCorrect": false,
                            "reason": "More robust, barbecue influence, and no curry."
                        },
                        {
                            "id": "dish-1-71159c03-719a-4bb4-bef8-73f7c5a6040b",
                            "name": "Chicken Fricassee",
                            "isCorrect": false,
                            "reason": "French, with a creamy white sauce."
                        },
                        {
                            "id": "dish-2-5a99decb-ef4d-4122-b50f-3f68d62e33b7",
                            "name": "Chicken Tikka Masala",
                            "isCorrect": false,
                            "reason": "Indian, very different spice profile and preparation."
                        },
                        {
                            "id": "dish-3-622401fd-a7b2-4615-9d61-58a6e81c79a7",
                            "name": "Country Captain Chicken served over Wide Egg Noodles",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-b23d4d87-19e0-4833-95f0-6c7e4a1efb36",
                            "name": "cashews",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-f2c9c2b8-21db-4cfb-8f5e-c1133da6a76a",
                            "name": "Coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-9ba5597d-4ad9-40d7-b104-81736938ef56",
                            "name": "wide egg noodles",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-01f60047-24c2-4c5e-b390-ee16643d0a9e",
                            "name": "Chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-ba512a5b-f7a2-404f-a318-39f8e7eea217",
                            "name": "green beans",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-856c0f36-06ca-4000-8240-216d47847880",
                            "name": "tofu",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-63256f6b-7897-49ab-a4b0-50ad1bcf4ecd",
                            "name": "bell pepper",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-20ecf463-a2d4-4a1a-a7fb-119d84e05ff9",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-601a3255-c9e8-44ab-b067-012b65d1be55",
                            "name": "diced tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-047bdcc0-2306-4d76-89d2-1cadd75e4dc9",
                            "name": "garam masala",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-5aae2fd8-2efa-45dd-ba34-be6e5dd5c1d2",
                            "name": "onion",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                }
            ],
            "HARD": [
                {
                    "id": "2a731fa8-6775-42ad-ad08-a7550473b9fe",
                    "dayId": "2025-12-20-HARD",
                    "targetDish": "Lowcountry Boil Pasta",
                    "description": "A creative pasta interpretation of the classic Southern Lowcountry boil, combining shrimp, sausage, corn, and potatoes with pasta in a seasoned, buttery sauce.",
                    "cuisine": "USA",
                    "region": "Lowcountry (Coastal South Carolina/Georgia)",
                    "originCity": "Charleston, SC or Savannah, GA",
                    "category": "Main Dish, Fusion, Seafood",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Pasta",
                        "shrimp",
                        "smoked sausage",
                        "corn",
                        "small potatoes",
                        "onion",
                        "garlic",
                        "Old Bay seasoning",
                        "butter",
                        "chicken broth"
                    ],
                    "triviaClues": [
                        "This dish brings the communal spirit of a coastal seafood feast to a pasta bowl.",
                        "Old Bay seasoning is a key flavor component, though not exclusively Southern.",
                        "It's a modern take on a centuries-old tradition enjoyed along the Southeastern coast."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-8b496c76-d90c-4cc3-9154-ed4e59ada086",
                            "name": "Shrimp Scampi",
                            "isCorrect": false,
                            "reason": "Italian, different seasoning and ingredients."
                        },
                        {
                            "id": "dish-1-337bfb1a-52da-4328-9054-295847c7266a",
                            "name": "Paella",
                            "isCorrect": false,
                            "reason": "A Spanish rice dish with saffron."
                        },
                        {
                            "id": "dish-2-517dd201-441a-498d-a80c-cc67c86d39ac",
                            "name": "Traditional Lowcountry Boil",
                            "isCorrect": false,
                            "reason": "A broth-based boil, served without pasta."
                        },
                        {
                            "id": "dish-3-5e2e4c74-e408-436d-b6b3-6ea0134cc77c",
                            "name": "Gumbo",
                            "isCorrect": false,
                            "reason": "A stew, without pasta."
                        },
                        {
                            "id": "dish-4-f7efe82a-31b7-4fd8-93e9-84a4fbb092aa",
                            "name": "Cajun Seafood Pasta",
                            "isCorrect": false,
                            "reason": "Uses Cajun seasoning and typically a creamy sauce, distinct from Lowcountry seasoning."
                        },
                        {
                            "id": "dish-5-0a3898ad-183d-48d2-9cf2-ab5ac3182442",
                            "name": "Lowcountry Boil Pasta",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-fac64730-a791-4ddd-abc5-040f795db889",
                            "name": "pesto",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-bcca7e57-16d7-40cc-9d2f-be2ba14c9fa5",
                            "name": "sun-dried tomatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-dbefa6a3-07d2-4133-8c22-dadfb554beac",
                            "name": "smoked sausage",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-c21f377e-56e3-4605-911e-5198d6d18dab",
                            "name": "Pasta",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-105c489e-b23b-4911-9733-9cbdb1a0006f",
                            "name": "shrimp",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-77573152-35ed-44b0-8319-3bc48f9c7b82",
                            "name": "saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-acb6ca77-443b-4eba-85eb-58d7bef2a4a8",
                            "name": "Crab legs",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-bfbe7ab5-35de-42d2-afcf-0bd512ba6d4e",
                            "name": "clams",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-14c79945-9990-4501-82b8-0c77bd4d2ee4",
                            "name": "artichoke hearts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-fa5c530f-ab34-4f5d-9afd-a8e156389039",
                            "name": "mussels",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-a0b5be57-3c3e-4734-ba3d-0b4833cfb947",
                            "name": "corn",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-b94f70fd-ddfc-4fa7-85b6-754380633193",
                            "name": "small potatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-530e0ee1-80d0-4c3f-8a56-82690ccdd9ca",
                            "name": "black olives",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "06b9c95c-9905-41ba-a9dc-af4f5c15d2f9",
                    "dayId": "2025-12-20-HARD",
                    "targetDish": "Nashville Hot Chicken Mac & Cheese",
                    "description": "A spicy and indulgent fusion dish combining creamy baked macaroni and cheese with crispy pieces of Nashville hot chicken, drizzled with a fiery oil.",
                    "cuisine": "USA",
                    "region": "Middle Tennessee",
                    "originCity": "Nashville, TN",
                    "category": "Main Dish, Fusion, Comfort Food",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Elbow macaroni",
                        "cheddar cheese",
                        "Monterey Jack cheese",
                        "milk",
                        "butter",
                        "flour",
                        "fried chicken pieces",
                        "cayenne pepper",
                        "brown sugar",
                        "paprika",
                        "hot sauce"
                    ],
                    "triviaClues": [
                        "It unites two highly popular comfort foods from the Music City region.",
                        "The 'hot' element comes from a signature cayenne-infused oil applied to the fried chicken.",
                        "The original Nashville Hot Chicken dates back to the 1930s as an act of revenge."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-0501b867-1491-48c1-a371-7d8030e5eb17",
                            "name": "Spicy Chicken Pasta Alfredo",
                            "isCorrect": false,
                            "reason": "Italian-inspired, with a different spice profile and sauce."
                        },
                        {
                            "id": "dish-1-77bed67c-f0bb-40f5-b68f-efbc980dcebf",
                            "name": "Nashville Hot Chicken Mac & Cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-aaa86b43-fad9-4ff5-a3c7-88238d7ee456",
                            "name": "Fried Chicken & Waffles",
                            "isCorrect": false,
                            "reason": "Two separate dishes, not combined into a pasta dish."
                        },
                        {
                            "id": "dish-3-13904e68-52ac-4f65-bdb5-0ba5c30c15a5",
                            "name": "Buffalo Chicken Mac & Cheese",
                            "isCorrect": false,
                            "reason": "Uses buffalo sauce, not specific hot chicken oil."
                        },
                        {
                            "id": "dish-4-78470b76-25fb-496f-9056-45f01b7feaf8",
                            "name": "Traditional Baked Mac & Cheese",
                            "isCorrect": false,
                            "reason": "Lacks the spicy chicken component."
                        },
                        {
                            "id": "dish-5-d53ba10c-628b-444c-9787-2159b7a0c0f3",
                            "name": "Jerk Chicken Pasta",
                            "isCorrect": false,
                            "reason": "Caribbean influence with different spices and flavor profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-831a1eaa-8d17-4d28-98f9-6ccd6999b9e3",
                            "name": "Blue cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-f176f3b5-40e6-4209-8ca1-422d1e019e8c",
                            "name": "butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-25544e7e-ef21-4320-99dc-1e9d6c62bd56",
                            "name": "ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-bb867d26-a07b-48c3-bf22-1bb9b7fa2214",
                            "name": "Monterey Jack cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-adc54b74-d8de-4285-9cb1-08b6036f5d26",
                            "name": "cheddar cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-f9592a9a-d236-4771-bdff-a42521cb2ee6",
                            "name": "carrots",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-ab2a5f4d-1f44-474d-948b-531e65a67b26",
                            "name": "bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-0739b03a-c1f2-42b1-9a69-2670d299db1b",
                            "name": "ranch dressing",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-9d570e13-7046-4722-959d-e53a07265a2e",
                            "name": "milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-7a9658cd-dd38-4253-9f78-94533c4f8b6c",
                            "name": "celery",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-85b503a5-4ae0-4d43-9e55-530458a127ca",
                            "name": "Elbow macaroni",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-b126ccf5-0208-4ffc-9e5b-8cadc3b77dc5",
                            "name": "star anise",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-db6f1af0-622d-49f7-952e-e597d7820a9e",
                            "name": "teriyaki sauce",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "654b2209-d274-4041-8da5-8d23fa946048",
                    "dayId": "2025-12-20-HARD",
                    "targetDish": "Creole Jambalaya Pasta",
                    "description": "A flavorful adaptation of the classic Creole rice dish, replacing rice with pasta, typically featuring a rich tomato-based sauce with the 'holy trinity', chicken, sausage, and shrimp.",
                    "cuisine": "USA",
                    "region": "Louisiana",
                    "originCity": "New Orleans, LA",
                    "category": "Main Dish, Fusion",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Pasta",
                        "chicken",
                        "Andouille sausage",
                        "shrimp",
                        "diced tomatoes",
                        "tomato paste",
                        "onion",
                        "celery",
                        "bell pepper",
                        "garlic",
                        "Cajun/Creole seasoning",
                        "chicken broth"
                    ],
                    "triviaClues": [
                        "A New Orleans staple reimagined, embodying the city's rich culinary blend.",
                        "Features the 'holy trinity' and a robust blend of spices characteristic of Creole cuisine.",
                        "Unlike its Cajun cousin, Creole jambalaya often includes tomatoes."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-d751eccb-b686-4fd2-b4a4-c3716ba21519",
                            "name": "Arroz con Pollo",
                            "isCorrect": false,
                            "reason": "Latin American rice and chicken dish."
                        },
                        {
                            "id": "dish-1-0f7afb40-b528-4b9b-b176-761f07019f9b",
                            "name": "Cajun Pasta",
                            "isCorrect": false,
                            "reason": "Typically creamier and less tomato-heavy than Creole."
                        },
                        {
                            "id": "dish-2-babc2c57-a357-415b-8912-c59f86126398",
                            "name": "Gumbo",
                            "isCorrect": false,
                            "reason": "A stew that uses a roux and no pasta."
                        },
                        {
                            "id": "dish-3-b119e799-1c23-429e-8561-ce2eed6b5bf5",
                            "name": "Creole Jambalaya Pasta",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-4-d70be693-8c4d-4d15-b09f-f9b1ce6f87fb",
                            "name": "Traditional Jambalaya",
                            "isCorrect": false,
                            "reason": "Rice-based, not pasta."
                        },
                        {
                            "id": "dish-5-cb1305a0-b64f-4198-aa63-892ce9f20423",
                            "name": "Paella",
                            "isCorrect": false,
                            "reason": "Spanish, rice-based, and uses saffron."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-f88b6565-2632-4cbf-823f-bf4f25618f3b",
                            "name": "capers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-d0f68702-9ce9-4c99-b645-8d62793bc588",
                            "name": "diced tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-ecde8345-8669-4eef-8e08-e8fae26d9e3c",
                            "name": "shrimp",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-ded2e44e-eb35-4530-97c8-5c0bc0f435f7",
                            "name": "Saffron",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-dd693af1-296a-4b07-ae02-f55a7aa74299",
                            "name": "artichoke hearts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-8737d3c0-f6c0-4e0a-9f23-d09cb026ac59",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-1c62a319-8665-45b7-b363-38b2e02ecb13",
                            "name": "anchovies",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-8a498c23-39df-47dd-bbdc-5578e57a710d",
                            "name": "chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-238d842a-7e5f-43a9-8230-b73e6bccb420",
                            "name": "Andouille sausage",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-ad8442e7-3502-4019-98ff-feff38c07efe",
                            "name": "olives",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-7d4ff31c-488e-4d9b-ab2d-e3cd279ec1c4",
                            "name": "Pasta",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-2379f0bd-5672-41f1-afc3-d51b6069e4cb",
                            "name": "fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-3d7fc162-e046-41ad-9f93-c369bfa61268",
                            "name": "preserved lemon",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "4fff7aba-1a41-413f-9a2e-f550507f6f81",
                    "dayId": "2025-12-20-HARD",
                    "targetDish": "Collard Green & Ham Hock Mac & Cheese",
                    "description": "A soulful twist on classic macaroni and cheese, incorporating tender, smoky collard greens and savory ham hock meat, marrying two Southern staples.",
                    "cuisine": "USA",
                    "region": "Deep South",
                    "originCity": "Various (ubiquitous in Soul Food traditions)",
                    "category": "Main Dish, Comfort Food, Fusion",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Elbow macaroni",
                        "collard greens",
                        "ham hocks",
                        "cheddar cheese",
                        "smoked Gouda",
                        "milk",
                        "butter",
                        "flour",
                        "garlic",
                        "onion",
                        "chicken broth"
                    ],
                    "triviaClues": [
                        "This dish elevates a classic side into a hearty, flavorful main course.",
                        "The ham hocks provide a deep, smoky, umami flavor essential to Southern greens.",
                        "Collard greens are often associated with good luck and prosperity when eaten on New Year's Day."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-3a1a6e5c-469e-47c0-a0bc-60f3dfb16159",
                            "name": "Spinach Artichoke Pasta",
                            "isCorrect": false,
                            "reason": "Uses different greens and flavors."
                        },
                        {
                            "id": "dish-1-da963a23-9846-467b-81a6-ecd034696dac",
                            "name": "Carbonara with Greens",
                            "isCorrect": false,
                            "reason": "Italian, with a different preparation and flavor profile."
                        },
                        {
                            "id": "dish-2-a022abae-aa28-45b5-8e62-9570857bf187",
                            "name": "Cassoulet",
                            "isCorrect": false,
                            "reason": "A French bean stew with similar pork elements, but no pasta."
                        },
                        {
                            "id": "dish-3-2aa4dc3e-26e5-483f-8b53-31e6580793f9",
                            "name": "Collard Green & Ham Hock Mac & Cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-4-5fabc863-89fc-43c9-9c8f-f3db787e347d",
                            "name": "Traditional Mac & Cheese",
                            "isCorrect": false,
                            "reason": "Lacks the collard greens and ham hock."
                        },
                        {
                            "id": "dish-5-8dd0ef5c-9a6b-4568-a69d-0a097628036e",
                            "name": "Greens and Ham Hocks",
                            "isCorrect": false,
                            "reason": "A standalone side dish, not combined with pasta."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-11ce9f2e-cf41-4c31-a96c-1a3e32c99e7a",
                            "name": "ham hocks",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-c3b8e26f-8153-4f30-b1e0-69b9dee5c409",
                            "name": "cheddar cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-4c87d709-5e89-4245-977f-bfcc2fd4e4c0",
                            "name": "artichoke hearts",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-a71f06ac-bb53-49f2-b30d-7639514f1335",
                            "name": "mushrooms",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-cf32ef6a-6853-4a54-b157-461ba3f46117",
                            "name": "smoked Gouda",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-9047ab27-fa74-43f9-aaf2-87fe6d1e5ce3",
                            "name": "Elbow macaroni",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-2417a005-660a-41ff-a42b-e048e4dcce6c",
                            "name": "carrots",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-5f67996a-98b9-4e0f-b4cc-f4238dfebf58",
                            "name": "bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-70b4e1b9-dea3-4878-bd77-0a9ea6555612",
                            "name": "lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-97d4dd29-7ae6-4ea6-ad29-51812f86014a",
                            "name": "sun-dried tomatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-26b9c136-b540-4d87-af61-bf011f056dbd",
                            "name": "Feta cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-4f7c7a22-a7e0-413c-88ad-61c3f62abe4f",
                            "name": "pesto",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-07b33fc7-2abc-49f3-a5bc-fc7f2af05259",
                            "name": "collard greens",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "e49b8b45-7751-4b31-92d0-321cf0bf7256",
                    "dayId": "2025-12-20-HARD",
                    "targetDish": "Smoked Oxtail Pappardelle (Southern interpretation)",
                    "description": "A rich and deeply flavorful pasta dish featuring slow-smoked oxtail meat, braised until tender and shredded, then tossed with wide pappardelle pasta in a savory sauce.",
                    "cuisine": "USA",
                    "region": "Deep South, influenced by Caribbean/Soul Food traditions",
                    "originCity": "Various (gourmet Southern restaurants)",
                    "category": "Main Dish, Fine Dining, Comfort Food",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇺🇸",
                    "countryCode": "US",
                    "mainIngredients": [
                        "Pappardelle pasta",
                        "oxtail",
                        "smoked paprika",
                        "onion",
                        "celery",
                        "carrots",
                        "garlic",
                        "red wine",
                        "canned tomatoes",
                        "fresh herbs"
                    ],
                    "triviaClues": [
                        "Oxtail, once considered a peasant cut, has become a delicacy in Southern and international cuisine.",
                        "The smoking process adds a unique depth of flavor before the slow braising.",
                        "Often found on elevated Southern restaurant menus, showcasing a blend of tradition and culinary innovation."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-3650c670-f133-4ecb-a1de-5cb99ccaf907",
                            "name": "Short Rib Pasta",
                            "isCorrect": false,
                            "reason": "Similar slow-cooked meat but uses a different cut of beef."
                        },
                        {
                            "id": "dish-1-7e066116-3492-411b-a454-c50000ff5591",
                            "name": "Italian Oxtail Ragu (Coda alla Vaccinara)",
                            "isCorrect": false,
                            "reason": "Different spices and wine choices reflect Italian rather than Southern flavors."
                        },
                        {
                            "id": "dish-2-ee7f6a26-da68-47ec-bbd2-0763e3546d8b",
                            "name": "Bolognese",
                            "isCorrect": false,
                            "reason": "Uses ground meat, not typically oxtail."
                        },
                        {
                            "id": "dish-3-fbd9fe4f-bcf8-43e2-a4e4-1c794ae97263",
                            "name": "Caribbean Oxtail Stew",
                            "isCorrect": false,
                            "reason": "Typically rice-based and has a distinct Caribbean spice blend."
                        },
                        {
                            "id": "dish-4-a25345c2-044d-4d39-a996-e25cc82eabad",
                            "name": "Beef Bourguignon",
                            "isCorrect": false,
                            "reason": "French stew, no pasta."
                        },
                        {
                            "id": "dish-5-0b4de602-b1cc-4740-ad1e-5cb313c1b203",
                            "name": "Smoked Oxtail Pappardelle (Southern interpretation)",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-a2cd6f6f-d786-4ef8-8e2d-2cc5fc8d93dd",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-4878fb35-79cd-4491-b431-9b8a9bc1a546",
                            "name": "balsamic glaze",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-7aeb5b31-25c8-4eeb-bc36-528b76cba847",
                            "name": "Pappardelle pasta",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-d361e032-53e8-42c5-91ff-7153f40d9bb7",
                            "name": "anchovy paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-6c943ae5-b4a2-415d-899f-0e59929696db",
                            "name": "oxtail",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-08d1af14-2296-483b-8ab7-ca14da2cebce",
                            "name": "celery",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-80e5444b-4487-4364-b0bc-fe86a818069b",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-d7262884-2832-4ad6-be91-96a65d7b4b65",
                            "name": "fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-7aa342d9-1a2f-45d1-aef9-68fa505d9587",
                            "name": "parmesan cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-be758844-0304-4e94-9639-bdacf0d3faed",
                            "name": "Star anise",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-11c54ae6-af7c-4207-a90c-e6c0e1cc7acc",
                            "name": "ginger",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-b51bfd6b-80a2-4f1d-8115-fb0a49e6484b",
                            "name": "capers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-11e530ef-ca18-4f25-853d-e3037e519bc7",
                            "name": "smoked paprika",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                }
            ]
        }
    },
    "2025-12-21": {
        "date": "2025-12-21",
        "theme": "Street Food from French Provinces",
        "rounds": {
            "EASY": [
                {
                    "id": "8c37f189-9af0-46a3-b699-8ee563971ad1",
                    "dayId": "2025-12-21-EASY",
                    "targetDish": "Crêpe",
                    "description": "A very thin pancake, served either sweet (with sugar, jam, or Nutella) or savory (with ham, cheese, and egg). A staple of French street food and snack culture.",
                    "cuisine": "France",
                    "region": "Brittany",
                    "originCity": "Quimper",
                    "category": "Dessert/Snack",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Flour",
                        "Eggs",
                        "Milk",
                        "Sugar",
                        "Butter"
                    ],
                    "triviaClues": [
                        "Originally from the region of Brittany, where they are a culinary symbol.",
                        "Can be enjoyed both as a sweet treat or a savory meal.",
                        "A common street food, often prepared fresh at kiosks and markets across France."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-56055ca4-ebcd-4eee-b55e-545c79755240",
                            "name": "Pancake",
                            "isCorrect": false,
                            "reason": "American pancakes are significantly thicker and fluffier, typically made with leavening agents like baking powder, and served in stacks."
                        },
                        {
                            "id": "dish-1-452a4ca5-c282-4846-8448-a4bf1fb4c56f",
                            "name": "Blini",
                            "isCorrect": false,
                            "reason": "Blini are Russian or Ukrainian, typically thicker and made with yeast or buckwheat flour, often served with savory toppings like caviar or sour cream."
                        },
                        {
                            "id": "dish-2-40946160-5e1e-45ef-822f-cda17f2af3dd",
                            "name": "Crêpe",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-279dfebe-420d-4f29-8f00-0eabdf26d13c",
                            "name": "Galette Complète",
                            "isCorrect": false,
                            "reason": "While a savory crêpe, it specifies a particular filling (ham, cheese, egg) and uses buckwheat flour, whereas crêpe can be made with wheat flour and have many fillings."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-300afa37-2241-41b4-8a11-795bd243e4d7",
                            "name": "Rice flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-bc95cb0d-d2b5-4a18-bf14-a6788da78a13",
                            "name": "Yeast",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-7e1de3c7-e5eb-43f2-a965-89bda6f9fd6e",
                            "name": "Baking soda",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-3259ada2-c44f-4082-9b1d-eb79b706b71f",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-6827e57b-267d-468a-9baf-07523a483a6a",
                            "name": "Flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-734147d6-adfa-4c65-8e0e-d980342b985c",
                            "name": "Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-0b683223-5908-4c70-980c-7a5a53ac701b",
                            "name": "Eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-dd60df59-a513-4d1a-93db-cd8d5b05e1e8",
                            "name": "Cream cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-bad7c138-279b-4e0a-bae9-7a94b859a8ea",
                            "name": "Milk",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "26e1d6dd-abec-44bb-8fa8-d71eba47d533",
                    "dayId": "2025-12-21-EASY",
                    "targetDish": "Gaufre (Waffle)",
                    "description": "A crisp, light pastry cooked in a waffle iron, giving it a distinctive grid pattern. Often served warm, dusted with powdered sugar, or topped with whipped cream or chocolate.",
                    "cuisine": "France",
                    "region": "Hauts-de-France",
                    "originCity": "Lille",
                    "category": "Dessert/Snack",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Flour",
                        "Eggs",
                        "Milk",
                        "Sugar",
                        "Butter",
                        "Yeast"
                    ],
                    "triviaClues": [
                        "Its name in English is derived from an Old French word 'wafla'.",
                        "While often associated with Belgium, various forms exist across France, particularly in the North.",
                        "A popular treat at street stalls and fairgrounds."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-b03edd14-e932-4e98-87e2-b83609afebdc",
                            "name": "Churros",
                            "isCorrect": false,
                            "reason": "Churros are fried dough pastries, typically long and ridged, originating from Spain, not waffles."
                        },
                        {
                            "id": "dish-1-fe572ee7-9e2b-429e-9c21-4deae9cb3f8e",
                            "name": "Gaufre (Waffle)",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-d3f3ca55-f58d-4fdf-a993-62c47e4dc536",
                            "name": "Poffertjes",
                            "isCorrect": false,
                            "reason": "These are small, fluffy Dutch pancakes, not waffles, typically served with powdered sugar and butter."
                        },
                        {
                            "id": "dish-3-326a119e-ab9d-4ffb-bd81-3b09e895f24c",
                            "name": "Fritters",
                            "isCorrect": false,
                            "reason": "A general term for various fried dough items, lacking the specific grid pattern and batter consistency of a gaufre."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-1e06d7e6-b922-4a42-973b-7be2a65531a4",
                            "name": "Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-c8d40c10-6982-4f00-a872-5e14cbae54bb",
                            "name": "Chili powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-38df2988-36bb-4cde-892c-0a6c28b19455",
                            "name": "Cornmeal",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-42f812d4-8772-417d-b069-3abd86d142d6",
                            "name": "Eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-43d8c1ec-76ce-4cfe-9693-f82eb9af471d",
                            "name": "Flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-c350914d-c6f8-480e-b2fe-b28ba1542cf6",
                            "name": "Lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-c5792271-4893-4b34-9784-80465bc33d4c",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-c0e2d692-9aaa-4623-b874-8c26a444be39",
                            "name": "Ricotta cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-58b25959-934e-441e-9e7d-99a56b4398dc",
                            "name": "Milk",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "91c62f59-e11d-40d3-afe2-fd8cdbf7227c",
                    "dayId": "2025-12-21-EASY",
                    "targetDish": "Croque Monsieur",
                    "description": "A classic French sandwich made with ham and cheese (typically Gruyère or Emmental), grilled or baked, and often topped with béchamel sauce.",
                    "cuisine": "France",
                    "region": "Île-de-France",
                    "originCity": "Paris",
                    "category": "Savory Snack/Sandwich",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Bread",
                        "Ham",
                        "Gruyère cheese",
                        "Butter",
                        "Milk",
                        "Flour"
                    ],
                    "triviaClues": [
                        "Its name literally translates to 'crunchy mister'.",
                        "First appeared on a Parisian café menu in 1910.",
                        "A 'Croque Madame' is a variation that includes a fried or poached egg on top."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-dead2886-6829-4639-8f98-24ed325d6b04",
                            "name": "Monte Cristo",
                            "isCorrect": false,
                            "reason": "Similar, but often dipped in egg batter and pan-fried or deep-fried, sometimes including turkey, and served with jam or powdered sugar."
                        },
                        {
                            "id": "dish-1-d273b8be-77c3-4666-89df-039ea415bf56",
                            "name": "Grilled Cheese",
                            "isCorrect": false,
                            "reason": "A simpler sandwich, typically just bread and cheese, often without the béchamel or specific ham type."
                        },
                        {
                            "id": "dish-2-4703e446-85f4-4663-9744-b9298536b057",
                            "name": "Croque Monsieur",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-70e028e4-d8bc-42e0-b643-f3c3afaff062",
                            "name": "Welsh Rarebit",
                            "isCorrect": false,
                            "reason": "A British dish of savory cheese sauce poured over toasted bread, lacking the ham and enclosed sandwich structure."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-cd55e714-e0a1-4253-a54d-0446c8654d2e",
                            "name": "Gruyère cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-d94a1de4-8caa-45b7-9bd0-cc5e279aa2a9",
                            "name": "Mustard",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-f57f5e77-870f-48ac-86f8-eb0943d2f25b",
                            "name": "Milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-f100b723-cd4c-4396-b819-e208e2dc15eb",
                            "name": "Lettuce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-0998747b-c4cb-4d65-9b07-746857963684",
                            "name": "Tomato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-20a6b0eb-4265-4a3e-beb7-b020a0b2be46",
                            "name": "Bread",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-d0acd1f1-792f-4216-add4-867afca5af74",
                            "name": "Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-c70caffc-5f32-44e3-a483-e7f8e2188910",
                            "name": "Ham",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-ca253f17-33ff-4b08-af73-97f1deeefb0a",
                            "name": "Turkey",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "be6a4c51-7983-4cdc-8d57-e16ad931c9b6",
                    "dayId": "2025-12-21-EASY",
                    "targetDish": "Pain au Chocolat",
                    "description": "A classic French viennoiserie, a rectangular pastry made from layered, yeasted dough (similar to a croissant) with one or two pieces of dark chocolate in the center.",
                    "cuisine": "France",
                    "region": "Nouvelle-Aquitaine",
                    "originCity": "Bordeaux",
                    "category": "Sweet Pastry/Breakfast",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Flour",
                        "Butter",
                        "Yeast",
                        "Sugar",
                        "Milk",
                        "Chocolate Batons"
                    ],
                    "triviaClues": [
                        "There's a famous linguistic debate in France over whether to call it 'pain au chocolat' or 'chocolatine'.",
                        "It's made from a laminated dough, which gives it its characteristic flaky texture.",
                        "Often enjoyed for breakfast or as an afternoon snack."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-18dec1c7-5880-4d77-8200-5f5ace66b9f0",
                            "name": "Danish Pastry",
                            "isCorrect": false,
                            "reason": "Danish pastries typically have different shapes, richer fillings (like fruit, cream cheese, or nuts), and a slightly different dough composition."
                        },
                        {
                            "id": "dish-1-830c87b7-ddfc-47a6-adba-c23c3e14ea32",
                            "name": "Chocolatine",
                            "isCorrect": false,
                            "reason": "This is a regional name for the same pastry, primarily used in the Southwest of France, not a different dish."
                        },
                        {
                            "id": "dish-2-3b6a4e26-79f5-4159-83bd-390ea0c6f824",
                            "name": "Croissant",
                            "isCorrect": false,
                            "reason": "While similar in dough and lamination, a croissant is typically crescent-shaped and does not contain chocolate filling."
                        },
                        {
                            "id": "dish-3-d912ad9f-dc53-4ea3-9ff8-c009157c9572",
                            "name": "Pain au Chocolat",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-23f4fa1c-d95f-465b-b84f-5956c3e9d1ab",
                            "name": "Milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-69b3342d-27fb-4784-af54-657d7070e018",
                            "name": "Cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-9523db2c-1364-4555-94c6-073eede12bb4",
                            "name": "Flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-38f142d6-c5e3-4511-b679-c522427b67bd",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-9a3584eb-e9c0-48c8-9557-e566a75b9c14",
                            "name": "Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-65cffc85-4e3d-47d0-911c-2129ef74c947",
                            "name": "Cream cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-9ac75425-9ce2-4065-ad23-8ce10960adc2",
                            "name": "Almond paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-7306b3a4-d912-488b-a346-d9485422ff27",
                            "name": "Raisins",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-862c45ef-4a3d-4b48-afbe-d820b5cf38f3",
                            "name": "Sugar",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "a611cac5-253e-4ec6-b9a6-96cac36618dc",
                    "dayId": "2025-12-21-EASY",
                    "targetDish": "Jambon-Beurre",
                    "description": "A quintessential Parisian sandwich, elegantly simple yet deeply satisfying. It consists of a fresh baguette, salted butter, and slices of cured ham.",
                    "cuisine": "France",
                    "region": "Île-de-France",
                    "originCity": "Paris",
                    "category": "Savory Sandwich",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Baguette",
                        "Ham (Jambon de Paris)",
                        "Butter"
                    ],
                    "triviaClues": [
                        "Often called the unofficial sandwich of France due to its immense popularity.",
                        "Its name literally translates to 'ham-butter'.",
                        "Best when made with a fresh, crusty baguette and quality ham."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-f98c193b-7dbc-45ee-bb7a-dbcc88ea59f5",
                            "name": "Croque Monsieur",
                            "isCorrect": false,
                            "reason": "This is a grilled ham and cheese sandwich, often with béchamel, fundamentally different from a cold baguette sandwich."
                        },
                        {
                            "id": "dish-1-6d31d528-3592-4f23-a437-25c7c6c982ab",
                            "name": "Jambon-Beurre",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-c558a4fd-e88c-4bcc-9110-621d7013aa64",
                            "name": "Pan Bagnat",
                            "isCorrect": false,
                            "reason": "A Niçoise sandwich filled with salad niçoise ingredients, soaked in olive oil, much more complex than a jambon-beurre."
                        },
                        {
                            "id": "dish-3-ec61ed11-1f24-486a-87c1-a0fe7fcdfc1a",
                            "name": "Submarine sandwich",
                            "isCorrect": false,
                            "reason": "A generic term for a long roll with various fillings, typically more elaborate than the simple French classic."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-2713269d-e7ad-4b91-b2a5-b810b0223d97",
                            "name": "Cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-946104d6-ffd6-41e7-8f6b-e2d24f942451",
                            "name": "Lettuce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-71d2757d-9409-4d5e-9acf-c16c67bebe44",
                            "name": "Mayonnaise",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-f693b8d7-1c75-4289-9659-7003a6cbff2a",
                            "name": "Baguette",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-e19f79b0-5b94-4752-b9b1-805f75090cc4",
                            "name": "Ham (Jambon de Paris)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-8e15685a-a8f1-4967-be10-abcc71724854",
                            "name": "Tomato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-6a30e21a-d922-4d8a-a839-c70a90212e5f",
                            "name": "Butter",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                }
            ],
            "MEDIUM": [
                {
                    "id": "ea65e37a-370b-46c1-9d22-d6fc5c394c93",
                    "dayId": "2025-12-21-MEDIUM",
                    "targetDish": "Galette Saucisse",
                    "description": "A specialty from Brittany, this savory street food consists of a grilled pork sausage wrapped in a thin buckwheat crêpe (galette).",
                    "cuisine": "France",
                    "region": "Brittany",
                    "originCity": "Rennes",
                    "category": "Savory Snack/Street Food",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Buckwheat flour",
                        "Water",
                        "Salt",
                        "Pork Sausage"
                    ],
                    "triviaClues": [
                        "Often found at outdoor markets, festivals, and sporting events in Brittany.",
                        "Considered the 'French Hot Dog' by some, due to its handheld, easy-to-eat nature.",
                        "The traditional sausage is usually plain, not heavily spiced, to let the quality of the pork shine."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-72bdfda4-70b7-4366-b9ec-25b386e4392d",
                            "name": "Hot Dog",
                            "isCorrect": false,
                            "reason": "Hot dogs use a bun made of leavened bread and different types of sausages, distinct from the buckwheat galette and specific Breton sausage."
                        },
                        {
                            "id": "dish-1-26cf5f4e-e9d0-4870-9679-d03ef1d854a4",
                            "name": "Bratwurst",
                            "isCorrect": false,
                            "reason": "Bratwurst is a German sausage, typically served with mustard and a bun or potatoes, not a buckwheat crêpe."
                        },
                        {
                            "id": "dish-2-a60ccbfd-d704-4d67-bf18-ea22d78c1d9b",
                            "name": "Galette Saucisse",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-e7ca792b-2550-420b-88e6-802a6d846a84",
                            "name": "Crêpe",
                            "isCorrect": false,
                            "reason": "While it uses a crêpe-like wrapper, the 'galette' specifically refers to a buckwheat version, and the sausage filling makes it a distinct dish."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-71533d54-aafd-4eb8-bfed-3c8b203c48b3",
                            "name": "Buckwheat flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-34159da7-38fa-4fa2-9065-65f35f79f748",
                            "name": "Ketchup",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-46a2f50b-00c8-4fed-94fd-7b4c6f402126",
                            "name": "Beef",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-ff9d3e47-24d8-4fe1-84b5-d7c298263fba",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-f939b04f-7e4a-48cc-a98f-9c92e33958e1",
                            "name": "Wheat flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-ea9014df-06ce-4b25-a737-bbba6604b89a",
                            "name": "Eggs",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-ac810d2c-6b53-40e6-a196-8db151d705fe",
                            "name": "Rice",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-66a2f1b9-2ed4-4430-8cd2-aa830f4d08f4",
                            "name": "Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-df5e8a47-988c-491b-85b5-c06784c7d057",
                            "name": "Pork Sausage",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-39ca8be0-8434-43cc-b52b-06d5780aa070",
                            "name": "Salt",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "6a567529-ae5c-4fa7-a8fd-28327669b4bd",
                    "dayId": "2025-12-21-MEDIUM",
                    "targetDish": "Socca",
                    "description": "A thin, savory pancake or flatbread made from chickpea flour, olive oil, and water, traditionally cooked in a wood-fired oven until crisp. A specialty of Nice.",
                    "cuisine": "France",
                    "region": "Provence-Alpes-Côte d'Azur",
                    "originCity": "Nice",
                    "category": "Savory Snack/Street Food",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Chickpea flour",
                        "Water",
                        "Olive oil",
                        "Salt",
                        "Black pepper"
                    ],
                    "triviaClues": [
                        "Best eaten hot, immediately after being cooked, often seasoned with fresh black pepper.",
                        "A popular and inexpensive street food found in the markets of Nice and the surrounding French Riviera.",
                        "Its slightly smoky flavor often comes from being baked in traditional wood-fired ovens."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-7cbd67c5-459a-4f07-96ec-770686ba0947",
                            "name": "Pissaladière",
                            "isCorrect": false,
                            "reason": "Another Niçoise specialty, but it's a thick onion tart with anchovies and olives, not a thin chickpea pancake."
                        },
                        {
                            "id": "dish-1-ff8bf82a-9108-47ec-be6e-70cb11f2b127",
                            "name": "Farinata",
                            "isCorrect": false,
                            "reason": "While very similar and made from chickpea flour, farinata is an Italian dish, typically from Liguria, differing subtly in texture and preparation."
                        },
                        {
                            "id": "dish-2-c10ffdab-a427-4476-8882-04d73a86ab5a",
                            "name": "Crêpe",
                            "isCorrect": false,
                            "reason": "Crêpes are typically made from wheat or buckwheat flour, not chickpea flour, resulting in a different flavor and texture."
                        },
                        {
                            "id": "dish-3-c3eb19e1-df70-433b-9478-ce784204d207",
                            "name": "Socca",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-e95fe362-3a32-442c-9e46-8528fbf6ae3d",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-f20c2942-6f93-47c0-ba59-8e1213a570be",
                            "name": "Yeast",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-dd744b44-66a2-4582-bcf2-4d2b270bf154",
                            "name": "Black pepper",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-7e1d6095-1365-4e19-818b-f7e965c887af",
                            "name": "Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-52bff4e4-e6d8-430f-9b62-e68c71e46b4b",
                            "name": "Olive oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-41688fe6-75e9-4ba1-9824-787a1e10d369",
                            "name": "Wheat flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-323feb73-f664-43d2-b524-9d3d1a5e6668",
                            "name": "Potato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-f698bf78-1d63-4dbf-855f-76ecce175373",
                            "name": "Salt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-48aca63a-c684-4729-b68f-7a62e3a42bc7",
                            "name": "Eggs",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-94589c4d-02bd-490a-8781-2b43b9bf5107",
                            "name": "Chickpea flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-dcdab539-6f1d-441a-9c8b-0ae1ae4202e7",
                            "name": "Corn flour",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "8d498b75-6895-4e45-b82e-614939c433ec",
                    "dayId": "2025-12-21-MEDIUM",
                    "targetDish": "Pissaladière",
                    "description": "A savory tart from the Provence region, consisting of a thick bread-like dough topped with slow-cooked caramelized onions, anchovy fillets, and Niçoise olives.",
                    "cuisine": "France",
                    "region": "Provence-Alpes-Côte d'Azur",
                    "originCity": "Nice",
                    "category": "Savory Tart/Street Food",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Bread dough",
                        "Onions",
                        "Anchovies",
                        "Olives",
                        "Olive oil"
                    ],
                    "triviaClues": [
                        "Often mistaken for a pizza without cheese, but it is a distinct Provençal specialty.",
                        "Its name is thought to derive from 'pissalat', a fermented anchovy paste, which was historically used.",
                        "The onions are cooked for a long time until they are deeply caramelized and sweet."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-f191556c-d767-4576-ab9e-fa1e64f8eecf",
                            "name": "Pizza",
                            "isCorrect": false,
                            "reason": "While similar in concept, pizza typically includes tomato sauce and cheese, which are absent in traditional pissaladière."
                        },
                        {
                            "id": "dish-1-3073dcb4-1783-479b-a8c1-4c4e3b038366",
                            "name": "Flammekueche",
                            "isCorrect": false,
                            "reason": "An Alsatian specialty (German border region), a very thin crust tart topped with crème fraîche, onions, and bacon, distinct from pissaladière's base and toppings."
                        },
                        {
                            "id": "dish-2-6a0f1166-8705-4407-ac38-1d598fb9b6d2",
                            "name": "Fougasse",
                            "isCorrect": false,
                            "reason": "A Provençal flatbread often flavored with herbs and olive oil, but it's bread itself, not a tart with specific toppings."
                        },
                        {
                            "id": "dish-3-d570c332-9e1b-4191-8365-b1d0f5d11e9e",
                            "name": "Pissaladière",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-e927377b-392b-4f70-9374-bc4f256682e1",
                            "name": "Bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-9c8236c4-332c-450c-940a-b41f89c06737",
                            "name": "Mushrooms",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-f82afa38-af67-4f2d-afc2-c464cc244953",
                            "name": "Garlic",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-dca86b8b-bcf2-493c-a68a-40f76823acde",
                            "name": "Cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-6e64f80c-5993-458e-a28a-5db91e67ceaa",
                            "name": "Onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-332fc3c1-2797-4a8b-8fd5-f178f1d210e1",
                            "name": "Tomato sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-75ccb3d4-4a86-4307-a78f-53ede3b3dc2e",
                            "name": "Anchovies",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-a94d6fd5-67d8-4aa2-81ab-5103c0643b01",
                            "name": "Olive oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-abac58f2-dca6-46a4-952d-3d12484ee518",
                            "name": "Bread dough",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-ad8360ac-9874-41e2-a485-0a28f45e59dc",
                            "name": "Olives",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-a49fa0fc-5902-4f85-9feb-25574c9b97b5",
                            "name": "Capers",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "caccd98f-9b5f-4cc9-b0a6-708dcca8e01c",
                    "dayId": "2025-12-21-MEDIUM",
                    "targetDish": "Far Breton",
                    "description": "A dense, flan-like cake or pudding from Brittany, traditionally studded with prunes. It has a rich, slightly chewy texture and is a popular regional dessert.",
                    "cuisine": "France",
                    "region": "Brittany",
                    "originCity": "Vannes",
                    "category": "Dessert/Sweet Snack",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Flour",
                        "Eggs",
                        "Milk",
                        "Sugar",
                        "Prunes",
                        "Butter"
                    ],
                    "triviaClues": [
                        "A traditional dessert from Brittany, often enjoyed warm or at room temperature.",
                        "The texture is firm but moist, often described as a cross between a flan and a dense cake.",
                        "While prunes are traditional, some variations may include apples or raisins, though less common."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-f37d3401-4c5a-46fd-ae14-d9e122408fe8",
                            "name": "Far Breton",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-4362fafd-8f1e-4080-8da1-56e8efa2333b",
                            "name": "Crème brûlée",
                            "isCorrect": false,
                            "reason": "Crème brûlée is a custard with a caramelized sugar topping, very different in texture and consistency from a dense cake/pudding."
                        },
                        {
                            "id": "dish-2-21076fc0-8b83-4947-b330-2c5b76521153",
                            "name": "Rice Pudding",
                            "isCorrect": false,
                            "reason": "Rice pudding is made with rice, milk, and sugar, resulting in a grainier texture, distinct from the flour-based Far Breton."
                        },
                        {
                            "id": "dish-3-d6f5a478-47dd-4013-9c54-af75462d55a6",
                            "name": "Clafoutis",
                            "isCorrect": false,
                            "reason": "Clafoutis is a French baked dessert, similar in texture to a thick pancake, but traditionally made with unpitted cherries, not prunes, and is usually lighter."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-d7326cc2-32a9-4556-a1be-aaee810ea15b",
                            "name": "Yeast",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-88606e6a-44b5-4c54-b87a-0ddb7bbdd14b",
                            "name": "Cocoa powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-b9038fc8-d8ec-452a-a686-8a10269449fc",
                            "name": "Apples",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-869c702f-2946-42b1-8952-802a4e39e912",
                            "name": "Raisins",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-cb745915-81b3-4612-95a7-ccbaf87f7a14",
                            "name": "Prunes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-cde1bad1-1858-493a-95c1-1937b73f801f",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-26b78074-ee33-4365-b43a-e74f6f303f15",
                            "name": "Eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-c84d7602-d661-4fc1-8f5a-0176a9fd66c0",
                            "name": "Almond flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-833060ad-59b6-4eb3-82a8-2883d7fadedf",
                            "name": "Cream cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-6f85ed5f-dce1-44a3-b69d-dbc5274f0813",
                            "name": "Milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-11390d2e-f426-4c78-befd-962c2a6bf5b3",
                            "name": "Flour",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "5bde367f-c598-48c9-b680-ec6fa12eb842",
                    "dayId": "2025-12-21-MEDIUM",
                    "targetDish": "Kouign-amann",
                    "description": "A round, crusty cake from Brittany, known for its buttery, flaky layers similar to puff pastry, but with sugar folded in, creating a caramelized crust.",
                    "cuisine": "France",
                    "region": "Brittany",
                    "originCity": "Douarnenez",
                    "category": "Sweet Pastry/Dessert",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Flour",
                        "Butter",
                        "Sugar",
                        "Yeast",
                        "Water",
                        "Salt"
                    ],
                    "triviaClues": [
                        "Its name means 'butter cake' in the Breton language.",
                        "Originated in the town of Douarnenez in Brittany around 1860.",
                        "Known for its perfect balance of crispy, flaky, buttery, and slightly salty layers."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-a288e6ce-5754-4ae2-82ed-65e11ca65b76",
                            "name": "Croissant",
                            "isCorrect": false,
                            "reason": "While sharing laminated dough, Kouign-amann uses significantly more butter and sugar, resulting in a dense, caramelized, rather than airy, texture."
                        },
                        {
                            "id": "dish-1-dd024c46-add9-4f5f-8a5e-ef67fbe2c13d",
                            "name": "Danish Pastry",
                            "isCorrect": false,
                            "reason": "Danish pastries are typically lighter, often filled with fruit or cream cheese, and lack the intense caramelization and butter content of Kouign-amann."
                        },
                        {
                            "id": "dish-2-1332a129-5e58-4228-8fd4-6666e3e951d3",
                            "name": "Kouign-amann",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-0452bde4-d35c-4952-bf24-3b4e135b0286",
                            "name": "Puff Pastry",
                            "isCorrect": false,
                            "reason": "Puff pastry does not contain yeast and is typically used for savory applications or lighter sweet items, lacking the rich, dense quality."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-2328adb3-1f3a-46cc-9d5b-1390c90a1fcc",
                            "name": "Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-c788dea6-1029-49e6-97c7-2e817b3b4b31",
                            "name": "Cream",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-b0beb74a-a6a7-4fec-af5d-7c9f2774450a",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-c108513a-9878-4fd7-8468-0a8e946947ca",
                            "name": "Almond paste",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-4cc92ce4-da37-4430-ac2e-72ef0b58a1ca",
                            "name": "Eggs",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-e7915e25-7f9a-4723-be7a-8ec7083b6e99",
                            "name": "Chocolate",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-7330ca16-d699-42e5-9a0d-e9dfa3ece686",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-7caed4e5-5e55-4185-ad12-14ee33982a50",
                            "name": "Caramel",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-02a9f542-c3be-4e92-aa51-b88bc2b74329",
                            "name": "Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-7d654833-4b55-425a-87ea-57f16e0e93c1",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-37ed5d0f-9642-4f2d-9a85-634471664926",
                            "name": "Flour",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                }
            ],
            "HARD": [
                {
                    "id": "fc0b15f6-5bfc-4a0c-87d4-d099b19b5c21",
                    "dayId": "2025-12-21-HARD",
                    "targetDish": "Aligot",
                    "description": "A traditional dish from the Auvergne region, made from mashed potatoes blended with Tome fraîche cheese, garlic, and butter, stretched until it forms an elastic, silky consistency.",
                    "cuisine": "France",
                    "region": "Occitanie",
                    "originCity": "Laguiole",
                    "category": "Savory Side/Street Food",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Potatoes",
                        "Tome fraîche cheese",
                        "Garlic",
                        "Butter",
                        "Cream",
                        "Salt"
                    ],
                    "triviaClues": [
                        "Known for its unique elastic texture, achieved by vigorous stirring and stretching.",
                        "Traditionally served at village fêtes and markets, often alongside roasted sausage.",
                        "It originated in the Aubrac region, historically made by monks for pilgrims walking the Way of St. James."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-08df048e-3f6a-46b5-903d-cac4dc005862",
                            "name": "Tartiflette",
                            "isCorrect": false,
                            "reason": "A Savoyard dish made with potatoes, reblochon cheese, lardons, and onions, baked as a gratin, lacking the distinctive stretchy consistency."
                        },
                        {
                            "id": "dish-1-3b9501d9-c8ac-42a9-834d-e52d9b30d3f2",
                            "name": "Aligot",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-0a954661-bc07-4cb9-bc3f-e34885a8564e",
                            "name": "Raclette",
                            "isCorrect": false,
                            "reason": "A dish where cheese is melted and scraped onto potatoes, cured meats, and pickles, not incorporated into mashed potatoes."
                        },
                        {
                            "id": "dish-3-a71c485b-c0f9-4868-891d-e43dc1ccd6d5",
                            "name": "Fondue",
                            "isCorrect": false,
                            "reason": "Fondue is a Swiss/French dish of melted cheese served in a communal pot for dipping, not a potato-based dish with an elastic texture."
                        },
                        {
                            "id": "dish-4-48c13883-ddae-4bb3-8b3e-e8a568e5eb34",
                            "name": "Pommes Dauphinoise",
                            "isCorrect": false,
                            "reason": "Sliced potatoes baked in cream and garlic, a gratin, not a mashed and stretched dish."
                        },
                        {
                            "id": "dish-5-0d9d014c-3071-47d8-9bbe-7c49e0a82bac",
                            "name": "Poutine",
                            "isCorrect": false,
                            "reason": "A Canadian dish of french fries topped with cheese curds and gravy, completely different ingredients and origin."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-2989cfa1-8ae3-4606-b9dc-6f7b094216c2",
                            "name": "Cream",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-fe72cc8d-df25-451b-af95-5942f52a8195",
                            "name": "Nutmeg",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-0491ff4b-d1ce-4d00-aeec-119e2b093e1e",
                            "name": "Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-da21105f-8c8d-432f-8c0a-fde36598b7db",
                            "name": "Tome fraîche cheese",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-e3e75162-eb7c-459c-8cf0-7ed5a60ecb3c",
                            "name": "Potatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-7c28d1c1-c7cd-4962-a276-81c5453e3f1b",
                            "name": "Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-c77fa0bf-2e6a-4128-a1bc-9ad316bbccb5",
                            "name": "Cheddar cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-4fee9f9d-faeb-486d-9c08-1e2b8585e1dc",
                            "name": "Breadcrumbs",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-23532164-86d4-450a-9657-a0cf40a2ac91",
                            "name": "Bacon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-25f0a008-9327-4da0-8794-a9e439499e98",
                            "name": "Garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-afacc324-b42a-4b97-9d22-37d0986a1341",
                            "name": "Herbs de Provence",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-aeeb1c66-3b0e-4a13-96a5-1ecae3659ef5",
                            "name": "Mushrooms",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-2554f8b5-5dcc-4e71-bd1e-f35fb959c06a",
                            "name": "Onion",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "17238a94-9e09-4a6a-817b-2267f25b3cb7",
                    "dayId": "2025-12-21-HARD",
                    "targetDish": "Fouace Aveyronnaise",
                    "description": "A sweet, crown-shaped brioche bread from Aveyron, often flavored with orange blossom water or rum. It's tender, slightly dense, and traditionally consumed during festive occasions.",
                    "cuisine": "France",
                    "region": "Occitanie",
                    "originCity": "Rodez",
                    "category": "Sweet Bread/Snack",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Flour",
                        "Eggs",
                        "Butter",
                        "Sugar",
                        "Yeast",
                        "Orange Blossom Water"
                    ],
                    "triviaClues": [
                        "Its characteristic crown shape symbolizes the sun or a flower.",
                        "Traditionally consumed during Easter or other local festivals in the Aveyron region.",
                        "The flavor is often enhanced with orange blossom water, giving it a distinctive floral aroma."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-e4f70d88-cf21-4448-ab1b-aa39bb7a4cc0",
                            "name": "Brioche",
                            "isCorrect": false,
                            "reason": "While a type of brioche, 'fouace' refers to a specific regional variant with its distinct crown shape and traditional flavorings."
                        },
                        {
                            "id": "dish-1-042c9a87-f26a-4205-bb41-a464b2261da4",
                            "name": "Fouace Aveyronnaise",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-227ac629-1529-42d0-8c28-a78284e489bb",
                            "name": "King Cake (Galette des Rois)",
                            "isCorrect": false,
                            "reason": "A seasonal Epiphany cake, typically a puff pastry tart with frangipane or a brioche with candied fruit, used for a specific celebration."
                        },
                        {
                            "id": "dish-3-4a73f0be-2d53-4cae-bccc-08cda7eb0c90",
                            "name": "Panettone",
                            "isCorrect": false,
                            "reason": "An Italian sweet bread, typically cylindrical, with candied fruits and raisins, consumed during Christmas."
                        },
                        {
                            "id": "dish-4-8326283d-274c-4939-9cb9-cbb61432f74e",
                            "name": "Gâche Vendéenne",
                            "isCorrect": false,
                            "reason": "Another regional brioche from Vendée, but with a different shape and often flavored with vanilla and brandy."
                        },
                        {
                            "id": "dish-5-34d5781b-ea7b-4cea-872e-1d6281c5664f",
                            "name": "Kugelhopf",
                            "isCorrect": false,
                            "reason": "An Alsatian yeast cake, often baked in a fluted Bundt pan and containing raisins and almonds, distinct from the fouace shape and flavoring."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-5c3b139b-b170-4ae0-8194-937c58ffe22c",
                            "name": "Eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-100cac69-e5d4-4b4f-8f45-daa99efba105",
                            "name": "Flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-29c1e372-99a5-4f64-98ec-748984875813",
                            "name": "Almond flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-6b275af7-739c-4eb6-ba4d-7b3f8d38f77d",
                            "name": "Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-623be11f-aca7-4c13-b771-27acc81398f3",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-c93e3e0a-2db9-424c-b36d-880af94ada92",
                            "name": "Lemon zest",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-56359107-e08d-4581-b6c1-c911beffc4c7",
                            "name": "Chocolate chips",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-d28f8d3b-8b78-4c59-b074-8f99a4691aed",
                            "name": "Dried fruit",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-80067b0e-767a-4519-8011-b4585ee9aa8a",
                            "name": "Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-caef781a-0bdb-40b5-91bb-a3c0f9001c5e",
                            "name": "Cinnamon",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-9e3cec7b-8e4e-44a5-906b-119581bdf990",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-c7a825fc-1ff2-4b6f-8dd8-fbad4364d7b7",
                            "name": "Anise",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-0130bca9-17a1-4cda-a590-fd12a53dac40",
                            "name": "Cream cheese",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "569c0287-f827-4f1a-a17d-84cf06079e8e",
                    "dayId": "2025-12-21-HARD",
                    "targetDish": "Chichis Fregi (Chichis marseillais)",
                    "description": "A deep-fried dough pastry from Marseille, similar to a churro but often thicker and softer inside, typically served dusted with sugar. A popular treat found at fairs and beaches.",
                    "cuisine": "France",
                    "region": "Provence-Alpes-Côte d'Azur",
                    "originCity": "Marseille",
                    "category": "Sweet Snack/Dessert",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Flour",
                        "Water",
                        "Yeast",
                        "Sugar",
                        "Oil (for frying)"
                    ],
                    "triviaClues": [
                        "A cherished specialty of Marseille, particularly enjoyed during local festivals and by the seaside.",
                        "Often served simply, dusted with granulated sugar, allowing the flavor of the fried dough to shine.",
                        "The name 'chichi' is thought to be an onomatopoeia for the sound of the frying dough."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-d9e51a64-70d2-46c0-90e9-9961316ea8c6",
                            "name": "Beignet",
                            "isCorrect": false,
                            "reason": "French beignets are typically square, airy, and yeast-leavened, often filled, making them distinct from the ridged chichis."
                        },
                        {
                            "id": "dish-1-2531e702-395a-456a-9718-ca9b988a04c9",
                            "name": "Buñuelos",
                            "isCorrect": false,
                            "reason": "Spanish or Latin American fried dough balls or fritters, often lighter and differently shaped, sometimes incorporating fruit."
                        },
                        {
                            "id": "dish-2-979610d6-a6f0-43a8-9b9d-aae4c04fcf06",
                            "name": "Churros",
                            "isCorrect": false,
                            "reason": "Spanish in origin, churros are typically thinner, crispier, and extruded through a star-tipped nozzle, differing in texture from chichis fregi."
                        },
                        {
                            "id": "dish-3-a4ee086e-863d-4505-aff8-3170da262592",
                            "name": "Fritters",
                            "isCorrect": false,
                            "reason": "A general term for various fried dough items, lacking the specific shape, regional association, and typical serving style of chichis."
                        },
                        {
                            "id": "dish-4-f53eb777-5835-44fd-8ca4-6f548258b040",
                            "name": "Chichis Fregi (Chichis marseillais)",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-89474b34-9d2c-4546-92c2-f0a599df7853",
                            "name": "Doughnut",
                            "isCorrect": false,
                            "reason": "Doughnuts are typically round and may be cake-based or yeast-risen, often glazed or filled, distinct from the shape and simple sugar dusting of chichis."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-5d2fb1d6-181e-4fb3-869a-035bd456ac61",
                            "name": "Fruit jam",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-d23db234-868c-483b-8561-cf7eae3c44cf",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-689c5be3-2844-4fb0-81c6-c88441c45295",
                            "name": "Rice flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-df7f3054-7015-4c35-bddf-0038beaf807f",
                            "name": "Flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-c85e1b26-53ae-4cb2-8dff-753031f765f2",
                            "name": "Oil (for frying)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-1832fea9-87aa-48a4-b817-834b9dfde7cc",
                            "name": "Eggs",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-8a7d16db-d525-40dd-9578-99a214b5bf64",
                            "name": "Vanilla extract",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-6a3814b3-d5fe-4542-8f31-db860c146282",
                            "name": "Chocolate sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-2fee7da1-076f-4c7d-b4c1-97b70f03efa2",
                            "name": "Milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-435d40fb-e62d-4d52-9d8d-18a9e01ebce8",
                            "name": "Cornstarch",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-a524903e-dad7-4a59-bad7-de9a372664d5",
                            "name": "Water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-ca1847a2-8a40-416c-8199-c5451468678b",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-d32ac36c-945b-4a09-ad12-a921687c09a1",
                            "name": "Baking powder",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "c21a4514-80f4-4d73-a164-088381bd5151",
                    "dayId": "2025-12-21-HARD",
                    "targetDish": "Tarte Tropézienne",
                    "description": "A brioche-based dessert from Saint-Tropez, consisting of a large, soft brioche filled with a rich, creamy mixture of pastry cream and butter cream, dusted with pearl sugar.",
                    "cuisine": "France",
                    "region": "Provence-Alpes-Côte d'Azur",
                    "originCity": "Saint-Tropez",
                    "category": "Dessert/Sweet Pastry",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Flour",
                        "Eggs",
                        "Butter",
                        "Sugar",
                        "Yeast",
                        "Milk",
                        "Pastry cream",
                        "Whipped cream",
                        "Pearl Sugar"
                    ],
                    "triviaClues": [
                        "It was named by actress Brigitte Bardot in 1955, while she was filming 'And God Created Woman' in Saint-Tropez.",
                        "The secret to its unique flavor lies in the blend of two different creams in its filling.",
                        "Best enjoyed chilled, with the pearl sugar providing a delightful textural contrast."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-0f3996c8-b7c8-4c29-8671-84ab2b37da74",
                            "name": "Crème Pâtissière tart",
                            "isCorrect": false,
                            "reason": "Refers to a tart with a standard shortcrust pastry base and pastry cream, not a brioche."
                        },
                        {
                            "id": "dish-1-dc76f118-a6a4-40b0-ac7d-c096a2f5ea31",
                            "name": "Mille-feuille",
                            "isCorrect": false,
                            "reason": "Made from layers of puff pastry and pastry cream, very different from a brioche-based cake."
                        },
                        {
                            "id": "dish-2-f5612eb7-9bc1-479f-a3d2-2d8130f64cb5",
                            "name": "Tarte Tropézienne",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-7198cb55-ee95-4f71-8546-c4a326a8c78a",
                            "name": "St. Honoré",
                            "isCorrect": false,
                            "reason": "A complex cake involving choux pastry, cream, and caramelized sugar, not a brioche base."
                        },
                        {
                            "id": "dish-4-f1df42e3-10da-4110-8609-b067a61e0498",
                            "name": "Brioche à Tête",
                            "isCorrect": false,
                            "reason": "A simple, unadorned brioche roll, not a cream-filled cake."
                        },
                        {
                            "id": "dish-5-3ed27f47-915f-48f4-b222-5655200675d5",
                            "name": "Paris-Brest",
                            "isCorrect": false,
                            "reason": "A choux pastry ring filled with praline-flavored cream, distinct from the brioche base and cream filling of Tarte Tropézienne."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-4a09def9-7dc2-4ba0-b067-a5de0c2975a7",
                            "name": "Sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-7e6dfa76-2d6d-4546-88ce-8a15baf3f4a1",
                            "name": "Almond flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-2f2aa970-aee7-43bb-bd7c-9eb5352d1b96",
                            "name": "Lemon zest",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-5ab18ae2-5fa4-4a12-8e06-46b892a0854f",
                            "name": "Cognac",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-18fbc8d0-8c99-4466-b0aa-a03b88947bd2",
                            "name": "Gelatin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-26b47384-bebe-4f99-8884-25dd18ad5de8",
                            "name": "Ricotta cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-32c1a2eb-ac4e-4cc5-b0d5-1a79f0170ecb",
                            "name": "Fruit jam",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-e60c0e4b-f22d-4f7e-b82e-eef01333f2dc",
                            "name": "Yeast",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-5b222121-58ec-42ce-823b-3b33c6754a44",
                            "name": "Marzipan",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-15f53dd1-46e9-499b-b4c5-ca9177250ee0",
                            "name": "Flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-274feccb-8564-46b4-b65b-f599faf57133",
                            "name": "Chocolate ganache",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-a1894273-4ede-4bc5-8311-778e90d35860",
                            "name": "Butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-1816b994-5fd1-4d83-852f-78b558365e07",
                            "name": "Eggs",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "482f1aa3-d81e-4e24-858e-04d640d6c7e5",
                    "dayId": "2025-12-21-HARD",
                    "targetDish": "Pan Bagnat",
                    "description": "A classic Niçoise sandwich, essentially a Salade Niçoise served inside a rustic bread roll that has been 'bathed' or soaked with olive oil, creating a moist and flavorful meal.",
                    "cuisine": "France",
                    "region": "Provence-Alpes-Côte d'Azur",
                    "originCity": "Nice",
                    "category": "Savory Sandwich/Street Food",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇫🇷",
                    "countryCode": "FR",
                    "mainIngredients": [
                        "Round bread roll",
                        "Olive oil",
                        "Tuna",
                        "Anchovies",
                        "Hard-boiled eggs",
                        "Tomatoes",
                        "Cucumbers",
                        "Bell peppers",
                        "Olives",
                        "Garlic",
                        "Basil"
                    ],
                    "triviaClues": [
                        "Its name translates from Niçois to 'bathed bread', referring to the olive oil-soaked bread.",
                        "It is traditionally a meal prepared in advance, allowing the flavors to meld as the bread absorbs the oil and juices.",
                        "A popular portable lunch or snack, often enjoyed by workers or beachgoers on the French Riviera."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-9d20aa72-548b-4fed-8106-35562e136272",
                            "name": "Salade Niçoise",
                            "isCorrect": false,
                            "reason": "While it contains the same ingredients, Salade Niçoise is a salad served on a plate, not in a bread roll."
                        },
                        {
                            "id": "dish-1-b92c3299-fd33-4a7a-b04c-87b1823d0d4f",
                            "name": "Pan Bagnat",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-db8e59f7-7920-423c-a74e-3a22d40ae65c",
                            "name": "Submarine Sandwich",
                            "isCorrect": false,
                            "reason": "A generic term for a long roll with cold cuts and vegetables, typically not 'bathed' in olive oil or featuring the specific Niçoise ingredients."
                        },
                        {
                            "id": "dish-3-3827da4b-e68f-4e76-ad15-d1e91ca1d324",
                            "name": "Muffuletta",
                            "isCorrect": false,
                            "reason": "A sandwich from New Orleans with Italian origins, featuring an olive salad and various meats and cheeses, on a specific round loaf."
                        },
                        {
                            "id": "dish-4-64e8a97c-e94d-4f0e-9608-c6260a2c194b",
                            "name": "Club Sandwich",
                            "isCorrect": false,
                            "reason": "A multi-layered sandwich typically with toasted bread, chicken/turkey, bacon, lettuce, tomato, and mayonnaise, very different fillings and presentation."
                        },
                        {
                            "id": "dish-5-db0d62cb-eb74-456c-a7ee-ce636c0b0bbd",
                            "name": "Jambon-Beurre",
                            "isCorrect": false,
                            "reason": "A very simple French sandwich with ham and butter, lacking the extensive vegetable, tuna, and anchovy fillings."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-d77cb2d6-c023-4ecd-80cb-48e22a20c871",
                            "name": "Olive oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-1c8733d5-8336-4e00-8509-73f5897c16b8",
                            "name": "Pickles",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-749d62f3-f50e-4603-8f0c-069ff3ef4de2",
                            "name": "Potato salad",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-674ba274-2a30-4e70-9a54-3d732d92cab4",
                            "name": "Roast beef",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-453ea08b-522f-450b-934e-9fa0a21548ed",
                            "name": "Anchovies",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-2de89197-f5e3-46b3-a9dc-52bb7455be85",
                            "name": "Balsamic vinegar",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-60845e99-2cf3-436c-afa0-8298e5ee5375",
                            "name": "Hard-boiled eggs",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-4357d653-fe6e-4074-a593-b700dc52a71b",
                            "name": "Chicken",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-c6f2ddf8-e261-4193-88db-4cceafff824c",
                            "name": "Mayonnaise",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-b267b4d2-1d5b-466f-b209-90cea4289de3",
                            "name": "Lettuce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-f0025aeb-fec2-46a3-a8d8-b2886fa572ec",
                            "name": "Cheese",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-6f32e516-0b36-4253-b7ec-5cd7889cadf1",
                            "name": "Round bread roll",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-38e77795-fa44-4599-bcb1-52f2b20320e3",
                            "name": "Tuna",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                }
            ]
        }
    },
    "2025-12-22": {
        "date": "2025-12-22",
        "theme": "Celebratory Feast from Indian Subcontinent",
        "rounds": {
            "EASY": [
                {
                    "id": "b4306683-01f2-49e0-a836-8f760d3b46c2",
                    "dayId": "2025-12-22-EASY",
                    "targetDish": "Biryani",
                    "description": "A fragrant, layered rice dish cooked with meat (or vegetables), spices, and often saffron. A festive centerpiece often served at celebrations across the Indian subcontinent.",
                    "cuisine": "India",
                    "region": "Pan-Indian Subcontinent",
                    "originCity": "Delhi",
                    "category": "Main Course",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "Basmati rice",
                        "meat (chicken/mutton)",
                        "yogurt",
                        "fried onions",
                        "whole spices",
                        "ginger-garlic paste",
                        "saffron"
                    ],
                    "triviaClues": [
                        "This dish is famously layered and known for its aromatic fragrance.",
                        "Often considered the ultimate celebratory dish, served at weddings and festivals.",
                        "While having many regional variations, it traces its roots back to the Mughal Empire.",
                        "One of its key components is long-grain basmati rice, cooked with meat and spices."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-23db5534-316d-4696-98f0-140603dca5e1",
                            "name": "Korma",
                            "isCorrect": false,
                            "reason": "A creamy curry, not a rice-based dish."
                        },
                        {
                            "id": "dish-1-82ab9c33-cb38-49a2-8ada-aa92124b87e2",
                            "name": "Biryani",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-c5a4db90-7643-41b9-8e60-8e9e19c25b59",
                            "name": "Pulao",
                            "isCorrect": false,
                            "reason": "Similar rice dish but typically simpler and not layered."
                        },
                        {
                            "id": "dish-3-5395d231-ccf3-4c7a-9d94-c7db3ce43f01",
                            "name": "Chicken Tikka Masala",
                            "isCorrect": false,
                            "reason": "A tomato-based chicken curry, not a layered rice dish."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-1abb7ffb-faef-478b-98ed-0d7f5f6dc09d",
                            "name": "avocado oil",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-743d7652-8b22-471c-a10d-193b7cb56710",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-221fdb2d-fc34-49f9-9a2d-0e158798945c",
                            "name": "yogurt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-1f2f2088-40a2-40f9-84d4-43431711a389",
                            "name": "Basmati rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-f2dca6f2-cf06-4498-81fe-de4affcf4c59",
                            "name": "whole spices",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-d3c02399-34d6-4f47-90aa-a7d6727aa5fb",
                            "name": "fish sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-248ba396-1935-45d0-a162-29ae1c9eacb0",
                            "name": "pasta",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-ccd1ab1f-154f-43f5-8373-e54916b0df0e",
                            "name": "fried onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-49395a76-87e2-4c75-b728-b79496ddf059",
                            "name": "meat (chicken/mutton)",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "a2e15148-3c4a-4048-a0f3-3d182cea1c43",
                    "dayId": "2025-12-22-EASY",
                    "targetDish": "Butter Chicken",
                    "description": "A rich, creamy, and mildly spiced tomato-based curry with tender pieces of marinated chicken. It's a globally recognized North Indian delicacy.",
                    "cuisine": "India",
                    "region": "North India",
                    "originCity": "Delhi",
                    "category": "Main Course",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "chicken",
                        "tomatoes",
                        "butter",
                        "cream",
                        "cashews",
                        "ginger-garlic paste",
                        "kasuri methi",
                        "garam masala"
                    ],
                    "triviaClues": [
                        "This dish was famously invented in the Moti Mahal restaurant in Delhi.",
                        "It is renowned for its smooth, rich, and creamy texture.",
                        "Its global popularity has made it a staple in Indian restaurants worldwide.",
                        "Often paired with naan or rice, it's a mild curry perfect for celebrations."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-4340c3f7-4fe2-49ee-8a46-b08025688d8b",
                            "name": "Chicken Korma",
                            "isCorrect": false,
                            "reason": "A milder, creamier curry, but less tomato-based and distinct from butter chicken."
                        },
                        {
                            "id": "dish-1-37011276-76f2-42d5-95e6-baed722e6e02",
                            "name": "Butter Chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-b3f74f97-ade0-41a3-ad87-d0d04e00a821",
                            "name": "Tandoori Chicken",
                            "isCorrect": false,
                            "reason": "A dry, grilled chicken dish, a precursor but not a curry."
                        },
                        {
                            "id": "dish-3-3cd95c99-e76c-41ae-a9fc-66d7c968f096",
                            "name": "Chicken Tikka Masala",
                            "isCorrect": false,
                            "reason": "Often confused, but typically features grilled chicken and slightly different spices."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-d4a81254-e972-4fd9-8baf-51fe666804f4",
                            "name": "cream",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-27c77f37-4d58-4934-a3c1-1bf87cdf46a2",
                            "name": "bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-94dc2b35-c718-4fd0-ab8f-9684ce503d71",
                            "name": "butter",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-5c5056d2-adc8-4de5-a13d-9e01825a3ff6",
                            "name": "chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-48b6209d-85ae-4d84-beb1-e8b4bb3d1e37",
                            "name": "star anise",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-b8d92826-0b13-4bce-85ef-22f591e08793",
                            "name": "tamarind",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-1e72fae0-1266-4d7d-97c0-e9535794025c",
                            "name": "tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-aff0c7e2-26e8-47b4-9536-26caa7dbec66",
                            "name": "lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-39252ee4-d485-4ec0-80ca-a6fb41859704",
                            "name": "cashews",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "c6bcbce3-4586-425f-9ca6-707369cbe80e",
                    "dayId": "2025-12-22-EASY",
                    "targetDish": "Rogan Josh",
                    "description": "An aromatic lamb curry, a staple of Kashmiri cuisine, known for its distinctive fiery red color derived from dried Kashmiri chillies, offering a rich and deeply flavored experience.",
                    "cuisine": "India",
                    "region": "Kashmir",
                    "originCity": "Srinagar",
                    "category": "Main Course",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "lamb",
                        "yogurt",
                        "ginger powder",
                        "fennel powder",
                        "Kashmiri red chili powder",
                        "asafoetida",
                        "whole spices"
                    ],
                    "triviaClues": [
                        "The name of this dish literally translates to 'red oil' or 'red stew'.",
                        "It is one of the signature dishes of the Kashmiri Wazwan, a multi-course meal.",
                        "Its vibrant red color traditionally comes from specific dried Kashmiri chillies or ratanjot.",
                        "This rich lamb preparation is a hallmark of celebrations in its region of origin."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-0133c15c-5df4-471a-92f0-a0d8166abb54",
                            "name": "Gosht Korma",
                            "isCorrect": false,
                            "reason": "A lamb curry that is creamier and milder, without the characteristic red color."
                        },
                        {
                            "id": "dish-1-3352bac4-81ba-4467-b527-ada0bf87ee09",
                            "name": "Nihari",
                            "isCorrect": false,
                            "reason": "A slow-cooked meat stew with a very different spice profile and texture."
                        },
                        {
                            "id": "dish-2-2f6a1a61-0fcd-43ed-a810-ca75fa5ee3d9",
                            "name": "Laal Maas",
                            "isCorrect": false,
                            "reason": "Another red lamb curry, but from Rajasthan and typically much spicier."
                        },
                        {
                            "id": "dish-3-7abfadee-9249-4d1e-9fa5-8e35f6bd105f",
                            "name": "Rogan Josh",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-93b0d014-1452-4446-a8a6-da41c00f14a9",
                            "name": "curry leaves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-277582ce-162e-4864-8988-a78c3f1a7804",
                            "name": "yogurt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-fb6cee69-f3ff-485b-a12e-575837d5419d",
                            "name": "green bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-22750b78-9046-4595-807d-0056e7cf4678",
                            "name": "mustard oil",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-cd63ed8b-35e9-4ff6-b337-dd4adcfe2219",
                            "name": "ginger powder",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-9765b2d0-852d-4c1c-9507-0dd961e3a811",
                            "name": "Kashmiri red chili powder",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-4e426691-c00c-4503-b474-9a2a179b52e0",
                            "name": "fennel powder",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-ab6827b4-45d2-4e9b-83d7-1db626ae43e5",
                            "name": "coconut",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-0aeaa0c5-1722-477f-be07-82023185bc2f",
                            "name": "lamb",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "67fdf066-12b8-4671-890e-a85daec9cea4",
                    "dayId": "2025-12-22-EASY",
                    "targetDish": "Tandoori Chicken",
                    "description": "Chicken marinated in yogurt and spices, then traditionally cooked in a tandoor (clay oven) to achieve a smoky flavor and charred exterior. A popular celebratory dish.",
                    "cuisine": "India",
                    "region": "Punjab",
                    "originCity": "Peshawar",
                    "category": "Main Course",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "chicken",
                        "yogurt",
                        "ginger-garlic paste",
                        "lemon juice",
                        "red chili powder",
                        "turmeric",
                        "garam masala",
                        "tandoori masala"
                    ],
                    "triviaClues": [
                        "This iconic dish gets its name from the special clay oven it is cooked in.",
                        "It is often recognized by its vibrant red or orange color.",
                        "It's considered a precursor to many popular curries like Butter Chicken and Chicken Tikka Masala.",
                        "Widely popular as both an appetizer and a main course, especially at gatherings."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-daa7e76a-28a0-45a7-9caf-ec2c4c630c82",
                            "name": "Chicken 65",
                            "isCorrect": false,
                            "reason": "A spicy, deep-fried South Indian appetizer, distinct from grilled tandoori."
                        },
                        {
                            "id": "dish-1-15691291-8909-4aa0-8b27-898c33cc7ca9",
                            "name": "Seekh Kebab",
                            "isCorrect": false,
                            "reason": "Minced meat skewers, grilled but with a different texture and composition."
                        },
                        {
                            "id": "dish-2-6677d4b6-d692-4752-9e8d-788a8bdf466d",
                            "name": "Chicken Tikka",
                            "isCorrect": false,
                            "reason": "Similar flavors but usually boneless, smaller pieces, often served as an appetizer."
                        },
                        {
                            "id": "dish-3-a98362cf-7a16-4ca7-9169-19f0b72bdd92",
                            "name": "Tandoori Chicken",
                            "isCorrect": true
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-7deec9dd-98b2-40fc-a7cc-726bcbe95b4a",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-b2c08309-5999-4268-807a-5daf9d6babc7",
                            "name": "chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-bc323abd-5b5d-4fa4-9aba-193836f2b310",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-59b4e2a3-8182-49ad-abbd-73f19dc2e100",
                            "name": "lemon juice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-cd6a8c5a-7f8d-420e-95be-8e47470e329b",
                            "name": "red chili powder",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-0f9e9c3b-3b9b-4d66-b2f3-fc1c326c223e",
                            "name": "peanut butter",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-be3aa6c2-24a2-496a-8040-de67ae53081e",
                            "name": "mint",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-a9c1c528-1709-4adf-97f3-bed274477493",
                            "name": "ginger-garlic paste",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-6c0d6989-b5a6-4afb-a8af-e3bc53be6612",
                            "name": "yogurt",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                },
                {
                    "id": "a221a088-895d-4b21-b159-cb1f9840b102",
                    "dayId": "2025-12-22-EASY",
                    "targetDish": "Gulab Jamun",
                    "description": "Delicious deep-fried milk-solid (khoya) balls, traditionally made from milk powder or khoya, soaked in a fragrant rose-scented sugar syrup. A quintessential Indian dessert.",
                    "cuisine": "India",
                    "region": "Pan-Indian Subcontinent",
                    "originCity": "Historically adapted in India from Persian desserts",
                    "category": "Dessert",
                    "procurementDifficulty": "EASY",
                    "executionDifficulty": "EASY",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "khoya (milk solids)",
                        "flour",
                        "sugar",
                        "rose water",
                        "cardamom",
                        "ghee/oil for frying"
                    ],
                    "triviaClues": [
                        "The name of this dessert literally translates to 'rose berry'.",
                        "It is a must-have sweet for festivals, weddings, and celebrations.",
                        "Best served warm, allowing the syrup to melt in your mouth.",
                        "The key ingredient is typically khoya or milk powder, forming small dough balls."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-725c6402-47ce-4a81-a349-fc13565566d6",
                            "name": "Jalebi",
                            "isCorrect": false,
                            "reason": "A fried spiral-shaped sweet, crunchy, and not spherical like Gulab Jamun."
                        },
                        {
                            "id": "dish-1-69481dae-dbc4-43d0-bb59-a0d90f8aae3e",
                            "name": "Rasgulla",
                            "isCorrect": false,
                            "reason": "Made from cheese curds and boiled in syrup, not fried milk solids."
                        },
                        {
                            "id": "dish-2-443e260a-b41f-4ce1-bd49-af2a260fff91",
                            "name": "Gulab Jamun",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-95c42255-9b87-46a0-add0-bab7b59990f3",
                            "name": "Barfi",
                            "isCorrect": false,
                            "reason": "A milk fudge, not deep-fried or syrup-soaked."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-f0ac6085-b4b9-4ab2-937e-cb7fd6e96601",
                            "name": "gelatin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-5b310140-7eeb-4880-ba4d-074aa84766a9",
                            "name": "khoya (milk solids)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-23e478c0-4b6c-4167-8469-50d691e95498",
                            "name": "cardamom",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-827c5562-b969-41de-b91f-8641a6632652",
                            "name": "flour",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-1a882a67-8e20-4d5d-bd64-bffc5ae49866",
                            "name": "coconut flakes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-91ad1192-89d4-4eb5-b6a7-d32369934a32",
                            "name": "rose water",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-7f932669-48ef-421f-942f-7381a2b27d94",
                            "name": "yeast",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-b03a8535-821a-4810-aa9b-507c96f51aa8",
                            "name": "chocolate",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-2cf6ea79-da8a-43ce-a1bb-79370c24e5fa",
                            "name": "sugar",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Sous Chef"
                }
            ],
            "MEDIUM": [
                {
                    "id": "4d1aab40-705f-41c6-b572-620163ab2758",
                    "dayId": "2025-12-22-MEDIUM",
                    "targetDish": "Chicken Korma",
                    "description": "A rich, creamy, and mildly spiced curry made with yogurt or cream, nut pastes (cashew/almond), and often saffron, offering a delicate flavor profile, often reserved for special occasions.",
                    "cuisine": "India",
                    "region": "North India, Deccan, Pakistan",
                    "originCity": "Delhi",
                    "category": "Main Course",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "chicken",
                        "yogurt/cream",
                        "cashews/almonds",
                        "ginger-garlic paste",
                        "fried onions",
                        "whole spices",
                        "saffron"
                    ],
                    "triviaClues": [
                        "The name of this dish is derived from the Urdu 'qorma', meaning 'braise'.",
                        "It is known for its smooth, velvety gravy and generally mild, delicate spices.",
                        "Often a centerpiece at weddings and grand feasts, especially in North India and Pakistan.",
                        "Key to its richness are fried onions and a paste made from nuts like cashews or almonds."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-2abfb24c-12ea-46e6-84ff-4af3d13c8e42",
                            "name": "Chicken Korma",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-f1c64ef0-aebb-4b3b-b8e0-30e624059ea3",
                            "name": "Rogan Josh",
                            "isCorrect": false,
                            "reason": "A spicier, red lamb curry from Kashmir, not creamy chicken."
                        },
                        {
                            "id": "dish-2-12108835-74ca-4f1d-8276-d21df6e91894",
                            "name": "Butter Chicken",
                            "isCorrect": false,
                            "reason": "Tomato-based with a distinct buttery flavor, different from the mild Korma."
                        },
                        {
                            "id": "dish-3-ab20cfd0-2ea4-4ffa-b5b1-4623691bbec3",
                            "name": "Pasanda",
                            "isCorrect": false,
                            "reason": "A Mughlai dish with flatter meat pieces, often lamb, and a slightly different preparation."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-2015d96c-3812-42d5-a8d0-5c249c325b15",
                            "name": "ginger-garlic paste",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-2299753f-5001-4221-8230-dba0932607ca",
                            "name": "chicken",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-4e5c5cde-d39e-4334-b63d-e87fa4419e26",
                            "name": "cashews/almonds",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-89df27e0-56fc-400f-9e28-8142070a7bf9",
                            "name": "mustard seeds",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-0132422e-ca8d-4254-92c5-a2969a3a0be3",
                            "name": "tamarind",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-9899d444-ef93-4633-b9aa-682002e20742",
                            "name": "fenugreek seeds",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-f579aa05-f717-486d-9657-6fbacc526ece",
                            "name": "curry leaves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-1be1235f-bce4-4011-869c-12ba4129ec85",
                            "name": "paprika",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-837c8f24-1745-4f00-94fa-d1ce31313889",
                            "name": "fried onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-8590e12e-2a95-4e36-980d-6a497c072070",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-b376f966-d1e6-4ad0-8f3c-fe0979c0862b",
                            "name": "yogurt/cream",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "1f623090-4e3d-4925-939e-ddc1f18d6bdb",
                    "dayId": "2025-12-22-MEDIUM",
                    "targetDish": "Shahi Paneer",
                    "description": "A royal, rich, creamy, and mildly sweet curry made with paneer (Indian cottage cheese), tomatoes, cream, and nuts, offering a luxurious vegetarian option for celebrations.",
                    "cuisine": "India",
                    "region": "North India",
                    "originCity": "Delhi",
                    "category": "Main Course",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "paneer",
                        "tomatoes",
                        "cream",
                        "cashews",
                        "ginger-garlic paste",
                        "yogurt",
                        "whole spices",
                        "garam masala"
                    ],
                    "triviaClues": [
                        "The word 'Shahi' in its name means 'royal', hinting at its rich and luxurious nature.",
                        "It's a popular vegetarian dish chosen for festive occasions and banquets.",
                        "The gravy is characterized by its smooth texture, made from a blend of tomatoes, cream, and nuts.",
                        "It offers a delightful balance of sweet and savory flavors, distinguishing it from other paneer dishes."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-d821ced7-3e67-435d-9878-e93be318c69e",
                            "name": "Palak Paneer",
                            "isCorrect": false,
                            "reason": "A spinach-based paneer dish, distinctly green and savory."
                        },
                        {
                            "id": "dish-1-c86bf713-b4d0-432a-9ef1-dcbd5df7d58a",
                            "name": "Matar Paneer",
                            "isCorrect": false,
                            "reason": "A paneer and pea curry, with a simpler, often less creamy gravy."
                        },
                        {
                            "id": "dish-2-b82a9881-531e-45aa-8608-bb73ba2c76d7",
                            "name": "Shahi Paneer",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-961fdbdd-5278-4544-92f0-cffeefd1e271",
                            "name": "Paneer Makhani",
                            "isCorrect": false,
                            "reason": "Similar to Butter Chicken, it's buttery and tangy, but Shahi Paneer is typically sweeter and milder."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-87886677-aa9d-4ebd-bbaf-16d587af6493",
                            "name": "tomatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-61cadfc6-9e01-4224-8d95-7cbaeed43c70",
                            "name": "paneer",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-66c72a58-6c3c-4abe-b28b-a56689ad5c86",
                            "name": "coconut",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-17d5bd37-14e1-4b8f-ab0d-038539f7a9bb",
                            "name": "bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-7f1dc490-67fd-4e83-92f3-0ea6c28feeea",
                            "name": "cashews",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-3271232b-7c5a-400a-b90c-541e9cd004f2",
                            "name": "cream",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-d49ce5f0-64b8-4c58-9e72-80143a67cf39",
                            "name": "tamarind",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-9fe28e85-4d50-41df-a293-fe234c8ef72f",
                            "name": "ginger-garlic paste",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-a71a93eb-b819-4ced-a6ba-1b8c7636d1f2",
                            "name": "lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-cf46f055-e5c1-4e26-8885-73b862b6bea1",
                            "name": "asafoetida",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-c87e8b70-f8c9-4039-bef2-8d676b08aa2d",
                            "name": "mustard oil",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "730a672c-ff6d-43ae-8199-33e2186f3ba9",
                    "dayId": "2025-12-22-MEDIUM",
                    "targetDish": "Hyderabadi Haleem",
                    "description": "A thick, savory stew slow-cooked for hours, made from wheat, barley, lentils, and meat (usually mutton or beef), pounded to a paste-like consistency, and garnished with fried onions, mint, and lemon.",
                    "cuisine": "India",
                    "region": "Deccan",
                    "originCity": "Hyderabad",
                    "category": "Main Course",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "mutton/beef",
                        "wheat",
                        "barley",
                        "lentils",
                        "ghee",
                        "ginger-garlic paste",
                        "whole spices",
                        "fried onions"
                    ],
                    "triviaClues": [
                        "This dish is extremely popular during the holy month of Ramadan for Iftar.",
                        "It is traditionally cooked for 7-8 hours, resulting in its unique texture.",
                        "It has been granted a Geographical Indication (GI) tag, recognizing its origin.",
                        "The preparation involves pounding the ingredients together until they form a smooth, rich paste."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-61d5785a-66ed-4e7a-841b-019a6a206cbe",
                            "name": "Hyderabadi Haleem",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-3c823b02-768d-431d-9f93-5002d92ded8d",
                            "name": "Dal Gosht",
                            "isCorrect": false,
                            "reason": "A combination of meat and lentils, but not slow-cooked to a cohesive paste."
                        },
                        {
                            "id": "dish-2-a444a3e2-087c-4a6e-bd44-23b25e405e81",
                            "name": "Khichda",
                            "isCorrect": false,
                            "reason": "Similar ingredients but the grains remain separate, not pounded to a paste."
                        },
                        {
                            "id": "dish-3-165128cf-8243-43a4-8e1a-4c9285ebc8b6",
                            "name": "Paya",
                            "isCorrect": false,
                            "reason": "A stew made from trotters, with a different texture and flavor profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-b214ce9a-2fc7-4638-9180-60fd838b4b0c",
                            "name": "lentils",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-b9bbf8d2-2954-4cf6-afda-a9f53198a116",
                            "name": "tomato",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-c4a8de19-e3f0-40ea-803b-0be53ba889f2",
                            "name": "ghee",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-36802e8e-f819-4dfb-a90c-942e2b2a4d00",
                            "name": "mutton/beef",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-6bb8f68e-606e-43ff-bd53-7c931bf4d520",
                            "name": "barley",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-ad310e22-fbdb-4c48-ae2e-c369044eeb8c",
                            "name": "rice flour",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-f98ee5ce-307b-4065-86b8-0d6d546cfa22",
                            "name": "green chillies",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-8ab19844-a119-4cc1-acbc-f5447b23ebd3",
                            "name": "wheat",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-b7b315da-273d-4f30-b0d6-fcdd017f173f",
                            "name": "soy sauce",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-024e1359-0aba-4c2f-b4cb-c787d900fe65",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-44248036-02f6-4e8f-93f8-649f9ad79130",
                            "name": "peanut",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "847ef98d-3abe-466a-b06f-6c33e14c768c",
                    "dayId": "2025-12-22-MEDIUM",
                    "targetDish": "Gosht Nihari",
                    "description": "A slow-cooked, rich, and flavorful stew made with tender pieces of beef or lamb (often shank or bone marrow), simmered overnight in a gravy of various aromatic spices. A festive breakfast staple.",
                    "cuisine": "Pakistan",
                    "region": "North India, Pakistan",
                    "originCity": "Delhi",
                    "category": "Main Course",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇵🇰",
                    "countryCode": "PK",
                    "mainIngredients": [
                        "beef/lamb shank",
                        "ginger",
                        "garlic",
                        "whole spices",
                        "chili powder",
                        "flour (for thickening)",
                        "ghee"
                    ],
                    "triviaClues": [
                        "The name of this dish comes from the Arabic word 'Nahar', meaning 'morning', as it was traditionally eaten for breakfast.",
                        "It was originally a dish for Mughal emperors after their morning prayers.",
                        "It is known for its incredibly tender meat, achieved through hours of slow cooking.",
                        "Often garnished with julienned ginger, green chilies, and a squeeze of lemon juice before serving."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-5336fd42-758c-408a-a021-7404176154e0",
                            "name": "Korma",
                            "isCorrect": false,
                            "reason": "A creamy curry with a different consistency and spice profile."
                        },
                        {
                            "id": "dish-1-abdb7095-7026-45d6-88cd-619921152cc0",
                            "name": "Gosht Nihari",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-1a946b3f-e668-40d8-bb96-cd0f6c772eab",
                            "name": "Paya",
                            "isCorrect": false,
                            "reason": "Made from animal trotters, giving it a distinct gelatinous texture."
                        },
                        {
                            "id": "dish-3-1eb664b5-1873-498b-82ac-19f9563edb77",
                            "name": "Haleem",
                            "isCorrect": false,
                            "reason": "A pounded stew with grains and lentils, distinct texture."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-98cb4774-df09-43cb-b80b-081ca7a29146",
                            "name": "potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-e7e25840-451c-4bb4-9067-a40931486507",
                            "name": "curry leaves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-8cc8bcf2-725d-4608-b230-aaeed864d8fe",
                            "name": "tamarind",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-41a6cf5f-d5da-4b63-b050-8a9ac87d995e",
                            "name": "ginger",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-42be14bf-52d1-41cc-886c-39a4ac44487e",
                            "name": "paneer",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-6ad5c945-ec5d-4503-9ead-b6d73bc67fdd",
                            "name": "garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-c091f402-8883-45db-bda4-60476d042334",
                            "name": "whole spices",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-bf23549a-e5e2-4ed2-bf45-f49998c2ba11",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-204adf29-cb0e-43db-8133-141c8aa86ecd",
                            "name": "beef/lamb shank",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-3dfb109e-8433-440d-b0f2-e3c03c5e6e12",
                            "name": "lentils",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-d3058449-fcf2-49d3-8099-b17660181ce5",
                            "name": "chili powder",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Chef de Partie"
                },
                {
                    "id": "3d394b7e-445d-4984-b06d-7d4d3ac53746",
                    "dayId": "2025-12-22-MEDIUM",
                    "targetDish": "Gajar Halwa",
                    "description": "A classic North Indian dessert made from grated carrots, slow-cooked with milk, sugar, and ghee, often enriched with khoya and garnished with nuts and cardamom. A beloved winter celebration sweet.",
                    "cuisine": "India",
                    "region": "North India, Punjab",
                    "originCity": "Punjab",
                    "category": "Dessert",
                    "procurementDifficulty": "MEDIUM",
                    "executionDifficulty": "MEDIUM",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "carrots",
                        "milk",
                        "sugar",
                        "ghee",
                        "khoya (optional)",
                        "cardamom",
                        "nuts (cashews, almonds, pistachios)"
                    ],
                    "triviaClues": [
                        "This popular dessert is particularly cherished during the winter months.",
                        "Its preparation traditionally involves patiently slow-cooking grated carrots in milk until it thickens.",
                        "It is often enriched with khoya (reduced milk solids) for an extra creamy texture.",
                        "A staple sweet for festivals like Diwali and other family celebrations across North India."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-eb81cdb0-b946-4dec-a603-9afd5d3819c3",
                            "name": "Moong Dal Halwa",
                            "isCorrect": false,
                            "reason": "A rich dessert made from split yellow lentils, distinct from carrot."
                        },
                        {
                            "id": "dish-1-83fbc395-71c3-486b-aeac-d9cfd0c39f49",
                            "name": "Sooji Halwa",
                            "isCorrect": false,
                            "reason": "A semolina-based sweet, with a different texture."
                        },
                        {
                            "id": "dish-2-ff653788-0462-41a1-a6ff-e03b11269a4a",
                            "name": "Gajar Halwa",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-3-fc5d6b68-6132-4a06-a48b-358f4d952a69",
                            "name": "Kheer",
                            "isCorrect": false,
                            "reason": "A rice pudding, not made with vegetables."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-a47e71eb-493b-4d38-a964-f21a6a925f78",
                            "name": "coconut oil",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-cf3f7877-5b7b-4185-8261-01cbc0e7d91d",
                            "name": "chocolate",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-cc000db8-edc7-4413-93ce-87753861f79d",
                            "name": "sugar",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-6676898c-3a7c-4a80-a668-9280c2bae1d9",
                            "name": "milk",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-0ae314a9-0928-452c-a035-47db3880dcd8",
                            "name": "khoya (optional)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-6a1f1332-9ded-468a-8f8b-4c28b769fad2",
                            "name": "gelatin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-4a4f847b-fe39-4b79-8058-b27d930de925",
                            "name": "carrots",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-c966d733-5002-4f53-af85-9b5f4a47aff8",
                            "name": "pumpkin",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-c1a71371-afe7-4522-83e3-6f3825003f66",
                            "name": "ghee",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-095bb2b2-9318-4ce9-abed-e4fb97ee3fb3",
                            "name": "yeast",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-c6924128-270d-4c0c-9870-087ed81d02e7",
                            "name": "cinnamon",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Chef de Partie"
                }
            ],
            "HARD": [
                {
                    "id": "89cb10df-bcdb-4157-a22d-b65a3c7fab65",
                    "dayId": "2025-12-22-HARD",
                    "targetDish": "Laal Maas",
                    "description": "A fiery and rich mutton curry from Rajasthan, characterized by its intense red color from a generous amount of Mathania red chillies and a robust spice blend, a true regional specialty for bold palates.",
                    "cuisine": "India",
                    "region": "Rajasthan",
                    "originCity": "Rajasthan",
                    "category": "Main Course",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "mutton",
                        "Mathania chillies",
                        "yogurt",
                        "garlic",
                        "onion",
                        "ghee",
                        "whole spices"
                    ],
                    "triviaClues": [
                        "The name of this dish translates to 'Red Meat', reflecting its vibrant color.",
                        "It is historically known as a hunting dish of the Rajput warriors of Rajasthan.",
                        "Its signature fiery red hue comes from the unique Mathania red chillies.",
                        "This dish is famous for its intense heat and robust, smoky flavor profile."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-5d020881-b43e-4066-8f1f-c41f7124b52c",
                            "name": "Gosht Korma",
                            "isCorrect": false,
                            "reason": "A creamy, milder lamb curry, very different from the spicy Laal Maas."
                        },
                        {
                            "id": "dish-1-1454e7c4-2877-46d2-ba59-4a1f63fd9e71",
                            "name": "Laal Maas",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-2-c94f9382-b712-42d1-ac3f-288035e842a2",
                            "name": "Nihari",
                            "isCorrect": false,
                            "reason": "A slow-cooked stew, with distinct texture and ingredients, not a spicy curry."
                        },
                        {
                            "id": "dish-3-01bc438d-f7eb-4064-afa0-e18104e35b3c",
                            "name": "Vindaloo",
                            "isCorrect": false,
                            "reason": "A Goan curry with a prominent vinegary and spicy profile, but distinct from Rajasthani Laal Maas."
                        },
                        {
                            "id": "dish-4-49ec5707-d2ce-4989-ab38-3b91b49f7aef",
                            "name": "Bhuna Gosht",
                            "isCorrect": false,
                            "reason": "A drier, intensely spiced mutton dish, but not as famously fiery or from Rajasthan."
                        },
                        {
                            "id": "dish-5-adf6f83b-afe2-4245-8ef9-a422b8142be5",
                            "name": "Rogan Josh",
                            "isCorrect": false,
                            "reason": "Another red lamb curry but from Kashmir, generally less fiery and different spice profile."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-56a83866-648e-48f4-8a4d-b1c44457882e",
                            "name": "mustard seeds",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-3eb8eff1-9f97-49d4-8fca-b5003fdaf6ec",
                            "name": "tamarind",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-3fa860ef-1c9f-42d1-83e4-eaab31caf972",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-06ee0b62-ae21-4b46-b0cd-33624ffc147f",
                            "name": "fenugreek leaves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-3f27605b-8268-43f2-87b7-39da229a1a62",
                            "name": "mutton",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-5-b0c29f39-7db8-4ffa-947c-babb5d596c71",
                            "name": "poppy seeds",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-fddd51fc-d02b-4545-9072-cfd93c77ea1e",
                            "name": "green bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-a1d43580-0cb1-4da0-946d-51fcd5f3d908",
                            "name": "Mathania chillies",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-0b7288fd-7ddb-41d9-ae24-39f16080404a",
                            "name": "onion",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-9ea4c5f7-1d12-4fa3-800e-e2332be4ab4b",
                            "name": "garlic",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-077fe66e-7d4b-4cdc-ba26-85b01bebd0e6",
                            "name": "mint",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-f22189e1-d063-4ba8-ae08-145fbf1b2e91",
                            "name": "yogurt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-78a1f1c9-0229-413a-aef1-055168788f39",
                            "name": "curry leaves",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "b7891514-8a8b-42b8-8612-9df1be9e5980",
                    "dayId": "2025-12-22-HARD",
                    "targetDish": "Kosha Mangsho",
                    "description": "A classic Bengali dry-fried mutton curry, slow-cooked with onions, ginger-garlic paste, yogurt, and a blend of aromatic spices until the meat is tender and the gravy is thick, dark, and rich, a staple for Bengali celebrations.",
                    "cuisine": "India",
                    "region": "West Bengal, Bangladesh",
                    "originCity": "Kolkata",
                    "category": "Main Course",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "mutton",
                        "onion",
                        "ginger-garlic paste",
                        "yogurt",
                        "mustard oil",
                        "garam masala",
                        "turmeric",
                        "cumin",
                        "coriander powder"
                    ],
                    "triviaClues": [
                        "The name 'Kosha Mangsho' literally translates to 'dry-fried meat'.",
                        "It's a quintessential dish for Bengali festivals, especially Durga Puja.",
                        "Traditionally, this dish is slow-cooked in mustard oil, which imparts a unique pungency.",
                        "The process involves prolonged 'bhuna' or dry-frying, which caramelizes the onions and spices, creating a deep, rich gravy."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-ac052fbd-08f3-40ac-a988-3aa151b1e0b0",
                            "name": "Mangshor Jhol",
                            "isCorrect": false,
                            "reason": "A lighter, more soupy Bengali mutton curry for everyday consumption."
                        },
                        {
                            "id": "dish-1-e9dbba10-dd2b-4da2-b332-22d43a6e4b41",
                            "name": "Laal Maas",
                            "isCorrect": false,
                            "reason": "A Rajasthani fiery red mutton curry, distinct from Bengali style."
                        },
                        {
                            "id": "dish-2-c03b9abe-df68-4046-bdcc-2de546924b07",
                            "name": "Mutton Korma",
                            "isCorrect": false,
                            "reason": "A Mughlai creamy and mild mutton curry, not dry-fried."
                        },
                        {
                            "id": "dish-3-903d4d81-2ac5-4821-8cdf-a1626207c86d",
                            "name": "Kosha Mangsho",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-4-70012dfa-bc71-4031-a522-b4fa6e204fcf",
                            "name": "Bhuna Gosht",
                            "isCorrect": false,
                            "reason": "While similar in technique, it lacks the specific Bengali spice blend and depth."
                        },
                        {
                            "id": "dish-5-80e6fccd-20bd-497c-ab94-2ddde182d187",
                            "name": "Rogan Josh",
                            "isCorrect": false,
                            "reason": "A Kashmiri lamb curry with a different spice and preparation method."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-5c6ccc14-2164-4fec-9777-ed307b6bdca6",
                            "name": "cashews",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-d9a44ccc-09ac-45f5-8b22-2682abce1ecf",
                            "name": "star anise",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-3283f28e-19ba-47c1-8a44-f1878570de63",
                            "name": "fenugreek seeds",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-5a4edf3a-8b8d-4997-9039-184634abb953",
                            "name": "yogurt",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-4-cd7fb022-9ac9-46ca-99cb-d98f8f15e723",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-6fe1e305-4c5e-4ea1-9807-a43b8f45c739",
                            "name": "mutton",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-c57309c6-afef-4c8a-9522-f2300f82a4da",
                            "name": "mustard oil",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-fc4c34af-7f6b-4275-8345-722f93120987",
                            "name": "paneer",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-b3d62558-9100-4446-ab79-f0ec800a0891",
                            "name": "curry leaves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-9-e477254c-822c-4726-8ee4-899b25a6e75f",
                            "name": "tamarind",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-ac0ed551-62d6-4f92-b774-5d10358f4904",
                            "name": "bell peppers",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-40d20162-8bb1-4848-ae42-c3f598824421",
                            "name": "ginger-garlic paste",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-ebfa4b59-1301-4b5e-897c-390164ee8fce",
                            "name": "onion",
                            "isCorrect": true
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "413bd8dc-8239-4e40-a470-b8f1815700e6",
                    "dayId": "2025-12-22-HARD",
                    "targetDish": "Daab Chingri",
                    "description": "A unique Bengali prawn curry cooked and traditionally served inside a tender green coconut shell, where the coconut water and flesh impart a delicate, sweet, and aromatic flavor to the prawns.",
                    "cuisine": "India",
                    "region": "Coastal West Bengal, Bangladesh",
                    "originCity": "Kolkata",
                    "category": "Main Course",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "prawns",
                        "tender coconut (water and flesh)",
                        "mustard paste",
                        "green chilies",
                        "turmeric",
                        "mustard oil"
                    ],
                    "triviaClues": [
                        "The name of this dish translates to 'Coconut Prawn'.",
                        "It is a celebrated delicacy, especially in the coastal regions of Bengal.",
                        "Its signature cooking method involves steaming or baking the curry inside a tender coconut shell.",
                        "The coconut water and pulp naturally infuse the prawns with a subtle, sweet, and unique flavor."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-2e511631-1a5c-43f0-ae14-b45e1dc0b46a",
                            "name": "Macher Jhol",
                            "isCorrect": false,
                            "reason": "A general Bengali fish curry, distinct from a prawn dish cooked in a coconut."
                        },
                        {
                            "id": "dish-1-9a8ea644-8867-49cb-bc48-16843609f067",
                            "name": "Prawn Balchão",
                            "isCorrect": false,
                            "reason": "A Goan pickle-style prawn dish, very different preparation."
                        },
                        {
                            "id": "dish-2-2f26b1be-a7d9-417a-8565-780def51c4ca",
                            "name": "Meen Curry",
                            "isCorrect": false,
                            "reason": "A generic Kerala fish curry, distinct from this specific Bengali prawn preparation."
                        },
                        {
                            "id": "dish-3-1be5713c-58c4-4750-a785-68ac7a58a084",
                            "name": "Prawn Vindaloo",
                            "isCorrect": false,
                            "reason": "A Goan prawn curry, characterized by vinegar and hot spices."
                        },
                        {
                            "id": "dish-4-9b5970f9-525b-4b8b-ae80-37970338cc52",
                            "name": "Daab Chingri",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-5-c23343d4-ab09-46d7-af66-29085b852f22",
                            "name": "Chingri Malai Curry",
                            "isCorrect": false,
                            "reason": "Another Bengali prawn curry, but creamier and not cooked inside a coconut shell."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-3e584d3f-100f-4828-b312-d98222f48984",
                            "name": "bay leaf",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-1-270d53ae-002d-4f2e-a9b2-670c36cf6fa9",
                            "name": "mustard paste",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-501207ff-d2b2-4c9e-9fd3-47c8413de1ca",
                            "name": "potatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-8b861cc9-3be4-4aeb-b936-32bc7aca67b5",
                            "name": "fenugreek seeds",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-037d4cba-c8ae-4776-b529-03c22330fecb",
                            "name": "dry red chillies",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-dce391be-3aa4-44f0-90b4-e058e97fbd0b",
                            "name": "green chilies",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-d5620817-3a7c-46d7-9c1c-2a0a49156eca",
                            "name": "turmeric",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-7-c8c1efee-3696-40bb-a858-ab49e4022091",
                            "name": "red chili powder",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-3bdf47fa-44f4-4f89-b90c-1a9221157b31",
                            "name": "prawns",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-5eca1257-b51c-4a4f-92aa-da3001160111",
                            "name": "tender coconut (water and flesh)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-10-c6d42e9f-56ed-4825-a7ba-0cc75440a825",
                            "name": "garam masala",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-53410f04-fa1d-4647-9dac-40901da26a38",
                            "name": "ghee",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-95e8aac7-29db-43a8-8a6b-42a030889b02",
                            "name": "tamarind",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "074f9432-3422-44ce-9396-992371640638",
                    "dayId": "2025-12-22-HARD",
                    "targetDish": "Undhiyu",
                    "description": "A traditional Gujarati mixed vegetable casserole, slow-cooked (traditionally upside down in an earthen pot) with various winter vegetables, fenugreek dumplings (muthiya), and a complex blend of specific spices. A festive winter dish.",
                    "cuisine": "India",
                    "region": "Gujarat",
                    "originCity": "Surat",
                    "category": "Main Course",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "Surti papdi (flat beans)",
                        "brinjal",
                        "potatoes",
                        "sweet potatoes",
                        "green plantain",
                        "fenugreek leaves (for muthiya)",
                        "various spices (coriander, cumin, ginger, garlic, green chillies)"
                    ],
                    "triviaClues": [
                        "The name of this dish means 'upside down' in Gujarati, referring to its traditional cooking method.",
                        "It is a seasonal delicacy, typically enjoyed during the winter months, especially around Makar Sankranti.",
                        "A distinguishing feature is the inclusion of small, fried fenugreek dumplings called 'muthiya'.",
                        "It's known for using a wide variety of specific winter vegetables, making it a hearty and nutritious feast."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-8c2e2f77-ee57-43da-be06-106a8a7cbb93",
                            "name": "Sabzi",
                            "isCorrect": false,
                            "reason": "A general term for vegetable dishes, not specific enough."
                        },
                        {
                            "id": "dish-1-9760dbe9-b4a8-49fe-b8f5-ceda7957a315",
                            "name": "Mix Vegetable Curry",
                            "isCorrect": false,
                            "reason": "Too generic, doesn't capture the specific ingredients and technique."
                        },
                        {
                            "id": "dish-2-9bc682b3-4bb0-485a-9152-e1e0e1d6d679",
                            "name": "Sambhar",
                            "isCorrect": false,
                            "reason": "A South Indian lentil and vegetable stew, distinct in flavor and consistency."
                        },
                        {
                            "id": "dish-3-75a0cb5f-23f9-45b0-b071-f8403ac0dee0",
                            "name": "Undhiyu",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-4-b0549378-f072-4403-892d-c9376eff4c3e",
                            "name": "Avial",
                            "isCorrect": false,
                            "reason": "A Kerala mixed vegetable dish cooked in coconut and yogurt, different spice profile."
                        },
                        {
                            "id": "dish-5-a686da99-7b14-4037-b903-ddd44cf71a1a",
                            "name": "Baingan Bharta",
                            "isCorrect": false,
                            "reason": "A smoked mashed eggplant dish, completely different."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-509c2e9e-1978-4c5a-8ee8-e5b5a42b2fed",
                            "name": "Surti papdi (flat beans)",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-a77a4d66-eca6-4a38-8c86-4d54ad0573c8",
                            "name": "black pepper",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-2-f081e23d-d586-462c-9df6-f199b7400545",
                            "name": "mustard oil",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-3-4ae7a98d-97bd-4339-84cf-5e7c8f04267a",
                            "name": "lamb",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-afe80bd0-d4b3-49bf-8203-1b3cc9b2d739",
                            "name": "seafood",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-a214fda6-757b-4730-b40d-e9bd9112297f",
                            "name": "potatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-6-748b4a24-7d02-4073-a3d1-3e9b70df9986",
                            "name": "chicken",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-72b29d49-17c3-4157-b2e3-505ea084e3ad",
                            "name": "sweet potatoes",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-8-2188513c-a274-4112-ae85-9f64e261bba8",
                            "name": "brinjal",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-f8625af0-b91b-455f-a69f-7b8edc516b05",
                            "name": "paneer",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-4c4c640e-6688-4059-8a29-26a336317a18",
                            "name": "tamarind",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-11-a260282a-bd81-4729-bf17-77ff0565cbb8",
                            "name": "green plantain",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-12-facac1a3-9679-448b-9705-99e831ed66fa",
                            "name": "coconut milk",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                },
                {
                    "id": "b05e1dab-8ecf-451c-9897-d752a4b135c9",
                    "dayId": "2025-12-22-HARD",
                    "targetDish": "Thalassery Biryani",
                    "description": "A unique biryani from Kerala's Malabar coast, made with fragrant short-grain Kaima/Jeerakasala rice instead of basmati, and flavored with specific Malabar spices, ghee, and local ingredients, layered with marinated chicken or mutton.",
                    "cuisine": "India",
                    "region": "Kerala",
                    "originCity": "Thalassery",
                    "category": "Main Course",
                    "procurementDifficulty": "HARD",
                    "executionDifficulty": "HARD",
                    "flagEmoji": "🇮🇳",
                    "countryCode": "IN",
                    "mainIngredients": [
                        "Kaima/Jeerakasala rice",
                        "chicken/mutton",
                        "ghee",
                        "onions",
                        "ginger",
                        "garlic",
                        "green chilies",
                        "whole spices (fennel, cardamom, cloves)",
                        "cashews",
                        "raisins"
                    ],
                    "triviaClues": [
                        "This biryani is distinct for using a specific short-grain rice called Kaima or Jeerakasala, instead of basmati.",
                        "It originates from the Malabar region of Kerala, offering unique South Indian flavors.",
                        "Known for its mild yet incredibly aromatic flavor, often incorporating fried cashews and raisins.",
                        "The cooking method involves layering and 'dum' cooking, but with a unique Malabar spice blend."
                    ],
                    "dishOptions": [
                        {
                            "id": "dish-0-1b0cb1cd-6481-427f-948a-c5338df4324e",
                            "name": "Thalassery Biryani",
                            "isCorrect": true
                        },
                        {
                            "id": "dish-1-14159b47-20f9-432d-87ac-9821e47ead62",
                            "name": "Tehari",
                            "isCorrect": false,
                            "reason": "A simpler, often vegetarian or beef, yellow rice dish, not a complex biryani."
                        },
                        {
                            "id": "dish-2-c7aed097-ffb4-4d1e-bc19-415752aab524",
                            "name": "Lucknowi Biryani",
                            "isCorrect": false,
                            "reason": "An Awadhi style biryani known for its mildness and separate meat and rice cooking."
                        },
                        {
                            "id": "dish-3-b38a3a2f-7e0a-4ac9-914e-2dd494ce4ff9",
                            "name": "Ambur Biryani",
                            "isCorrect": false,
                            "reason": "A Tamil Nadu biryani, typically uses Seeraga Samba rice and a specific tomato-based masala."
                        },
                        {
                            "id": "dish-4-0124376e-55fb-4507-bb6a-8df5e39f567b",
                            "name": "Hyderabadi Biryani",
                            "isCorrect": false,
                            "reason": "Uses long-grain basmati rice and has a distinct Hyderabadi spice profile."
                        },
                        {
                            "id": "dish-5-8e03ac91-7843-44b8-8aa8-473011e3ee26",
                            "name": "Kolkata Biryani",
                            "isCorrect": false,
                            "reason": "Features potatoes and boiled eggs, distinct from Thalassery style."
                        }
                    ],
                    "ingredientOptions": [
                        {
                            "id": "ing-0-272e4031-2aa8-489e-8632-44481087e352",
                            "name": "onions",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-1-9f98b746-8afd-478b-af87-d46ff9286cd6",
                            "name": "ginger",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-2-07f5ac67-4363-4dac-a25c-e5af5394daf8",
                            "name": "chicken/mutton",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-3-38eade00-b001-4d2e-b042-1d0209dcdb81",
                            "name": "beef",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-4-b5ea25cd-a2f8-42eb-9e35-973759dcfc95",
                            "name": "curry leaves",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-5-da7d9265-e647-410f-a10d-5523bcaf507e",
                            "name": "yogurt",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-6-12f14bec-e07a-4f38-9f9d-a3ccf0b84b69",
                            "name": "dried red chillies",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-7-2ea7e6f6-7b7d-4529-8cd0-84b5c69607f1",
                            "name": "coconut milk",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-8-977e453e-9d5f-44d4-ba09-3127d86f1e95",
                            "name": "ghee",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-9-ee94b607-fe7b-4720-b5d8-473cc178c6b5",
                            "name": "tomatoes",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-10-46a3e694-7293-45cd-a970-5bd05da3c656",
                            "name": "Kaima/Jeerakasala rice",
                            "isCorrect": true
                        },
                        {
                            "id": "ing-11-eb1e665a-ac8f-4a60-9537-e1f6190d2c38",
                            "name": "paneer",
                            "isCorrect": false
                        },
                        {
                            "id": "ing-12-023faa05-6969-4c3a-8b64-92239ada7fad",
                            "name": "saffron",
                            "isCorrect": false
                        }
                    ],
                    "difficulty": "Executive Chef"
                }
            ]
        }
    }
};
