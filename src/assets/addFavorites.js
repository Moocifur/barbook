const fs = require('fs');

// Load the cocktails file
const { cocktails } = require('./cocktails');

// Add the `favorite` field to each cocktail
const updatedCocktails = cocktails.map(cocktail => ({
    ...cocktail,
    favorite: false, // Add the default `favorite` field
}));

// Save the updated cocktails to a new file
fs.writeFileSync('./updatedCocktails.js', `export const cocktails = ${JSON.stringify(updatedCocktails, null, 2)};`, 'utf8');

console.log('Favorite field added to all cocktails. Saved as updatedCocktails.js');
