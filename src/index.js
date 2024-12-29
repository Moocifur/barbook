// index.js
import "./styles.css";
import { cocktails } from "./cocktails.js";

//SELECTORS
const mainContainer = document.getElementById('search-container');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

//EVENTLISTENER
searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const query = searchInput.value.toLowerCase().trim();

    // Filter cocktails by name or ingredients
    const filterCocktails = cocktails.filter(cocktail => 
        cocktail.name.toLowerCase().includes(query) ||
        cocktail.ingredients.some(ingredient => ingredient.name.toLowerCase().includes(query))
    );

    // Re-render Results
    mainContainer.innerHTML = "";
    if (filterCocktails.length > 0) {
        filterCocktails.forEach(cocktail => {
            mainContainer.innerHTML += renderCocktailCard(cocktail);
        });
    } else {
        mainContainer.innerHTML = `<p class="no-results">No results for "${query}".</p>`;
    }
});

//FUNCTIONS
function renderCocktailCard(cocktail) {
    return `
      <div class="drink-card">
        <div class="drink-name">
          <h2>${cocktail.name}</h2>
        </div>
        <div class="preparations">
          <p>${cocktail.glass} / ${cocktail.method} / ${cocktail.garnish}</p>
        </div>
        <ul class="ingredients">
          ${cocktail.ingredients
            .map((ingredient) => `<li>${ingredient.amount} ${ingredient.name}</li>`)
            .join("")}
        </ul>
      </div>
    `;
  }
  
  function renderAllCocktails() {
    mainContainer.innerHTML = ""; // Clear the container
    cocktails.forEach((cocktail) => {
      mainContainer.innerHTML += renderCocktailCard(cocktail);
    });
  }
  
  // Call this function on page load
  renderAllCocktails();
  