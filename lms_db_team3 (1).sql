-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Apr 12, 2022 at 02:10 PM
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
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
CREATE TABLE IF NOT EXISTS `assignment` (
  `assignment_Id` int(100) NOT NULL AUTO_INCREMENT,
  `assignment_name` varchar(20) NOT NULL,
  `course_Id` int(100) NOT NULL,
  `uploaded_date` varchar(10) NOT NULL,
  `due_date` varchar(10) NOT NULL,
  PRIMARY KEY (`assignment_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment`
--

INSERT INTO `assignment` (`assignment_Id`, `assignment_name`, `course_Id`, `uploaded_date`, `due_date`) VALUES
(1, 'Tutorial1', 1, '2022-01-01', '2022-01-06');

-- --------------------------------------------------------

--
-- Table structure for table `assignment_mark`
--

DROP TABLE IF EXISTS `assignment_mark`;
CREATE TABLE IF NOT EXISTS `assignment_mark` (
  `am_id` int(100) NOT NULL AUTO_INCREMENT,
  `course_Id` int(100) NOT NULL,
  `student_Id` int(100) NOT NULL,
  `grade` text NOT NULL,
  `contribution_to_total` float NOT NULL,
  PRIMARY KEY (`am_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment_mark`
--

INSERT INTO `assignment_mark` (`am_id`, `course_Id`, `student_Id`, `grade`, `contribution_to_total`) VALUES
(1, 1, 1, 'A', 20);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `course_Id` int(100) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(50) NOT NULL,
  `lecturer_name` varchar(200) NOT NULL,
  `semester` int(10) NOT NULL,
  PRIMARY KEY (`course_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_Id`, `course_name`, `lecturer_name`, `semester`) VALUES
(1, 'PMAT I', 'Sheril Jayanthi Fernando ', 1);

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

-- --------------------------------------------------------

--
-- Table structure for table `my_courses`
--

DROP TABLE IF EXISTS `my_courses`;
CREATE TABLE IF NOT EXISTS `my_courses` (
  `mycourse_Id` int(100) NOT NULL AUTO_INCREMENT,
  `course_Id` int(100) NOT NULL,
  `user_Id` int(100) NOT NULL,
  PRIMARY KEY (`mycourse_Id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `my_courses`
--

INSERT INTO `my_courses` (`mycourse_Id`, `course_Id`, `user_Id`) VALUES
(1, 1, 1);

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
