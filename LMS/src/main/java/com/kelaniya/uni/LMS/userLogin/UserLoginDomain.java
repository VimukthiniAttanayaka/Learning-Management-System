package com.kelaniya.uni.LMS.userLogin;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "user")
public class UserLoginDomain {

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
    private String email;
    private String password;


    public UserLoginDomain(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public UserLoginDomain() {

    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
