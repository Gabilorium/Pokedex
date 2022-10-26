using System;
using System.Collections.Generic;
using System.Dynamic;
using Microsoft.VisualBasic.CompilerServices;
using System.Diagnostics;
using System.Timers;

namespace Pokedex.Models{
    public class Equipo
    {
        private int _idEquipo;
        private string _nombreEquipo;
        private DateTime _fechaCreacion;

        public Pokemon(string nombreEquipo, DateTime fechaCreacion)
        {
            _nombreEquipo = nombreEquipo;
            _fechaCreacion = fechaCreacion;
        }
        public Pokemon()
        {
            _nombreEquipo = "";
            _fechaCreacion = new DateTime();  
        }
        public int IdEquipo
        {
            get{ return _idEquipo;}
            set{_idEquipo = value;}
        }
        public string NombreEquipo
        {
            get{ return _nombreEquipo;}
            set{_nombreEquipo = value;}
        }
        public DateTime FechaCreacion
        {
            get{ return _fechaCreacion;}
            set{_fechaCreacion = value;}
        }
    }
}