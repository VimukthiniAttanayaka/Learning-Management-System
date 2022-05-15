package com.kelaniya.uni.lms.dao;

import com.kelaniya.uni.lms.entity.Role;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleDao extends CrudRepository<Role, String> {

}
