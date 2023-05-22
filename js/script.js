/**
 * Global variables.
 */
let currentPokemon;
let selectedPokemon;
let previousPokemon;
let nextPokemon;
let firstPokemon = 1;
let lastPokemon = 101; // Generation I-V: 649 Pokemon
let source = `https://pokeapi.co/api/v2/pokemon/`;
let allPokemon = [];


/**
 * Loads the data for a range of Pokemon from the Pokemon API.
 * Fetches data for each Pokemon from 'firstPokemon' to 'lastPokemon',
 * and then calls the `renderOverview` function to display this data.
 */
async function loadPokemon() {
    for (let i = firstPokemon; i <= lastPokemon; i++) {
        let url = source+`${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon); // See search
        renderOverview(i);
    }
}


/**
 * Displays all Pokemon (from 'firstPokemon' to 'lastPokemon').
 * @param {*} i 
 */
async function renderOverview(i) {
    document.getElementById('pokecardShow').classList.add('hidden');
    let overview = document.getElementById('overview');
    overview.innerHTML += renderOverviewHTML(i);
    matchColorBorder(i);
}


/**
 * Sets up event listeners to track active links in the pagination navigation.
 * Removes "active" class from all navigation links and adds it to the clicked link.
 * @param {Event} event - The click event object.
 */
function checkActiveLink() {
    navbar = document.querySelector(".pagination").querySelectorAll("a");
    navbar.forEach((element) => {
        element.addEventListener("click", function () {
        navbar.forEach((nav) => nav.classList.remove("active"));
        this.classList.add("active");
        });
    });
}


/**
 * Fetches Pokemon data for the Pokemon with the given index.
 * @param {number} index - The index of the Pokemon to fetch data for.
 * @returns {Promise<Object>} A promise that resolves to the data of the Pokemon.
 */
async function fetchPokemonData(index) {
    let url = source + `${index}`;
    let response = await fetch(url);
    return await response.json();
}


/**
 * Displays the Pokemon card for the Pokemon with the given index.
 * Fetches data for the selected Pokemon as well as the previous and next Pokemon,
 * and then updates the view to show this data.
 * @param {number} i - The index of the Pokemon to display.
 */
async function showCard(i) {
    selectedPokemon = await fetchPokemonData(i);
    let previousIndex = i > firstPokemon ? i - 1 : lastPokemon;
    let nextIndex = i < lastPokemon ? i + 1 : firstPokemon;
    previousPokemon = await fetchPokemonData(previousIndex);
    nextPokemon = await fetchPokemonData(nextIndex);

    // Update the view
    updateView(i);
    checkTypesOfPokemon();
    checkActiveLink();
}


/**
 * Updates the view for the selected Pokemon.
 * @param {number} i - The index of the current Pokemon to be displayed.
 */
function updateView(i) {
    addOverviewClasses();
    removeHiddenClassFromPokeCardShow();
    updatePokemonCard(i);
}


/**
 * Adds specific classes to the overview element for CSS styling.
 */
function addOverviewClasses() {
    let overview = document.getElementById('overview');
    overview.classList.add('fixed', 'no-click', 'dimming');
}


/**
 * Removes the 'hidden' class from the 'pokecardShow' element, making it visible in the interface.
 */
function removeHiddenClassFromPokeCardShow() {
    document.getElementById('pokecardShow').classList.remove('hidden');
}


/**
 * Updates the HTML content of the Pokemon card.
 * @param {number} i - The index of the current Pokemon to be displayed.
 */
function updatePokemonCard(i) {
    document.getElementById('pokemonCard').innerHTML = showCardHTML(i);
}


/**
 * Allows switching between different index cards. 
 */
function switchStats1() {
    document.getElementById('baseStats1').classList.remove('hidden');
    document.getElementById('baseStats2').classList.add('hidden');
}


function switchStats2() {
    document.getElementById('baseStats1').classList.add('hidden');
    document.getElementById('baseStats2').classList.remove('hidden');
}


/**
 * Checks if Pokemon has 1 or 2 types of characteristics. 
 */
function checkTypesOfPokemon() {
    let typeData = selectedPokemon['types'].length;
    if (typeData ==1){
        document.getElementById('pokemonType1').innerHTML = selectedPokemon['types']['0']['type']['name'];
        document.getElementById('pokemonType2').style = 'display: none';
    } else {
        document.getElementById('pokemonType1').innerHTML = selectedPokemon['types']['0']['type']['name'];
        document.getElementById('pokemonType2').style = '';
        document.getElementById('pokemonType2').innerHTML = selectedPokemon['types']['1']['type']['name'];
    }
    let typeID = selectedPokemon['types']['0']['type']['name'];
    matchColorBackground(typeID);
}


/**
 * Closes selection by clicking the icon.
 */
function closeCard() {
    document.getElementById('overview').classList.remove('fixed', 'no-click', 'dimming');
    document.getElementById('pokecardShow').classList.add('hidden');
}


/**
 * Closes selection by clicking on background.
 */
window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("section")) {
        closeCard();
    }
});


/**
 * Selects the next Pokemon by clicking on icon. 
 * @param {*} i 
 */
function renderNextPokemon(i) {
    if (i>=lastPokemon) {
        showCard(1); 
    } else {
        showCard(i+1);
    }
}


/**
 * Selects the previous Pokemon by clicking on icon. 
 * @param {*} i 
 */
function renderPreviousPokemon(i) {
    if (i<=1) {
        showCard(lastPokemon);
    } else {
        showCard(i-1);
    }
}


/**
 * Searches Pokemon by Name. 
 * Once typing starts, search-icon will be hidden and close-icon shown.
 */
function searchPokemon() {
    document.getElementById('searchIcon').classList.add('hidden');
    document.getElementById('closeIcon').classList.remove('hidden');
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    document.getElementById('overview').innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        let searchResult = allPokemon[i]["name"];
        let ID = i+1;            
        if (searchResult.toLowerCase().includes(search)) {
            let result = allPokemon[i];
            overview.innerHTML += searchPokemonHTML(result, ID);
            matchColorBorderSearch(result, ID);
        }
    }
}


/**
 * Resets the search bar and refreshes the page.
 * Search icon will be shown and close icon hidden again.
 */
function clearSearchResult() {
    document.getElementById('search').value = '';
    searchPokemon();
    document.getElementById('searchIcon').classList.remove('hidden');
    document.getElementById('closeIcon').classList.add('hidden');
}


/**
 * Displays a loading overlay with a spinner when page is loading.
 */
window.addEventListener('load', function() {
    var loader = document.getElementById('loading-overlay');
    loader.style.display = 'none';
});  