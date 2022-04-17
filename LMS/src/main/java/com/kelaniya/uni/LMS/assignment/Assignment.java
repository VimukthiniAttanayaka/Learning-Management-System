package com.kelaniya.uni.LMS.assignment;
import jdk.jfr.Timestamp;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Assignment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int assignment_Id;
    public String assignment_name;
    public int course_id;
    public Date uploaded_date;
    public Date due_date;
}
