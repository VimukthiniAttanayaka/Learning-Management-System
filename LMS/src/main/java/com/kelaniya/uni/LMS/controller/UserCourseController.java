package com.kelaniya.uni.LMS.controller;

import com.kelaniya.uni.LMS.entity.UserCourse;
import com.kelaniya.uni.LMS.service.UserCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class UserCourseController {

    @Autowired
    private UserCourseService userCourseService;

    @PostMapping({"/enrollToCourse"})
    public void enrollToCourse(@RequestBody UserCourse userCourse){

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String userName = userDetails.getUsername();

        userCourse.setUserEmail(userName);
        userCourseService.enrollToCourse(userCourse);
    }

    @PostMapping({"/getSubjectsWithUserName"})
    public List<String> getSubjectsWithUserName(@RequestBody UserCourse userCourse){
        return userCourseService.getSubjects(userCourse);
    }

    @PostMapping({"/addMarksToCourse"})
    @PreAuthorize("hasRole('Teacher')")
    public void addMarksToCourse(@RequestBody UserCourse userCourse){
        userCourseService.addMarksForSuitableCourse(userCourse);
    }

    @GetMapping({"/viewMarks"})
    public List<UserCourse> viewMarks(){
        return userCourseService.viewMarksWithUserName();
    }


}
