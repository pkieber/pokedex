/**
 * Generation I-V: 649 Pokemon (Pikachu-ID = 25).
 * Pokemon API
 */
let currentPokemon;
let selectedPokemon;
let previousPokemon;
let nextPokemon;
let firstPokemon = 1;
let lastPokemon = 101;
let source = `https://pokeapi.co/api/v2/pokemon/`;
let allPokemon = [];


/**
 * Loads the Pokemon data from the Pokemon API. 
 */
async function loadPokemon() {
    for (let i = firstPokemon; i < lastPokemon; i++) {
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
 * Shows the details of the selected Pokemon card.
 * @param {*} i 
 */
async function showCard(i) {
    let url = source+`${i}`;
    let response = await fetch(url);
    selectedPokemon = await response.json();
    previousPokemon = selectedPokemon['sprites']['other']['dream_world']['front_default'];
    nextPokemon = selectedPokemon['sprites']['other']['dream_world']['front_default'];
    document.getElementById('overview').classList.add('fixed');
    document.getElementById('overview').classList.add('no-click');
    document.getElementById('overview').classList.add('dimming');
    document.getElementById('pokecardShow').classList.remove('hidden');
    document.getElementById('pokemonCard').innerHTML = showCardHTML(i);
    checkTypesOfPokemon();
    checkActiveLink();
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
    document.getElementById('overview').classList.remove('fixed');
    document.getElementById('overview').classList.remove('no-click');
    document.getElementById('overview').classList.remove('dimming');
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
    if (i==lastPokemon) {
        showCard(firstPokemon); 
    } else {
        showCard(i+1);
    }
}


/**
 * Selects the previous Pokemon by clicking on icon. 
 * @param {*} i 
 */
function renderPreviousPokemon(i) {
    if (i==firstPokemon) {
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