package com.kelaniya.uni.LMS.login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.servlet.ModelAndView;

import java.util.Objects;

@Controller
public class LoginController {

    @Autowired
    private LoginService loginService;

    @GetMapping("/login")

    public ModelAndView login(){
        ModelAndView modelAndView = new ModelAndView("login");
        modelAndView.addObject("login", new LoginDomain());
        return modelAndView;
    }

    @PostMapping("/login")

    public String login(@ModelAttribute("login") LoginDomain loginDomain){
        LoginDomain authLogin = loginService.login(loginDomain.getUsername(), loginDomain.getPassword());

        System.out.print(authLogin);
        if(Objects.nonNull(authLogin)){
            return "redirect:/";
        }else{
            return "redirect:/login";
        }
    }


}
