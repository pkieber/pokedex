// Generation I-V: 649 Pokemon (Pikachu-ID = 25)
let currentPokemon;
let selectedPokemon;
let firstPokemon = 1;
let lastPokemon = 79;
let source = `https://pokeapi.co/api/v2/pokemon/`;
let allPokemon = [];


async function loadPokemon() {
    for (let i = firstPokemon; i < lastPokemon; i++) {
        let url = source+`${i}`;
        let response = await fetch(url);
        currentPokemon = await response.json();
        allPokemon.push(currentPokemon); // See search
        renderOverview(i);
    }
}


// Show all Pokemon (from 'firstPokemon' to 'lastPokemon')
function renderOverview(i) { // OKAY
    document.getElementById('pokecardShow').classList.add('hidden');
    let overview = document.getElementById('overview');
    overview.innerHTML += renderOverviewHTML(i);
    matchColorBorder(i);
}


function renderOverviewHTML(i) {
    return `
    <div onclick="showCard(${i})" id="previewBox${i}" class="preview-box">
        <div>#${i}</div>
        <div><b>${currentPokemon['name']}</b></div>
        <img class="preview-pic" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}">
        <div class="pokemon-type-preview">${currentPokemon['types']['0']['type']['name']}</div>
    </div>
    `
}


// Onclick-Function to show Pokemon-Card
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


function showCardHTML(i) {
    return `
    <div id="titleStats" class="title-stats-container capital-letter">
        <div class="pokemon-title">
            <div class="poke-number">
                <h3>#${i}</h3>
            </div>
            <h1><b>${selectedPokemon['name']}</b></h1>
        </div>
        <div class="pokemon-type-box">
            <h3 id="pokemonType1" class="pokemon-type"></h3>
            <h3 id="pokemonType2" class="pokemon-type"></h3>
        </div>
    </div>
    <div class="base-stats-container">
        <div class="img-container">
            <img class="pokemon-image" src="${selectedPokemon['sprites']['other']['dream_world']['front_default']}">
        </div>
        <h2>Base Stats</h2>
        <div class="stats-table">
            <div>HP</div>        
            <div>${selectedPokemon['stats']['0']['base_stat']}</div> 
        </div>
        <div class="stats-table">
            <div>Attack</div>        
            <div>${selectedPokemon['stats']['1']['base_stat']}</div>
        </div>
        <div class="stats-table">
            <div>Defense</div>        
            <div>${selectedPokemon['stats']['2']['base_stat']}</div>
        </div>
        <div class="stats-table">
            <div>Sp. Attack</div>        
            <div>${selectedPokemon['stats']['3']['base_stat']}</div>
        </div>
        <div class="stats-table">
            <div>Sp. Defense</div>        
            <div>${selectedPokemon['stats']['4']['base_stat']}</div>
        </div>
        <div class="stats-table">
            <div>Speed</div>        
            <div>${selectedPokemon['stats']['5']['base_stat']}</div>
        </div>
    </div>
    <div class="arrows">
        <img title="Previous Pokemon" id="previousPokemon" onclick="renderPreviousPokemon(${i})" src="img/chevron.left@2x.png" class="icon">
        <div title="Close Card" class="close-icon" onclick="closeCard()"><img src="img/xmark@2x.png" class="icon"></div>
        <img title="Next Pokemon" id="nextPokemon" onclick="renderNextPokemon(${i})" src="img/chevron.right@2x.png" class="icon">
    </div>
    `
}


// Check if Pokemon has 1 or 2 types of characteristics
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
    let typeColor = selectedPokemon['types']['0']['type']['name'];
    matchColorBackground(typeColor);
}


// Onclick to close selection
function closeCard() {
    document.getElementById('overview').classList.remove('fixed');
    document.getElementById('overview').classList.remove('no-click');
    document.getElementById('overview').classList.remove('dimming');
    document.getElementById('pokecardShow').classList.add('hidden');
}


// Onclick to select the next Pokemon
function renderNextPokemon(i) {
    if (i==lastPokemon) {
        showCard(firstPokemon); 
    } else {
        showCard(i+1);
    }
}


// Onclick to select the previous Pokemon
function renderPreviousPokemon(i) {
    if (i==firstPokemon) {
        showCard(lastPokemon);
    } else {
        showCard(i-1);
    }
}


// Search Pokemon by Name
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


function searchPokemonHTML(result, ID){
    return `
    <div onclick="showCard(${ID})" id="previewBox${ID}" class="preview-box">
        <div>#${ID}</div>
        <div><b>${result['name']}</b></div>
        <img class="preview-pic" src="${result['sprites']['other']['dream_world']['front_default']}">
        <div class="pokemon-type-preview">${result['types']['0']['type']['name']}</div>
    </div>
    `;
}


function clearSearchResult() {
    location.reload();
}