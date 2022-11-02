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

    [HttpPost] public IActionResult GuardarPokemon(string nombre, string imagen, string tipo1, string tipo2, int hp, int attack, int defence, int spA, int spD, int speed)
    {   
        
        if(imagen.Length>0)
        {
            string wwwRootLocal = this.Environment.ContentRootPath + @"\wwwroot\Imagenes\FotosJug\" + imagen.FileName;
            using (var stream = System.IO.File.Create(wwwRootLocal))
            {
                imagen.CopyToAsync(stream);
            }
        }        

        MiPokemon Pok = new MiPokemon(nombre, ("/" + imagen.FileName), tipo1, tipo2, hp, attack, defence, spA, spD, speed);
        BD.AgregarPokemon(nuevoPok);

        return RedirectToAction("VerDetalleEquipo","Home", new{IdEquipo=IdEquipo});
    }

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
