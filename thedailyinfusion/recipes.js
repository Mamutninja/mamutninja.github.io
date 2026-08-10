const ALL_RECIPES = [
  {
    id: "cucumber-mint-agua-fresca",
    name: "Cucumber Mint Agua Fresca",
    temperature: "Cold",
    color: "Green",
    healthiness: ["Caffeine-Free", "Dairy-Free", "Vegan", "Refined Sugar-Free"],
    nutrients: ["Vitamin C", "Electrolytes"],
    useCases: ["Deep Hydration", "Gut & Digestion"],
    primaryTaste: "Herbal & Fresh",
    season: "Summer",
    style: "Agua Fresca",
    prepTime: "Quick",
    prepMinutes: "5 mins",
    description: "A classic Mexican still-water refresher that is deeply hydrating, light, and balanced between tart lime and cool herbal mint notes.",
    equipment: ["Blender", "Fine-Mesh Strainer", "Pitcher"],
    tip: "Keep the cucumber peel on if you prefer a rich emerald color, or peel it for a lighter pastel green aesthetic.",
    ingredients: [
      { name: "English Cucumber (chopped)", amount: 1, unit: "large" },
      { name: "Fresh Lime Juice", amount: 0.5, unit: "cup" },
      { name: "Fresh Mint Leaves", amount: 0.25, unit: "cup" },
      { name: "Still Water", amount: 3, unit: "cups" },
      { name: "Agave Nectar or Honey", amount: 3, unit: "tbsp" }
    ],
    instructions: [
      "Add chopped cucumber, mint leaves, lime juice, sweetener, and 1 cup of still water to a blender.",
      "Blend on high speed for 45 seconds until completely pulverized.",
      "Pour the mixture through a fine-mesh strainer into a pitcher to remove pulp.",
      "Stir in the remaining 2 cups of still water and serve in tall glasses over ice."
    ]
  },
  {
    id: "iced-golden-milk",
    name: "Iced Golden Milk Tea",
    temperature: "Cold",
    color: "Yellow",
    healthiness: ["Caffeine-Free", "Dairy-Free", "Refined Sugar-Free"],
    nutrients: ["Curcumin", "Gingerol"],
    useCases: ["Anti-Inflammatory", "Stress & Relaxation"],
    primaryTaste: "Spiced & Warm",
    season: "Autumn",
    style: "Spiced Latte",
    prepTime: "Steep / Cook",
    prepMinutes: "10 mins",
    description: "An earthy, warming caffeine-free beverage built on creamy oat milk and anti-inflammatory spices, chilled over ice.",
    equipment: ["Small Saucepan", "Whisk", "Strainer"],
    tip: "Never skip the pinch of black pepper—it dramatically increases the bioavailability of curcumin in turmeric.",
    ingredients: [
      { name: "Oat Milk or Almond Milk", amount: 2, unit: "cups" },
      { name: "Ground Turmeric", amount: 0.5, unit: "tsp" },
      { name: "Ground Cinnamon", amount: 0.25, unit: "tsp" },
      { name: "Black Pepper", amount: 1, unit: "pinch" },
      { name: "Grated Fresh Ginger", amount: 1, unit: "tsp" },
      { name: "Pure Maple Syrup", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Add milk, turmeric, cinnamon, black pepper, ginger, and maple syrup to a saucepan over low heat.",
      "Whisk continuously for 3 to 5 minutes until warm and fragrant without boiling.",
      "Strain out ginger pieces, let cool to room temperature, and pour over ice."
    ]
  },
  {
    id: "mango-cardamom-lassi",
    name: "Mango Cardamom Lassi",
    temperature: "Cold",
    color: "Yellow",
    healthiness: ["Caffeine-Free"],
    nutrients: ["Vitamin C", "Probiotics"],
    useCases: ["Gut & Digestion"],
    primaryTaste: "Creamy & Indulgent",
    season: "Summer",
    style: "Smoothie / Lassi",
    prepTime: "Quick",
    prepMinutes: "5 mins",
    description: "A velvety Indian yogurt beverage balancing sweet tropical mango with fragrant ground cardamom.",
    equipment: ["Blender"],
    tip: "Use frozen mango chunks for a thick, chilled smoothie consistency without diluting with extra ice.",
    ingredients: [
      { name: "Ripe Mango Chunks", amount: 1.5, unit: "cups" },
      { name: "Plain Whole-Milk Yogurt", amount: 1, unit: "cup" },
      { name: "Milk or Oat Milk", amount: 0.5, unit: "cup" },
      { name: "Ground Cardamom", amount: 0.25, unit: "tsp" },
      { name: "Honey or Agave", amount: 1, unit: "tbsp" }
    ],
    instructions: [
      "Combine mango chunks, yogurt, milk, ground cardamom, and sweetener in a high-speed blender.",
      "Puree on high speed for 60 seconds until completely smooth.",
      "Pour into chilled glasses and garnish with crushed pistachios or extra cardamom."
    ]
  },
  {
    id: "hibiscus-ginger-iced-tea",
    name: "Hibiscus Ginger Iced Tea",
    temperature: "Cold",
    color: "Red",
    healthiness: ["Caffeine-Free", "Dairy-Free", "Vegan", "Refined Sugar-Free"],
    nutrients: ["Anthocyanins", "Gingerol", "Vitamin C"],
    useCases: ["Immune Boost", "Anti-Inflammatory"],
    primaryTaste: "Citrusy & Tart",
    season: "All-Year",
    style: "Herbal Tea",
    prepTime: "Steep / Cook",
    prepMinutes: "15 mins",
    description: "Visually striking ruby red still infusion delivering bold cranberry tartness, softened by warm ginger heat.",
    equipment: ["Teapot or Pot", "Strainer", "Pitcher"],
    tip: "Stir in sweetener while the brewed tea is warm so it dissolves effortlessly.",
    ingredients: [
      { name: "Dried Hibiscus Flowers (Jamaica)", amount: 0.5, unit: "cup" },
      { name: "Fresh Ginger (sliced)", amount: 1, unit: "inch" },
      { name: "Boiling Water", amount: 4, unit: "cups" },
      { name: "Honey or Simple Syrup", amount: 3, unit: "tbsp" },
      { name: "Fresh Lime Wheels", amount: 4, unit: "slices" }
    ],
    instructions: [
      "Steep dried hibiscus flowers and ginger slices in 4 cups of boiling water for 15 minutes.",
      "Strain out the solids and stir in honey while warm until dissolved.",
      "Allow tea to cool to room temperature, then chill in the fridge and serve over ice with lime slices."
    ]
  },
  {
    id: "mexican-rice-horchata",
    name: "Mexican Rice Horchata",
    temperature: "Cold",
    color: "White",
    healthiness: ["Caffeine-Free"],
    nutrients: [],
    useCases: ["Stress & Relaxation"],
    primaryTaste: "Sweet & Fruity",
    season: "Summer",
    style: "Agua Fresca",
    prepTime: "Steep / Cook",
    prepMinutes: "5 mins + 4h soak",
    description: "A smooth, creamy sweet cinnamon-infused rice drink served cold over ice.",
    equipment: ["Blender", "Cheesecloth or Fine Mesh Strainer"],
    tip: "Soaking the rice and cinnamon stick overnight yields the maximum creamy flavor and smoothest texture.",
    ingredients: [
      { name: "Long-Grain White Rice", amount: 1, unit: "cup" },
      { name: "Cinnamon Stick", amount: 1, unit: "piece" },
      { name: "Warm Water", amount: 4, unit: "cups" },
      { name: "Milk or Oat Milk", amount: 1, unit: "cup" },
      { name: "Sweetened Condensed Milk", amount: 0.5, unit: "cup" },
      { name: "Vanilla Extract", amount: 1, unit: "tsp" }
    ],
    instructions: [
      "Blend long-grain rice, cinnamon stick, and warm water for 2 minutes. Let soak for at least 4 hours.",
      "Blend again until rice is fully pulverized, then strain through cheesecloth into a pitcher.",
      "Stir in milk, sweetened condensed milk, and vanilla extract. Serve well-chilled over ice."
    ]
  },
  {
    id: "limonada-de-coco",
    name: "Limonada de Coco",
    temperature: "Cold",
    color: "White",
    healthiness: ["Caffeine-Free", "Dairy-Free", "Vegan"],
    nutrients: ["Vitamin C", "Electrolytes"],
    useCases: ["Deep Hydration"],
    primaryTaste: "Creamy & Indulgent",
    season: "Summer",
    style: "Agua Fresca",
    prepTime: "Quick",
    prepMinutes: "5 mins",
    description: "Creamy Colombian limeade blending rich coconut milk with fresh lime juice over crushed ice.",
    equipment: ["Blender"],
    tip: "Use canned full-fat coconut milk rather than light coconut water for a luxurious, key-lime pie texture.",
    ingredients: [
      { name: "Full-Fat Coconut Milk", amount: 1, unit: "cup" },
      { name: "Fresh Lime Juice", amount: 0.5, unit: "cup" },
      { name: "Crushed Ice", amount: 3, unit: "cups" },
      { name: "Simple Syrup or Agave", amount: 3, unit: "tbsp" }
    ],
    instructions: [
      "Add coconut milk, fresh lime juice, simple syrup, and crushed ice to a blender.",
      "Blend on high speed for 30–45 seconds until thick, frosty, and slushy.",
      "Pour immediately into chilled glasses and garnish with a lime wheel."
    ]
  }
];