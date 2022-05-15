package com.kelaniya.uni.lms.service;

import com.kelaniya.uni.lms.entity.Role;
import com.kelaniya.uni.lms.dao.RoleDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

    @Autowired
    private RoleDao roleDao;

    public Role createNewRole(Role role) {
        return roleDao.save(role);
    }
}
