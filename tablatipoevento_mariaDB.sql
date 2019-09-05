-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 13-08-2019 a las 00:00:23
-- Versión del servidor: 10.1.38-MariaDB
-- Versión de PHP: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `api_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tablatipoevento`
--

CREATE TABLE `tablatipoevento` (
  `id` int(11) NOT NULL,
  `nombreTabla` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `idTablaEvento` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `orden` int(11) DEFAULT NULL,
  `nombre` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `descripcion` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `tipo` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `mandatorio` bit(1) NOT NULL,
  `expresionRegular` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `editable` bit(1) NOT NULL,
  `valorPorDefecto` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `grupo` varchar(150) COLLATE latin1_spanish_ci NOT NULL,
  `ordenGrupo` int(11) NOT NULL,
  `envoltorio` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `css` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `jsEvento` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL,
  `descripcionLarga` varchar(500) COLLATE latin1_spanish_ci DEFAULT NULL,
  `vigenciaDesde` date DEFAULT NULL,
  `vigenciaHasta` date DEFAULT NULL,
  `version` varchar(50) COLLATE latin1_spanish_ci DEFAULT NULL,
  `ordenJson` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tablatipoevento`
--
ALTER TABLE `tablatipoevento`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
