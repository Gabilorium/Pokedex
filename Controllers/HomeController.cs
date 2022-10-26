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

    [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
    public IActionResult Error()
    {
        return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
    }
}
