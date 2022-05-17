package com.kelaniya.uni.lms.dao;

import com.kelaniya.uni.lms.entity.UserCourse;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserCourseDao extends CrudRepository<UserCourse, MyKey> {
}
