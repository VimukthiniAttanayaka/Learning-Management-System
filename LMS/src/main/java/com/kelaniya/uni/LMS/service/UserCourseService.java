package com.kelaniya.uni.LMS.service;

import com.kelaniya.uni.LMS.dao.UserCourseDao;
import com.kelaniya.uni.LMS.entity.UserCourse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserCourseService {
    @Autowired
    UserCourseDao userCourseDao;

    public void enrollToCourse(UserCourse userCourse){
        userCourseDao.save(userCourse);
    }

    public void addMarksForSuitableCourse(UserCourse userCourse){
        userCourseDao.addMarks(userCourse.getUserEmail(), userCourse.getCourseId(), userCourse.getMarks());
    }

    public List<UserCourse> viewMarksWithUserName(UserCourse userCourse){
        System.out.println(userCourse.getUserEmail());
        return userCourseDao.getMarks(userCourse.getUserEmail());
    }

}
