package com.stylishloginpage.demo.demo.loginpage.rest;

import com.stylishloginpage.demo.demo.loginpage.entity.User;
import com.stylishloginpage.demo.demo.loginpage.service.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:5176/")
@RestController
@RequestMapping("/api")
public class RestControllerLoginPage {

    private final UserService userService;

    public RestControllerLoginPage(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/loginpage/{username}")
    public User loginpage(@PathVariable String username) {
        User theUser = userService.findById(username);
        if (theUser == null) {
            throw new RuntimeException("User id not found: " + username);
        }
        return theUser;
    }

    @DeleteMapping("/users/{username}")
    public void deleteUser(@PathVariable String username) {
        userService.deleteById(username);
    }

    @GetMapping("/users")
    public List<User> findAllUsers() {
        return userService.findAll();
    }
}



