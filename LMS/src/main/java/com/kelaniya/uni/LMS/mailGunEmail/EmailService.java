package com.kelaniya.uni.LMS.mailGunEmail;
import com.mashape.unirest.http.exceptions.UnirestException;

import java.io.IOException;

public interface EmailService {
    void sendEmail(EmailModel email) throws IOException, UnirestException;
}
