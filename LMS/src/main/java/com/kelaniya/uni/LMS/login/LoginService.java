package com.kelaniya.uni.LMS.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired

    private LoginRepository loginRepository;

    public LoginDomain login(String username, String password){
        LoginDomain loginDomain = loginRepository.findByUsernameAndPassword(username, password);
        return loginDomain;
    }

}
