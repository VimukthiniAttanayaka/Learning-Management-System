package com.kelaniya.uni.LMS;
import java.util.Random;

public class ResetPasswordCodeGenerator {
    public Integer createResetCode(){
        int min = 1000;
        int max = 10000;

        Random rand = new Random();
        return (int)Math.floor(Math.random()*(max-min+1)+min);
    }
}
