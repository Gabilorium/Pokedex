using System;
using System.Collections.Generic;
using System.Dynamic;
using Microsoft.VisualBasic.CompilerServices;
using System.Diagnostics;
using System.Timers;

namespace Pokedex.Models{
    public class MiPokemon
    {
        private int _idPokemon;
        private string _nombre;
        private string _imagen;
        private string _tipo1; 
        private string _tipo2;
        private int _hp;
        private int _attack;
        private int _defence;
        private int _spA;
        private int _spD;
        private int _speed;

        public MiPokemon(string nombre, string imagen, string tipo1, string tipo2, int hp, int attack, int defence, int spA, int spD, int speed)
        {
            _nombre = nombre;
            _imagen = imagen;
            _tipo1 = tipo1;
            _tipo2 = tipo2;  
            _hp = hp;  
            _attack = attack;
            _defence = defence;
            _spA = spA;
            _spD = spD;
            _speed = speed;       
        }
        public MiPokemon()
        {
            _nombre = "";
            _imagen = "";
            _tipo1 = "";
            _tipo2 = "";  
            _hp = 0;  
            _attack = 0;
            _defence = 0;
            _spA = 0;
            _spD = 0;
            _speed = 0;    
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
        public string Imagen
        {
            get{ return _imagen;}
            set{_imagen = value;}
        }
        public string Tipo1
        {
            get{ return _tipo1;}
            set{_tipo1 = value;}
        }
        public string Tipo2
        {
            get{ return _tipo2;}
            set{_tipo2 = value;}
        }
        public int Hp
        {
            get{ return _hp;}
            set{_hp = value;}
        }
        public int Attack
        {
            get{ return _attack;}
            set{_attack = value;}
        }
        public int Defence
        {
            get{ return _defence;}
            set{_defence = value;}
        }
        public int SpA
        {
            get{ return _spA;}
            set{_spA = value;}
        }
        public int SpD
        {
            get{ return _spD;}
            set{_spD = value;}
        }
        public int Speed
        {
            get{ return _speed;}
            set{_speed = value;}
        }
    }
}