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

function GetDatta(){
    var e = document.getElementById("filtroPoke");
    var del = document.getElementById("containerr").childElement;
    console.log(del)
    var val = e.value;
    
    switch (val) {
    case "1":     
      fetch('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0')
          .then(response => response.json())
          .then(json => {
          Pokemones(json.results);  
        });
    break;

    case "2":
      fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=151')
          .then(response => response.json())
          .then(json => {
          Pokemones(json.results);  
        });
    break;

    case "3":
      fetch('https://pokeapi.co/api/v2/pokemon?limit=135&offset=251')
        .then(response => response.json())
        .then(json => {
        Pokemones(json.results);  
      });
    break;

    case "4":
      fetch('https://pokeapi.co/api/v2/pokemon?limit=108&offset=386')
        .then(response => response.json())
        .then(json => {
        Pokemones(json.results);  
      });
    break;

    case "5":
      fetch('https://pokeapi.co/api/v2/pokemon?limit=155&offset=494')
        .then(response => response.json())
        .then(json => {
        Pokemones(json.results);  
      });
    break;

    case "6":
      fetch('https://pokeapi.co/api/v2/pokemon?limit=72&offset=649')
        .then(response => response.json())
        .then(json => {
        Pokemones(json.results);  
      });
    break;

    case "7":
      fetch('https://pokeapi.co/api/v2/pokemon?limit=89&offset=721')
        .then(response => response.json())
        .then(json => {
        Pokemones(json.results);  
      });
    break;

    case "8":
      fetch('https://pokeapi.co/api/v2/pokemon?limit=80&offset=810')
        .then(response => response.json())
        .then(json => {
        Pokemones(json.results);  
      });
    break;
  }
};


//Conceguir la datta de 1 solo pokemon
const fetchData = async (id) => {
  try{
    console.log(id)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json()
    data.types.forEach(type => {
      tipo = type.type.name;
      console.log(tipo)
      var i = 0;
      i = i+1;
      console.log(data.types.length)
    })
    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      imgJuego: data.sprites.front_default,
      imgJuegoShiny: data.sprites.front_shiny,
      imgCvg: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      experiencia: data.base_experience,
      Hp: data.stats[0].base_stat,
      Atq: data.stats[1].base_stat,
      Def: data.stats[2].base_stat,
      Spa: data.stats[3].base_stat,
      Spd: data.stats[4].base_stat,
      Speed: data.stats[5].base_stat,
      Tipo1: data.types[0].type.name,
      //Tipo2: data.types[1].type.name,
      Movimientos:    
      data.moves.forEach(move => {
        movimiento = move.move.name;
        //console.table(movimiento)
      }),
      //Tipo2: data.types[1].type.name
    };
    console.log(data)
    MostrarPokemon(pokemon)
  }catch(error){
    console.log(error)
  }
}

// Pone los pokemos que agarra del json en el container
function Pokemones(pokemon) {
  const container = document.getElementById('containerr')
  $("#containerr").html("");
  pokemon.forEach(pokemon => {
    IdPoke = IdPokemon(pokemon.url);
    //fetchData(IdPokemon(pokemon.url))
    // NO SE PORQUE PERO QUEDA HORRIBLE
    $("#containerr").append('<a href="DatosPokemon?Idpokemon=' + IdPoke + '" class="noUnderLine" target="blank"> <div class="card" type="button"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+IdPoke+'.png"/><span>Nº.'+IdPoke+'</span><h2>' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)+'</h2></card></a>')
    //$("#containerr").append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'+IdPoke+'.png"/>')
    /*$("#containerr").append('<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+IdPoke+'.svg"/>')
    $("#containerr").append('<h2>' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)+'</h2>')
    $("#containerr").append('</card>')
    $("#containerr").append('</a>')*/
    /*container.innerHTML = `
    ${container.innerHTML}
    <a href="DatosPokemon?Idpokemon=` + IdPoke + `"  class="noUnderLine" target="_blank">
    <div class="card" type="button">
    <!--<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${IdPoke}.png"/>-->
    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${IdPoke}.png"/>
    <span>Nº.${IdPoke}</span>
    <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
    </card>
    </a>
  `;*/
  });
}


function getPokemon(IdPokemon) {
  fetchData(IdPokemon);
}
const MostrarPokemon = (pokemon) =>{
  console.log(pokemon)
  const container = document.getElementById('datos')
  container.innerHTML = `
  ${container.innerHTML}
  <h1 class="text-center">${pokemon.nombre}</h1>
  <img src="${pokemon.img}">
  <img src="${pokemon.imgJuego}">
  <img src="${pokemon.imgJuegoShiny}">
  <h1>${pokemon.Tipo1}</h1>
  <p>${pokemon.movimiento}</p>
  <table class="tabla-estadisticas">
    <tbody>
      <tr>
        <th colspan="2" rowspan="2" class="text-center titulo-tabla">
          Stats
        </th>
      </tr>
      <tr>
      </tr>      
      <tr class="text-center barra-completa-hp">
        <th class="texto-tabla">
          <div class="nombre-stat">Hp:</div>
          <div class="numero-stat">${pokemon.Hp}</div>
        </th>
        <td class="barra-stat">
          <div class="hp" style="width:calc(100% * ${pokemon.Hp}/255)"></div>
        </td>
      </tr>
      <tr class="text-center barra-completa-atq">
        <th class="texto-tabla">
          <div class="nombre-stat">Ataque:</div>
          <div class="numero-stat">${pokemon.Atq}</div>
        </th>
        <td class="barra-stat" >
          <div class="atq" style="width:calc(100% * ${pokemon.Atq}/255)"></div>
        </td>     
      </tr>
      <tr class="text-center barra-completa-def">
        <th class="texto-tabla">
          <div class="nombre-stat">Defensa:</div>
          <div class="numero-stat">${pokemon.Def}</div>
        </th>
        <td class="barra-stat" >
          <div class="def" style="width:calc(100% * ${pokemon.Def}/255)"></div>
        </td>     
     </tr>
      <tr class="text-center barra-completa-spa">
        <th class="texto-tabla">
          <div class="nombre-stat">Sp.Atq:</div>
          <div class="numero-stat">${pokemon.Spa}</div>
        </th>
        <td class="barra-stat" >
          <div class="spa" style="width:calc(100% * ${pokemon.Spa}/255)"></div>
        </td>     
      </tr>
      <tr class="text-center barra-completa-spd">
        <th class="texto-tabla">
          <div class="nombre-stat">Sp.Def:</div>
          <div class="numero-stat">${pokemon.Spd}</div>
        </th>
        <td class="barra-stat" >
          <div class="spd" style="width:calc(100% * ${pokemon.Spd}/255)"></div>
        </td>
      </tr>
      <tr class="text-center barra-completa-speed">
        <th class="texto-tabla">
        <div class="nombre-stat">Speed:</div>
        <div class="numero-stat">${pokemon.Speed}</div>
        </th>
        <td class="barra-stat" >
          <div class="speed" style="width:calc(100% * ${pokemon.Speed}/255)"></div>
        </td>
      </tr>
      <tr style="background: #A27DFA;">
        <th style="width:85px; padding-left:0.5em; padding-right:0.5em">
        <div class="nombre-stat">Total:</div>
        <div class="numero-stat">${pokemon.Hp + pokemon.Atq + pokemon.Def + pokemon.Spa + pokemon.Spd + pokemon.Speed}</div>
        </th>
        <td>
        </td>
      </tr>
  </tbody>
</table>
`;
}

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function IdPokemon(url) {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
}