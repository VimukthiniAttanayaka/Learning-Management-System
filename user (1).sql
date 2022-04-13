-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 12, 2022 at 03:30 PM
-- Server version: 5.7.31
-- PHP Version: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `lms_db_team3`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_Id` int(100) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `home_address` varchar(100) NOT NULL,
  `degree_program` varchar(50) NOT NULL,
  `phone` int(10) NOT NULL,
  `user type` varchar(10) NOT NULL,
  `registered_date` varchar(10) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  PRIMARY KEY (`user_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_Id`, `first_name`, `middle_name`, `last_name`, `home_address`, `degree_program`, `phone`, `user type`, `registered_date`, `Email`, `password`) VALUES
(1, 'Kamal', 'Harsha', 'Perera', 'No 12,\r\nNew road,\r\nKandy', 'Software Engineering', 718668810, 'Student', '2020-10-11', 'kamal777@gmail.com', 'kamal123'),
(2, 'Sheril', 'Jayanthi', 'Fernando', 'No 12B,\r\nThalatuoya,\r\nKandy', 'Software Enginnering', 812229965, 'Lecturer', '2018-11-19', 'Jayanthi@123gmail.com', 'jaya123');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
