package com.kelaniya.uni.lms.dao;

import com.kelaniya.uni.lms.entity.Course;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CourseDao extends CrudRepository<Course, String> {
}
