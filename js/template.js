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
            <img title="Previous Pokemon" id="previousPokemon" onclick="renderPreviousPokemon(${i})" class="pokemon-image-small" src="${previousPokemon}">
            <img class="pokemon-image" src="${selectedPokemon['sprites']['other']['dream_world']['front_default']}">
            <img title="Next Pokemon" id="nextPokemon" onclick="renderNextPokemon(${i})" class="pokemon-image-small" src="${nextPokemon}"> 
        </div>
        <div class="pagination">
            <a href="#" class="active">Base Stats</a>
            <!--<a href="#">Description</a>-->
        </div>
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
    <div class="arrows">
        <img title="Previous Pokemon" id="previousPokemon" onclick="renderPreviousPokemon(${i})" src="img/chevron.left@2x.png" class="icon">
        <div title="Close Card" class="close-icon" onclick="closeCard()"><img src="img/xmark@2x.png" class="icon"></div>
        <img title="Next Pokemon" id="nextPokemon" onclick="renderNextPokemon(${i})" src="img/chevron.right@2x.png" class="icon">
    </div>
    `
}


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