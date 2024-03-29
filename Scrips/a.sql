USE [Pokemon]
GO
/****** Object:  Table [dbo].[Equipo]    Script Date: 17/11/2022 15:35:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Equipo](
	[IdEquipo] [int] IDENTITY(1,1) NOT NULL,
	[NombreEquipo] [varchar](max) NULL,
	[FechaCreacion] [date] NULL,
 CONSTRAINT [PK_Equipo] PRIMARY KEY CLUSTERED 
(
	[IdEquipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MiPokemon]    Script Date: 17/11/2022 15:35:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MiPokemon](
	[IdMiPokemon] [int] IDENTITY(1,1) NOT NULL,
	[Nombre] [varchar](max) NULL,
	[Imagen] [varchar](max) NULL,
	[Tipo1] [varchar](max) NULL,
	[Tipo2] [varchar](max) NULL,
	[Hp] [int] NULL,
	[Attack] [int] NULL,
	[Defence] [int] NULL,
	[SpA] [int] NULL,
	[SpD] [int] NULL,
	[Speed] [int] NULL,
 CONSTRAINT [PK_MiPokemon] PRIMARY KEY CLUSTERED 
(
	[IdMiPokemon] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[PokemonxEquipo]    Script Date: 17/11/2022 15:35:28 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PokemonxEquipo](
	[IdPokemonxEquipo] [int] IDENTITY(1,1) NOT NULL,
	[IdEquipo] [int] NOT NULL,
	[IdPokemon] [int] NOT NULL,
 CONSTRAINT [PK_PokemonxEquipo] PRIMARY KEY CLUSTERED 
(
	[IdPokemonxEquipo] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Equipo] ON 

INSERT [dbo].[Equipo] ([IdEquipo], [NombreEquipo], [FechaCreacion]) VALUES (3, N'mamia', CAST(N'2022-11-03' AS Date))
INSERT [dbo].[Equipo] ([IdEquipo], [NombreEquipo], [FechaCreacion]) VALUES (5, N'punso neiman', CAST(N'2022-11-03' AS Date))
INSERT [dbo].[Equipo] ([IdEquipo], [NombreEquipo], [FechaCreacion]) VALUES (6, N'Juancito', CAST(N'2022-11-03' AS Date))
INSERT [dbo].[Equipo] ([IdEquipo], [NombreEquipo], [FechaCreacion]) VALUES (7, N'puncho creicksan', CAST(N'2022-11-03' AS Date))
INSERT [dbo].[Equipo] ([IdEquipo], [NombreEquipo], [FechaCreacion]) VALUES (8, N'Bauti el panzon', CAST(N'2022-11-03' AS Date))
INSERT [dbo].[Equipo] ([IdEquipo], [NombreEquipo], [FechaCreacion]) VALUES (9, N'La scaloneta', CAST(N'2022-11-09' AS Date))
INSERT [dbo].[Equipo] ([IdEquipo], [NombreEquipo], [FechaCreacion]) VALUES (10, N'River Plate', CAST(N'2022-11-17' AS Date))
SET IDENTITY_INSERT [dbo].[Equipo] OFF
GO
SET IDENTITY_INSERT [dbo].[MiPokemon] ON 

INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (2, N'Magiano', N'jorobado.jpg', N'agua', N'mono', 200, 200, 200, 200, 200, 200)
INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (3, N'Tamarino Acuatico', N'descarga.jfif', N'Mono', N'Acuatico', 255, 90, 0, 34, 38, 38)
INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (4, N'Lionel Scaloni', N'scaloni.jfif', N'Bicicleta', N'Rocky Balboa', 2, 100009, 28898, 900, 807, 1707)
INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (5, N'Enzo Fernandez', N'enzof.jpg', N'Master', N'Class', 255, 200, 200, 150, 200, 120)
INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (6, N'Zucugol', N'zucul.jpg', N'Ario', N'Goleador', 100, 250, 150, 25, 150, 100)
INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (8, N'Enzo Perez', N'enzope.jfif', N'arquero', N'buen tipo', 255, 255, 255, 255, 255, 255)
SET IDENTITY_INSERT [dbo].[MiPokemon] OFF
GO
SET IDENTITY_INSERT [dbo].[PokemonxEquipo] ON 

INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (1, 9, 4)
INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (2, 3, 2)
INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (3, 9, 2)
INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (4, 9, 5)
INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (5, 10, 5)
INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (6, 10, 6)
INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (7, 10, 8)
SET IDENTITY_INSERT [dbo].[PokemonxEquipo] OFF
GO
