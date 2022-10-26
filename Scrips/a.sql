USE [Pokemon]
GO
/****** Object:  Table [dbo].[Equipo]    Script Date: 26/10/2022 09:10:51 ******/
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
/****** Object:  Table [dbo].[MiPokemon]    Script Date: 26/10/2022 09:10:51 ******/
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
/****** Object:  Table [dbo].[PokemonxEquipo]    Script Date: 26/10/2022 09:10:51 ******/
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
