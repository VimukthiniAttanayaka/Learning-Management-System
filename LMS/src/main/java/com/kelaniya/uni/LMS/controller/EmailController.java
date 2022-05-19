package com.kelaniya.uni.LMS.controller;

import com.kelaniya.uni.LMS.entity.EmailRequest;
import com.kelaniya.uni.LMS.service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import com.sendgrid.Response;

@Controller
public class EmailController {


    @Autowired
    private EmailService emailservice;

    @PostMapping("/sendEmail")
    public ResponseEntity<String> sendEmail(@RequestBody EmailRequest emailrequest)
    {

        Response response=emailservice.sendEmail(emailrequest);
        if(response.getStatusCode()==200||response.getStatusCode()==202)
            return new ResponseEntity<>("send successfully",HttpStatus.OK);
        return new ResponseEntity<>("failed to sent",HttpStatus.NOT_FOUND);

    }

}