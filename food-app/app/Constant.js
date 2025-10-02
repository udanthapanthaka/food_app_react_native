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
  },
];
export default { colors, categories, recipeList };