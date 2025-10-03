export const colors = {
  COLOR_PRIMARY: "#f96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626",
};

// Data for categories filter
export const categories = [
  {
    id: "01",
    category: "Breakfast",
  },
  {
    id: "02",
    category: "Lunch",
  },
  {
    id: "03",
    category: "Dinner",
  },
  {
    id: "04",
    category: "Snacks",
  },
  {
    id: "05",
    category: "Desserts",
  },
  {
    id: "06",
    category: "Drinks",
  },
  {
    id: "07",
    category: "Salads",
  },
  {
    id: "08",
    category: "Soups",
  },
];

export const recipeList = [
  {
    id: "01",
    name: "Tuna Tartare",
    image: require("../assets/images/pexels-nadin-sh-78971847-24405863.jpg"),
    rating: "4.2",
    ingredients: ["Fresh Tuna", "Lime Juice", "Red Onion", "Avocado"],
    time: "40 mins",
    difficulty: "Medium",
    calories: "420 cal",
    steps: [
      "Dice the fresh tuna into small cubes.",
      "Mix tuna with lime juice, chopped red onion, and diced avocado.",
      "Season with salt and pepper to taste.",
      "Chill in the fridge for 20 minutes before serving.",
      "Serve cold, garnished with herbs."
    ]
  },
  {
    id: "02",
    name: "Lasagna",
    image: require("../assets/images/pexels-anna-guerrero-788383-4078163.jpg"),
    rating: "4.8",
    ingredients: ["Pasta Sheets", "Ground Beef", "Tomato Sauce", "Cheese"],
    time: "1 hr 20 mins",
    difficulty: "Hard",
    calories: "850 cal",
    steps: [
      "Boil lasagna noodles until al dente.",
      "Cook ground beef in a pan, then add tomato sauce.",
      "Layer noodles, meat sauce, and cheese in a baking dish.",
      "Repeat layers and finish with cheese on top.",
      "Bake at 180°C (350°F) for 45 minutes. Let rest before serving."
    ]
  },
  {
    id: "03",
    name: "Caesar Salad",
    image: require("../assets/images/pexels-nay-nyo-727253247-27603332.jpg"),
    rating: "4.1",
    ingredients: ["Romaine Lettuce", "Croutons", "Parmesan", "Caesar Dressing"],
    time: "20 mins",
    difficulty: "Easy",
    calories: "250 cal",
    steps: [
    "Wash and chop the romaine lettuce.",
    "Prepare croutons or use ready-made ones.",
    "Toss lettuce with Caesar dressing in a large bowl.",
    "Top with croutons and grated Parmesan cheese.",
    "Serve fresh and chilled."
  ]
  },
  {
    id: "04",
    name: "Grilled Salmon",
    image: require("../assets/images/pexels-capturedbyaugustine-19532105.jpg"),
    rating: "4.6",
    ingredients: ["Salmon Fillet", "Lemon", "Olive Oil", "Garlic"],
    time: "35 mins",
    difficulty: "Medium",
    calories: "500 cal",
    steps: [
    "Marinate salmon fillets with olive oil, garlic, lemon juice, salt, and pepper.",
    "Preheat grill or pan over medium heat.",
    "Grill salmon skin-side down for 5–7 minutes.",
    "Flip carefully and cook another 3–5 minutes until done.",
    "Serve hot with a squeeze of lemon."
  ]
  },
  {
    id: "05",
    name: "Chicken Curry",
    image: require("../assets/images/pexels-nunzdy-32056776.jpg"),
    rating: "4.7",
    ingredients: ["Chicken", "Coconut Milk", "Onion", "Spices"],
    time: "50 mins",
    difficulty: "Medium",
    calories: "600 cal",
    steps: [
    "Heat oil in a pan and sauté onions until golden brown.",
    "Add spices and cook for 1–2 minutes until fragrant.",
    "Add chicken pieces and cook until lightly browned.",
    "Pour in coconut milk and simmer for 25–30 minutes.",
    "Serve hot with rice or bread."
  ]
  },
  {
    id: "06",
    name: "Veggie Burger",
    image: require("../assets/images/pexels-valeriya-1251198.jpg"),
    rating: "4.0",
    ingredients: ["Burger Bun", "Veggie Patty", "Lettuce", "Tomato"],
    time: "25 mins",
    difficulty: "Easy",
    calories: "450 cal",
    steps: [
    "Cook veggie patty in a pan or grill until golden brown.",
    "Toast burger buns lightly on the pan.",
    "Layer lettuce and tomato slices on the bottom bun.",
    "Place veggie patty on top and add sauces of choice.",
    "Cover with the top bun and serve immediately."
  ]
  },
  {
    id: "07",
    name: "Pancakes",
    image: require("../assets/images/pexels-rdne-6529789.jpg"),
    rating: "4.5",
    ingredients: ["Flour", "Eggs", "Milk", "Maple Syrup"],
    time: "30 mins",
    difficulty: "Easy",
    calories: "520 cal",
    steps: [
    "Mix flour, eggs, and milk in a bowl to form a smooth batter.",
    "Heat a non-stick pan over medium heat.",
    "Pour a small amount of batter and cook until bubbles form.",
    "Flip and cook until golden brown on both sides.",
    "Stack pancakes and drizzle with maple syrup."
  ]
  },
  {
    id: "08",
    name: "Beef Steak",
    image: require("../assets/images/pexels-akashni-weimers-3904954-13772598.jpg"),
    rating: "4.9",
    ingredients: ["Beef Steak", "Salt", "Pepper", "Butter"],
    time: "45 mins",
    difficulty: "Hard",
    calories: "700 cal",
    steps: [
    "Season steak with salt and pepper on both sides.",
    "Heat a skillet until very hot and add butter.",
    "Sear steak for 3–5 minutes per side (depending on doneness).",
    "Let steak rest for 5–10 minutes after cooking.",
    "Serve with sides or sauce of choice."
  ]
  },
];
export default { colors, categories, recipeList };