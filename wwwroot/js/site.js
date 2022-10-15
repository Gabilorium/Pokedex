// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// Obtenemos los datos de todos los pokemon 
//ACA ESTAN TODOS LOS POKEMON PERO LA POBRE PAGINA NO CARGA https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0
//Primera Generación 151 (offset=0)
//Segunda Generación 100 (offset=151)
//Tercera Generación 135 (offset=251)
//Cuarta Generación 108 (offset=386)
//Quinta Generación 155 (offset=494)
//Sexta Generación 72 (offset=649)
//Septima Generación 89 (offset=721)
//Octava Generación 80 (offset=810)
//A partir de octava (offset=890)
//Forma hisui ()
//Novena NO SE SABE CUANTOS HAY
fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response => response.json())
    .then(json => {
        Pokemon(json.results);
    });

// Pone los pokemos que agarra del json en el container
function Pokemon(pokemon) {
  const container = document.getElementById('container')
  pokemon.forEach(pokemon => {
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card">
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${IdPokemon(pokemon.url)}.png"/>
    <span>Nº.${IdPokemon(pokemon.url)}</span>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </card>
  `;
  });
}

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function IdPokemon(url) {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
}