package com.kelaniya.uni.LMS.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.transaction.annotation.Transactional;

public interface UserRepository extends JpaRepository<User, Integer> {

    @Query("SELECT u FROM user u WHERE u.email = ?1")
    User getUserByEmail(String email);

    @Transactional
    @Modifying
    @Query("UPDATE user SET password = :password WHERE email = :email")
    Integer restorePassword(String password, String email);

}
