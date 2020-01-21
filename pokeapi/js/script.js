const URL = 'https://pokeapi.co/api/v2/pokemon';
const fetchPokemon = (pokemon) => fetch(`${URL}/${pokemon}`).then(response => response.json())

const addImage = (src, domElement) => {
    const img = document.createElement("img");
 
    img.src = src;

    domElement.appendChild(img);
}

const populatePokemonData = (pokemon) => {
    
    const imageDiv = document.getElementById('image');

    addImage(pokemon.sprites.front_default, imageDiv);
    addImage(pokemon.sprites.front_shiny, imageDiv);

    const pokemonNameFormatted = `${pokemon.name.charAt(0).toUpperCase()}${pokemon.name.slice(1)}` 

    document.querySelector('#pokemon-name').innerText=(pokemonNameFormatted);
    document.getElementById('weight').innerText=(pokemon.weight);
    document.getElementById('height').innerText=(pokemon.height);
    document.getElementById('order').innerText=(pokemon.order);
    
   
    
        
}

const initialize = async () => {
    const pokemonData = await fetchPokemon('eevee');

    populatePokemonData(pokemonData);
    

    console.log({ pokemonData });
}

// inicializa o app
document.addEventListener("DOMContentLoaded", function() {
    initialize();
});