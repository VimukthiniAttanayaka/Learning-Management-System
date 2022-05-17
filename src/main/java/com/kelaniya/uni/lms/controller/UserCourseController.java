package com.kelaniya.uni.lms.controller;

import com.kelaniya.uni.lms.entity.UserCourse;
import com.kelaniya.uni.lms.service.UserCourseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserCourseController {

    @Autowired
    private UserCourseService userCourseService;

    @PostMapping({"/enrollToCourse"})
    public void enrollToCourse(@RequestBody UserCourse userCourse){

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String userName = userDetails.getUsername();

        userCourse.setUserEmail(userName);
        System.out.println(userCourse.getCourseId());
        userCourseService.enrollToCourse(userCourse);
    }
}
