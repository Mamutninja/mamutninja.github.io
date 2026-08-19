const ALL_RECIPES = [
  {
    "id": "cucumber-mint-agua-fresca",
    "name": "Cucumber Mint Agua Fresca",
    "temperature": "Cold",
    "color": "Green",
    "healthiness": [
      "Caffeine-Free",
      "Dairy-Free",
      "Vegan",
      "Refined Sugar-Free",
      "Nut-Free"
    ],
    "nutrients": [
      "Vitamin C",
      "Electrolytes",
      "Antioxidants"
    ],
    "useCases": [
      "Deep Hydration",
      "Gut & Digestion"
    ],
    "primaryTaste": "Herbal & Fresh",
    "season": "Summer",
    "style": "Agua Fresca",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "description": "A classic Mexican still-water refresher that is deeply hydrating, light, and balanced between tart lime and cool herbal mint notes.",
    "equipment": [
      "Blender",
      "Fine-Mesh Strainer",
      "Pitcher"
    ],
    "tip": "Keep the cucumber peel on if you prefer a rich emerald color.",
    "ingredients": [
      {
        "name": "Cucumber",
        "amount": 1,
        "unit": "large"
      },
      {
        "name": "Lime Juice",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "name": "Fresh Mint",
        "amount": 0.25,
        "unit": "cup"
      },
      {
        "name": "Water",
        "amount": 3,
        "unit": "cups"
      },
      {
        "name": "Agave Nectar",
        "amount": 3,
        "unit": "tbsp"
      }
    ],
    "instructions": [
      "Add cucumber, mint leaves, lime juice, agave nectar, and 1 cup of water to a blender.",
      "Blend on high speed for 45 seconds until smooth.",
      "Pour through a fine-mesh strainer into a pitcher.",
      "Stir in remaining 2 cups of water and serve over ice."
    ]
  },
  {
    "id": "iced-golden-milk",
    "name": "Iced Golden Milk Tea",
    "temperature": "Cold",
    "color": "Yellow",
    "healthiness": [
      "Caffeine-Free",
      "Dairy-Free",
      "Vegan",
      "Refined Sugar-Free",
      "Nut-Free"
    ],
    "nutrients": [
      "Curcumin",
      "Gingerol",
      "Antioxidants"
    ],
    "useCases": [
      "Anti-Inflammatory",
      "Stress & Relaxation"
    ],
    "primaryTaste": "Spiced & Earthy",
    "season": "Autumn",
    "style": "Spiced Latte",
    "prepTime": "Steep / Cook",
    "prepMinutes": "10 mins",
    "description": "An earthy, warming caffeine-free beverage built on creamy oat milk and anti-inflammatory spices, chilled over ice.",
    "equipment": [
      "Small Saucepan",
      "Whisk",
      "Strainer"
    ],
    "tip": "Never skip the pinch of black pepper—it boosts curcumin absorption.",
    "ingredients": [
      {
        "name": "Oat Milk",
        "amount": 2,
        "unit": "cups"
      },
      {
        "name": "Ground Turmeric",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "name": "Ground Cinnamon",
        "amount": 0.25,
        "unit": "tsp"
      },
      {
        "name": "Black Pepper",
        "amount": 1,
        "unit": "pinch"
      },
      {
        "name": "Fresh Ginger",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "Maple Syrup",
        "amount": 1,
        "unit": "tbsp"
      }
    ],
    "instructions": [
      "Add oat milk, turmeric, cinnamon, black pepper, ginger, and maple syrup to a saucepan over low heat.",
      "Whisk continuously for 3–5 minutes until fragrant without boiling.",
      "Strain out ginger pieces, cool down, and pour over ice."
    ]
  },
  {
    "id": "mango-cardamom-lassi",
    "name": "Mango Cardamom Lassi",
    "temperature": "Cold",
    "color": "Yellow",
    "healthiness": [
      "Caffeine-Free",
      "Nut-Free"
    ],
    "nutrients": [
      "Vitamin C",
      "Probiotics",
      "Antioxidants"
    ],
    "useCases": [
      "Gut & Digestion",
      "Sustained Energy"
    ],
    "primaryTaste": "Creamy & Indulgent",
    "season": "Summer",
    "style": "Smoothie / Lassi",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "description": "A velvety Indian yogurt beverage balancing sweet tropical mango with fragrant ground cardamom.",
    "equipment": [
      "Blender"
    ],
    "tip": "Use frozen mango chunks for a thick texture without diluting with extra ice.",
    "ingredients": [
      {
        "name": "Frozen Mango",
        "amount": 1.5,
        "unit": "cups"
      },
      {
        "name": "Yogurt",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "Oat Milk",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "name": "Ground Cardamom",
        "amount": 0.25,
        "unit": "tsp"
      },
      {
        "name": "Honey",
        "amount": 1,
        "unit": "tbsp"
      }
    ],
    "instructions": [
      "Combine all ingredients in a blender.",
      "Puree on high speed for 60 seconds until smooth.",
      "Pour into glasses and serve cold."
    ]
  },
  {
    "id": "hibiscus-ginger-iced-tea",
    "name": "Hibiscus Ginger Iced Tea",
    "temperature": "Cold",
    "color": "Red",
    "healthiness": [
      "Caffeine-Free",
      "Dairy-Free",
      "Vegan",
      "Refined Sugar-Free",
      "Nut-Free"
    ],
    "nutrients": [
      "Anthocyanins",
      "Gingerol",
      "Vitamin C"
    ],
    "useCases": [
      "Immune Boost",
      "Anti-Inflammatory"
    ],
    "primaryTaste": "Citrusy & Tart",
    "season": "All-Year",
    "style": "Herbal Tea",
    "prepTime": "Steep / Cook",
    "prepMinutes": "15 mins",
    "description": "Visually striking ruby red still infusion delivering bold cranberry tartness, softened by warm ginger heat.",
    "equipment": [
      "Teapot",
      "Strainer",
      "Pitcher"
    ],
    "tip": "Stir in honey while the tea is warm to dissolve quickly.",
    "ingredients": [
      {
        "name": "Hibiscus Flowers",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "name": "Fresh Ginger",
        "amount": 1,
        "unit": "inch"
      },
      {
        "name": "Water",
        "amount": 4,
        "unit": "cups"
      },
      {
        "name": "Honey",
        "amount": 3,
        "unit": "tbsp"
      },
      {
        "name": "Lime",
        "amount": 1,
        "unit": "whole"
      }
    ],
    "instructions": [
      "Steep hibiscus flowers and ginger in boiling water for 15 minutes.",
      "Strain out solids and stir in honey while warm.",
      "Cool down and serve over ice with lime slices."
    ]
  },
  {
    "id": "mexican-rice-horchata",
    "name": "Mexican Rice Horchata",
    "temperature": "Cold",
    "color": "White",
    "healthiness": [
      "Caffeine-Free",
      "Nut-Free"
    ],
    "nutrients": [],
    "useCases": [
      "Stress & Relaxation"
    ],
    "primaryTaste": "Sweet & Fruity",
    "season": "Summer",
    "style": "Agua Fresca",
    "prepTime": "Advance Prep",
    "prepMinutes": "5 mins + 4h soak",
    "description": "A smooth, creamy sweet cinnamon-infused rice drink served cold over ice.",
    "equipment": [
      "Blender",
      "Cheesecloth"
    ],
    "tip": "Soak rice overnight for maximum creaminess.",
    "ingredients": [
      {
        "name": "White Rice",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "Cinnamon Stick",
        "amount": 1,
        "unit": "piece"
      },
      {
        "name": "Water",
        "amount": 4,
        "unit": "cups"
      },
      {
        "name": "Whole Milk",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "Sweetened Condensed Milk",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "name": "Vanilla Extract",
        "amount": 1,
        "unit": "tsp"
      }
    ],
    "instructions": [
      "Blend white rice, cinnamon stick, and water. Soak for 4 hours.",
      "Blend again until pulverized and strain through cheesecloth.",
      "Stir in whole milk, sweetened condensed milk, and vanilla extract. Serve over ice."
    ]
  },
  {
    "id": "limonada-de-coco",
    "name": "Limonada de Coco",
    "temperature": "Cold",
    "color": "White",
    "healthiness": [
      "Caffeine-Free",
      "Dairy-Free",
      "Vegan",
      "Nut-Free"
    ],
    "nutrients": [
      "Vitamin C",
      "Electrolytes"
    ],
    "useCases": [
      "Deep Hydration"
    ],
    "primaryTaste": "Creamy & Indulgent",
    "season": "Summer",
    "style": "Agua Fresca",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "description": "Creamy Colombian limeade blending rich coconut milk with fresh lime juice over ice.",
    "equipment": [
      "Blender"
    ],
    "tip": "Use full-fat coconut milk for optimal texture.",
    "ingredients": [
      {
        "name": "Coconut Milk",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "Lime Juice",
        "amount": 0.5,
        "unit": "cup"
      },
      {
        "name": "Ice",
        "amount": 3,
        "unit": "cups"
      },
      {
        "name": "Simple Syrup",
        "amount": 3,
        "unit": "tbsp"
      }
    ],
    "instructions": [
      "Combine coconut milk, lime juice, simple syrup, and ice in a blender.",
      "Blend on high speed until slushy.",
      "Pour into chilled glasses immediately."
    ]
  },
  {
    "id": "mango-strawberry-sunrise-smoothie-4467",
    "name": "Mango Strawberry Sunrise Smoothie",
    "style": "Fruit Smoothie",
    "description": "A vibrant, layered two-tone fruit smoothie featuring a sweet strawberry and tropical golden mango swirl.",
    "temperature": "Cold",
    "color": [
      "Yellow",
      "Pink"
    ],
    "primaryTaste": "Sweet & Fruity",
    "season": "Summer",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "healthiness": [
      "Caffeine-Free",
      "Homemade"
    ],
    "nutrients": [
      "Fresh Botanicals"
    ],
    "useCases": [
      "Custom Drink"
    ],
    "equipment": [
      "Standard Utensils"
    ],
    "tip": "Enjoy your custom homemade creation!",
    "ingredients": [
      {
        "name": "Frozen Mango",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "Yogurt",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "Whole Milk",
        "amount": 1,
        "unit": "cup"
      },
      {
        "name": "Frozen Strawberries",
        "amount": 1,
        "unit": "cup"
      }
    ],
    "instructions": [
      "Blend together the mangoes, half of the yogurt, and half of the milk.",
      "Also blend together the frozen strawberries, half of the yogurt, and half of the milk.",
      "Swirl both smoothies in one glass."
    ]
  },
  {
    "id": "creamy-hot-chocolate-3012",
    "name": "Creamy Hot Chocolate",
    "style": "Cocoa / Hot Chocolate",
    "description": "Creamy Homemade Hot Chocolate. A combination of cocoa powder and chocolate chips makes this hot chocolate extra flavorful and delicious!",
    "temperature": "Warm",
    "color": [
      "Brown"
    ],
    "primaryTaste": "Creamy & Indulgent",
    "season": "Winter",
    "prepTime": "Steep / Cook",
    "prepMinutes": "8 mins",
    "healthiness": [
      "Caffeine-Free",
      "Homemade"
    ],
    "nutrients": [
      "Fresh Botanicals"
    ],
    "useCases": [
      "Custom Drink"
    ],
    "equipment": [
      "Standard Utensils"
    ],
    "tip": "Enjoy your custom homemade creation!",
    "ingredients": [
      {
        "name": "Whole Milk",
        "amount": 1000,
        "unit": "grams"
      },
      {
        "name": "Cocoa Powder",
        "amount": 25,
        "unit": "grams"
      },
      {
        "name": "Sugar",
        "amount": 50,
        "unit": "grams"
      },
      {
        "name": "Dark Chocolate",
        "amount": 100,
        "unit": "grams"
      },
      {
        "name": "Vanilla Extract",
        "amount": 1,
        "unit": "gram"
      }
    ],
    "instructions": [
      "Place milk, cocoa powder and sugar in a small saucepan.",
      "Heat over medium/medium-low heat, whisking frequently, until warm (but not boiling).",
      "Add chocolate chips and whisk constantly until the chocolate chips melt and distribute evenly into the milk.",
      "Whisk in vanilla extract and a pinch of salt (if desired), serve immediately."
    ]
  },
  {
    "id": "white-hot-chocolate-7319",
    "name": "White Hot Chocolate",
    "style": "Cocoa / Hot Chocolate",
    "description": "A simple recipe for sweet and creamy homemade white hot chocolate.",
    "temperature": "Warm",
    "color": [
      "White"
    ],
    "primaryTaste": "Creamy & Indulgent",
    "season": "Winter",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "healthiness": [
      "Caffeine-Free",
      "Homemade"
    ],
    "nutrients": [
      "Fresh Botanicals"
    ],
    "useCases": [
      "Custom Drink"
    ],
    "equipment": [
      "Standard Utensils"
    ],
    "tip": "Enjoy your custom homemade creation!",
    "ingredients": [
      {
        "name": "Whole Milk",
        "amount": 1000,
        "unit": "grams"
      },
      {
        "name": "White Chocolate",
        "amount": 160,
        "unit": "grams"
      },
      {
        "name": "Vanilla Extract",
        "amount": 5,
        "unit": "grams"
      }
    ],
    "instructions": [
      "Place the milk, white chocolate, vanilla and a pinch of salt (if using) in a medium saucepan.",
      "Whisk continuously over medium-low heat, until the chocolate has melted and the mixture is smooth (do not boil)."
    ]
  },
  {
    "id": "dream-on-the-beach-9686",
    "name": "Dream on the Beach",
    "style": "Mocktail / Zero-Proof",
    "description": "A tropical drink.",
    "temperature": "Cold",
    "color": [
      "Yellow",
      "Red"
    ],
    "primaryTaste": "Sweet & Fruity",
    "season": "Summer",
    "prepTime": "Instant",
    "prepMinutes": "2 mins",
    "healthiness": [
      "Caffeine-Free",
      "Homemade"
    ],
    "nutrients": [
      "Fresh Botanicals"
    ],
    "useCases": [
      "Custom Drink"
    ],
    "equipment": [
      "Standard Utensils"
    ],
    "tip": "Enjoy your custom homemade creation!",
    "ingredients": [
      {
        "name": "Coconut Cream",
        "amount": 30,
        "unit": "grams"
      },
      {
        "name": "Pineapple Juice",
        "amount": 60,
        "unit": "grams"
      },
      {
        "name": "Orange Juice",
        "amount": 30,
        "unit": "grams"
      },
      {
        "name": "Lime Juice",
        "amount": 15,
        "unit": "grams"
      },
      {
        "name": "Grenadine",
        "amount": 10,
        "unit": "grams"
      },
      {
        "name": "Ice",
        "amount": 3,
        "unit": "pieces"
      }
    ],
    "instructions": [
      "Mix all ingredients, except the grenadine and the ice,",
      "Add ice and grenadine in your glass, then pour the drink over it."
    ]
  },
  {
    "id": "blue-cloud-skin-glow-smoothie-2505",
    "name": "\"Blue Cloud\" Skin Glow Smoothie",
    "style": "Fruit Smoothie",
    "description": "Achieve a radiant glow from the inside out with our beautiful \"Blue Cloud\" smoothie! This recipe is more than just a drink; it's a beauty booster packed with ingredients that support healthy, glowing skin.",
    "temperature": "Cold",
    "color": [
      "Blue"
    ],
    "primaryTaste": "Sweet & Fruity",
    "season": "Summer",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "healthiness": [
      "Caffeine-Free",
      "Homemade"
    ],
    "nutrients": [
      "Fresh Botanicals"
    ],
    "useCases": [
      "Custom Drink"
    ],
    "equipment": [
      "Standard Utensils"
    ],
    "tip": "Enjoy your custom homemade creation!",
    "ingredients": [
      {
        "name": "Frozen Bananas",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Frozen Pineapple",
        "amount": 110,
        "unit": "grams"
      },
      {
        "name": "Greek Yogurt",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Almond Milk",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Collagen Powder",
        "amount": 10,
        "unit": "grams"
      },
      {
        "name": "Blue Spirulina",
        "amount": 2,
        "unit": "grams"
      }
    ],
    "instructions": [
      "Take 2 tablespoons of Greek Yogurt and use the back of a spoon to smear 3 or 4 dollops around the inside walls of your serving glass (these are your \"clouds\").",
      "Add the frozen banana, frozen pineapple, remaining Greek yogurt, liquid milk base, collagen powder, and blue spirulina into a high-speed blender.",
      "Blend on high for 45–60 seconds until thick, velvety, and electric blue.",
      "Carefully pour the blue smoothie into your prepped glass so the white yogurt clouds stand out against the blue background."
    ]
  },
  {
    "id": "sunrise-3140",
    "name": "Sunrise",
    "style": "Mocktail / Zero-Proof",
    "description": "A bright, layered tropical mocktail balancing sweet orange, tropical pineapple, citrusy lemon, and rich grenadine for a stunning sunrise gradient.",
    "temperature": "Cold",
    "color": [
      "Yellow",
      "Red",
      "Orange"
    ],
    "primaryTaste": "Sweet & Fruity",
    "season": "Summer",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "healthiness": [
      "Caffeine-Free",
      "Homemade"
    ],
    "nutrients": [
      "Fresh Botanicals"
    ],
    "useCases": [
      "Custom Drink"
    ],
    "equipment": [
      "Standard Utensils"
    ],
    "tip": "Enjoy your custom homemade creation!",
    "ingredients": [
      {
        "name": "Orange Juice",
        "amount": 80,
        "unit": "grams"
      },
      {
        "name": "Pineapple Juice",
        "amount": 80,
        "unit": "grams"
      },
      {
        "name": "Lemon Juice",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Grenadine",
        "amount": 20,
        "unit": "grams"
      },
      {
        "name": "Water",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Ice",
        "amount": 3,
        "unit": "cubes"
      }
    ],
    "instructions": [
      "Fill a glass with ice cubes.",
      "Pour in the orange juice, pineapple juice, and lemon juice. Stir gently.",
      "Slowly pour the grenadine syrup over the back of a spoon to create the sunrise effect.",
      "Top with water and stir lightly.",
      "Garnish with an orange slice and cherry. Enjoy!"
    ]
  },
  {
    "id": "pi-a-colada-mocktail-2333",
    "name": "Piña Colada Mocktail",
    "style": "Mocktail / Zero-Proof",
    "description": "An easy non alcoholic piña colada mocktail for 1 or a crowd.",
    "temperature": "Cold",
    "color": [
      "Yellow"
    ],
    "primaryTaste": "Sweet & Fruity",
    "season": "Summer",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "healthiness": [
      "Caffeine-Free",
      "Homemade"
    ],
    "nutrients": [
      "Fresh Botanicals"
    ],
    "useCases": [
      "Custom Drink"
    ],
    "equipment": [
      "Standard Utensils"
    ],
    "tip": "Enjoy your custom homemade creation!",
    "ingredients": [
      {
        "name": "Frozen Pineapple",
        "amount": 145,
        "unit": "grams"
      },
      {
        "name": "Coconut Cream",
        "amount": 80,
        "unit": "grams"
      },
      {
        "name": "Pineapple Juice",
        "amount": 120,
        "unit": "grams"
      }
    ],
    "instructions": [
      "Place all ingredients in a blender and blend until smooth.",
      "Pour into a glass, garnish with a pineapple wedge and serve immediately."
    ]
  },
  {
    "id": "vanilla-hibiscus-tea-latte-5492",
    "name": "Vanilla Hibiscus Tea Latte",
    "style": "Spiced Latte",
    "description": "A cozy, vibrant pink latte combining concentrated tart hibiscus tea with fragrant vanilla and silky frothed milk.",
    "temperature": "Cold",
    "color": [
      "Pink"
    ],
    "primaryTaste": "Citrusy & Tart",
    "season": "All-Year",
    "prepTime": "Steep / Cook",
    "prepMinutes": "5 mins",
    "healthiness": [
      "Caffeine-Free",
      "Homemade"
    ],
    "nutrients": [
      "Fresh Botanicals"
    ],
    "useCases": [
      "Custom Drink"
    ],
    "equipment": [
      "Standard Utensils"
    ],
    "tip": "Enjoy your custom homemade creation!",
    "ingredients": [
      {
        "name": "Hibiscus Flowers",
        "amount": 4,
        "unit": "grams"
      },
      {
        "name": "Water",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Oat Milk",
        "amount": 180,
        "unit": "grams"
      },
      {
        "name": "Vanilla Syrup",
        "amount": 15,
        "unit": "grams"
      },
      {
        "name": "Ice",
        "amount": 3,
        "unit": "cubes"
      }
    ],
    "instructions": [
      "Steep hibiscus flowers in 120g of boiling water for 5-7 minutes to create a concentrated brew.",
      "Put vanilla syrup and ice cubes in a mug.",
      "Pour in the milk."
    ]
  },
  {
    "id": "pink-stawberry-milk-tea",
    "name": "Pink Stawberry Milk Tea",
    "style": "Spiced Latte",
    "description": "A sweet, velvety layered beverage combining robust black tea with strawberry syrup and creamy sweetened condensed milk.",
    "temperature": "Cold",
    "color": [
      "Pink"
    ],
    "primaryTaste": "Sweet & Fruity",
    "season": "All-Year",
    "prepTime": "Steep / Cook",
    "prepMinutes": "7 mins",
    "ingredients": [
      {
        "name": "Whole Milk",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Water",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Black Tea",
        "amount": 3,
        "unit": "grams"
      },
      {
        "name": "Strawberry Syrup",
        "amount": 20,
        "unit": "grams"
      },
      {
        "name": "Sweetened Condensed Milk",
        "amount": 20,
        "unit": "grams"
      },
      {
        "name": "Vanilla Extract",
        "amount": 2,
        "unit": "grams"
      },
      {
        "name": "Ice",
        "amount": 3,
        "unit": "cubes"
      }
    ],
    "instructions": [
      "Steep black tea in 120g of hot water for 5–7 minutes. Let cool completely.",
      "In a glass, mix milk, strawberry syrup, sweetened condensed milk, and vanilla extract.",
      "Fill a serving glass with ice and pour in the strawberry milk mixture.",
      "Slowly add the cooled black tea over the back of a spoon to layer."
    ]
  },
  {
    "id": "brazilian-cherry-limeade",
    "name": "Brazilian Cherry Limeade",
    "style": "Lemonade / Limeade",
    "description": "A frothy, sweet-and-sour Brazilian-style limonada blended with whole fresh limes, sweet cherries, and rich condensed milk.",
    "temperature": "Cold",
    "color": [
      "Red",
      "Pink"
    ],
    "primaryTaste": "Citrusy & Tart",
    "season": "Summer",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "ingredients": [
      {
        "name": "Lime Juice",
        "amount": 200,
        "unit": "grams"
      },
      {
        "name": "Water",
        "amount": 1000,
        "unit": "grams"
      },
      {
        "name": "Cherries",
        "amount": 150,
        "unit": "grams"
      },
      {
        "name": "Sweetened Condensed Milk",
        "amount": 300,
        "unit": "grams"
      },
      {
        "name": "Ice",
        "amount": 5,
        "unit": "cubes"
      }
    ],
    "instructions": [
      "Add quartered limes and 960g cold water to a blender. Blend for MAX 30 seconds.",
      "Strain completely through a fine-mesh strainer into a pitcher, discarding the lime peels.",
      "Pour the strained lime liquid back into the blender.",
      "Add pitted cherries, sweetened condensed milk, and ice. Blend until smooth and frothy.",
      "Pour over extra ice and serve immediately!"
    ]
  },
  {
    "id": "instant-mood-boosting-golden-cacao",
    "name": "Instant Mood Boosting Golden Cacao",
    "style": "Cocoa / Hot Chocolate",
    "description": "A cozy, mood-elevating warm tonic blending rich raw cacao, anti-inflammatory turmeric, and sweet cinnamon with creamy plant milk.",
    "temperature": "Warm",
    "color": [
      "Yellow",
      "Brown"
    ],
    "primaryTaste": "Spiced & Earthy",
    "season": "Winter",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "ingredients": [
      {
        "name": "Oat Milk",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Cocoa Powder",
        "amount": 10,
        "unit": "grams"
      },
      {
        "name": "Ground Turmeric",
        "amount": 3,
        "unit": "grams"
      },
      {
        "name": "Ground Cinnamon",
        "amount": 2,
        "unit": "grams"
      },
      {
        "name": "Maple Syrup",
        "amount": 7,
        "unit": "grams"
      }
    ],
    "instructions": [
      "Heat 240g of plant milk in a saucepan or mug until steaming.",
      "Add cacao powder, ground turmeric, ground cinnamon, and maple syrup.",
      "Whisk vigorously or froth with a handheld frother until smooth and creamy.",
      "Pour into a mug and enjoy warm."
    ]
  },
  {
    "id": "purple-glow-smoothie",
    "name": "Purple Glow Smoothie",
    "style": "Fruit Smoothie",
    "description": "A nutrient-packed, antioxidant-rich smoothie crafted to hydrate your body, support gut health, and give your skin a natural glow.",
    "temperature": "Cold",
    "color": [
      "Purple"
    ],
    "primaryTaste": "Creamy & Indulgent",
    "season": "Summer",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "ingredients": [
      {
        "name": "Blueberries",
        "amount": 150,
        "unit": "grams"
      },
      {
        "name": "Frozen Bananas",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Almond Milk",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Chia Seeds",
        "amount": 12,
        "unit": "grams"
      }
    ],
    "instructions": [
      "Add the blueberries, ripe banana, almond milk, and chia seeds to a high-speed blender.",
      "Blend on high for 1 to 2 minutes until smooth and creamy.",
      "Pour into a glass and serve immediately."
    ]
  },
  {
    "id": "nightly-citrus-reset-elixir",
    "name": "Nightly Citrus Reset Elixir",
    "style": "Mocktail / Zero-Proof",
    "description": "A soothing, hydrating nighttime reset drink designed to balance electrolytes, support digestion, reduce bloating, and promote restful sleep.",
    "temperature": "Cold",
    "color": [
      "Custom"
    ],
    "primaryTaste": "Citrusy & Tart",
    "season": "All-Year",
    "prepTime": "Quick",
    "prepMinutes": "3 mins",
    "ingredients": [
      {
        "name": "Orange Juice",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Coconut Water",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Coconut Milk",
        "amount": 30,
        "unit": "grams"
      },
      {
        "name": "Lime Juice",
        "amount": 15,
        "unit": "grams"
      },
      {
        "name": "Sea Salt",
        "amount": 1,
        "unit": "gram"
      }
    ],
    "instructions": [
      "In a glass, combine orange juice, coconut water, coconut milk, lime juice, and sea salt.",
      "Stir thoroughly until completely mixed."
    ]
  },
  {
    "id": "pineapple-hibiscus-tea",
    "name": "Pineapple Hibiscus Tea",
    "style": "Herbal Tea",
    "description": "A refreshing, tart, and tropical iced tea blend combining vibrant hibiscus tea with sweet pineapple juice and crisp lemon.",
    "temperature": "Cold",
    "color": [
      "Red"
    ],
    "primaryTaste": "Citrusy & Tart",
    "season": "Summer",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "ingredients": [
      {
        "name": "Pineapple Juice",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Hibiscus Flowers",
        "amount": 4,
        "unit": "grams"
      },
      {
        "name": "Water",
        "amount": 60,
        "unit": "grams"
      },
      {
        "name": "Lemon Juice",
        "amount": 30,
        "unit": "grams"
      }
    ],
    "instructions": [
      "Pour the pineapple juice, brewed hibiscus tea, and fresh lemon juice into a glass.",
      "Stir well until thoroughly combined."
    ]
  },
  {
    "id": "orange-cinnamon-milk-tea",
    "name": "Orange Cinnamon Milk Tea",
    "style": "Spiced Latte",
    "description": "A cozy, aromatic milk tea infused with warm cinnamon, bright citrus orange peel, and rich black tea.",
    "temperature": "Warm",
    "color": [
      "Amber"
    ],
    "primaryTaste": "Spiced & Earthy",
    "season": "Autumn",
    "prepTime": "Steep / Cook",
    "prepMinutes": "15 mins",
    "ingredients": [
      {
        "name": "Water",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Whole Milk",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Black Tea",
        "amount": 3,
        "unit": "grams"
      },
      {
        "name": "Orange",
        "amount": 1,
        "unit": "piece"
      },
      {
        "name": "Cinnamon Stick",
        "amount": 4,
        "unit": "grams"
      },
      {
        "name": "Brown Sugar",
        "amount": 8,
        "unit": "grams"
      },
      {
        "name": "Vanilla Extract",
        "amount": 5,
        "unit": "grams"
      }
    ],
    "instructions": [
      "In a small saucepan, bring 240 g of water to a low boil.",
      "Add the orange peel and cinnamon stick, then lower the heat and simmer for 5 minutes to infuse the flavors.",
      "Strain the hot orange-cinnamon infusion into a cup, add the black tea, and steep for 3 to 5 minutes before removing the tea.",
      "Stir in the brown sugar and vanilla extract while the liquid is hot until fully dissolved.",
      "Warm (or froth) the milk and pour it into the tea mixture.",
      "Garnish with an orange slice or peel twist and serve hot (or let cool and serve over ice)."
    ]
  },
  {
    "id": "earl-grey-hot-chocolate",
    "name": "Earl Grey Hot Chocolate",
    "style": "Cocoa / Hot Chocolate",
    "description": "A decadent fusion of rich, velvety dark chocolate infused with the fragrant, citrusy bergamot notes of Earl Grey tea.",
    "temperature": "Warm",
    "color": [
      "Brown"
    ],
    "primaryTaste": "Creamy & Indulgent",
    "season": "Winter",
    "prepTime": "Steep / Cook",
    "prepMinutes": "10 mins",
    "ingredients": [
      {
        "name": "Whole Milk",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Heavy Cream",
        "amount": 60,
        "unit": "grams"
      },
      {
        "name": "Earl Grey Tea",
        "amount": 3,
        "unit": "grams"
      },
      {
        "name": "Dark Chocolate",
        "amount": 60,
        "unit": "grams"
      },
      {
        "name": "Brown Sugar",
        "amount": 10,
        "unit": "grams"
      },
      {
        "name": "Vanilla Extract",
        "amount": 3,
        "unit": "grams"
      },
      {
        "name": "Sea Salt",
        "amount": 1,
        "unit": "gram"
      }
    ],
    "instructions": [
      "In a small saucepan, combine the whole milk and heavy cream over medium-low heat until steaming and tiny bubbles form around the edges (do not boil).",
      "Remove from heat, add the Earl Grey tea, cover, and steep for 5 to 7 minutes.",
      "Remove the tea bags (or strain out loose tea leaves), pressing gently to extract the flavor.",
      "Return the infused milk to low heat, add the chopped dark chocolate, brown sugar, vanilla extract, and a pinch of sea salt.",
      "Whisk constantly over low heat until the chocolate is completely melted and the drink is smooth and creamy.",
      "Pour into a mug and top with whipped cream, cocoa powder, or marshmallow garnish if desired."
    ]
  },
  {
    "id": "healthy-apple-pie-fall-smoothie",
    "name": "Healthy Apple Pie Fall Smoothie",
    "style": "Fruit Smoothie",
    "description": "A cozy, nourishing smoothie that captures the classic warmth of apple pie, featuring fresh apples, oats, autumn spices, and creamy milk.",
    "temperature": "Cold",
    "color": [
      "Amber"
    ],
    "primaryTaste": "Spiced & Earthy",
    "season": "Autumn",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "ingredients": [
      {
        "name": "Apple",
        "amount": 2,
        "unit": "pieces"
      },
      {
        "name": "Whole Milk",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Greek Yogurt",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Ground Cinnamon",
        "amount": 1,
        "unit": "tső"
      },
      {
        "name": "Nutmeg",
        "amount": 0.25,
        "unit": "tsp"
      },
      {
        "name": "Ground Cardamom",
        "amount": 1,
        "unit": "pinch"
      },
      {
        "name": "Honey",
        "amount": 20,
        "unit": "grams"
      }
    ],
    "instructions": [
      "Add the cored apples, milk, plain Greek yogurt, ground cinnamon, ground nutmeg, ground cardamom, and optional sweetener to a high-speed blender.",
      "Blend on high for 1 to 2 minutes until completely smooth and creamy."
    ]
  },
  {
    "id": "london-fog-tea-latte",
    "name": "London Fog Tea Latte",
    "style": "Spiced Latte",
    "description": "An Earl Grey tea latte flavoured with vanilla and topped with frothy steamed milk.",
    "temperature": "Warm",
    "color": [
      "Amber"
    ],
    "primaryTaste": "Spiced & Earthy",
    "season": "Autumn",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "ingredients": [
      {
        "name": "Earl Grey Tea",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "Water",
        "amount": 250,
        "unit": "grams"
      },
      {
        "name": "Whole Milk",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Vanilla Syrup",
        "amount": 2,
        "unit": "tbsp"
      }
    ],
    "instructions": [
      "Steep the tea in a cup of boiling hot water for 3-4 minutes until quite strong. Remove the teabag or infuser.",
      "Add 2 pumps vanilla syrup and stir to dissolve.",
      "Steam the milk and pour it into the tea over a spoon to create layers. Serve immediately"
    ]
  },
  {
    "id": "chamomile-vanilla-latte",
    "name": "Chamomile Vanilla Latte",
    "style": "Spiced Latte",
    "description": "A gentle, calming bedtime tea latte made with soothing chamomile, warm milk, and a touch of vanilla extract to ease anxiety and promote restful sleep.",
    "temperature": "Warm",
    "color": [
      "White"
    ],
    "primaryTaste": "Herbal & Fresh",
    "season": "All-Year",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "ingredients": [
      {
        "name": "Water",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Whole Milk",
        "amount": 60,
        "unit": "grams"
      },
      {
        "name": "Vanilla Extract",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "name": "Chamomile",
        "amount": 1,
        "unit": "bag"
      }
    ],
    "instructions": [
      "Steep the chamomile tea bag in 240 g of hot water for 3 to 5 minutes.",
      "Remove the tea bag and stir in the warm milk and vanilla extract."
    ]
  },
  {
    "id": "healthy-pink-punch-smoothie",
    "name": "Healthy Pink Punch Smoothie",
    "style": "Fruit Smoothie",
    "description": "A vibrant, tropical punch smoothie loaded with raspberries, mango, pineapple, and banana blended in creamy coconut milk.",
    "temperature": "Cold",
    "color": [
      "Pink"
    ],
    "primaryTaste": "Sweet & Fruity",
    "season": "Summer",
    "prepTime": "Quick",
    "prepMinutes": "5 mins",
    "ingredients": [
      {
        "name": "Coconut Milk",
        "amount": 240,
        "unit": "grams"
      },
      {
        "name": "Frozen Bananas",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "Mango",
        "amount": 80,
        "unit": "grams"
      },
      {
        "name": "Pineapple",
        "amount": 80,
        "unit": "grams"
      },
      {
        "name": "Raspberries",
        "amount": 60,
        "unit": "grams"
      }
    ],
    "instructions": [
      "Add the coconut milk, banana, mango, pineapple, and raspberries to a high-speed blender.",
      "Blend on high for 1 to 2 minutes until smooth and creamy."
    ]
  },
  {
    "id": "raspberry-white-hot-chocolate",
    "name": "Raspberry White Hot Chocolate",
    "style": "Cocoa / Hot Chocolate",
    "description": "A decadent, velvety hot chocolate made with rich white chocolate, heavy cream, and a vibrant homemade raspberry sauce for the perfect tart and sweet balance.",
    "temperature": "Warm",
    "color": [
      "Pink"
    ],
    "primaryTaste": "Creamy & Indulgent",
    "season": "Winter",
    "prepTime": "Steep / Cook",
    "prepMinutes": "15 mins",
    "ingredients": [
      {
        "name": "Raspberries",
        "amount": 340,
        "unit": "grams"
      },
      {
        "name": "Sugar",
        "amount": 2,
        "unit": "tbsp"
      },
      {
        "name": "Whole Milk",
        "amount": 480,
        "unit": "grams"
      },
      {
        "name": "Heavy Cream",
        "amount": 120,
        "unit": "grams"
      },
      {
        "name": "White Chocolate",
        "amount": 170,
        "unit": "grams"
      },
      {
        "name": "Vanilla Extract",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "Sea Salt",
        "amount": 1,
        "unit": "pinch"
      }
    ],
    "instructions": [
      "Puree the raspberries and granulated sugar in a blender or food processor until smooth.",
      "Pass the puree through a fine mesh strainer into a bowl to strain out the seeds.",
      "In a saucepan over medium-low heat, warm the milk and heavy cream until steaming (do not let it boil).",
      "Lower the heat to minimum, then whisk in the chopped white chocolate, vanilla extract, and pinch of salt until completely melted and smooth.",
      "Whisk in the raspberry sauce (or swirl it directly into individual serving mugs) and serve warm."
    ]
  }
];

if (typeof module !== 'undefined') {
  module.exports = { ALL_RECIPES };
}