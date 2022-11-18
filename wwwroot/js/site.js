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
    //console.log(del)
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
const fetchDataMove = async (idMov, learn_method,learn_level) => {
  try{
    //console.log(idMov)
    const mov = await fetch(`https://pokeapi.co/api/v2/move/${idMov}`);
    const datamov = await mov.json()
    var dataSet = [];
    const movimiento ={
      Nombre: datamov.name,
      Tipo: datamov.type.name,
      Clase: datamov.damage_class.name,
      Daño: datamov.power,
    }
    //console.log(datamov)
    MostrarMovimiento(movimiento,learn_method, learn_level)

  }catch(error){
    console.log(error)
  }
}

const fetchData = async (id) => {
  try{
    console.log("Id del pokemon: " + id)
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json()
    const pokemon = {
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
      imgJuego: data.sprites.front_default,
      imgJuegoEspalda: data.sprites.back_default,
      imgJuegoShiny: data.sprites.front_shiny,
      imgJuegoEspaldaShiny: data.sprites.back_shiny,
      imgCvg: data.sprites.other.dream_world.front_default,
      nombre: data.name,
      experiencia: data.base_experience,
      Hp: data.stats[0].base_stat,
      Atq: data.stats[1].base_stat,
      Def: data.stats[2].base_stat,
      Spa: data.stats[3].base_stat,
      Spd: data.stats[4].base_stat,
      Speed: data.stats[5].base_stat,
      Tipo: data.types,
      TipoPrinc: data.types[0].type.name,
      Movimientos: data.moves
    };
    console.log(pokemon)
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
    $("#containerr").append('<a href="DatosPokemon?Idpokemon=' + IdPoke + '" class="noUnderLine" target="_blank"> <div class="card" type="button"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+IdPoke+'.png"/><span>Nº.'+IdPoke+'</span><h2>' + pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)+'</h2></card></a>')
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

// En esta ruta de la API no nos viene el id de cada pokemon, pero si que nos viene
// una URL, para poder obtener todos los datos de ese pokemon, la cual contiene su ID
// así que le extraigo el ID a la URL
function IdPokemon(url) {
  return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/','')
}
function IdMovimiento(url) {
  return url.replace('https://pokeapi.co/api/v2/move/', '').replace('/','')
}
async function getPokemon(IdPokemon) {
  await fetchData(IdPokemon);
}

const MostrarMovimiento = (movimiento, learn_method, learn_level) =>{
  var contenido_nivel = document.querySelector('#contenido_nivel')
  var contenido_mt = document.querySelector('#contenido_tutor')

  //console.log(learn_level)
  if(movimiento.Daño == null)
  {
    movimiento.Daño = "-"
  }
  if(learn_method == "level-up")
  {
    contenido_nivel.innerHTML += `
    <tr>
        <th class"text-white" scope="row">${ learn_level}</th>
        <th class"text-white">${ movimiento.Nombre.charAt(0).toUpperCase() + movimiento.Nombre.slice(1)}</th>
        <td class"text-white">${ movimiento.Tipo.charAt(0).toUpperCase() + movimiento.Tipo.slice(1)}</td>
        <td class"text-white">${ movimiento.Clase.charAt(0).toUpperCase() + movimiento.Clase.slice(1)}</td>
        <td class"text-white">${ movimiento.Daño}</td>
    </tr>
    `
  }
  else
  {
    contenido_mt.innerHTML += `
    <tr>
        <th class"text-white" scope="row">${ learn_method.charAt(0).toUpperCase() + learn_method.slice(1)}</th>
        <th class"text-white" scope="row">${ movimiento.Nombre.charAt(0).toUpperCase() + movimiento.Nombre.slice(1)}</th>
        <td class"text-white">${ movimiento.Tipo.charAt(0).toUpperCase() + movimiento.Tipo.slice(1)}</td>
        <td class"text-white">${ movimiento.Clase.charAt(0).toUpperCase() + movimiento.Clase.slice(1)}</td>
        <td class"text-white">${ movimiento.Daño}</td>
    </tr>
    `
  }
}

const MostrarPokemon = (pokemon) =>{
  //console.log(pokemon)
  const datos = document.querySelector('#datos')
  datos.innerHTML = `
  ${datos.innerHTML}
  <h1 class="text-center text-white">${pokemon.nombre.charAt(0).toUpperCase() + pokemon.nombre.slice(1)}</h1>
  <div class="text-center">
  <img src="${pokemon.img}">
  </div>
  <div class="centrar">
  <table class="separar text-white">
  <tbody>
  <tr>
    <th colspan="2" class="text-center">
    Normal
    </th>
  </tr>
  <tr>
  <td colspan="1">
  <img src="${pokemon.imgJuego}">

  </td>
    <td colspan="1">
    <img src="${pokemon.imgJuegoEspalda}">

    </td>
  </tr>
  <tr>
    <td colspan="1" class="text-center text-white">
      Frente
    </td>
    <td colspan="1" class="text-center text-white">
      Espalda
    </td>
  </tr>
  <tr>
  </td>
  </tr>
  </tbody>
  </table>
  <table class="text-center separar">
  <tbody>
  <tr>
    <th colspan="2" class="text-center text-white">
    Shiny
    </th>
  </tr>
  <tr>
  <td colspan="1">
   <img src="${pokemon.imgJuegoShiny}">
  </td>
    <td colspan="1">
     <img src="${pokemon.imgJuegoEspaldaShiny}">
    </td>
  </tr>
  <tr>
    <td colspan="1" class="text-center text-white">
      Frente
    </td>
    <td colspan="1" class="text-center text-white">
      Espalda
    </td>
  </tr>
  <tr>
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  <h2 class="text-white">Tipos:<h2>`
  pokemon.Tipo.forEach(tipo => {
      datos.innerHTML += `
      <h4 class="text-white">${tipo.type.name.charAt(0).toUpperCase() + tipo.type.name.slice(1)}</h4>
      `
  });
  pokemon.Movimientos.forEach(tipo => {
    idmov = IdMovimiento(tipo.move.url)
    learn_method = tipo.version_group_details[0].move_learn_method.name
    learn_level = tipo.version_group_details[0].level_learned_at
    //console.log(learn_level)
    fetchDataMove(idmov, learn_method, learn_level)
  });
  datos.innerHTML +=`

  <table id="tabla-estadisticas" class="tabla-estadisticas">
    <tbody>
      <tr>
        <th id="claro" colspan="2" rowspan="2" class="text-center titulo-tabla ">
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
      <tr id="claroo" class="">
        <th style="width:85px; padding-left:0.5em; padding-right:0.5em">
        <div class="nombre-stat">Total:</div>
        <div class="numero-stat">${pokemon.Hp + pokemon.Atq + pokemon.Def + pokemon.Spa + pokemon.Spd + pokemon.Speed}</div>
        </th>
        <td>
        </td>
      </tr>
  </tbody>
</table>
`
;
switch(pokemon.TipoPrinc)
{
  case "grass":
    $("#tabla-estadisticas").addClass("planta")
    $("#claro").addClass("planta-Claro")
    $("#claroo").addClass("planta-Claro")
    break;
  case "fire":
    $("#tabla-estadisticas").addClass("fuego")
    $("#claro").addClass("fuego-Claro")
    $("#claroo").addClass("fuego-Claro")
    break;
    
  case "water":
    $("#tabla-estadisticas").addClass("agua")
    $("#claro").addClass("agua-Claro")
    $("#claroo").addClass("agua-Claro")
    break;

  case "poison":
    $("#tabla-estadisticas").addClass("veneno")
    $("#claro").addClass("veneno-Claro")
    $("#claroo").addClass("veneno-Claro")
    break;

  case "flying":
    $("#tabla-estadisticas").addClass("volador")
    $("#claro").addClass("volador-Claro")
    $("#claroo").addClass("volador-Claro")
    break;

  case "dragon":
    $("#tabla-estadisticas").addClass("dragon")
    $("#claro").addClass("dragon-Claro")
    $("#claroo").addClass("dragon-Claro")
    break;

  case "normal":
    $("#tabla-estadisticas").addClass("normal")
    $("#claro").addClass("normal-Claro")
    $("#claroo").addClass("normal-Claro")
    break;

  case "ghost":
    $("#tabla-estadisticas").addClass("fantasma")
    $("#claro").addClass("fantasma-Claro")
    $("#claroo").addClass("fantasma-Claro")
    break;

  case "fighting":
    $("#tabla-estadisticas").addClass("lucha")
    $("#claro").addClass("lucha-Claro")
    $("#claroo").addClass("lucha-Claro")
    break;

  case "psychic":
    $("#tabla-estadisticas").addClass("psiquico")
    $("#claro").addClass("psiquico-Claro")
    $("#claroo").addClass("psiquico-Claro")
    break;

  case "dark":
    $("#tabla-estadisticas").addClass("siniestro")
    $("#claro").addClass("siniestro-Claro")
    $("#claroo").addClass("siniestro-Claro")
  break;

  case "electric":
    $("#tabla-estadisticas").addClass("electrico")
    $("#claro").addClass("electrico-Claro")
    $("#claroo").addClass("electrico-Claro")
    break;

  case "ground":
    $("#tabla-estadisticas").addClass("tierra")
    $("#claro").addClass("tierra-Claro")
    $("#claroo").addClass("tierra-Claro")
    break;

  case "rock":
    $("#tabla-estadisticas").addClass("roca")
    $("#claro").addClass("roca-Claro")
    $("#claroo").addClass("roca-Claro")
    break;

  case "steel":
    $("#tabla-estadisticas").addClass("acero")
    $("#claro").addClass("acero-Claro")
    $("#claroo").addClass("acero-Claro")
    break;

  case "ice":
    $("#tabla-estadisticas").addClass("hielo")
    $("#claro").addClass("hielo-Claro")
    $("#claroo").addClass("hielo-Claro")
    break;

  case "bug":
    $("#tabla-estadisticas").addClass("bicho")
    $("#claro").addClass("bicho-Claro")
    $("#claroo").addClass("bicho-Claro")
    break;

  case "fairy":
    $("#tabla-estadisticas").addClass("hada")
    $("#claro").addClass("hada-Claro")
    $("#claroo").addClass("hada-Claro")
    break;
}
}


function VerMasInfoPokemon(IdP)
  {
    $.ajax(
      {
        url:'/Home/VerMasInfoPokemon',
        data: {IdMiPokemon: IdP},
        type:'GET',
        datatype:'JSON',
        success:
          function (pokemon)
          {
            $("#ModalPokemon").modal('show');
            $("#NombrePokemon").html("<h2 class='fuente2'>" +pokemon.nombre+ "</h2>");
            $("#FotoPokemon").attr("src","/Imagenes/"+pokemon.imagen);
            $("#Tipo1").html("<p class='fuente2 mt-4'>Tipo 1: "+pokemon.tipo1 + "</p>");
            $("#Tipo2").html("<p class='fuente2'>Tipo 2: "+pokemon.tipo2+ "</p>");
            $("#Hp").html("<p class='fuente2'>Vida: "+pokemon.hp+ "</p>");
            $("#Attack").html("<p class='fuente2'>Ataque: "+pokemon.attack+ "</p>");
            $("#Defence").html("<p class='fuente2'>Defensa: "+pokemon.defence+ "</p>");
            $("#SpA").html("<p class='fuente2'>Velocidad ataque: "+pokemon.spA+ "</p>");
            $("#SpD").html("<p class='fuente2'>Velocidad defensa: "+pokemon.spD+ "</p>");
            $("#Speed").html("<p class='fuente2'>Velocidad "+pokemon.speed+ "</p>");
            
          } 
      });
  }


  var modal = document.getElementById("ModalPokemon");

  var btn = document.getElementById("btn1");

  var btnClose = document.getElementsByClassName("cerrar");

  btn.onclick = function(){
    modal.style.display = "block";
  }

  btnClose.onclick = function(){
    modal.style.display = "none";
  }

  window.onclick = function(event){
    if (event.target==modal)
    {
      id.style.display = "none";
    }
  }