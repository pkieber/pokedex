/**
 * Each Pokemon type has an individual background color
 */
let backgroundColors = {
    bug: 'bg-bug',
    dragon: 'bg-dragon',
    electric: 'bg-electric',
    fairy: 'bg-fairy',
    fighting: 'bg-fighting',
    fire: 'bg-fire',
    ghost: 'bg-ghost',
    grass: 'bg-grass',
    ground: 'bg-ground',
    ice: 'bg-ice',
    normal: 'bg-normal',
    poison: 'bg-poison',
    psychic: 'bg-psychic',
    rock: 'bg-rock',
    water: 'bg-water'
}


/**
 * Each Pokemon type has an individual border color
 */
let borderColors = {
    bug: 'b-bug',
    dragon: 'b-dragon',
    electric: 'b-electric',
    fairy: 'b-fairy',
    fighting: 'b-fighting',
    fire: 'b-fire',
    ghost: 'b-ghost',
    grass: 'b-grass',
    ground: 'b-ground',
    ice: 'b-ice',
    normal: 'b-normal',
    poison: 'b-poison',
    psychic: 'b-psychic',
    rock: 'b-rock',
    water: 'b-water'
};


/**
 * Applies the appropriate border color to the preview box for the current Pokemon.
 * @param {number} typeID - The ID of the preview box (e.g. 0, 1, etc.) to apply the border color to.
 */
function matchColorBorder (typeID){
    let typeBackground = currentPokemon['types']['0']['type']['name']; 
    ColorBorder(typeBackground, typeID);
}


/**
 * Applies the appropriate border color to the preview box for a given Pokemon type, 
 * when displaying search results.
 * @param {Object} result - The search result object returned by the API, containing information about the Pokemon.
 * @param {number} ID - The ID of the preview box (e.g. 0, 1, etc.) to apply the border color to.
 */
function matchColorBorderSearch (result, typeID){
    let typeBackground = result['types']['0']['type']['name']; 
    ColorBorder(typeBackground, typeID);
}


/**
 * Applies the appropriate border color to the preview box for a given Pokemon type.
 * @param {string} typeBackground - The type of the Pokemon (e.g. 'fire', 'water', etc.).
 * @param {number} typeID - The ID of the preview box (e.g. 0, 1, etc.).
 */
function ColorBorder(typeBackground, typeID) {
    let borderColor = borderColors[typeBackground];
    let backgroundColor = backgroundColors[typeBackground];
    if (borderColor || backgroundColor) {
        document.getElementById(`previewBox${typeID}`).classList.add(borderColor);
        document.getElementById(`previewTypeColor${typeID}`).classList.add(backgroundColor);
    }
}


/**
 * Applies the appropriate background color to the title and stat bars for a given Pokemon type.
 * @param {number} typeID - The ID of the preview box (e.g. 0, 1, etc.).
 */
function matchColorBackground(typeID) {
    const elements = document.querySelectorAll('#titleStats, #bar0, #bar1, #bar2, #bar3, #bar4, #bar5');
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.add(backgroundColors[typeID]);
    }
}