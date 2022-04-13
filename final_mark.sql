-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 12, 2022 at 03:29 PM
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
-- Table structure for table `final_mark`
--

DROP TABLE IF EXISTS `final_mark`;
CREATE TABLE IF NOT EXISTS `final_mark` (
  `fm_Id` int(100) NOT NULL AUTO_INCREMENT,
  `course_Id` int(100) NOT NULL,
  `student_Id` int(100) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `assignment_mark` float NOT NULL,
  `final_exam_mark` float NOT NULL,
  `Total` float NOT NULL,
  `grade` text NOT NULL,
  PRIMARY KEY (`fm_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `final_mark`
--

INSERT INTO `final_mark` (`fm_Id`, `course_Id`, `student_Id`, `student_name`, `assignment_mark`, `final_exam_mark`, `Total`, `grade`) VALUES
(1, 1, 1, '', 18, 60, 78, 'A');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
