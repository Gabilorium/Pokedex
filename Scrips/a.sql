USE [Pokemon]
GO
/****** Object:  Table [dbo].[Equipo]    Script Date: 3/11/2022 15:58:44 ******/
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
/****** Object:  Table [dbo].[MiPokemon]    Script Date: 3/11/2022 15:58:44 ******/
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
/****** Object:  Table [dbo].[PokemonxEquipo]    Script Date: 3/11/2022 15:58:44 ******/
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
SET IDENTITY_INSERT [dbo].[Equipo] OFF
GO
SET IDENTITY_INSERT [dbo].[MiPokemon] ON 

INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (1, N'pepe', N'/ImagenesLarreta.jpg', N'pelado', N'aire', 780, 6000, 0, 35, 21, 89)
INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (2, N'Mariano', N'/Imagenesdescarga.jfif', N'Volador', N'Lucha', 50, 15, 0, 2, 8, 20)
INSERT [dbo].[MiPokemon] ([IdMiPokemon], [Nombre], [Imagen], [Tipo1], [Tipo2], [Hp], [Attack], [Defence], [SpA], [SpD], [Speed]) VALUES (3, N'Tamarino Acuatico', N'/Imagenesgrgr.png', N'Mono', N'Acuatico', 900, 90000, 0, 34, 38, 38)
SET IDENTITY_INSERT [dbo].[MiPokemon] OFF
GO
SET IDENTITY_INSERT [dbo].[PokemonxEquipo] ON 

INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (1, 0, 0)
INSERT [dbo].[PokemonxEquipo] ([IdPokemonxEquipo], [IdEquipo], [IdPokemon]) VALUES (2, 0, 0)
SET IDENTITY_INSERT [dbo].[PokemonxEquipo] OFF
GO
