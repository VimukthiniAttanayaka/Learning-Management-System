-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: May 01, 2022 at 04:36 PM
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
  `assignment_Id` int(11) NOT NULL,
  `assignment_name` varchar(20) NOT NULL,
  `course_Id` int(11) NOT NULL,
  `uploaded_date` varchar(10) NOT NULL,
  `due_date` varchar(10) NOT NULL,
  PRIMARY KEY (`assignment_Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

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
  `am_id` int(11) NOT NULL,
  `course_Id` int(11) NOT NULL,
  `student_Id` varchar(20) NOT NULL,
  `grade` text NOT NULL,
  `contribution_to_total` float NOT NULL,
  PRIMARY KEY (`am_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `assignment_mark`
--

INSERT INTO `assignment_mark` (`am_id`, `course_Id`, `student_Id`, `grade`, `contribution_to_total`) VALUES
(1, 1, 'S0001', 'A', 20);

-- --------------------------------------------------------

--
-- Table structure for table `course`
--

DROP TABLE IF EXISTS `course`;
CREATE TABLE IF NOT EXISTS `course` (
  `course_Id` int(11) NOT NULL,
  `course_name` varchar(50) NOT NULL,
  `lecturer_name` varchar(200) NOT NULL,
  `semester` int(11) NOT NULL,
  `degree_name` varchar(25) NOT NULL,
  `degree_id` int(11) NOT NULL,
  PRIMARY KEY (`course_Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `course`
--

INSERT INTO `course` (`course_Id`, `course_name`, `lecturer_name`, `semester`, `degree_name`, `degree_id`) VALUES
(1, 'Computer Architecture', 'Kamal devid Perera', 1, 'Software Engineering', 1),
(2, 'Web Application Development', 'Kamal devid Perera', 2, 'Software Engineering', 1),
(3, 'Software Modelling', 'James garfild mary', 1, 'Computer Science', 2),
(4, 'Interactive Application Development', 'James garfild mary', 2, 'Computer SCience', 2),
(5, 'Pure Mathematics', 'Jacky max Balle', 1, 'Physical Science', 3),
(6, 'Electronics', 'Jacky max Balle', 2, 'Physical Science', 3),
(7, 'Zoology', 'Hemalatha manike gunarathne', 1, 'Bio Science', 4),
(8, 'Botany', 'Hemalatha manike gunarathne', 2, 'Bio Science', 4),
(9, 'Horticulture', 'Zachary Harly Cooper', 1, 'Agriculture', 5),
(10, 'Animal Science', 'Zachary Harly Cooper', 2, 'Agriculture', 5);

-- --------------------------------------------------------

--
-- Table structure for table `final_mark`
--

DROP TABLE IF EXISTS `final_mark`;
CREATE TABLE IF NOT EXISTS `final_mark` (
  `fm_Id` int(11) NOT NULL,
  `course_Id` int(11) NOT NULL,
  `student_Id` varchar(20) NOT NULL,
  `student_name` varchar(100) NOT NULL,
  `assignment_mark` float NOT NULL,
  `final_exam_mark` float NOT NULL,
  `Total` float NOT NULL,
  `grade` text NOT NULL,
  PRIMARY KEY (`fm_Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `final_mark`
--

INSERT INTO `final_mark` (`fm_Id`, `course_Id`, `student_Id`, `student_name`, `assignment_mark`, `final_exam_mark`, `Total`, `grade`) VALUES
(1, 1, 'S0001', '', 18, 60, 78, 'A');

-- --------------------------------------------------------

--
-- Table structure for table `my_courses`
--

DROP TABLE IF EXISTS `my_courses`;
CREATE TABLE IF NOT EXISTS `my_courses` (
  `mycourse_Id` int(11) NOT NULL,
  `course_Id` int(11) NOT NULL,
  `user_email` varchar(50) NOT NULL,
  PRIMARY KEY (`mycourse_Id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `my_courses`
--

INSERT INTO `my_courses` (`mycourse_Id`, `course_Id`, `user_email`) VALUES
(1, 1, 'J222@gmail.com'),
(2, 4, 'J222@gmail.com'),
(3, 6, 'max123@gmail.com'),
(4, 1, 'max123@gmail.com'),
(5, 1, 'dasun@gmail.com'),
(6, 3, 'dasun@gmail.com'),
(7, 7, 'KaiMaliHolmes@gmail.com'),
(8, 2, 'KaiMaliHolmes@gmail.com'),
(9, 4, 'Gail Williamson@gmail.com'),
(10, 5, 'Gail Williamson@gmail.com'),
(11, 2, 'kasun23@gmail.com'),
(12, 1, 'kasun23@gmail.com'),
(13, 3, 'gamini123@gmail.com'),
(14, 6, 'gamini123@gmail.com'),
(15, 6, 'jackdaniyel@gmail.com'),
(16, 3, 'jackdaniyel@gmail.com'),
(17, 2, 'BevMillsSmith@gmail.com'),
(18, 1, 'BevMillsSmith@gmail.com'),
(19, 4, 'KitMaxRichardson@gmail.com'),
(20, 5, 'KitMaxRichardson@gmail.com'),
(21, 1, 'OrionJackMatthews@gmaail.com'),
(22, 7, 'OrionJackMatthews@gmaail.com'),
(23, 7, 'ZachZynderReynolds@gmail.com'),
(24, 6, 'ZachZynderReynolds@gmail.com'),
(25, 4, 'KyleMaxNicholson@hotmail.com'),
(26, 3, 'KyleMaxNicholson@hotmail.com'),
(27, 2, 'AlexanderKevinLane34@gmail.com'),
(28, 1, 'AlexanderKevinLane34@gmail.com'),
(29, 3, 'ZakMunafPatel@gmail.com'),
(30, 7, 'ZakMunafPatel@gmail.com'),
(31, 3, 'ReginaldSherlokHolmes@gmail.com'),
(32, 1, 'ReginaldSherlokHolmes@gmail.com'),
(33, 4, 'OscarWallesGallagher@gmail.com'),
(34, 5, 'OscarWallesGallagher@gmail.com'),
(35, 6, 'MilesJakEdwards@gmail.com'),
(36, 7, 'MilesJakEdwards@gmail.com'),
(37, 4, 'JoStephanCook@gmail.com'),
(38, 2, 'JoStephanCook@gmail.com'),
(39, 1, 'maxjackyballe@gmail.com'),
(40, 2, 'maxjackyballe@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `degree_program` varchar(255) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `home_address` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `middle_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` int(11) NOT NULL,
  `registered_date` date DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `degree_program`, `email`, `first_name`, `home_address`, `last_name`, `middle_name`, `password`, `phone`, `registered_date`, `user_type`) VALUES
(2, 'software engineering', 'J222@gmail.com', 'Jagath', 'Colombo', 'Bandara', 'tharaka', 'Jagath66', 776665432, '2018-01-01', 'student'),
(1, 'software engineering', 'k123@gmail.com', 'Kamal', 'Kandy', 'Perera', 'devid', 'kamal123', 123456789, '2018-01-01', 'lecturer'),
(3, 'Bio Science', 'b99@gmail.com', 'Hemalatha', 'Colombo', 'gunarathne', 'manike', 'hm222', 776665000, '2010-01-01', 'lecturer'),
(4, 'Bio Science', 'max123@gmail.com', 'Max', 'gampaha', 'disanayke', 'kasun', 'max123456', 776667000, '2010-02-01', 'student'),
(5, 'Bio Science', 'dasun@gmail.com', 'Dasun', 'gampaha', 'dasanayake', 'shanaka', 'dasundix123', 776668000, '2010-03-01', 'student'),
(6, 'software engineering', 'kasun23@gmail.com', 'kasun', 'kurunegala', 'karunarathna', 'maxy', 'kasun123', 777528796, '2010-04-01', 'student'),
(7, 'software engineering', 'gamini123@gmail.com', 'Gamini', 'kurunegala', 'karuna', 'nihal', 'gamini123', 776669000, '2010-05-01', 'student'),
(8, 'Computer Science', 'jackdaniyel@gmail.com', 'Jack', 'kuliyapitiya', 'daniyel', 'don', 'jack123', 776670001, '2010-06-01', 'student'),
(9, 'Computer Science', '	JamesMary@gmail.com', 'James', 'kurunegala', 'mary', 'garfild', 'james123', 776670002, '2010-07-01', 'lecturer'),
(10, 'Computer Science', 'KitMaxRichardson@gmail.com', 'Kit', 'colombo', 'richardson', 'max', 'kit123', 776670003, '2010-08-01', 'student'),
(11, 'software engineering', 'OrionJackMatthews@gmaail.com', 'Orion', 'kandy', 'matthews', 'jack', 'orion123', 776670004, '2010-09-01', 'student'),
(12, 'software engineering', 'ZachZynderReynolds@gmail.com', 'Zach', 'kandy', 'reynolds', 'zynder', 'zach123', 776670005, '2010-10-01', 'student'),
(13, 'software engineering', 'KyleMaxNicholson@hotmail.com', 'Kyle', 'gampaha', 'nicholson', 'max', 'kyle123', 776670006, '2010-11-01', 'student'),
(14, 'Computer Science', 'AlexanderKevinLane34@gmail.com', 'Alexander', 'mathale', 'lane', 'kevin', 'alexander123', 776670007, '2010-12-01', 'student'),
(15, 'software engineering', 'ZakMunafPatel@gmail.com', 'Zak', 'jaffna', 'patel', 'munaf', 'zak123', 776670008, '2011-01-01', 'student'),
(16, 'Agriculture', 'ReginaldSherlokHolmes@gmail.com', 'Reginald', 'kiribathgoda', 'holmes', 'sherlok', 'reginald123', 776670009, '2011-02-01', 'student'),
(17, 'computer science', 'OscarWallesGallagher@gmail.com', 'Oscar', 'kandy', 'gallagher', 'walles', 'oscar123', 776670010, '2011-03-01', 'student'),
(18, 'Agriculture', 'MilesJakEdwards@gmail.com', 'Miles', 'nittabuwa', 'edwards', 'jak', 'miles123', 776670011, '2011-04-01', 'student'),
(19, 'Agriculture', 'ZacharyHarlyCooper@gmail.com', 'Zachary', 'mannar', 'cooper', 'harly', 'zachary123', 776670012, '2011-05-01', 'lecturer'),
(20, 'computer science', 'maxjackyballe@gmail.com', 'max', 'kandy', 'balle', 'jacky', 'max123', 776670013, '2011-06-01', 'student'),
(21, 'computer science', 'Gail Williamson@gmail.com', 'Jacky', 'kandy', 'balle', 'jacky', 'jacky123', 776670014, '2011-07-01', 'student'),
(22, 'Physical Science', 'JackyBalle@gmail.com', 'Jacky', 'colombo', 'balle', 'max', 'jacky123', 776670015, '2011-08-01', 'lecturer'),
(23, 'Physical Science', 'KaiMaliHolmes@gmail.com', 'Kai', 'kurunegala', 'holmes', 'mali', 'kai123', 776670016, '2011-09-01', 'student'),
(24, 'Physical Science', 'JoStephanCook@gmail.com', 'Jo', 'kandy', 'cook', 'stephan', 'jo123', 776670017, '2011-10-01', 'student'),
(25, 'computer science', 'BevMillsSmith@gmail.com', 'Bev', 'kandy', 'smith', 'mills', 'bev123', 776670018, '2011-11-01', 'student');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
