// Matching colors (border-color) with Pokemon types
function matchColorBorder (typeColor){
    let typeBackground = currentPokemon['types']['0']['type']['name']; 
    ColorBorderGroup1(typeBackground, typeColor);
    ColorBorderGroup2(typeBackground, typeColor);
    ColorBorderGroup3(typeBackground, typeColor);
    ColorBorderGroup4(typeBackground, typeColor);
}


// Matching colors (border-color) - SEARCH RESULTS
function matchColorBorderSearch (result, ID){
    let typeColor = ID;
    let typeBackground = result['types']['0']['type']['name']; 
    ColorBorderGroup1(typeBackground, typeColor);
    ColorBorderGroup2(typeBackground, typeColor);
    ColorBorderGroup3(typeBackground, typeColor);
    ColorBorderGroup4(typeBackground, typeColor);
}


function ColorBorderGroup1(typeBackground, typeColor) {
    if (typeBackground == 'bug') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-bug');
    }
    if (typeBackground == 'dragon') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-dragon');
    }
    if (typeBackground == 'electric') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-electric');
    }
    if (typeBackground == 'fairy') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-fairy');
    }
}


function ColorBorderGroup2(typeBackground, typeColor) {
    if (typeBackground == 'fighting') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-fighting');
    }
    if (typeBackground == 'fire') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-fire');
    }
    if (typeBackground == 'ghost') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-ghost');
    }
    if (typeBackground == 'grass') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-grass');
    }
}    


function ColorBorderGroup3(typeBackground, typeColor) {
    if (typeBackground == 'ground') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-ground');
    }
    if (typeBackground == 'ice') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-ice');
    }
    if (typeBackground == 'normal') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-normal');
    }
    if (typeBackground == 'poison') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-poison');
    }
}    


function ColorBorderGroup4(typeBackground, typeColor) {
    if (typeBackground == 'psychic') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-psychic');
    }
    if (typeBackground == 'rock') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-rock');
    }
    if (typeBackground == 'water') {
        document.getElementById(`previewBox${typeColor}`).classList.add('b-water');
    }
}


// Matching colors (background-color) with Pokemon types
function matchColorBackground (typeColor){
    ColorBackgroundGroup1(typeColor);
    ColorBackgroundGroup2(typeColor);
    ColorBackgroundGroup3(typeColor);
    ColorBackgroundGroup4(typeColor);
}


function ColorBackgroundGroup1(typeColor) { 
    if (typeColor == 'bug') {
        document.getElementById(`titleStats`).classList.add('bg-bug');
    }
    if (typeColor == 'dragon') {
        document.getElementById(`titleStats`).classList.add('bg-dragon');
    }
    if (typeColor == 'electric') {
        document.getElementById(`titleStats`).classList.add('bg-electric');
    }
    if (typeColor == 'fairy') {
        document.getElementById(`titleStats`).classList.add('bg-fairy');
    }
}


function ColorBackgroundGroup2(typeColor) { 
    if (typeColor == 'fighting') {
        document.getElementById(`titleStats`).classList.add('bg-fighting');
    }
    if (typeColor == 'fire') {
        document.getElementById(`titleStats`).classList.add('bg-fire');
    }
    if (typeColor == 'ghost') {
        document.getElementById(`titleStats`).classList.add('bg-ghost');
    }
    if (typeColor == 'grass') {
        document.getElementById(`titleStats`).classList.add('bg-grass');
    }
}


function ColorBackgroundGroup3(typeColor) { 
    if (typeColor == 'ground') {
        document.getElementById(`titleStats`).classList.add('bg-ground');
    }
    if (typeColor == 'ice') {
        document.getElementById(`titleStats`).classList.add('bg-ice');
    }
    if (typeColor == 'normal') {
        document.getElementById(`titleStats`).classList.add('bg-normal');
    }
    if (typeColor == 'poison') {
        document.getElementById(`titleStats`).classList.add('bg-poison');
    }
}


function ColorBackgroundGroup4(typeColor) { 
    if (typeColor == 'psychic') {
        document.getElementById(`titleStats`).classList.add('bg-psychic');
    }
    if (typeColor == 'rock') {
        document.getElementById(`titleStats`).classList.add('bg-rock');
    }
    if (typeColor == 'water') {
        document.getElementById(`titleStats`).classList.add('bg-water');
    }
}