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
        private static List<MiPokemon> _ListaPokemon = new List<MiPokemon>();
        private static List<PokemonxEquipo> _ListaPokemonXEquipo = new List<PokemonxEquipo>();

        private static string _conectionString = 
        @"Server=127.0.0.1; DataBase=Pokemon;Trusted_Connection=True;";
        private static List<MiPokemon> _ListaPokemones = new List<MiPokemon>();

        public static void CargarPokemon(MiPokemon Poke)
        {
            string SQL = "INSERT INTO MiPokemon(IdPOkemon,Nombre) VALUES (@pIdPokemon, @pNombre)";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(SQL, new{pIdPokemon = Poke.IdMiPokemon, pNombre = Poke.Nombre});
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

        public static List<MiPokemon> ObtenerMiPokemon()
        {
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                string SQL = "SELECT * FROM MiPokemon ORDER BY IdMiPokemon asc";
                _ListaPokemon = db.Query<MiPokemon>(SQL).ToList();
            }
            return _ListaPokemon;
        }

        public static void EliminarEquipo(int IdEquipo)
        {
            string sql = "DELETE FROM Equipo WHERE IdEquipo = @pIdEquipo";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(sql, new { pIdEquipo = IdEquipo});
            }
        }

        public static void EliminarPokemon(int IdMiPokemon)
        {
            string sql = "DELETE FROM MiPokemon WHERE IdMiPokemon = @pIdMiPokemon";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(sql, new { pIdMiPokemon = IdMiPokemon});
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

        public static void AgregarEquipo(Equipo Eq)
        {
            string sql = "INSERT INTO Equipo VALUES (@pNombre, @pFechaCreacion)";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(sql, new { pNombre = Eq.NombreEquipo, pFechaCreacion = Eq.FechaCreacion});
            }
        }

        public static void AgregarMiPokemon(MiPokemon Pok)
        {
            string sql = "INSERT INTO MiPokemon VALUES (@pNombre, @pImagen, @pTipo1, @pTipo2, @pHp, @pAttack, @pDefence, @pSpA, @pSpD, @pSpeed)";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(sql, new { @pNombre = Pok.Nombre, @pImagen = Pok.Imagen, @pTipo1 = Pok.Tipo1, @pTipo2 = Pok.Tipo2, @pHp = Pok.Hp, @pAttack = Pok.Attack, @pDefence = Pok.Defence, @pSpA = Pok.SpA, @pSpD = Pok.SpD , @pSpeed = Pok.Speed});
            }
        }

        public static void AsignarPokemon(int IdEquipo, int IdPokemon)
        {
            string sql = "INSERT INTO PokemonxEquipo VALUES (@pIdEquipo, @pIdPokemon)";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                db.Execute(sql, new { pIdEquipo = IdEquipo, pIdPokemon = IdPokemon});
            }
        }

        public static int TraerIdPokemon(string Nombre)
        {
            int Pok;
            string SQL = "SELECT IdMiPokemon FROM MiPokemon WHERE Nombre = @pNombre";
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                Pok = db.QueryFirstOrDefault<int>(SQL, new {pNombre = Nombre});
            }
            return Pok;
        }

        public static List<int> TraerPokemonesDelEquipo(int IdEquipo)
        {
            List<int> listaPok = new List<int>();
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                string SQL = "SELECT IdPokemon FROM PokemonxEquipo WHERE IdEquipo = @pIdEquipo";
                listaPok = db.Query<int>(SQL, new {pIdEquipo = IdEquipo}).ToList();
            }
            return listaPok;
        }

         public static MiPokemon ObtenerMiPokemonPorId(int IdMiPokemon)
        {
            MiPokemon pok = new MiPokemon();
            using(SqlConnection db = new SqlConnection(_conectionString))
            {
                string SQL = "SELECT * FROM MiPokemon WHERE IdMiPokemon = @pIdMiPokemon";
                pok = db.QueryFirstOrDefault<MiPokemon>(SQL, new {pIdMiPokemon = IdMiPokemon});
            }
            return pok;
        }
    }
}

    