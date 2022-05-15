package com.kelaniya.uni.LMS.userLogin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.Objects;

@Controller
@CrossOrigin
public class UserLoginController {
    @Autowired
    private UserLoginService userLoginService;

    @GetMapping("/userlogin")

    public ModelAndView userLogin(){
        ModelAndView modelAndView = new ModelAndView("userlogin");
        modelAndView.addObject("userlogin", new UserLoginDomain());
        return modelAndView;
    }

    @PostMapping("/userlogin")

    public String userLogin(@ModelAttribute("login") UserLoginDomain userLoginDomain){
        UserLoginDomain authLogin = userLoginService.userLogin(userLoginDomain.getEmail(), userLoginDomain.getPassword());

        System.out.print(authLogin);
        if(Objects.nonNull(authLogin)){
            return "redirect:/";
        }else{
            return "redirect:/userlogin";
        }
    }
}
