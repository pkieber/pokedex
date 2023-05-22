/**
 * Returns the HTML string for the overview of a Pokemon.
 * @param {number} i - The index of the current Pokemon to be displayed.
 * @return {string} - The HTML string for the overview of the Pokemon.
 */
function renderOverviewHTML(i) {
    return `
    <div onclick="showCard(${i})" id="previewBox${i}" class="preview-box">
        <div class="pokemon-title-overview"><b>${currentPokemon['name']}</b>#${i}</div>
        <div class="preview-pic-container">
            <img class="preview-pic" src="${currentPokemon['sprites']['other']['dream_world']['front_default']}">
        </div>
        <div id="previewTypeColor${i}" class="pokemon-type-preview">${currentPokemon['types']['0']['type']['name']}</div>
    </div>
    `
}


/**
 * Returns the HTML string for the detailed view of a Pokemon.
 * @param {number} i - The index of the current Pokemon to be displayed.
 * @return {string} - The HTML string for the detailed view of the Pokemon.
 */
function showCardHTML(i) {
    return `
    <div id="titleStats" class="title-stats-container capital-letter">
        <div class="pokemon-title">
            <p>${selectedPokemon['name']}</p><p>#${i}</p>
        </div>
        <div class="pokemon-type-box">
            <h3 id="pokemonType1" class="pokemon-type"></h3>
            <h3 id="pokemonType2" class="pokemon-type"></h3>
        </div>
    </div>
    <div class="base-stats-container">
        <div class="img-container">
            <img title="Previous Pokemon" id="previousPokemon" onclick="renderPreviousPokemon(${i})" class="pokemon-image-small" src="${previousPokemon['sprites']['other']['dream_world']['front_default']}">
            <img class="pokemon-image" src="${selectedPokemon['sprites']['other']['dream_world']['front_default']}">
            <img title="Next Pokemon" id="nextPokemon" onclick="renderNextPokemon(${i})" class="pokemon-image-small" src="${nextPokemon['sprites']['other']['dream_world']['front_default']}">
        </div>
        <div id="statsLink" class="pagination">
            <a href="#" onclick="switchStats1()" class="active">Base Stats</a>
            <a href="#" onclick="switchStats2()">Info</a>
        </div>
        <div id="baseStats1">
            <div class="stats-table">
                <div>HP</div>        
                <div class="progress">
                    <div id="bar0" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${(selectedPokemon['stats']['0']['base_stat'])}%">${(selectedPokemon['stats']['0']['base_stat'])}</div>
                </div>
            </div>
            <div class="stats-table">
                <div>Attack</div>        
                <div class="progress">
                    <div id="bar1" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${(selectedPokemon['stats']['1']['base_stat'])}%">${(selectedPokemon['stats']['1']['base_stat'])}</div>
                </div>
            </div>
            <div class="stats-table">
                <div>Defense</div>        
                <div class="progress">
                    <div id="bar2" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${(selectedPokemon['stats']['2']['base_stat'])}%">${(selectedPokemon['stats']['2']['base_stat'])}</div>
                </div>
            </div>
            <div class="stats-table">
                <div>Sp. Attack</div>        
                <div class="progress">
                    <div id="bar3" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${(selectedPokemon['stats']['3']['base_stat'])}%">${(selectedPokemon['stats']['3']['base_stat'])}</div>
                </div>
            </div>
            <div class="stats-table">
                <div>Sp. Defense</div>        
                <div class="progress">
                    <div id="bar4" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${(selectedPokemon['stats']['4']['base_stat'])}%">${(selectedPokemon['stats']['4']['base_stat'])}</div>
                </div>
            </div>
            <div class="stats-table">
                <div>Speed</div>        
                <div class="progress">
                    <div id="bar5" class="progress-bar progress-bar-striped" role="progressbar" style="width: ${(selectedPokemon['stats']['5']['base_stat'])}%">${(selectedPokemon['stats']['5']['base_stat'])}</div>
                </div>
            </div>
        </div>
        <div id="baseStats2" class="hidden">
            <div class="stats-table">
                <div>Species</div>        
                <div class="progress info-stats">
                <div class="stats-species">${(selectedPokemon['species']['name'])}</div>
                </div>
            </div>
            <div class="stats-table">
                <div>Height</div>        
                <div class="progress info-stats">
                    <div class="stats">${(selectedPokemon['height'])*10} cm</div>
                </div>
            </div>
            <div class="stats-table">
                <div>Weight</div>        
                <div class="progress info-stats">
                <div class="stats">${(selectedPokemon['weight'])/10} kg</div>
                </div>
            </div>
        </div>
    </div>
    <div class="arrows">
        <img title="Previous Pokemon" id="previousPokemon" onclick="renderPreviousPokemon(${i})" src="img/left.png" class="icon">
        <div title="Close Card" class="close-icon" onclick="closeCard()"><img src="img/xmark.png" class="icon"></div>
        <img title="Next Pokemon" id="nextPokemon" onclick="renderNextPokemon(${i})" src="img/right.png" class="icon">
    </div>
    `
}


/**
 * Returns the HTML string for the searched Pokemon in the overview.
 * @param {Object} result - The data of the Pokemon that was searched for.
 * @param {number} ID - The index of the searched Pokemon.
 * @return {string} - The HTML string for the searched Pokemon in the overview.
 */
function searchPokemonHTML(result, ID){
    return `
    <div onclick="showCard(${ID})" id="previewBox${ID}" class="preview-box">
        <div class="pokemon-title-overview"><b>${result['name']}</b>#${ID}</div>
        <div class="preview-pic-container">
            <img class="preview-pic" src="${result['sprites']['other']['dream_world']['front_default']}">
        </div>
        <div id="previewTypeColor${ID}" class="pokemon-type-preview">${result['types']['0']['type']['name']}</div>
    </div>
    `;
}