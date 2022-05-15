package com.kelaniya.uni.LMS.mailGunEmail;

//import kong.unirest.HttpResponse;
//import kong.unirest.JsonNode;
//import kong.unirest.Unirest;
import org.springframework.stereotype.Service;

import java.io.File;
import com.mashape.unirest.http.HttpResponse;
import com.mashape.unirest.http.JsonNode;
import com.mashape.unirest.http.Unirest;
import com.mashape.unirest.http.exceptions.UnirestException;

import java.io.IOException;

@Service
public class MailGunEmailService implements EmailService{


    @Override
    public void sendEmail(EmailModel email) throws IOException, UnirestException {

        HttpResponse<JsonNode> request = Unirest.post("https://api.mailgun.net/v3/" + "LMS" + "/messages")
                .basicAuth("api","742a41ead2633fe6e8fe19ecf062986d-100b5c8d-91c9542d")
                .field("from", "Excited User <sandboxe0df028ca5b64ebd818041a1e4b87d32.mailgun.org>")
                .field("to", email.getReceiver())
                .field("subject", email.getSubject())
                .field("text", email.getBody())
                .asJson();


    }
}
