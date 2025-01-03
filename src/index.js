// index.js
import "./styles.css";
import { cocktails } from "./cocktails.js";
import { glassIcons } from "./icons.js";

//SELECTORS
const mainContainer = document.getElementById('main');
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById("search-bar");
const clearButton = document.getElementById("clear-button");
const separator = document.querySelector(".separator");
const favoritesButton = document.getElementById('favorites-button');

const favoriteIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="favorite-icon">
        <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"></path>
    </svg>`;

const allIcon = `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="m456-320 104-104 104 104 56-56-104-104 104-104-56-56-104 104-104-104-56 56 104 104-104 104 56 56Zm-96 160q-19 0-36-8.5T296-192L80-480l216-288q11-15 28-23.5t36-8.5h440q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H360ZM180-480l180 240h440v-480H360L180-480Zm400 0Z"/></svg>`

loadFavorites()

//EVENTLISTENER
searchButton.addEventListener("click", (event) => {
    event.preventDefault();
    const query = searchBar.value.toLowerCase().trim();

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

// Event listener for input changes
searchBar.addEventListener("input", () => {
    if (searchBar.value.trim() !== "") {
      // Show the clear button and separator when there is text
      clearButton.style.display = "flex";
      separator.style.display = "block";
    } else {
      // Hide the clear button and separator when there is no text
      clearButton.style.display = "none";
      separator.style.display = "none";
    }
});
  
// Clear the search bar when clicking the clear button
clearButton.addEventListener("click", () => {
    searchBar.value = "";
    clearButton.style.display = "none";
    separator.style.display = "none";
    searchBar.focus(); // Optional: Return focus to the search bar
});

//Make outside clickable
document.addEventListener("click", (event) => {
    // Check if the click is outside the search bar and it's currently focused
    if (!searchBar.contains(event.target) && document.activeElement === searchBar) {
      searchBar.blur(); // Unfocus the input box
    }
});

clearButton.addEventListener("click", () => {
    searchBar.value = "";
    clearButton.style.display = "none";
    separator.style.display = "none";
    searchBar.focus(); // Optional: Return focus to the search bar
    renderAllCocktails(); // Reset the displayed cocktails
});


favoritesButton.addEventListener('click', () => {
    renderFavorites();
});

//FUNCTIONS

//Render Card
function renderCard(cocktail) {
    // Create the main card container
    const card = document.createElement("div");
    card.classList.add("card");

    // Create the card header
    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");

    // Create div for img and title
    const headerLeft = document.createElement("div");
    headerLeft.classList.add("header-left");

    // Create cocktail icon
    const icon = document.createElement("img");
    icon.classList.add("cocktail-icon");
    icon.src = glassIcons[cocktail.iconType] || glassIcons.default;
    icon.alt = `${cocktail.iconType} Icon`;
    
    // Create name
    const cocktailName = document.createElement("h2");
    cocktailName.textContent = cocktail.name;

    headerLeft.appendChild(icon);
    headerLeft.appendChild(cocktailName);
    cardHeader.appendChild(headerLeft);

    // Create the favorite button------------
    const favoriteButton = document.createElement('button');
    favoriteButton.classList.add('favorite-button');

    // Favorite img
    // const favoriteIcon = `
    // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="favorite-icon">
    //     <path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"></path>
    // </svg>`;

    favoriteButton.innerHTML = favoriteIcon;

    // Apply the "favorited" class if the cocktail is marked as a favorite
    if (cocktail.favorite) {
        favoriteButton.classList.add("favorited");
    }

    // Attach an event listener for toggling favorite
    favoriteButton.addEventListener("click", () => {
        toggleFavorite(cocktail.id);
        favoriteButton.classList.toggle("favorited");
    });

    // Append Favorite button
    cardHeader.appendChild(favoriteButton);

    // SAVE FAVORITES
    function toggleFavorite(cocktailId) {
    const cocktail = cocktails.find(c => c.id === cocktailId);
    if (cocktail) {
        cocktail.favorite = !cocktail.favorite;
        saveFavorites(); 
        // Save the updated data to localStorage
        }
    };

    // Append Favorite button
    cardHeader.appendChild(favoriteButton);
    //---------------------

    // Create the preparations section
    const preparationDiv = document.createElement("div");
    preparationDiv.classList.add("preparations");
    preparationDiv.textContent = `${cocktail.glass} / ${cocktail.method} / ${cocktail.garnish}`;

    // Create the ingredients list
    const ingredientsList = document.createElement("ul");
    ingredientsList.classList.add("ingredients");

    cocktail.ingredients.forEach(ingredient => {
        const listItem = document.createElement("li");

        const amountSpan = document.createElement("span");
        amountSpan.classList.add("ingredient-amount");
        amountSpan.textContent = ingredient.amount;

        const nameSpan = document.createElement("span");
        nameSpan.classList.add("ingredient-name");
        nameSpan.textContent = ingredient.name;

        listItem.appendChild(amountSpan);
        listItem.appendChild(nameSpan);
        ingredientsList.appendChild(listItem);

        // listItem.textContent = `${ingredient.amount} ${ingredient.name}`;
        // ingredientsList.appendChild(listItem);
    });

    // Append all sections to the card
    card.appendChild(cardHeader);
    card.appendChild(preparationDiv);
    card.appendChild(ingredientsList);

    return card;
};
  
/*--------------------------*/
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

function saveFavorites() {
    localStorage.setItem('cocktails', JSON.stringify(cocktails));
}



function loadFavorites() {
    const savedData = localStorage.getItem('cocktails');
    if (savedData) {
        const savedCocktails = JSON.parse(savedData);
        cocktails.forEach((cocktail, index) => {
            cocktail.favorite = savedCocktails[index].favorite;
        });
    }
}


function renderFavorites() {
    mainContainer.innerHTML = ""; // Clear the main container

    const favoriteCocktails = cocktails.filter(cocktail => cocktail.favorite);
    if (favoriteCocktails.length > 0) {
        favoriteCocktails.forEach(cocktail => {
            const card = renderCard(cocktail);
            mainContainer.appendChild(card);
        });
    } else {
        const noFavoritesMessage = document.createElement('p');
        noFavoritesMessage.textContent = "No favorite cocktails yet!";
        noFavoritesMessage.classList.add("no-results");
        mainContainer.appendChild(noFavoritesMessage);
    }
}

let showingFavorites = false;

favoritesButton.addEventListener('click', () => {
    if (showingFavorites) {
        renderAllCocktails();
        favoritesButton.innerHTML = favoriteIcon;
    } else {
        renderFavorites();
        favoritesButton.innerHTML = allIcon;
    }
    showingFavorites = !showingFavorites;
});
  
// Call this function on page load----------------------------------------
renderAllCocktails();
  