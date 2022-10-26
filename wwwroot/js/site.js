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
    console.log(data)
  }catch(error){
    console.log(error)
  }
}

// Pone los pokemos que agarra del json en el container
function Pokemones(pokemon) {
  const container = document.getElementById('containerr')
  pokemon.forEach(pokemon => {
    fetchData(IdPokemon(pokemon.url))
    container.innerHTML = `
    ${container.innerHTML}
    <div class="card" type="button" data-toggle="modal" data-targuet="#ModalPokemon" onclick="MostrarPokemon(${IdPokemon(pokemon.url)})">
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





var previous = document.getElementById('btnPrevious')
var next = document.getElementById('btnNext')
var gallery = document.getElementById('image-gallery')
var pageIndicator = document.getElementById('page')
var galleryDots = document.getElementById('gallery-dots');

var images= [];
for (var i = 0; i < 36; i++) {
  images.push({
    title: "Image " + (i + 1),
    source: "https://picsum.photos/500/500?random&img=" + i
  });
}

var perPage = 8;
var page = 1;
var pages = Math.ceil(images.length / perPage)


// Gallery dots
for (var i = 0; i < pages; i++){
  var dot = document.createElement('button')
  var dotSpan = document.createElement('span')
  var dotNumber = document.createTextNode(i + 1)
  dot.classList.add('gallery-dot');
  dot.setAttribute('data-index', i);
  dotSpan.classList.add('sr-only');
  
  dotSpan.appendChild(dotNumber);
  dot.appendChild(dotSpan)
  
  dot.addEventListener('click', function(e) {
    var self = e.target
    goToPage(self.getAttribute('data-index'))
  })
  
  galleryDots.appendChild(dot)
}

// Previous Button
previous.addEventListener('click', function() {
  if (page === 1) {
    page = 1;
  } else {
    page--;
    showImages();
  }
})

// Next Button
next.addEventListener('click', function() {
  if (page < pages) {
    page++;
    showImages();
  }
})

// Jump to page
function goToPage(index) {
  index = parseInt(index);
  page =  index + 1;
  
  showImages();
}

// Load images
function showImages() {
  while(gallery.firstChild) gallery.removeChild(gallery.firstChild)
  
  var offset = (page - 1) * perPage;
  var dots = document.querySelectorAll('.gallery-dot');
  
  for (var i = 0; i < dots.length; i++){
    dots[i].classList.remove('active');
  }
  
  dots[page - 1].classList.add('active');
  
  for (var i = offset; i < offset + perPage; i++) {
    if ( images[i] ) {
      var template = document.createElement('div');
      var title = document.createElement('p');
      var titleText = document.createTextNode(images[i].title);
      var img = document.createElement('img');
      
      template.classList.add('template')
      img.setAttribute("src", images[i].source);
      img.setAttribute('alt', images[i].title);

      title.appendChild(titleText);
      template.appendChild(img);
      template.appendChild(title);
      gallery.appendChild(template);      
    }
  }
  /*
  // Animate images
  var galleryItems = document.querySelectorAll('.template')
  for (var i = 0; i < galleryItems.length; i++) {
    var onAnimateItemIn = animateItemIn(i);
    setTimeout(onAnimateItemIn, i * 100);
  }
  
  function animateItemIn(i) {
    var item = galleryItems[i];
    return function() {
      item.classList.add('animate');
    }
  }
  */
  // Update page indicator
  pageIndicator.textContent = "Page " + page + " of " + pages;
}

showImages();





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

//Crear Ajax
function MostrarPokemon(id)
{
  $.ajax({
    url:"https://pokeapi.co/api/v2/pokemon/"+ id,


  });
}
