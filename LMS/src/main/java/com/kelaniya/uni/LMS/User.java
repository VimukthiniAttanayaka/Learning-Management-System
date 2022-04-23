package com.kelaniya.uni.LMS;

import jdk.jfr.Timestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Entity(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int user_id;
    public String first_name;
    public String middle_name;
    public String last_name;
    public String home_address;
    public String degree_program;
    public int phone;
    public String user_type;
    public Date registered_date;
    public String email;
    public String password;
}
