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
        "garnish": "Celery Stick, Lemon Wedge, and Olive",
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
        "iconType": "julep",
        "method": "Build",
        "garnish": "Mint Sprig",
        "ingredients": [
            { "amount": "6-8 Leaves", "name": "Fresh Mint", "type": "Herb" },
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
            { "amount": "4 Cubes", "name": "Pear", "type": "Fruit" },
            { "amount": "6 Leaves", "name": "Mint", "type": "Herb" },
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
        "iconType": "tumbler",
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
            { "amount": "1/2", "name": "Lime (Cut into Wedges)", "type": "Citrus" },
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
        "categories": ["modern", "aromatic", "spirit-forward", "herbal", "balanced"]
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
            { "amount": "3 Slices", "name": "Cucumber", "type": "Vegetable" },
            { "amount": "6 Leaves", "name": "Mint", "type": "Herb" },
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
            { "amount": "3 Slices", "name": "Cucumber", "type": "Vegetable" },
            { "amount": "6 Leaves", "name": "Mint", "type": "Herb" },
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
            { "amount": "2 Slices", "name": "Cucumber", "type": "Vegetable" },
            { "amount": "6 Leaves", "name": "Mint", "type": "Herb" },
            { "amount": "1.5oz", "name": "Gin", "type": "Spirit" },
            { "amount": "0.75oz", "name": "Lime Juice", "type": "Citrus" },
            { "amount": "0.5oz", "name": "Simple Syrup", "type": "Sweetener" },
            { "amount": "Top", "name": "Soda Water", "type": "Modifier" }
        ],
        "categories": ["modern", "refreshing", "herbal", "citrus-forward", "light"]
    }
    
    
    
    
    
    
    
    

]

//cointreau is fancy triple sec, sometimes its a different glass, cognac is like brandy but with more rules, 
//they are organized in a way that make sense to my own brain in a glance