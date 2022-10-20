using System;
using System.Collections.Generic;
using System.Dynamic;
using Microsoft.VisualBasic.CompilerServices;
using System.Diagnostics;
using System.Data.SqlClient;
using Dapper;

namespace Pokedex.Models{
    public class BD
    {
        private static string _conectionString = 
        @"Server=A-PHZ2-AMI-013; DataBase=Pokemon;Trusted_Connection=True;";
        private static List<Pokemon> _ListaPokemones = new List<Pokemon>();

        public static void CargarPokemon(Pokemon Poke)
        {
            string SQL = "INSERT INTO Pokemon(IdPOkemon,Nombre) VALUES (@pIdPokemon, @pNombre)";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(SQL, new{pIdPokemon = Poke.IdPokemon, pNombre = Poke.Nombre});
            }
        }
    }
}

    