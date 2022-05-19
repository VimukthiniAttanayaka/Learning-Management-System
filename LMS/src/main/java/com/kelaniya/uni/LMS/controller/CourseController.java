package com.kelaniya.uni.LMS.controller;

import com.kelaniya.uni.LMS.entity.Course;
import com.kelaniya.uni.LMS.service.CourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class CourseController {

    @Autowired
    private CourseService courseService;

    @PostMapping({"/createNewCourse"})
    @PreAuthorize("hasRole('Teacher')")
    public Course createNewCourse(Course course){
        return courseService.createNewCourse(course);
    }

    @GetMapping("/available_courses")
    public List<Course> displayCourses(){
        return courseService.getAvailableCourses();
    }

    @PostMapping({"/getAllCoursesForSelectedDegreeProgramme"})
    public List<Course> getAllCoursesForSelectedDegreeProgramme(@RequestBody Course course){
        return courseService.getAllCoursesForSelectedDegreeProgramme(course);
    }

}
