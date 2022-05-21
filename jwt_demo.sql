-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 21, 2022 at 12:53 PM
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
-- Database: `jwt_demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `course_code` varchar(10) NOT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `degree_programme` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`course_code`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_code`, `course_name`, `degree_programme`) VALUES
('SENG11123', 'Computer Architecture', 'Software Engineering'),
('SENG11121', 'Software Modelling', 'Software Engineering'),
('SENG12123', 'Interactive Application Development', 'Software Engineering'),
('SENG12223', 'Web Application Development', 'Software Engineering'),
('BIO11221', 'Zoology', 'Bio Science'),
('BIO11222', 'Animal Science', 'Bio Science'),
('BIO12221', 'Horticulture', 'Bio Science'),
('BIO12224', 'Botany', 'Bio Science'),
('MATH11221', 'Pure Mathematics I', 'Mathematics'),
('MATH11223', 'Pure Mathematics II', 'Mathematics'),
('MATH12223', 'Applied Mathematics I', 'Mathematics'),
('MATH11224', 'Applied Mathematics II', 'Mathematics'),
('HMNT11111', 'English', 'Humanities'),
('HMNT11112', 'Fine Arts', 'Humanities'),
('HMNT12111', 'Liguistics', 'Humanities'),
('HMNT12112', 'Sinhala', 'Humanities');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
CREATE TABLE IF NOT EXISTS `role` (
  `role_name` varchar(10) NOT NULL,
  `role_description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`role_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_name` varchar(10) NOT NULL,
  `degree_programme` varchar(255) DEFAULT NULL,
  `home_address` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `role_name` varchar(255) DEFAULT NULL,
  `user_first_name` varchar(255) DEFAULT NULL,
  `user_last_name` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_name`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_course`
--

DROP TABLE IF EXISTS `user_course`;
CREATE TABLE IF NOT EXISTS `user_course` (
  `course_id` varchar(10) NOT NULL,
  `user_email` varchar(10) NOT NULL,
  `marks` int(11) NOT NULL,
  `course_name` varchar(255) DEFAULT NULL,
  `semester` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`course_id`,`user_email`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
CREATE TABLE IF NOT EXISTS `user_role` (
  `user_id` varchar(10) NOT NULL,
  `role_id` varchar(10) NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `FKa68196081fvovjhkek5m97n3y` (`role_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
