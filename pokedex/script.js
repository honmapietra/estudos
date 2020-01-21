const URL = 'https://pokeapi.co/api/v2/';
const form = document.querySelector("form");
const input = document.querySelector("input");


function populate
(apiURL) {
  fetch(apiURL).then(response => response.json())
  .then(data => format(data))


const format = (data) => {

    const imageDiv = document.getElementById('image');

    image.innerHTML = `<img src=${data.sprites.front_default}>`;

    document.querySelector('#pokemon-name').innerText = `${(data.name).replace('-', ' ')}`;
    document.getElementById("type").innerText = `${data.types[0].type.name}`;
    document.getElementById("height").innerText = `${Math.round(data.height / 3)}'`;
    document.getElementById("order").innerText  = `${data.order}`;
}
}

function search(e) {
   e.preventDefault();
    var name = 

    input.value.toLowerCase().trim().replace('.', '').replace(' ', '-');
    
     apiURL = `${url}${category}/${name}`;
           
}
