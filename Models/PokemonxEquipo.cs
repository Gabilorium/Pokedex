using System;
using System.Collections.Generic;
using System.Dynamic;
using Microsoft.VisualBasic.CompilerServices;
using System.Diagnostics;
using System.Timers;

namespace Pokedex.Models{
    public class PokemonxEquipo
    {
        private int _idPokemonxEquipo;
        private int _idEquipo;
        private int _idPokemon;

        public Pokemon(int _idEquipo, int _idPokemon)
        {
            _idEquipo = idEquipo;
            _idPokemon = idPokemon;
        }
        /*public Pokemon()
        {
            _idEquipo = 0;
            _idPokemon = 0;
        }*/
        public int IdPokemonxEquipo
        {
            get{ return _idPokemonxEquipo;}
            set{_idPokemonxEquipo = value;}
        }
        public int IdEquipo
        {
            get{ return _idEquipo;}
            set{_idEquipo = value;}
        }
        public int IdPokemon
        {
            get{ return _idPokemon;}
            set{_idPokemon = value;}
        }
    }
}