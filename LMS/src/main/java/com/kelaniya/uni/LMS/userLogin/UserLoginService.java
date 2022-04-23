package com.kelaniya.uni.LMS.userLogin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserLoginService {

    @Autowired
    private UserLoginRepository userLoginRepository;

    public UserLoginDomain userLogin(String email, String password){
        UserLoginDomain userLoginDomain = userLoginRepository.findByEmailAndPassword(email, password);
        return userLoginDomain;
    }
}

