// index.js
import "./styles.css";
import { cocktails } from "./cocktails.js";
import { glassIcons } from "./icons.js";



//SELECTORS
const mainContainer = document.getElementById('main');
const userInput = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

//EVENTLISTENER
searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const query = userInput.value.toLowerCase().trim();

    // Filter cocktails by name or ingredients
    const filterCocktails = cocktails.filter(cocktail => 
        cocktail.name.toLowerCase().includes(query) ||
        cocktail.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(query)) ||
        cocktail.categories.some(category => category.toLowerCase().includes(query))
    );

    // Re-render Results
    mainContainer.innerHTML = "";

    // Check if results exist
    if (filterCocktails.length > 0) {
        filterCocktails.forEach(cocktail => {
            const card = renderCard(cocktail); // Create a card element
            mainContainer.appendChild(card); // Append it to the container
        });
    } else {
        // Create and display a "no results" message
        const noResultsMessage = document.createElement("p");
        noResultsMessage.classList.add("no-results");
        noResultsMessage.textContent = `No results for "${query}".`;
        mainContainer.appendChild(noResultsMessage);
    }
});

//FUNCTIONS
function renderCard(cocktail) {
    // Create the main card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the card header
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    // Create and append the icon image
    const icon = document.createElement("img");
    icon.classList.add("cocktail-icon");
    icon.src = glassIcons[cocktail.iconType] || glassIcons.default;
    
    icon.alt = `${cocktail.iconType} Icon`;
    // cardHeader.appendChild(icon);

    const cocktailName = document.createElement("h2");
    cocktailName.textContent = cocktail.name;

    cardHeader.appendChild(icon);
    cardHeader.appendChild(cocktailName);

    // Create the preparations section
    const preparationDiv = document.createElement("div");
    preparationDiv.classList.add("preparations");
    preparationDiv.textContent = `${cocktail.glass} / ${cocktail.method} / ${cocktail.garnish}`;

    // Create the ingredients list
    const ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("ingredients");
    cocktail.ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");
        listItem.textContent = `${ingredient.amount} ${ingredient.name}`;
        ingredientsList.appendChild(listItem);
    });

    // Append all sections to the card
    card.appendChild(cardHeader);
    card.appendChild(preparationDiv);
    card.appendChild(ingredientsList);

    return card;
};
  
function renderAllCocktails() {
    mainContainer.innerHTML = ""; // Clear the container

    //Sort the cocktails
    const sortedCocktails = cocktails.slice().sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    sortedCocktails.forEach((cocktail) => {
        const card = renderCard(cocktail); // Create a card element
        mainContainer.appendChild(card); // Append it to the container
    });
};
  
// Call this function on page load
renderAllCocktails();
  