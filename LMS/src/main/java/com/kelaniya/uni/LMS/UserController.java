package com.kelaniya.uni.LMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@CrossOrigin
public class UserController {

    String userEmail = "";

    private UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    @PostMapping("/sign_up")
    public String addUser(@RequestBody User userData){
        try {
            userRepository.save(userData);
            return("Successfully added to the database");
        }catch ( Exception e ){
            System.out.println(e.getMessage());
            return ("Couldn't added to the database");
        }
    }

    //RRP - request reset password
    @PostMapping("RRP_code")
    public int sendResetCode(@RequestBody User userEmail){
        this.userEmail = userEmail.email;
        User userDetails = userRepository.getUserByEmail(this.userEmail);

        if(userDetails != null){
            ResetPasswordCodeGenerator resetPasswordCodeGenerator = new ResetPasswordCodeGenerator();
            return (resetPasswordCodeGenerator.createResetCode());

            //call to email sending function

        }else {
            return 500;
        }
    }

    //Getting restored password
    @PostMapping("restore_password")
    public int updatePassword(@RequestBody User userPassword){

        if(userEmail != ""){
            userRepository.restorePassword(userPassword.password, userEmail);
            userEmail = "";
            return 200;

        }else{
            return 500;
        }
    }

}
