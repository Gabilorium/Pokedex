using System;
using System.Collections.Generic;
using System.Dynamic;
using Microsoft.VisualBasic.CompilerServices;
using System.Diagnostics;
using System.Timers;

namespace Pokedex.Models{
    public class Pokemon
    {
        private int _idPokemon;
        private string _nombre;

        public Pokemon(int idPokemon, string nombre)
        {
            _idPokemon=idPokemon;
            _nombre = nombre;

        }
        public Pokemon()
        {
            _idPokemon = 0;
            _nombre = "";
        }
        public int IdPokemon
        {
            get{ return _idPokemon;}
            set{_idPokemon = value;}
        }
        public string Nombre
        {
            get{ return _nombre;}
            set{_nombre = value;}
        }

    }
}