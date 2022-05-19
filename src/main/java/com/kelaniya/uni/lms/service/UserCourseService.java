package com.kelaniya.uni.lms.service;

import com.kelaniya.uni.lms.dao.UserCourseDao;
import com.kelaniya.uni.lms.entity.UserCourse;
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
        return userCourseDao.getMarks(userCourse.getUserEmail());
    }

}
