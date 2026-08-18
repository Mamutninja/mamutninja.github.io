const TAXONOMY = {
  INGREDIENT_CATEGORIES: [
    {
      name: "🍓 Fresh Fruit & Herbs",
      items: [
        "Cucumber", "Lime", "Lemon", "Orange", "Blood Orange", "Grapefruit",
        "Strawberries", "Blackberries", "Blueberries", "Raspberries", "Cherries",
        "Watermelon", "Mango", "Peach", "Pineapple", "Kiwi", "Passion Fruit",
        "Dragonfruit", "Pomegranate", "Apple", "Pear", "Avocado",
        "Mint", "Basil", "Ginger", "Rosemary", "Thyme", "Sage", 
        "Lemongrass", "Lavender", "Jalapeño"
      ]
    },
    {
      name: "❄️ Frozen Fruit & Ice",
      items: [
        "Ice", 
        "Coconut Water Ice Cubes",
        "Frozen Bananas", 
        "Frozen Mango", 
        "Frozen Strawberries", 
        "Frozen Blueberries", 
        "Frozen Raspberries", 
        "Frozen Berries", 
        "Frozen Peaches", 
        "Frozen Pineapple", 
        "Frozen Dragonfruit", 
        "Frozen Cherries", 
        "Frozen Acai", 
        "Frozen Passionfruit Pulp", 
        "Frozen Coconut Meat", 
        "Frozen Avocado"
      ]
    },
    {
      name: "🧃 Fruit Juices & Nectars",
      items: [
        "Lime Juice", 
        "Lemon Juice", 
        "Yuzu Juice", 
        "Orange Juice", 
        "Pineapple Juice", 
        "Cranberry Juice", 
        "Tart Cherry Juice", 
        "Pomegranate Juice", 
        "Grapefruit Juice", 
        "Apple Juice", 
        "Pear Juice", 
        "Watermelon Juice", 
        "White Grape Juice", 
        "Red Grape Juice", 
        "Passionfruit Nectar", 
        "Peach Nectar", 
        "Guava Nectar", 
        "Lychee Juice", 
        "Mango Puree", 
        "Strawberry Puree", 
        "Raspberry Puree", 
        "Tamarind Pulp", 
        "Aloe Vera Juice", 
        "Carrot Juice", 
        "Beet Juice"
      ]
    },
    {
      name: "🥛 Milks, Dairy & Bases",
      items: [
        "Oat Milk", 
        "Almond Milk", 
        "Soy Milk", 
        "Coconut Milk", 
        "Coconut Cream", 
        "Pistachio Cream", 
        "Cashew Cream", 
        "Ube Paste", 
        "Taro Puree", 
        "Cookie Butter", 
        "Hazelnut Paste", 
        "Peanut Butter", 
        "Almond Butter", 
        "Cashew Milk", 
        "Macadamia Milk", 
        "Pistachio Milk", 
        "Whole Milk", 
        "Heavy Cream", 
        "Half & Half", 
        "Sweetened Condensed Milk", 
        "Condensed Coconut Milk", 
        "Evaporated Milk", 
        "Coconut Water", 
        "Yogurt", 
        "Greek Yogurt", 
        "Coconut Yogurt", 
        "Kefir", 
        "Buttermilk"
      ]
    },
    {
      name: "🍫 Sweeteners, Syrups & Powders",
      items: [
        "Honey", 
        "Agave Nectar", 
        "Maple Syrup", 
        "Simple Syrup", 
        "Grenadine",
        "Strawberry Syrup", 
        "Orgeat Syrup", 
        "Ginger Syrup", 
        "Elderflower Syrup", 
        "Blue Curaçao Syrup", 
        "Falernum Syrup", 
        "Brown Sugar Syrup", 
        "Vanilla Syrup", 
        "Caramel Syrup", 
        "Salted Caramel Syrup", 
        "Hazelnut Syrup", 
        "Lavender Syrup", 
        "Mint Syrup", 
        "Rosemary Syrup", 
        "Sugar", 
        "Brown Sugar", 
        "Coconut Sugar", 
        "Date Syrup", 
        "Monk Fruit Sweetener", 
        "Cocoa Powder", 
        "Ground Turmeric", 
        "Ground Cinnamon", 
        "Cinnamon Stick", 
        "Ground Ginger", 
        "Ground Cardamom", 
        "Cardamom Pods", 
        "Nutmeg", 
        "Ground Cloves", 
        "Whole Cloves", 
        "Star Anise", 
        "Black Pepper", 
        "Cayenne Pepper", 
        "Sea Salt", 
        "Vanilla Extract", 
        "Almond Extract", 
        "Peppermint Extract", 
        "Rose Water", 
        "Orange Blossom Water", 
        "Blue Spirulina", 
        "Collagen Powder", 
        "Protein Powder", 
        "Maca Powder",
        "White Chocolate",
        "Dark Chocolate"
      ]
    },
    {
      name: "🫖 Teas, Grains & Staples",
      items: [
        "Water", 
        "Green Tea", 
        "Matcha Powder", 
        "Hojicha Powder", 
        "Jasmine Tea", 
        "Genmaicha", 
        "Black Tea", 
        "Earl Grey Tea", 
        "Oolong Tea", 
        "White Tea", 
        "Hibiscus Flowers", 
        "Butterfly Pea Flower", 
        "Chamomile", 
        "Peppermint Tea", 
        "Rooibos", 
        "Chrysanthemum", 
        "Dried Rose Petals", 
        "Elderflower", 
        "White Rice", 
        "Purple Corn", 
        "Roasted Barley", 
        "Chia Seeds", 
        "Tapioca Pearls", 
        "Coconut Jelly", 
        "Grass Jelly", 
        "Apple Cider Vinegar"
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
    { label: "🔵 Blue", value: "Blue" },
    { label: "🟣 Purple", value: "Purple" },
    { label: "⚪ White", value: "White" },
    { label: "🟤 Brown", value: "Brown" },
    { label: "🟠 Orange", value: "Orange" },
    { label: "🩷 Pink", value: "Pink" },
    { label: "🌾 Amber", value: "Amber" },
    { label: "💧 Clear", value: "Clear" }
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