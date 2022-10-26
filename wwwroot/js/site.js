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


//Cargar todos los pokemon
fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
    .then(response => response.json())
    .then(json => {
        Pokemones(json.results);  
    });

//Conceguir la datta de 1 solo pokemon
const fetchData = async (id) => {
  try{
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json()
    //console.log(data)
  }catch(error){
    console.log(error)
  }
}

function MostrarPokemon(Id)
{
  $.ajax(
    {
      type:'POST',
      dataType:'JSON',
      Url: 'https://pokeapi.co/api/v2/pokemon/'+Id,
      //Data: { IdPokemon: Id},
      success: DatosPokemon
    });  
}
function DatosPokemon(response)
{
  $("#FotoPokemon").html("src = https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + response.Id + ".png");
}
// Pone los pokemos que agarra del json en el container
function Pokemones(pokemon) {
  const container = document.getElementById('containerr')
  pokemon.forEach(pokemon => {
    fetchData(IdPokemon(pokemon.url))
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card" type="button" data-toggle="modal" data-target="#ModalPokemon" onclick="MostrarPokemon(${IdPokemon(pokemon.url)})">
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

//Cambiar Clases del div
const left = document.querySelector(".left"); 
const right = document.querySelector(".right"); 
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => 
container.classList.add("hover-left")
); 
left.addEventListener("mouseleave", () => 
container.classList.remove("hover-left")
); 

right.addEventListener("mouseenter", () =>
container.classList.add("hover-right") 
);

right.addEventListener("mouseleave", () =>
container.classList.remove("hover-right")
);
