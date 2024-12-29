//cocktails.js
export const cocktails = [
    {
        "id": 1,
        "name": "Old Fashion",
        "glass": "Rocks",
        "method": "Stir",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "1", "name": "Sugar Cube", "type": "Sweetener" },
            { "amount": "2 Dashes", "name": "Angostura", "type": "Bitters" },
            { "amount": "2oz", "name": "Whiskey", "type": "Spirit" }   
        ],
        "categories": ["classic", "spirit-forward", "boozy"]
    },
    {
        "id": 2,
        "name": "Manhattan",
        "glass": "Martini",
        "method": "Stir",
        "garnish": "Maraschino Cherry",
        "ingredients": [
            { "amount": "2 Dashes", "name": "Angostura", "type": "Bitters" },
            { "amount": "2oz", "name": "Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Sweet Vermouth", "type": "Modifier" }
        ],
        "categories": ["classic", "spirit-forward", "boozy"]
    },
    {
        "id": 3,
        "name": "Martini",
        "glass": "Martini",
        "method": "Stir",
        "garnish": "Lemon Twist or Olive",
        "ingredients": [
            { "amount": "2.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Dry Vermouth", "type": "Modifier" }
        ],
        "categories": ["classic", "spirit-forward", "elegant"]
    },
    {
        "id": 4,
        "name": "Daiquiri",
        "glass": "Coupe",
        "method": "Shake",
        "garnish": "Lime Wheel",
        "ingredients": [
            { "amount": "2oz", "name": "Rum", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["classic", "citrus-forward", "refreshing"]
    },
    {
        "id": 5,
        "name": "Margarita",
        "glass": "Rocks",
        "method": "Shake",
        "garnish": "Salt and Lime",
        "ingredients": [
            { "amount": "2oz", "name": "Tequila", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Triple Sec", "type": "Modifier" },
            { "amount": "1oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" }   
        ],
        "categories": ["classic", "citrus-forward", "refreshing"]
    },
    {
        "id": 6,
        "name": "Negroni",
        "glass": "Rocks or Coupe",
        "method": "Stir",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "1oz", "name": "Sweet Vermouth", "type": "Modifier" },
            { "amount": "0.75oz", "name": "Campari", "type": "Modifier" }
        ],
        "categories": ["classic", "spirit-forward", "bitter"]
    },
    {
        "id": 7,
        "name": "Whiskey Sour",
        "glass": "Coupe",
        "method": "Shake",
        "garnish": "Angostura",
        "ingredients": [
            { "amount": "0.75oz", "name": "Egg White", "type": "Mixer" },
            { "amount": "2oz", "name": "Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["classic", "citrus-forward", "sour"]
    },
    {
        "id": 8,
        "name": "Mojito",
        "glass": "Collins",
        "method": "Shake",
        "garnish": "Mint and Lime Wheel",
        "ingredients": [
            { "amount": "Handful", "name": "Mint", "type": "Fruits and Vegetables" },
            { "amount": "2oz", "name": "Rum", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Soda", "type": "Mixer" }
        ],
        "categories": ["classic", "citrus-forward", "refreshing", "herbal"]
    },
    {
        "id": 9,
        "name": "Tom Collins",
        "glass": "Collins",
        "method": "Shake",
        "garnish": "Lemon Wheel and Cherry",
        "ingredients": [
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Soda Water", "type": "Mixer" }
        ],
        "categories": ["classic", "citrus-forward", "light", "refreshing"]
    },
    {
        "id": 10,
        "name": "French 75",
        "glass": "Flute",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Sparkling Wine", "type": "Mixer" }
        ],
        "categories": ["classic", "elegant", "citrus-forward", "light"]
    }
]
