const ALL_RECIPES = [
  {
    id: "cucumber-mint-agua-fresca",
    name: "Cucumber Mint Agua Fresca",
    temperature: "Cold",
    color: "Green",
    healthiness: ["Caffeine-Free", "Dairy-Free", "Vegan", "Refined Sugar-Free", "Nut-Free"],
    nutrients: ["Vitamin C", "Electrolytes", "Antioxidants"],
    useCases: ["Deep Hydration", "Gut & Digestion"],
    primaryTaste: "Herbal & Fresh",
    season: "Summer",
    style: "Agua Fresca",
    prepTime: "Quick",
    prepMinutes: "5 mins",
    description: "A classic Mexican still-water refresher that is deeply hydrating, light, and balanced between tart lime and cool herbal mint notes.",
    equipment: ["Blender", "Fine-Mesh Strainer", "Pitcher"],
    tip: "Keep the cucumber peel on if you prefer a rich emerald color.",
    ingredients: [
      { name: "Cucumber", amount: 1, unit: "large" },
      { name: "Lime Juice", amount: 0.5, unit: "cup" },
      { name: "Fresh Mint", amount: 0.25, unit: "cup" },
      { name: "Water", amount: 3, unit: "cups" },
      { name: "Agave Nectar", amount: 3, unit: "tbsp" }
    ],
    instructions: [
      "Add cucumber, mint leaves, lime juice, agave nectar, and 1 cup of water to a blender.",
      "Blend on high speed for 45 seconds until smooth.",
      "Pour through a fine-mesh strainer into a pitcher.",
      "Stir in remaining 2 cups of water and serve over ice."
    ]
  },
  {
    id: "iced-golden-milk",
    name: "Iced Golden Milk Tea",
    temperature: "Cold",
    color: "Yellow",
    healthiness: ["Caffeine-Free", "Dairy-Free", "Vegan", "Refined Sugar-Free", "Nut-Free"],
    nutrients: ["Curcumin", "Gingerol", "Antioxidants"],
    useCases: ["Anti-Inflammatory", "Stress & Relaxation"],
    primaryTaste: "Spiced & Earthy",
    season: "Autumn",
    style: "Spiced Latte",
    prepTime: "Steep / Cook",
    prepMinutes: "10 mins",
    description: "An earthy, warming caffeine-free beverage built on creamy oat milk and anti-inflammatory spices, chilled over ice.",
    equipment: ["Small Saucepan", "Whisk", "Strainer"],
    tip: "Never skip the pinch of black pepper—it boosts curcumin absorption.",
    ingredients: [
      { name: "Oat Milk", amount: 2, unit: "cups" },
      { name: "Ground Turmeric", amount: 0.5, unit: "tsp" },
      { name: "Ground Cinnamon", amount: 0.25, unit: "tsp" },
      { name: "Black Pepper", amount: 1, unit: "pinch" },
      { name: "Fresh Ginger", amount: 1, unit: "tsp" },
      { name: "Maple Syrup", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Add oat milk, turmeric, cinnamon, black pepper, ginger, and maple syrup to a saucepan over low heat.",
      "Whisk continuously for 3–5 minutes until fragrant without boiling.",
      "Strain out ginger pieces, cool down, and pour over ice."
    ]
  },
  {
    id: "mango-cardamom-lassi",
    name: "Mango Cardamom Lassi",
    temperature: "Cold",
    color: "Yellow",
    healthiness: ["Caffeine-Free", "Nut-Free"],
    nutrients: ["Vitamin C", "Probiotics", "Antioxidants"],
    useCases: ["Gut & Digestion", "Sustained Energy"],
    primaryTaste: "Creamy & Indulgent",
    season: "Summer",
    style: "Smoothie / Lassi",
    prepTime: "Quick",
    prepMinutes: "5 mins",
    description: "A velvety Indian yogurt beverage balancing sweet tropical mango with fragrant ground cardamom.",
    equipment: ["Blender"],
    tip: "Use frozen mango chunks for a thick texture without diluting with extra ice.",
    ingredients: [
      { name: "Frozen Mango", amount: 1.5, unit: "cups" },
      { name: "Yogurt", amount: 1, unit: "cup" },
      { name: "Oat Milk", amount: 0.5, unit: "cup" },
      { name: "Ground Cardamom", amount: 0.25, unit: "tsp" },
      { name: "Honey", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Combine all ingredients in a blender.",
      "Puree on high speed for 60 seconds until smooth.",
      "Pour into glasses and serve cold."
    ]
  },
  {
    id: "hibiscus-ginger-iced-tea",
    name: "Hibiscus Ginger Iced Tea",
    temperature: "Cold",
    color: "Red",
    healthiness: ["Caffeine-Free", "Dairy-Free", "Vegan", "Refined Sugar-Free", "Nut-Free"],
    nutrients: ["Anthocyanins", "Gingerol", "Vitamin C"],
    useCases: ["Immune Boost", "Anti-Inflammatory"],
    primaryTaste: "Citrusy & Tart",
    season: "All-Year",
    style: "Herbal Tea",
    prepTime: "Steep / Cook",
    prepMinutes: "15 mins",
    description: "Visually striking ruby red still infusion delivering bold cranberry tartness, softened by warm ginger heat.",
    equipment: ["Teapot", "Strainer", "Pitcher"],
    tip: "Stir in honey while the tea is warm to dissolve quickly.",
    ingredients: [
      { name: "Hibiscus Flowers", amount: 0.5, unit: "cup" },
      { name: "Fresh Ginger", amount: 1, unit: "inch" },
      { name: "Water", amount: 4, unit: "cups" },
      { name: "Honey", amount: 3, unit: "tbsp" },
      { name: "Lime", amount: 1, unit: "whole" }
    ],
    instructions: [
      "Steep hibiscus flowers and ginger in boiling water for 15 minutes.",
      "Strain out solids and stir in honey while warm.",
      "Cool down and serve over ice with lime slices."
    ]
  },
  {
    id: "mexican-rice-horchata",
    name: "Mexican Rice Horchata",
    temperature: "Cold",
    color: "White",
    healthiness: ["Caffeine-Free", "Nut-Free"],
    nutrients: [],
    useCases: ["Stress & Relaxation"],
    primaryTaste: "Sweet & Fruity",
    season: "Summer",
    style: "Agua Fresca",
    prepTime: "Advance Prep",
    prepMinutes: "5 mins + 4h soak",
    description: "A smooth, creamy sweet cinnamon-infused rice drink served cold over ice.",
    equipment: ["Blender", "Cheesecloth"],
    tip: "Soak rice overnight for maximum creaminess.",
    ingredients: [
      { name: "White Rice", amount: 1, unit: "cup" },
      { name: "Cinnamon Stick", amount: 1, unit: "piece" },
      { name: "Water", amount: 4, unit: "cups" },
      { name: "Whole Milk", amount: 1, unit: "cup" },
      { name: "Sweetened Condensed Milk", amount: 0.5, unit: "cup" },
      { name: "Vanilla Extract", amount: 1, unit: "tsp" }
    ],
    instructions: [
      "Blend white rice, cinnamon stick, and water. Soak for 4 hours.",
      "Blend again until pulverized and strain through cheesecloth.",
      "Stir in whole milk, sweetened condensed milk, and vanilla extract. Serve over ice."
    ]
  },
  {
    id: "limonada-de-coco",
    name: "Limonada de Coco",
    temperature: "Cold",
    color: "White",
    healthiness: ["Caffeine-Free", "Dairy-Free", "Vegan", "Nut-Free"],
    nutrients: ["Vitamin C", "Electrolytes"],
    useCases: ["Deep Hydration"],
    primaryTaste: "Creamy & Indulgent",
    season: "Summer",
    style: "Agua Fresca",
    prepTime: "Quick",
    prepMinutes: "5 mins",
    description: "Creamy Colombian limeade blending rich coconut milk with fresh lime juice over ice.",
    equipment: ["Blender"],
    tip: "Use full-fat coconut milk for optimal texture.",
    ingredients: [
      { name: "Coconut Milk", amount: 1, unit: "cup" },
      { name: "Lime Juice", amount: 0.5, unit: "cup" },
      { name: "Ice", amount: 3, unit: "cups" },
      { name: "Simple Syrup", amount: 3, unit: "tbsp" }
    ],
    instructions: [
      "Combine coconut milk, lime juice, simple syrup, and ice in a blender.",
      "Blend on high speed until slushy.",
      "Pour into chilled glasses immediately."
    ]
  }
];