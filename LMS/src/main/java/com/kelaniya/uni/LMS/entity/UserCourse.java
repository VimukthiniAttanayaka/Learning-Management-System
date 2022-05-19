package com.kelaniya.uni.LMS.entity;

import com.kelaniya.uni.LMS.dao.MyKey;

import javax.persistence.*;

@Entity(name = "userCourse")
@IdClass(MyKey.class)
public class UserCourse {
    @Id
    @Column(length = 10)
    private String userEmail;

    @Id
    @Column(length = 10)
    private String courseId;

    private int marks;

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

    public int getMarks() {
        return marks;
    }

    public void setMarks(int marks) {
        this.marks = marks;
    }
}
