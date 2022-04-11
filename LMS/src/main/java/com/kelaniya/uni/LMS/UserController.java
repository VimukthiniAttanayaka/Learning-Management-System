package com.kelaniya.uni.LMS;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

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

}
