package com.kelaniya.uni.LMS.login;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends JpaRepository <LoginDomain, Long > {
    LoginDomain findByUsernameAndPassword(String username, String password);

}
