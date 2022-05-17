package com.kelaniya.uni.lms.entity;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Course {

    @Id
    private String courseCode;
    private String courseName;
    private String degreeProgramme;

    public String getCourseCode() {
        return courseCode;
    }

    public void setCourseCode(String courseCode) {
        this.courseCode = courseCode;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public String getDegreeProgramme() {
        return degreeProgramme;
    }

    public void setDegreeProgramme(String degreeProgramme) {
        this.degreeProgramme = degreeProgramme;
    }
}
