//cocktails.js
export const cocktails = [
    {
        "id": 1,
        "name": "Old Fashion",
        "glass": "Rocks",
        "iconType": "rocks",
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
        "iconType": "martini",
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
        "iconType": "martini",
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
        "iconType": "coupe",
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
        "iconType": "rocks",
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
        "iconType": "rocks",
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
        "iconType": "coupe",
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
        "iconType": "collins",
        "method": "Shake",
        "garnish": "Mint and Lime Wheel",
        "ingredients": [
            { "amount": "Muddled Handful", "name": "Mint", "type": "Fruits and Vegetables" },
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
        "iconType": "collins",
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
        "iconType": "flute",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Sparkling Wine", "type": "Mixer" }
        ],
        "categories": ["classic", "elegant", "citrus-forward", "light"]
    },
    {
        "id": 11,
        "name": "Sidecar",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Sugar Rim and Lemon Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Brandy", "type": "Spirit" },
            { "amount": "1oz", "name": "Triple Sec", "type": "Modifier" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" },
        ],
        "categories": ["classic", "elegant", "citrus-forward"]
    },
    {
        "id": 12,
        "name": "Boulevardier",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Stir",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Bourbon or Rye Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Campari", "type": "Liqueur" },
            { "amount": "1oz", "name": "Sweet Vermouth", "type": "Fortified Wine" }
        ],
        "categories": ["classic", "bitter", "spirit-forward"]
    },
    {
        "id": 13,
        "name": "Mai Tai",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Mint Sprig and Lime Wedge",
        "ingredients": [
            { "amount": "1oz", "name": "Dark Rum", "type": "Spirit" },
            { "amount": "1oz", "name": "Light Rum", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Orange Curacao", "type": "Liqueur" },
            { "amount": "0.25oz", "name": "Orgeat Syrup", "type": "Sweetener" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" }
        ],
        "categories": ["tropical", "classic", "fruity"]
    },
    {
        "id": 14,
        "name": "Sazerac",
        "glass": "Rocks (Neat)",
        "iconType": "rocks",
        "method": "Stir",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "Rinse", "name": "Absinthe", "type": "Spirit" },
            { "amount": "1 Sugar Cube", "name": "Sugar", "type": "Sweetener" },
            { "amount": "3 Dashes", "name": "Peychaud's Bitters", "type": "Bitters" },
            { "amount": "2oz", "name": "Rye Whiskey", "type": "Spirit" }
            
            
        ],
        "categories": ["classic", "spirit-forward", "strong", "aromatic"]
    },
    {
        "id": 15,
        "name": "Espresso Martini",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "3 Coffee Beans",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "1oz", "name": "Espresso", "type": "Coffee" },
            { "amount": "0.75oz", "name": "Coffee Liqueur", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "coffee-based", "sweet", "dessert"]
    },
    {
        "id": 16,
        "name": "Bloody Mary",
        "glass": "Collins",
        "iconType": "collins",
        "method": "Build",
        "garnish": "Celery, Lemon Wedge, Olive",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "3oz", "name": "Tomato Juice", "type": "Juice" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "3 Dashes", "name": "Worcestershire Sauce", "type": "Seasoning" },
            { "amount": "2 Dashes", "name": "Hot Sauce", "type": "Seasoning" },
            { "amount": "Pinch", "name": "Salt and Pepper", "type": "Seasoning" },
            { "amount": "Optional", "name": "Horseradish", "type": "Seasoning" }
        ],
        "categories": ["classic", "savory", "spicy", "brunch"]
    },
    {
        "id": 18,
        "name": "Mint Julep",
        "glass": "Julep Cup",
        "iconType": "coppermug",
        "method": "Build",
        "garnish": "Mint Sprig",
        "ingredients": [
            { "amount": "Mudddled 6-8", "name": "Mint Leaves", "type": "Herb" },
            { "amount": "2.5oz", "name": "Bourbon", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
        ],
        "categories": ["classic", "refreshing", "bourbon-based", "southern"]
    },
    {
        "id": 19,
        "name": "Blood and Sand",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Cherry",
        "ingredients": [
            { "amount": "0.75oz", "name": "Scotch Whiskey", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Sweet Vermouth", "type": "Fortified Wine" },
            { "amount": "0.75oz", "name": "Orange Juice", "type": "Juice" },
            { "amount": "0.75oz", "name": "Cherry Heering", "type": "Liqueur" }
        ],
        "categories": ["classic", "citrus-forward", "balanced", "smoky"]
    },
    {
        "id": 20,
        "name": "Brown Derby",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Grapefruit Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Bourbon Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Grapefruit Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Honey Syrup", "type": "Sweetener" }
        ],
        "categories": ["classic", "citrus-forward", "refreshing", "light"]
    },
    {
        "id": 21,
        "name": "American Trilogy",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Stir",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "1 Sugar Cube", "name": "Sugar", "type": "Sweetener" },
            { "amount": "3 Dashes", "name": "Orange Bitters", "type": "Bitters" },
            { "amount": "1oz", "name": "Rye Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Apple Brandy", "type": "Spirit" }
            
        ],
        "categories": ["classic", "spirit-forward", "aromatic", "balanced"]
    },
    {
        "id": 22,
        "name": "Army & Navy",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "2 Dashes", "name": "Angostura Bitters", "type": "Bitters" },
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Orgeat Syrup", "type": "Sweetener" }
        ],
        "categories": ["classic", "citrus-forward", "refreshing", "light"]
    },
    {
        "id": 23,
        "name": "Angeleno Julep",
        "glass": "Snifter",
        "iconType": "snifter",
        "method": "Shake",
        "garnish": "Mint",
        "ingredients": [
            { "amount": "Muddled 4 Cubes", "name": "Pear", "type": "Fruit" },
            { "amount": "Muddled 6", "name": "Mint Leaves", "type": "Herb" },
            { "amount": "2 Spoons", "name": "Brown Sugar", "type": "Sweetener" },
            { "amount": "1.5oz", "name": "Rye Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Brandy", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" }
        ],
        "categories": ["modern", "refreshing", "fruity", "herbal", "spirit-forward", "basin 141"]
    },
    {
        "id": 24,
        "name": "Appletini",
        "glass": "Martini",
        "iconType": "martini",
        "method": "Shake",
        "garnish": "Apple Slice",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "1oz", "name": "Sour Apple Liqueur", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" }
        ],
        "categories": ["modern", "fruity", "sweet", "vibrant"]
    },
    {
        "id": 25,
        "name": "Baby's First Bourbon",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Bourbon Whiskey", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Orgeat Syrup", "type": "Sweetener" },
            { "amount": "1 Dash", "name": "Angostura Bitters", "type": "Bitters" }
        ],
        "categories": ["modern", "refreshing", "balanced", "citrus-forward", "aromatic"]
    },
    {
        "id": 26,
        "name": "Bee's Knees",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Honey Syrup", "type": "Sweetener" }
        ],
        "categories": ["classic", "citrus-forward", "refreshing", "light"]
    },
    {
        "id": 27,
        "name": "Black Manhattan",
        "glass": "Martini",
        "iconType": "martini",
        "method": "Stir",
        "garnish": "Cherry",
        "ingredients": [
            { "amount": "2oz", "name": "Rye Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Averna", "type": "Liqueur" },
            { "amount": "2 Dashes", "name": "Angostura Bitters", "type": "Bitters" },
            { "amount": "2 Dashes", "name": "Orange Bitters", "type": "Bitters" }
        ],
        "categories": ["modern", "spirit-forward", "aromatic", "bitter", "balanced"]
    },
    {
        "id": 28,
        "name": "Bijou",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Stir",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "1 Dash", "name": "Orange Bitters", "type": "Bitters" },
            { "amount": "1oz", "name": "Gin", "type": "Spirit" },
            { "amount": "1oz", "name": "Green Chartreuse", "type": "Liqueur" },
            { "amount": "1oz", "name": "Sweet Vermouth", "type": "Fortified Wine" }
        ],
        "categories": ["classic", "spirit-forward", "herbal", "aromatic"]
    },
    {
        "id": 29,
        "name": "Brandy Alexander",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Grated Nutmeg",
        "ingredients": [
            { "amount": "1.5oz", "name": "Brandy", "type": "Spirit" },
            { "amount": "1oz", "name": "Creme de Cacao", "type": "Liqueur" },
            { "amount": "1oz", "name": "Heavy Cream", "type": "Dairy" }
        ],
        "categories": ["classic", "dessert", "sweet", "creamy"]
    },
    {
        "id": 30,
        "name": "B-52",
        "glass": "Shot",
        "iconType": "shot",
        "method": "Layered",
        "garnish": "",
        "ingredients": [
            { "amount": "0.75oz", "name": "Kahlua", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Baileys Irish Cream", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Grand Marnier", "type": "Liqueur" }
        ],
        "categories": ["modern", "sweet", "layered", "creamy"]
    },
    {
        "id": 31,
        "name": "Billionaire Cocktail",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lemon Wheel",
        "ingredients": [
            { "amount": "Rinse", "name": "Absinthe", "type": "Liqueur" },
            { "amount": "2oz", "name": "Bourbon Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Grenadine", "type": "Sweetener" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "spirit-forward", "citrus-forward", "balanced", "aromatic", "basin 141"]
    },
    {
        "id": 32,
        "name": "Basil Paloma",
        "glass": "Tumbler",
        "iconType": "wine",
        "method": "Shake",
        "garnish": "Salt Rim and Basil",
        "ingredients": [
            { "amount": "1 Slice", "name": "Grapefruit", "type": "Fruit" },
            { "amount": "4", "name": "Basil Leaves", "type": "Herb" },
            { "amount": "2oz", "name": "Tequila", "type": "Spirit" },
            { "amount": "1.75oz", "name": "Grapefruit Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Soda Water", "type": "Modifier" }
        ],
        "categories": ["modern", "refreshing", "herbal", "citrus-forward", "light", "basin 141"]
    },
    {
        "id": 33,
        "name": "Caipirinha",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake n Dump",
        "garnish": "",
        "ingredients": [
            { "amount": "Muddled 1/2", "name": "Lime (Cut into Wedges)", "type": "Citrus" },
            { "amount": "2oz", "name": "Cachaca", "type": "Spirit" },
            { "amount": "2 Spoons", "name": "Sugar", "type": "Sweetener" }
            
        ],
        "categories": ["classic", "refreshing", "citrus-forward", "tropical", "light"]
    },
    {
        "id": 34,
        "name": "Cosmopolitan",
        "glass": "Martini",
        "iconType": "martini",
        "method": "Shake",
        "garnish": "Lime Wheel or Orange Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "1oz", "name": "Triple Sec", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Cranberry Juice", "type": "Juice" }
        ],
        "categories": ["modern", "fruity", "refreshing", "citrus-forward", "elegant"]
    },
    {
        "id": 35,
        "name": "Corpse Reviver #2",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "Rinse", "name": "Absinthe", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Cointreau", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Lillet Blanc", "type": "Fortified Wine" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" }
        ],
        "categories": ["classic", "refreshing", "citrus-forward", "aromatic"]
    },
    {
        "id": 36,
        "name": "The Chavez",
        "glass": "Snifter",
        "iconType": "snifter",
        "method": "Stir",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "3 Dashes", "name": "Orange Bitters", "type": "Bitters" },
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Cynar", "type": "Liqueur" },
            { "amount": "0.25oz", "name": "Elderflower Liqueur", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Rosemary Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "aromatic", "spirit-forward", "herbal", "balanced", "basin 141"]
    },
    {
        "id": 37,
        "name": "Dark and Stormy",
        "glass": "Highball",
        "iconType": "collins",
        "method": "Build",
        "garnish": "Lime Wedge",
        "ingredients": [
            { "amount": "2oz", "name": "Dark Rum", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "Top", "name": "Ginger Beer", "type": "Mixer" }
        ],
        "categories": ["classic", "refreshing", "spicy", "tropical"]
    },
    {
        "id": 38,
        "name": "Eastside Fizz",
        "glass": "Collins",
        "iconType": "collins",
        "method": "Shake",
        "garnish": "Cucumber and Mint Sprig",
        "ingredients": [
            { "amount": "Muddled 3", "name": "Cucumber Slices", "type": "Vegetable" },
            { "amount": "Muddled 6", "name": "Mint Leaves", "type": "Herb" },
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Soda Water", "type": "Modifier" }
        ],
        "categories": ["modern", "refreshing", "herbal", "citrus-forward", "light"]
    },
    {
        "id": 39,
        "name": "Eastside",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Cucumber and Mint Sprig",
        "ingredients": [
            { "amount": "Muddled 3", "name": "Cucumber Slices", "type": "Vegetable" },
            { "amount": "Muddled 6", "name": "Mint Leaves", "type": "Herb" },
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" }
            
        ],
        "categories": ["modern", "refreshing", "herbal", "citrus-forward", "light"]
    },
    {
        "id": 40,
        "name": "East Los",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Cucumber Slice",
        "ingredients": [
            { "amount": "Muddled 2", "name": "Cucumber Slices", "type": "Vegetable" },
            { "amount": "Muddled 6", "name": "Mint Leaves", "type": "Herb" },
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Soda Water", "type": "Modifier" }
        ],
        "categories": ["modern", "refreshing", "herbal", "citrus-forward", "light", "basin 141"]
    },
    {
        "id": 41,
        "name": "The Famous",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Stir",
        "garnish": "Orange Twist and Cherry",
        "ingredients": [
            { "amount": "2 Dash", "name": "Peychud's Bitters", "type": "Bitters" },
            { "amount": "2 Dash", "name": "Orange Bitters", "type": "Bitters" },
            { "amount": "1.5oz", "name": "Bourbon", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Averna", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Luxardo", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Dry Vermouth", "type": "Fortified Wine" }
        ],
        "categories": ["modern", "spirit-forward", "aromatic", "balanced", "complex", "the famous"]
    },
    {
        "id": 42,
        "name": "Grey Goose & Vodka",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Grapefruit Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Grapefruit Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Agave", "type": "Sweetener" }

        ],
        "categories": ["modern", "citrus-forward", "refreshing", "the famous"]
    },
    {
        "id": 43,
        "name": "Gimlet",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lime Wheel",
        "ingredients": [
            { "amount": "2oz", "name": "Vodka or Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["classic", "citrus-forward", "refreshing", "light"]
    },
    {
        "id": 44,
        "name": "Green Cross Swizzle",
        "glass": "Collins",
        "iconType": "collins",
        "method": "Swizzled",
        "garnish": "Mint Spring",
        "ingredients": [
            { "amount": "1oz", "name": "Dark Rum", "type": "Spirit" },
            { "amount": "1oz", "name": "Green Chartreuse", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Falernum", "type": "Sweetener" },
            { "amount": "1oz", "name": "Pineapple Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "2 Dash", "name": "Angostura", "type": "Bitters" }
        ],
        "categories": ["modern", "herbal", "tropical", "refreshing", "citrus-forward"]
    },
    {
        "id": 45,
        "name": "Green Tea Shot",
        "glass": "Shot",
        "iconType": "shot",
        "method": "Shake",
        "garnish": "",
        "ingredients": [
            { "amount": "0.5oz", "name": "Jameson Whiskey", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Peach Schnapps", "type": "Liqueur" },
            { "amount": "0.25oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.25oz", "name": "Simple Syrup ", "type": "Sweetener" },
            { "amount": "Splash", "name": "Sprite / 7-Up", "type": "Mixer" }
        ],
        "categories": ["modern", "sweet", "refreshing", "party"]
    },
    {
        "id": 46,
        "name": "Hemingway Daiquiri",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lime Wheel",
        "ingredients": [
            { "amount": "1.5oz", "name": "White Rum", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Maraschino Liqueur", "type": "Liqueur" },
            { "amount": "1oz", "name": "Grapefruit Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
        ],
        "categories": ["classic", "refreshing", "citrus-forward", "balanced"]
    },
    {
        "id": 47,
        "name": "Infante",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Grated Nutmeg",
        "ingredients": [
            { "amount": "2oz", "name": "Blanco Tequila", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Orgeat Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "refreshing", "citrus-forward", "nutty", "light"]
    },
    {
        "id": 48,
        "name": "Jalisco Hussy",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Mint Spring",
        "ingredients": [
            { "amount": "2oz", "name": "Blanco Tequila", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Serrano Syrup Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "spicy", "citrus-forward", "refreshing", "the famous"]
    },
    {
        "id": 49,
        "name": "Kamikaze",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lime Wheel",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "1oz", "name": "Triple Sec", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" }
        ],
        "categories": ["classic", "citrus-forward", "refreshing", "light"]
    },
    {
        "id": 50,
        "name": "Live Young Die Fast",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Basil Leaf",
        "ingredients": [
            { "amount": "Muddled 3", "name": "Basil Leaves", "type": "Herb" },
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Black Pepper Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "herbal", "spicy", "refreshing", "citrus-forward"]
    },
    {
        "id": 51,
        "name": "Last Word",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Cherry",
        "ingredients": [
            { "amount": "0.75oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Green Chartreuse", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Maraschino Liqueur", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" }
        ],
        "categories": ["classic", "herbal", "citrus-forward", "balanced"]
    },
    {
        "id": 52,
        "name": "Lemon Drop",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Sugar Rim and Lemon Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "1oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "0.5oz", "name": "Triple Sec", "type": "Liqueur" }
        ],
        "categories": ["modern", "citrus-forward", "refreshing", "sweet"]
    },
    {
        "id": 53,
        "name": "Lion's Tail",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lime Wheel",
        "ingredients": [
            { "amount": "2oz", "name": "Bourbon", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Allspice Dram", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "2 Dashes", "name": "Angostura Bitters", "type": "Bitters" }
        ],
        "categories": ["classic", "spicy", "citrus-forward", "balanced", "aromatic"]
    },
    {
        "id": 54,
        "name": "Looking Glass",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Grated Nutmeg",
        "ingredients": [
            { "amount": "2oz", "name": "Brandy", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Hazelnut Liquer", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Creme de Cacao", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Half n Half", "type": "Dairy" }
        ],
        "categories": ["modern", "dessert", "nutty", "creamy", "aromatic", "the famous"]
    },
    {
        "id": 55,
        "name": "Little Italy",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Stir",
        "garnish": "Maraschino Cherry",
        "ingredients": [
            { "amount": "2oz", "name": "Rye Whiskey", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Sweet Vermouth", "type": "Fortified Wine" },
            { "amount": "0.5oz", "name": "Cynar", "type": "Liqueur" }
        ],
        "categories": ["modern", "spirit-forward", "bitter", "balanced", "aromatic"]
    },
    {
        "id": 56,
        "name": "Mole Mole Mole Mole Mole",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "4 Dash", "name": "Mole Bitters", "type": "Bitters" },
            { "amount": "1.5oz", "name": "Mezcal", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Orgeat Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "spicy", "citrus-forward", "balanced", "aromatic", "the famous"]
    },
    {
        "id": 57,
        "name": "Martinez",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Stir",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "1 Dash", "name": "Angostura Bitters", "type": "Bitters" },
            { "amount": "1, Dash", "name": "Orange Bitters", "type": "Bitters" },
            { "amount": "1.5oz", "name": "Old Tom Gin", "type": "Spirit" },
            { "amount": "1.5oz", "name": "Sweet Vermouth", "type": "Fortified Wine" },
            { "amount": "0.25oz", "name": "Maraschino Liqueur", "type": "Liqueur" }
        ],
        "categories": ["classic", "spirit-forward", "herbal", "balanced", "aromatic"]
    },
    {
        "id": 58,
        "name": "Monte Carlo",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Stir",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Rye Whiskey", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Benedictine", "type": "Liqueur" },
            { "amount": "2 Dashes", "name": "Angostura Bitters", "type": "Bitters" }
        ],
        "categories": ["classic", "spirit-forward", "herbal", "aromatic", "balanced"]
    },
    {
        "id": 59,
        "name": "Mos Eisely",
        "glass": "Rocks (Neat)",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Aperol", "type": "" },
            { "amount": "0.25oz", "name": "Dry Curacao", "type": "" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Orange Juice", "type": "Citrus" }
        ],
        "categories": ["modern", "citrus-forward", "refreshing", "balanced", "dlo"]
    },
    {
        "id": 60,
        "name": "Mexican Candy",
        "glass": "Shot",
        "iconType": "shot",
        "method": "Shake",
        "garnish": "Tajin Rim",
        "ingredients": [
            { "amount": "1oz", "name": "Tequila or Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Watermelon Pucker", "type": "Liqueur" },
            { "amount": "0.25oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "1 Dash", "name": "Hot Sauce", "type": "Seasoning" }
        ],
        "categories": ["modern", "sweet", "spicy", "fun"]
    },
    {
        "id": 61,
        "name": "Aunt Florence (Red Aunt)",
        "glass": "Flute",
        "iconType": "flute",
        "method": "Shake",
        "garnish": "Lemon Twist & Cherry",
        "ingredients": [
            { "amount": "0.75oz", "name": "Egg Whites", "type": "Mixer" },
            { "amount": "2oz", "name": "Rye Whiskey", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Cherry Heering", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "spirit-forward", "balanced", "aromatic", "the famous"]
    },
    {
        "id": 62,
        "name": "Naughty Rabbit",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Mezcal", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Velvet Falernum", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Orgeat", "type": "Sweetener" }
        ],
        "categories": ["modern", "tropical", "citrus-forward", "smoky", "balanced"]
    },
    {
        "id": 63,
        "name": "The Oso",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Grapefruit Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Mezcal", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Orgeat Syrup", "type": "Sweetener" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Grapefruit Juice", "type": "Citrus" }
        ],
        "categories": ["modern", "citrus-forward", "refreshing", "balanced", "smoky", "the famous"]
    },
    {
        "id": 64,
        "name": "Old Pal",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Stir",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Rye Whiskey", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Dry Vermouth", "type": "Fortified Wine" },
            { "amount": "0.75oz", "name": "Campari", "type": "Liqueur" }
        ],
        "categories": ["classic", "spirit-forward", "bitter", "balanced", "aromatic"]
    },
    {
        "id": 65,
        "name": "Olvera",
        "glass": "Martini",
        "iconType": "martini",
        "method": "Shake",
        "garnish": "Pear Slice",
        "ingredients": [
            { "amount": "2oz", "name": "Pear Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Splash", "name": "Cranberry Juice", "type": "Juice" }
        ],
        "categories": ["modern", "fruity", "citrus-forward", "refreshing", "basin 141"]
    },
    {
        "id": 66,
        "name": "Penicillin",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Candied Ginger",
        "ingredients": [
            { "amount": "2oz", "name": "Blended Scotch Whisky", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Ginger Syrup", "type": "Sweetener" },
            { "amount": "0.25oz", "name": "Honey Syrup", "type": "Sweetener" },
            { "amount": "2 Sprays", "name": "Laphroaig Scotch Whiskey", "type": "Spirit" },
        ],
        "categories": ["modern", "smoky", "citrus-forward", "balanced", "aromatic"]
    },
    {
        "id": 67,
        "name": "Penicillin (Basin 141)",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "Muddled 1", "name": "Lemon Wedge", "type": "" },
            { "amount": "Muddled 3", "name": "Sliced Ginger", "type": "" },
            { "amount": "2oz", "name": "Blended Scotch Whisky", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Honey Syrup", "type": "Sweetener" },
            { "amount": "3 Sprays", "name": "Laphroaig Scotch Whiskey", "type": "Spirit" },
        ],
        "categories": ["modern", "smoky", "citrus-forward", "balanced", "aromatic", "basin 141"]
    },
    {
        "id": 68,
        "name": "Paper Plane",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "0.75oz", "name": "Bourbon", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Aperol", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Amaro Nonino", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" }
        ],
        "categories": ["modern", "balanced", "citrus-forward", "refreshing", "bitter"]
    },
    {
        "id": 69,
        "name": "Paloma",
        "glass": "Highball",
        "iconType": "collins",
        "method": "Build",
        "garnish": "Salt Rim and Lime Wedge",
        "ingredients": [
            { "amount": "2oz", "name": "Tequila", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "Top", "name": "Grapefruit Soda", "type": "Mixer" }
        ],
        "categories": ["classic", "refreshing", "citrus-forward", "light", "tropical"]
    },
    {
        "id": 70,
        "name": "Pimm's Cup",
        "glass": "Highball",
        "iconType": "collins",
        "method": "Build",
        "garnish": "Mint, Cucumber, Seasonal Fruits",
        "ingredients": [
            { "amount": "2oz", "name": "Pimm's No. 1", "type": "Liqueur" },
            { "amount": "4oz", "name": "Lemonade or Ginger Ale", "type": "Mixer" },
            { "amount": "Top", "name": "Soda Water (Optional)", "type": "Mixer" }
        ],
        "categories": ["classic", "refreshing", "herbal", "light", "fruity"]
    },
    {
        "id": 71,
        "name": "Papa Doble",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lime Wheel & Cherry",
        "ingredients": [
            { "amount": "1.75oz", "name": "Dark Rum", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Luxardo", "type": "Liqueur" },
            { "amount": "1oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Grapefruit Juice", "type": "Citrus" },
            { "amount": "0.25oz", "name": "Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "citrus-forward", "balanced", "refreshing", "aromatic", "basin 141"]
    },
    {
        "id": 72,
        "name": "Pisco Smash",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Lime Wheel & Cherry",
        "ingredients": [
            { "amount": "Muddle", "name": "Lime & 4 Blackberries", "type": "" },
            { "amount": "1.5oz", "name": "Pisco", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Simple Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "citrus-forward", "fruity", "refreshing", "balanced", "basin 141"]
    },
    {
        "id": 73,
        "name": "Russian STD Mule",
        "glass": "Copper Mug",
        "iconType": "coppermug",
        "method": "Shake",
        "garnish": "Ginger",
        "ingredients": [
            { "amount": "2oz", "name": "Russian Standard Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.75oz", "name": "Ginger Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "spicy", "refreshing", "citrus-forward", "the famous"]
    },
    {
        "id": 74,
        "name": "Red Headed Slut",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "",
        "ingredients": [
            { "amount": "1oz", "name": "Jägermeister", "type": "Liqueur" },
            { "amount": "1oz", "name": "Peach Schnapps", "type": "Liqueur" },
            { "amount": "2oz", "name": "Cranberry Juice", "type": "Juice" }
        ],
        "categories": ["modern", "fruity", "sweet", "fun"]
    },
    {
        "id": 75,
        "name": "Rose Cocktail",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Aperol", "type": "" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Juice" },
            { "amount": "0.25oz", "name": "Agave", "type": "Sweetener" }
        ],
        "categories": ["modern", "refreshing", "balanced", "citrus-forward"]
    },
    {
        "id": 76,
        "name": "Moscow Mule",
        "glass": "Copper Mug",
        "iconType": "coppermug",
        "method": "Build",
        "garnish": "Lime Wedge",
        "ingredients": [
            { "amount": "2oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "Top", "name": "Ginger Beer", "type": "Mixer" }
        ],
        "categories": ["classic", "refreshing", "spicy", "citrus-forward", "light"]
    },
    {
        "id": 77,
        "name": "Ramos Gin Fizz",
        "glass": "Collins",
        "iconType": "collins",
        "method": "Shake (Dry and Wet)",
        "garnish": "",
        "ingredients": [
            { "amount": "0.75", "name": "Egg White", "type": "Mixer" },
            { "amount": "2 Dashes", "name": "Orange Flower Water", "type": "Flavoring" },
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "1oz", "name": "Heavy Cream", "type": "Dairy" },
            { "amount": "Top", "name": "Soda Water", "type": "Mixer" }
        ],
        "categories": ["classic", "creamy", "citrus-forward", "balanced", "frothy"]
    },
    {
        "id": 78,
        "name": "Smash",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Mint Sprig",
        "ingredients": [
            { "amount": "Muddled 6 Leaves", "name": "Mint", "type": "Herb" },
            { "amount": "Muddled 1/2", "name": "Lemon", "type": "Citrus" },
            { "amount": "2oz", "name": "Base Spirit", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Simple Syrup", "type": "Sweetener" },
        ],
        "categories": ["classic", "herbal", "citrus-forward", "refreshing", "balanced"]
    },
    {
        "id": 79,
        "name": "Singapore Sling",
        "glass": "Collins",
        "iconType": "collins",
        "method": "Shake",
        "garnish": "Orange Twist & Cherry",
        "ingredients": [
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Cherry Heering", "type": "Liqueur" },
            { "amount": "0.25oz", "name": "Cointreau", "type": "Liqueur" },
            { "amount": "0.25oz", "name": "Benedictine", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Pineapple Juice", "type": "Juice" },
            { "amount": "1 Dash", "name": "Angostura Bitters", "type": "Bitters" },
            { "amount": "Top", "name": "Soda Water", "type": "Mixer" }
        ],
        "categories": ["classic", "tropical", "fruity", "refreshing", "balanced"]
    },
    {
        "id": 80,
        "name": "Siesta",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Orange Peel",
        "ingredients": [
            { "amount": "1.5oz", "name": "Tequila", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Campari", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Grapefruit Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "2 Dashes", "name": "Angostura Bitters", "type": "Bitters" }
        ],
        "categories": ["modern", "citrus-forward", "balanced", "refreshing", "bitter"]
    },
    {
        "id": 81,
        "name": "Sword & Pistol",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Stir",
        "garnish": "Cucumber Slice",
        "ingredients": [
            { "amount": "2 Dashes", "name": "Chocolate Chili Bitters", "type": "Bitters" },
            { "amount": "1.75oz", "name": "Mezcal", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Sweet Vermouth", "type": "Fortified Wine" },
            { "amount": "0.5oz", "name": "Pimms", "type": "Liqueur" }
        ],
        "categories": ["modern", "spicy", "balanced", "aromatic", "smoky", "the famous"]
    },
    {
        "id": 82,
        "name": "Accomplice",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Strawberry Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Sparkling Wine", "type": "Wine" }
        ],
        "categories": ["modern", "fruity", "refreshing", "citrus-forward", "light"]
    },
    {
        "id": 83,
        "name": "Captain Bon-ere-fart",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Stir",
        "garnish": "Flamed Orange Twist",
        "ingredients": [
            { "amount": "1 Cube", "name": "Brown Sugar", "type": "Sweetener" },
            { "amount": "1 Cube", "name": "White Sugar", "type": "Sweetener" },
            { "amount": "2 Dashes", "name": "Jerry Thomas Bitters", "type": "Bitters" },
            { "amount": "3 Dashes", "name": "Creole Bitters", "type": "Bitters" },
            { "amount": "2oz", "name": "Sailor Jerry's Rum", "type": "Spirit" }
        ],
        "categories": ["modern", "spirit-forward", "aromatic", "balanced", "spiced", "the famous"]
    },
    {
        "id": 84,
        "name": "Aviation",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Cherry or Lemon Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Maraschino Liqueur", "type": "Liqueur" },
            { "amount": "0.25oz", "name": "Creme de Violette", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" }
        ],
        "categories": ["classic", "floral", "citrus-forward", "balanced", "elegant"]
    },
    {
        "id": 85,
        "name": "Arsenic",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "2 Dashes", "name": "Gingerbread Bitters", "type": "Bitters" },
            { "amount": "2oz", "name": "Jameson", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Velvet Falernum", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Orgeat Syrup", "type": "Sweetener" }
        ],
        "categories": ["modern", "spicy", "citrus-forward", "balanced", "aromatic", "the famous"]
    },
    {
        "id": 86,
        "name": "Cash Stache",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Stir",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "0.75oz", "name": "Tequila", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Mezcal", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Amaro Meletti", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Cocchi Americano", "type": "Fortified Wine" },
            { "amount": "2 Dashes", "name": "Bergamot Bitters", "type": "Bitters" }
        ],
        "categories": ["modern", "spirit-forward", "aromatic", "balanced", "smoky", "the famous"]
    },
    {
        "id": 87,
        "name": "Strawberry Fields",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "1.75oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.25oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "0.75oz", "name": "Strawberry Purée", "type": "Fruit" },
            { "amount": "Top", "name": "Sparkling Wine", "type": "Wine" }
        ],
        "categories": ["modern", "fruity", "refreshing", "balanced", "elegant", "basin 141"]
    },
    {
        "id": 88,
        "name": "Triple Crown",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "1.5oz", "name": "Bourbon", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Orange Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Agave", "type": "Sweetener" } 
        ],
        "categories": ["modern", "citrus-forward", "balanced", "spirit-forward", "refreshing", "the famous"]
    },
    {
        "id": 89,
        "name": "Tiga Special #2",
        "glass": "Flute",
        "iconType": "flute",
        "method": "Shake",
        "garnish": "Grapefruit Twist",
        "ingredients": [
            { "amount": "1oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Pamplemousse (Grapefruit Liqueur)", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Honey", "type": "Sweetener" },
            { "amount": "Top", "name": "Sparkling Wine", "type": "Wine" }
        ],
        "categories": ["modern", "fruity", "refreshing", "balanced", "elegant", "the famous"]
    },
    {
        "id": 90,
        "name": "Vitulli",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Stir",
        "garnish": "Orange Twist",
        "ingredients": [
            { "amount": "2 Dashes", "name": "Orange Bitters", "type": "Bitters" },
            { "amount": "1.5oz", "name": "Old Overholt Rye", "type": "Spirit" },
            { "amount": "1.5oz", "name": "Sweet Vermouth", "type": "Fortified Wine" },
            { "amount": "0.25oz", "name": "Fernet Branca", "type": "Liqueur" },
            { "amount": "0.5oz", "name": "Amaro Nonino", "type": "Liqueur" },
        ],
        "categories": ["modern", "aromatic", "spirit-forward", "balanced", "herbal", "the famous"]
    },
    {
        "id": 91,
        "name": "Vieux Carré",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Stir",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "2 Dashes", "name": "Angostura Bitters", "type": "Bitters" },
            { "amount": "2 Dashes", "name": "Peychaud's Bitters", "type": "Bitters" },
            { "amount": "1oz", "name": "Rye Whiskey", "type": "Spirit" },
            { "amount": "1oz", "name": "Cognac", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Sweet Vermouth", "type": "Fortified Wine" },
            { "amount": "0.25oz", "name": "Benedictine", "type": "Liqueur" }
            
        ],
        "categories": ["classic", "aromatic", "spirit-forward", "balanced", "complex"]
    },
    {
        "id": 92,
        "name": "Vesper Martini",
        "glass": "Martini",
        "iconType": "martini",
        "method": "Stir",
        "garnish": "Lemon Twist",
        "ingredients": [
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "1oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Lillet Blanc", "type": "Fortified Wine" }
        ],
        "categories": ["classic", "elegant", "spirit-forward", "balanced"]
    },
    {
        "id": 93,
        "name": "Sex on the Beach",
        "glass": "Highball",
        "iconType": "collins",
        "method": "Shake",
        "garnish": "Orange Slice and Cherry",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Peach Schnapps", "type": "Liqueur" },
            { "amount": "1oz", "name": "Orange Juice", "type": "Juice" },
            { "amount": "1oz", "name": "Cranberry Juice", "type": "Juice" }
        ],
        "categories": ["classic", "fruity", "refreshing", "balanced", "tropical"]
    },
    {
        "id": 94,
        "name": "Madras",
        "glass": "Highball",
        "iconType": "collins",
        "method": "Build",
        "garnish": "Lime Wedge",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "2oz", "name": "Cranberry Juice", "type": "Juice" },
            { "amount": "1oz", "name": "Orange Juice", "type": "Juice" }
        ],
        "categories": ["classic", "refreshing", "fruity", "light"]
    },
    {
        "id": 95,
        "name": "Sea Breeze",
        "glass": "Highball",
        "iconType": "collins",
        "method": "Build",
        "garnish": "Lime Wedge",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "3oz", "name": "Cranberry Juice", "type": "Juice" },
            { "amount": "1oz", "name": "Grapefruit Juice", "type": "Citrus" }
        ],
        "categories": ["classic", "refreshing", "citrus-forward", "light"]
    },
    {
        "id": 96,
        "name": "Bay Breeze",
        "glass": "Highball",
        "iconType": "collins",
        "method": "Build",
        "garnish": "Lime Wedge",
        "ingredients": [
            { "amount": "1.5oz", "name": "Vodka", "type": "Spirit" },
            { "amount": "3oz", "name": "Cranberry Juice", "type": "Juice" },
            { "amount": "1oz", "name": "Pineapple Juice", "type": "Juice" }
        ],
        "categories": ["classic", "refreshing", "fruity", "tropical"]
    },
    {
        "id": 97,
        "name": "Weissen Sour",
        "glass": "Tumbler",
        "iconType": "wine",
        "method": "Shake",
        "garnish": "Lemon Wheel",
        "ingredients": [
            { "amount": "1 Spoon", "name": "Marmalade", "type": "Sweetener" },
            { "amount": "2 Dashes", "name": "Orange Bitters", "type": "Bitters" },
            { "amount": "2oz", "name": "Bourbon", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "0.25oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "2oz", "name": "Hefeweizen Beer", "type": "Beer" }
        ],
        "categories": ["modern", "refreshing", "beer-based", "citrus-forward", "balanced", "basin 141"]
    },
    {
        "id": 98,
        "name": "Coughlin’s Law",
        "glass": "Coupe",
        "iconType": "coupe",
        "method": "Shake",
        "garnish": "Lavender Sprig",
        "ingredients": [
            { "amount": "1", "name": "Egg White", "type": "Mixer" },
            { "amount": "2 Dashes", "name": "Lavender Bitters", "type": "Bitters" },
            { "amount": "2oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Vanilla Infused Simple Syrup", "type": "Sweetener" },
            { "amount": "0.75oz", "name": "Lemon Juice", "type": "Citrus" }
        ],
        "categories": ["modern", "aromatic", "creamy", "balanced", "elegant", "basin 141"]
    },
    {
        "id": 99,
        "name": "Honolulu Rose",
        "glass": "Martini",
        "iconType": "martini",
        "method": "Shake",
        "garnish": "Mint Sprig",
        "ingredients": [
            { "amount": "1.75oz", "name": "Hibiscus Infused Vodka", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Orgeat Syrup", "type": "Sweetener" },
            { "amount": "0.5oz", "name": "Lemon Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Pineapple Juice", "type": "Juice" }
        ],
        "categories": ["modern", "tropical", "fruity", "refreshing", "balanced", "basin 141"]
    },
    {
        "id": 100,
        "name": "Tippler’s Punch",
        "glass": "Tulip",
        "iconType": "tulip",
        "method": "Shake",
        "garnish": "Cherry and Orange Slice",
        "ingredients": [
            { "amount": "3 Dashes", "name": "Angostura Bitters", "type": "Bitters" },
            { "amount": "0.75oz", "name": "White Rum", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Sailor Jerry’s Rum", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Cynar", "type": "Liqueur" },
            { "amount": "1oz", "name": "Plum Purée", "type": "Fruit" },
            { "amount": "0.5oz", "name": "Lime Juice", "type": "Citrus" },
        ],
        "categories": ["tropical", "complex", "fruity", "refreshing", "modern", "basin 141"]
    },
    {
        "id": 101,
        "name": "The Sinclair",
        "glass": "Rocks",
        "iconType": "rocks",
        "method": "Shake",
        "garnish": "Grapefruit Twist",
        "ingredients": [
            { "amount": "1.75oz", "name": "Mezcal", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "0.25oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "White Grapefruit Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Pineapple Juice", "type": "Juice" }
        ],
        "categories": ["modern", "smoky", "fruity", "balanced", "citrus-forward", "basin 141"]
    },
    {
        "id": 102,
        "name": "The Basin Rita",
        "glass": "Mason Jar",
        "iconType": "mason",
        "method": "Shake",
        "garnish": "Salted Rim and Lime Wheel",
        "ingredients": [
            { "amount": "Muddle", "name": "Orange, Lime, and Lemon Slices", "type": "Citrus" },
            { "amount": "1.75oz", "name": "Cazadores Reposado", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Triple Sec", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Agave", "type": "Sweetener" },
            { "amount": "1oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Lemon Juice", "type": "Citrus" }
        ],
        "categories": ["classic", "citrus-forward", "refreshing", "tart", "balanced", "basin 141"]
    },
    {
        "id": 103,
        "name": "Spicy Basin Rita",
        "glass": "Mason Jar",
        "iconType": "mason",
        "method": "Shake",
        "garnish": "Salted Rim, Lime Wheel, Jalapeño Slice",
        "ingredients": [
            { "amount": "Muddle", "name": " Handful Jalapeño, Orange, Lime, Lemon Slice", "type": "Vegetable" },
            { "amount": "1.75oz", "name": "Cazadores Reposado", "type": "Spirit" },
            { "amount": "0.5oz", "name": "Triple Sec", "type": "Liqueur" },
            { "amount": "0.25oz", "name": "Ancho Reyes Chili Liqueur", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Agave", "type": "Sweetener" },
            { "amount": "1oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Lemon Juice", "type": "Citrus" }
        ],
        "categories": ["spicy", "citrus-forward", "bold", "modern", "refreshing", "basin 141"]
    },
    {
        "id": 104,
        "name": "Smoke & Fire",
        "glass": "Mason Jar",
        "iconType": "mason",
        "method": "Shake",
        "garnish": "Chili Salt Rim & Jalapeño Spear",
        "ingredients": [
            { "amount": "Muddle", "name": " Handful Jalapeño, Orange, Lime Slice", "type": "Vegetable" },
            { "amount": "1.75oz", "name": "Mezcal", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Ancho Reyes Chili Liqueur", "type": "Liqueur" },
            { "amount": "0.75oz", "name": "Agave ", "type": "Sweetener" },
            { "amount": "1oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "1oz", "name": "Lemon Juice", "type": "Citrus" },
        ],
        "categories": ["spicy", "smoky", "bold", "modern", "complex", "basin 141"]
    },
    {
        "id": 105,
        "name": "Midnight Mule",
        "glass": "Mason Jar",
        "iconType": "mason",
        "method": "Shake",
        "garnish": "Lime Wheel",
        "ingredients": [
            { "amount": "2 Dashes", "name": "Angostura Bitters", "type": "Bitters" },
            { "amount": "1.5oz", "name": "Midnight Moonshine", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Domaine de Canton Ginger Liqueur", "type": "Liqueur" },
            { "amount": "1oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Club Soda", "type": "Mixer" }
        ],
        "categories": ["modern", "spicy", "refreshing", "balanced", "citrus-forward", "basin 141"]
    }


//cointreau is fancy triple sec, sometimes its a different glass, cognac is like brandy but with more rules, 
//they are organized in a way that make sense to my own brain in a glance
//How to swizzle - Build in shaker tin, Dry shake, Pour into glass ,Fill half way with crushed ice ,Swizzle, Top with crushed ice

]