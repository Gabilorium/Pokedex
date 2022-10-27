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
        private static List<Equipo> _ListaEquipos = new List<Equipo>();

        private static string _conectionString = 
        @"Server=127.0.0.1; DataBase=Pokemon;Trusted_Connection=True;";
        private static List<MiPokemon> _ListaPokemones = new List<MiPokemon>();

        public static void CargarPokemon(MiPokemon Poke)
        {
            string SQL = "INSERT INTO MiPokemon(IdPOkemon,Nombre) VALUES (@pIdPokemon, @pNombre)";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(SQL, new{pIdPokemon = Poke.IdPokemon, pNombre = Poke.Nombre});
            }
        }

        public static List<Equipo> ObtenerEquipo()
        {
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                string SQL = "SELECT * FROM Equipo ORDER BY FechaCreacion desc";
                _ListaEquipos = db.Query<Equipo>(SQL).ToList();
            }
            return _ListaEquipos;
        }

        public static void EliminarEquipo(int IdEquipo)
        {
            string sql = "DELETE FROM Equipo WHERE IdEquipo = @pIdEquipo";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(sql, new { pIdEquipo = IdEquipo});
            }
        }

        public static void ModificarEquipo(string Nombre, int IdEquipo)
        {
            string sql = "UPDATE Equipo Set NombreEquipo = @pNombre WHERE IdEquipo = @pIdEquipo";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(sql, new { pNombre = Nombre, pIdEquipo = IdEquipo});
            }
        }
    }
}

    