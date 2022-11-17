using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Pokedex.Models;
using System.IO;
using Microsoft.AspNetCore.Hosting;

namespace Pokedex.Controllers;

public class HomeController : Controller
{
    private IWebHostEnvironment Environment;
    private readonly ILogger<HomeController> _logger;

    public HomeController(IWebHostEnvironment environment)
    {
        Environment = environment;
    }
    public IActionResult Index()
    {
        return View();
    }
    public IActionResult Pokedex()
    {
        return View();
    }
    public IActionResult DatosPokemon(int IdPokemon)
    {
        ViewBag.IdPokemon = IdPokemon;
        return View();
    }
    public IActionResult Equipo()
    {
        ViewBag.ListaEquipos = BD.ObtenerEquipo();
        ViewBag.ListaPokemon = BD.ObtenerMiPokemon();
        return View();
    }
    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult CargarPokemon(string nombre, string imagen, string tipo1, string tipo2, int hp, int attack, int defence, int spA, int spD, int speed)
    {
        MiPokemon Poke = new MiPokemon(nombre, imagen, tipo1, tipo2, hp, attack, defence, spA, spD, speed);
        /*if((Poke.hp > 255) && (Poke.attack > 255) && (Poke.defence > 255) && (Poke.spA > 255) & (Poke.spD > 255) & (Poke.speed > 255))
        {
            
        }*/
        return View("Respuesta");
        BD.CargarPokemon(Poke);
        return View("Pokedex");
    }

    public IActionResult AgregarEquipo(int IdEquipo)
    {
        ViewBag.IdEquipo = IdEquipo;
        return View("AgregarEquipo");
    }
  
    [HttpPost] public IActionResult GuardarEquipo(string NombreEquipo)
    {   
        DateTime dia = DateTime.Now;
        Equipo Eq = new Equipo(NombreEquipo, dia);
        BD.AgregarEquipo(Eq);

        return RedirectToAction("Equipo");
    }

    [HttpPost] public IActionResult GuardarPokemon(string nombre, IFormFile imagen, string tipo1, string tipo2, int hp, int attack, int defence, int spA, int spD, int speed)
    {   
        
        if(imagen.Length>0)
        {
            string wwwRootLocal = this.Environment.ContentRootPath + @"\wwwroot\Imagenes\" + imagen.FileName;
            using (var stream = System.IO.File.Create(wwwRootLocal))
            {
                imagen.CopyToAsync(stream);
            }
        }        

        MiPokemon Pok = new MiPokemon(nombre, ("" + imagen.FileName), tipo1, tipo2, hp, attack, defence, spA, spD, speed);
        BD.AgregarMiPokemon(Pok);

        return RedirectToAction("Equipo");
    }

    public IActionResult EliminarEquipo(int idEquipo)
    {   
        BD.EliminarEquipo(idEquipo);
        return RedirectToAction("Equipo");
    }

        public IActionResult EliminarPokemon(int IdMiPokemon)
    {   
        BD.EliminarPokemon(IdMiPokemon);
        return RedirectToAction("Equipo");
    }

    public IActionResult ModificarEquipo(int IdEquipo)
    {   
        ViewBag.IdEquipo = IdEquipo;
        return View();
    }

    public IActionResult CambiarEquipo(string NombreEquipo, int IdEquipo)
    {   
        BD.ModificarEquipo(NombreEquipo, IdEquipo);
        return RedirectToAction("Equipo");
    }

    public IActionResult ModificarPokemon(int IdMiPokemon)
    {   
        ViewBag.IdMiPokemon = IdMiPokemon;
        ViewBag.Poke = BD.ObtenerMiPokemonPorId(IdMiPokemon);
        return View();
    }

    public IActionResult CambiarPokemon(int IdMiPokemon, string Nombre, IFormFile Imagen, string Tipo1, string Tipo2, int Hp, int Attack, int Defence, int SpA, int SpD, int Speed)
    { 
        if(Imagen.Length>0)
        {
            string wwwRootLocal = this.Environment.ContentRootPath + @"\wwwroot\Imagenes\" + Imagen.FileName;
            using (var stream = System.IO.File.Create(wwwRootLocal))
            {
                Imagen.CopyToAsync(stream);
            }
        }

        MiPokemon Pok = new MiPokemon(Nombre, ("" + Imagen.FileName), Tipo1, Tipo2, Hp, Attack, Defence, SpA, SpD, Speed);
        BD.ModificarPokemon(Pok, IdMiPokemon);
        return RedirectToAction("Equipo");
    }

    public IActionResult AsignarPokemon(int IdEquipo)
    {   
        ViewBag.IdEquipo = IdEquipo;
        return View();
    }

    public IActionResult GuardarPokemonEnEquipo(int IdEquipo, string Nombre)
    {  
        int IdPok = BD.TraerIdPokemon(Nombre); 
        if(IdPok>0 && IdEquipo>0)
        {
            BD.AsignarPokemon(IdEquipo, IdPok);
        }
        return RedirectToAction("Equipo");
    }

    public IActionResult CrearEquipo()
    {   
        return View();
    }

    public IActionResult CrearPokemon()
    {   
        return View();
    }

    public IActionResult PokemonesDelEquipo(int IdEquipo)
    {   
        ViewBag.InfoPokemones = BD.TraerPokemonesDelEquipo(IdEquipo);
        ViewBag.Vacio = BD.EquipoConPokemones(IdEquipo);

        return View();
    }

    public MiPokemon VerMasInfoPokemon(int IdMiPokemon)
    {
        MiPokemon pokemon = BD.ObtenerMiPokemonPorId(IdMiPokemon);
        return pokemon;
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
