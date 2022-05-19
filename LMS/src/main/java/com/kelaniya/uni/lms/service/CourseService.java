package com.kelaniya.uni.lms.service;

import com.kelaniya.uni.lms.dao.CourseDao;
import com.kelaniya.uni.lms.entity.Course;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CourseService {

    @Autowired
    private CourseDao courseDao;

    public Course createNewCourse(Course course){
        return courseDao.save(course);
    }

    public List<Course> getAvailableCourses(){
        return (List<Course>) courseDao.findAll();
    }

    public List<Course> getAllCoursesForSelectedDegreeProgramme(Course course){
        return courseDao.getAllCoursesForSelectedDegreeProgramme(course.getDegreeProgramme());
    }

}
