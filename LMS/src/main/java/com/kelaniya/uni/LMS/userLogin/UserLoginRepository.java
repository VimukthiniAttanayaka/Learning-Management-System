package com.kelaniya.uni.LMS.userLogin;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserLoginRepository extends JpaRepository <UserLoginDomain, Long> {
    UserLoginDomain findByEmailAndPassword(String email, String password);
}
