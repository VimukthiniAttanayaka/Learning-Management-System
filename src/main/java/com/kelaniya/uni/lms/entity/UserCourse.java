package com.kelaniya.uni.lms.entity;

import com.kelaniya.uni.lms.dao.MyKey;

import javax.persistence.*;

@Entity
@IdClass(MyKey.class)
public class UserCourse {
    @Id
    private String userEmail;

    @Id
    private String courseId;

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }

    public String getCourseId() {
        return courseId;
    }

    public void setCourseId(String courseId) {
        this.courseId = courseId;
    }
}
