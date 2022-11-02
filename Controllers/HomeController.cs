using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Pokedex.Models;

namespace Pokedex.Controllers;

public class HomeController : Controller
{
    private readonly ILogger<HomeController> _logger;

    public HomeController(ILogger<HomeController> logger)
    {
        _logger = logger;
    }

    public IActionResult Index()
    {
        return View();
    }
    public IActionResult Pokedex()
    {
        return View();
    }
    public IActionResult DatosPokemon()
    {
        return View();
    }
    public IActionResult Equipo()
    {
        ViewBag.ListaEquipos = BD.ObtenerEquipo();
        return View();
    }
    public IActionResult Privacy()
    {
        return View();
    }

    public IActionResult CargarPokemon(string nombre, string imagen, string tipo1, string tipo2, int hp, int attack, int defence, int spA, int spD, int speed)
    {
        MiPokemon Poke = new MiPokemon(nombre, imagen, tipo1, tipo2, hp, attack, defence, spA, spD, speed);
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
/*
    [HttpPost] public IActionResult GuardarPokemon(int IdEquipo, string Nombre, DateTime FechaNacimiento)
    {   

        List<Jugador> lista = new List<Jugador>();
        lista = BD.ListarJugadores(IdEquipo);
        foreach (Jugador jug in lista)
        {
            if(Camiseta == jug.Camiseta)
            {
                @ViewBag.Repe = true;
                @ViewBag.IdEquipo = IdEquipo;
                return View("AgregarJugador", new{IdEquipo=IdEquipo});
            }
        }
        
        if(Foto.Length>0)
        {
            string wwwRootLocal = this.Environment.ContentRootPath + @"\wwwroot\Imagenes\FotosJug\" + Foto.FileName;
            using (var stream = System.IO.File.Create(wwwRootLocal))
            {
                Foto.CopyToAsync(stream);
            }
        }        

        Jugador nuevoJug = new Jugador(IdEquipo, Nombre, FechaNacimiento,("/" + Foto.FileName), EquipoActual, Camiseta);
        BD.AgregarJugador(nuevoJug);

        return RedirectToAction("VerDetalleEquipo","Home", new{IdEquipo=IdEquipo});
    }*/

    public IActionResult EliminarEquipo(int idEquipo)
    {   
        BD.EliminarEquipo(idEquipo);
        return RedirectToAction("Equipo");
    }

    public IActionResult ModificarEquipo(string Nombre, int idEquipo)
    {   
        BD.ModificarEquipo(Nombre, idEquipo);
        return View("ModificarEquipo");
    }

    public IActionResult CrearEquipo()
    {   
        return View();
    }

    public IActionResult CrearPokemon()
    {   
        return View();
    }

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
