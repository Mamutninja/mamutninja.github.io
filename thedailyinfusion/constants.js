const TAXONOMY = {
  INGREDIENT_CATEGORIES: [
    {
      name: "🍓 Fresh Fruit & Herbs",
      items: [
        "Cucumber", "Lime", "Lemon", "Orange", "Blood Orange", 
        "Strawberries", "Blackberries", "Blueberries", "Watermelon", 
        "Mango", "Peach", "Avocado", "Fresh Mint", "Fresh Basil", 
        "Fresh Ginger", "Fresh Rosemary", "Fresh Thyme"
      ]
    },
    {
      name: "❄️ Frozen Fruit & Ice",
      items: [
        "Ice", "Frozen Mango", "Frozen Strawberries", 
        "Frozen Berries", "Frozen Peaches"
      ]
    },
    {
      name: "🧃 Fruit Juices & Nectars",
      items: [
        "Lime Juice", "Lemon Juice", "Orange Juice", "Pineapple Juice", 
        "Cranberry Juice", "Pomegranate Juice", "Grapefruit Juice", 
        "Passionfruit Nectar", "Mango Puree", "Tamarind Pulp"
      ]
    },
    {
      name: "🥛 Milks, Dairy & Bases",
      items: [
        "Oat Milk", "Almond Milk", "Whole Milk", "Coconut Milk", 
        "Yogurt", "Sweetened Condensed Milk", "Evaporated Milk", "Coconut Water"
      ]
    },
    {
      name: "🍫 Sweeteners, Spices & Cocoa",
      items: [
        "Honey", "Agave Nectar", "Maple Syrup", "Simple Syrup", "Sugar", 
        "Cocoa Powder", "Ground Turmeric", "Ground Cinnamon", "Cinnamon Stick", 
        "Black Pepper", "Ground Cardamom", "Vanilla Extract"
      ]
    },
    {
      name: "🫖 Teas, Grains & Staples",
      items: [
        "Water", "Green Tea", "Matcha Powder", "Black Tea", 
        "White Tea", "Hojicha Powder", "Hibiscus Flowers", 
        "White Rice", "Purple Corn"
      ]
    }
  ],

  TEMPERATURES: [
    { label: "🧊 Cold", value: "Cold" },
    { label: "☕ Warm / Hot", value: "Warm" },
    { label: "🌡️ Room Temp", value: "Room Temp" }
  ],

  COLORS: [
    { label: "🟢 Green", value: "Green" },
    { label: "🟡 Yellow", value: "Yellow" },
    { label: "🔴 Red", value: "Red" },
    { label: "🟣 Purple", value: "Purple" },
    { label: "⚪ White", value: "White" },
    { label: "🟤 Brown", value: "Brown" },
    { label: "🟠 Orange", value: "Orange" },
    { label: "🩷 Pink", value: "Pink" },
    { label: "🌾 Amber", value: "Amber" },
    { label: "💧 Clear", value: "Clear" }
  ],

  HEALTHINESS: [
    { label: "🌱 Caffeine-Free", value: "Caffeine-Free" },
    { label: "🥛 Dairy-Free", value: "Dairy-Free" },
    { label: "🍃 Vegan", value: "Vegan" },
    { label: "🍯 Sugar-Free", value: "Refined Sugar-Free" },
    { label: "🥜 Nut-Free", value: "Nut-Free" },
    { label: "✨ Low-Calorie", value: "Low-Calorie" }
  ],

  NUTRIENTS: [
    { label: "🍋 Vitamin C", value: "Vitamin C" },
    { label: "✨ Curcumin", value: "Curcumin" },
    { label: "🫚 Gingerol", value: "Gingerol" },
    { label: "🍇 Anthocyanins", value: "Anthocyanins" },
    { label: "⚡ Electrolytes", value: "Electrolytes" },
    { label: "🦠 Probiotics", value: "Probiotics" },
    { label: "🛡️ Antioxidants", value: "Antioxidants" }
  ],

  USE_CASES: [
    { label: "💧 Hydration", value: "Deep Hydration" },
    { label: "🍃 Gut Health", value: "Gut & Digestion" },
    { label: "🌿 Anti-Inflammatory", value: "Anti-Inflammatory" },
    { label: "🧘 Relaxation", value: "Stress & Relaxation" },
    { label: "🛡️ Immune Boost", value: "Immune Boost" },
    { label: "⚡ Sustained Energy", value: "Sustained Energy" }
  ],

  TASTES: [
    { label: "🍋 Citrusy & Tart", value: "Citrusy & Tart" },
    { label: "🍓 Sweet & Fruity", value: "Sweet & Fruity" },
    { label: "🌿 Herbal & Fresh", value: "Herbal & Fresh" },
    { label: "🥛 Creamy", value: "Creamy & Indulgent" },
    { label: "🌶️ Spiced & Earthy", value: "Spiced & Earthy" },
    { label: "🌸 Floral", value: "Bittersweet & Floral" },
    { label: "🌰 Nutty", value: "Nutty & Toasted" },
    { label: "🧪 Tangy", value: "Tangy & Vinegar" }
  ],

  SEASONS: [
    { label: "☀️ Summer", value: "Summer" },
    { label: "🍂 Autumn", value: "Autumn" },
    { label: "❄️ Winter", value: "Winter" },
    { label: "🌱 Spring", value: "Spring" },
    { label: "🔄 All-Year", value: "All-Year" }
  ],

  // EXPANDED DRINK STYLES
  STYLES: [
    { label: "🍉 Agua Fresca", value: "Agua Fresca" },
    { label: "🫖 Herbal Tea & Infusion", value: "Herbal Tea" },
    { label: "🍃 Green Tea & Matcha", value: "Green Tea & Matcha" },
    { label: "🍂 Black Tea & Chai", value: "Black Tea & Chai" },
    { label: "🧋 Boba & Bubble Tea", value: "Boba & Bubble Tea" },
    { label: "☕ Spiced Latte & Milk Tea", value: "Spiced Latte" },
    { label: "🥤 Fruit Smoothie", value: "Fruit Smoothie" },
    { label: "🥬 Green & Veggie Smoothie", value: "Green Smoothie" },
    { label: "🥭 Lassi & Yogurt Drink", value: "Smoothie / Lassi" },
    { label: "🍓 Fruit Infusion & Water", value: "Fruit Infusion" },
    { label: "🍋 Lemonade & Limeade", value: "Lemonade / Limeade" },
    { label: "🍸 Mocktail / Zero-Proof", value: "Mocktail / Zero-Proof" },
    { label: "🏺 Shrub & Fruit Vinegar", value: "Shrub / Vinegar Drink" },
    { label: "✨ Tonic & Functional Elixir", value: "Tonic / Elixir" },
    { label: "🍫 Cocoa & Hot Chocolate", value: "Cocoa / Hot Chocolate" },
    { label: "🧊 Cold Brew Tea", value: "Cold Brew Tea" },
    { label: "🍾 Kombucha & Fermented", value: "Kombucha & Fermented" },
    { label: "🍧 Slushie & Frozen Drink", value: "Slushie & Frozen" }
  ],

  PREP_TIMES: [
    { label: "⚡ Instant (<2m)", value: "Instant" },
    { label: "⏱️ Quick (<5m)", value: "Quick" },
    { label: "🍳 Steep / Cook", value: "Steep / Cook" },
    { label: "❄️ Advance Prep", value: "Advance Prep" }
  ],

  getAllIngredients() {
    return this.INGREDIENT_CATEGORIES.flatMap(cat => cat.items);
  }
};