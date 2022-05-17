package com.kelaniya.uni.lms.service;

import com.kelaniya.uni.lms.dao.CourseDao;
import com.kelaniya.uni.lms.entity.Course;
import com.kelaniya.uni.lms.entity.Role;
import com.kelaniya.uni.lms.entity.User;
import com.kelaniya.uni.lms.dao.RoleDao;
import com.kelaniya.uni.lms.dao.UserDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.Set;

@Service
public class UserService {

    @Autowired
    private UserDao userDao;

    @Autowired
    private RoleDao roleDao;

    @Autowired
    private CourseDao courseDao;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String resetUserName;

    public void initRoleAndUser() {

        Role adminRole = new Role();
        adminRole.setRoleName("Admin");
        adminRole.setRoleDescription("Admin role");
        roleDao.save(adminRole);

        Role userRole = new Role();
        userRole.setRoleName("User");
        userRole.setRoleDescription("Default role for newly created record");
        roleDao.save(userRole);

        User adminUser = new User();
        adminUser.setUserName("admin123");
        adminUser.setUserPassword(getEncodedPassword("admin@pass"));
        adminUser.setUserFirstName("admin");
        adminUser.setUserLastName("admin");
        Set<Role> adminRoles = new HashSet<>();
        adminRoles.add(adminRole);
        adminUser.setRole(adminRoles);
        userDao.save(adminUser);

//        User user = new User();
//        user.setUserName("raj123");
//        user.setUserPassword(getEncodedPassword("raj@123"));
//        user.setUserFirstName("raj");
//        user.setUserLastName("sharma");
//        Set<Role> userRoles = new HashSet<>();
//        userRoles.add(userRole);
//        user.setRole(userRoles);
//        userDao.save(user);
    }

    public ResponseEntity registerNewUser(User user) {
        Role role = roleDao.findById("User").get();
        Set<Role> userRoles = new HashSet<>();
        userRoles.add(role);
        user.setRole(userRoles);
        user.setUserPassword(getEncodedPassword(user.getUserPassword()));

        try{
            String registeringUser = userDao.findById(user.getUserName()).get().getUserName();
            return new ResponseEntity(HttpStatus.ALREADY_REPORTED);
        }catch (Exception e){
            userDao.save(user);
            return new ResponseEntity(HttpStatus.OK);
        }

    }

    public Integer sendResetCode(String userName){
        this.resetUserName = userName;
        try{

            User user = userDao.findById(resetUserName).get();
            int resetCode = createResetCode();

            // email sending function


            return resetCode;

        }catch (UsernameNotFoundException e){
            throw new UsernameNotFoundException("Your Email is not in our system");
        }
    }

    public User updatePassword(String password){
        userDao.restorePassword(getEncodedPassword(password), resetUserName);
        return null;
    }

    public String registerUserToCourse(Course course){
        Course addCourse = courseDao.findById(course.getCourseCode()).get();
        Set<Course> userCourse = new HashSet<>();
        userCourse.add(addCourse);

        UserDetails userDetails = (UserDetails) SecurityContextHolder.getContext().getAuthentication()
                .getPrincipal();
        String username = userDetails.getUsername();

        User user = userDao.findById(username).get();
        userDao.delete(user);

        user.setCourses(userCourse);
        userDao.save(user);
        return "success";

    }

    public String getEncodedPassword(String password) {
        return passwordEncoder.encode(password);
    }

    //to create random code
    public Integer createResetCode(){
        int min = 1000;
        int max = 10000;

        return (int)Math.floor(Math.random()*(max-min+1)+min);
    }

}
