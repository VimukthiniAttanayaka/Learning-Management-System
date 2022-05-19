package com.kelaniya.uni.lms.dao;

import com.kelaniya.uni.lms.entity.Course;
import com.kelaniya.uni.lms.entity.UserCourse;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface UserCourseDao extends CrudRepository<UserCourse, MyKey> {
    @Transactional
    @Modifying
    @Query(value = "UPDATE user_course SET marks = :marks WHERE  userEmail = :userEmail AND courseId = :courseId", nativeQuery = true)
    Integer addMarks(String userEmail, String courseId, int marks);

    @Query(value = "SELECT * FROM jwt_demo.jwt_demo.user_course WHERE userEmail = :userEmail", nativeQuery = true)
    List<UserCourse> getMarks(String userEmail);

}
