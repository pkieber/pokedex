/**
 * Generation I-V: 649 Pokemon (Pikachu-ID = 25).
 * Pokemon API
 */
let currentPokemon;
let selectedPokemon;
let firstPokemon = 1;
let lastPokemon = 79;
let source = `https://pokeapi.co/api/v2/pokemon/`;
let allPokemon = [];


/**
 * This async function will load the Pokemon data from the Pokemon API. 
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
 * This function will show all Pokemon (from 'firstPokemon' to 'lastPokemon').
 * @param {*} i 
 */
function renderOverview(i) { // OKAY
    document.getElementById('pokecardShow').classList.add('hidden');
    let overview = document.getElementById('overview');
    overview.innerHTML += renderOverviewHTML(i);
    matchColorBorder(i);
}


/**
 * This function is used to show the Pokemon-Card of the selection.
 * @param {*} i 
 */
async function showCard(i) {
    let url = source+`${i}`;
    let response = await fetch(url);
    selectedPokemon = await response.json();
    document.getElementById('overview').classList.add('fixed');
    document.getElementById('overview').classList.add('no-click');
    document.getElementById('overview').classList.add('dimming');
    document.getElementById('pokecardShow').classList.remove('hidden');
    document.getElementById('pokemonCard').innerHTML = showCardHTML(i);
    checkTypesOfPokemon();
}


/**
 * Some Pokemon have more than 1 characteristics.
 * This function will check if Pokemon has 1 or 2 types of characteristics. 
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
 * Onclick to close selection.
 */
function closeCard() {
    document.getElementById('overview').classList.remove('fixed');
    document.getElementById('overview').classList.remove('no-click');
    document.getElementById('overview').classList.remove('dimming');
    document.getElementById('pokecardShow').classList.add('hidden');
}


/**
 * Onclick to select the next Pokemon.
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
 * Onclick to select the previous Pokemon.
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
 * Search Pokemon by Name.
 */
function searchPokemon() {
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
 * This function will refresh the page.
 */
function clearSearchResult() {
    location.reload();
}


/**
 * This function will display a loading overlay with a spinner when page is loading.
 */
window.addEventListener('load', function() {
    var loader = document.getElementById('loading-overlay');
    loader.style.display = 'none';
});  