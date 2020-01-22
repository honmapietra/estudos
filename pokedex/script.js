const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

function fetchPokemon(apiURL) {
  return fetch(apiURL).then(response => response.json());
}

const changeSrcImage = (src, imageElement) => {
    imageElement.src = src;
}

const populatePokemonData = (data) => {
    const imageDiv = document.getElementById('image');

    changeSrcImage(data.sprites.front_default, imageDiv);

    document.querySelector('#pokemon-name').innerText = `${(data.name).replace('-', ' ')}`;
    document.getElementById("type").innerText = `${data.types[0].type.name}`;
    document.getElementById("height").innerText = `${Math.round(data.height / 3)}'`;
    document.getElementById("order").innerText  = `${data.order}`;
}

async function search(pokemonName) {
    const name = pokemonName.toLowerCase().trim().replace('.', '').replace('-', '');
    
    const apiURL = `${BASE_URL}/${name}`;

    try {
        const pokemonData = await fetchPokemon(apiURL);
        populatePokemonData(pokemonData);
    } catch (error) {
        alert("Oops, pokemon not found please correct the name")   
    }   
}

function handleFormSubmit(event) {
    event.preventDefault();

    const form = event.target;

    const input = form.elements.pokemonName;

    const pokemonName = input.value;

    search(pokemonName);
}
