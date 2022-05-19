package com.kelaniya.uni.LMS.controller;

import com.kelaniya.uni.LMS.entity.User;
import com.kelaniya.uni.LMS.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.annotation.PostConstruct;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private UserService userService;


    @PostConstruct
    public void initRoleAndUser() {
        userService.initRoleAndUser();
    }

    @PostMapping({"/registerNewUser"})
    public ResponseEntity registerNewUser(@RequestBody User user) {
        return userService.registerNewUser(user);
    }

    @PostMapping({"/getResetCode"})
    public int getResetCode(@RequestBody User userName){
        return userService.sendResetCode(userName.getUserName());
    }

    @PostMapping({"/updatePassword"})
    public User updatePassword(@RequestBody User user) throws Exception {
        try{
            return userService.updatePassword(user.getUserPassword());
        }catch (Exception e){
            throw new Exception("Couldn't update password");
        }
    }

    @GetMapping({"/forAdmin"})
    @PreAuthorize("hasRole('Teacher')")
    public String forAdmin(){
        return "This URL is only accessible to the admin";
    }

    @GetMapping({"/forUser"})
    @PreAuthorize("hasRole('Student')")
    public String forUser(){
        return "This URL is only accessible to the user";
    }
}
