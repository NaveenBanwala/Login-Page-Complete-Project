package com.stylishloginpage.demo.demo.loginpage.service;

import com.stylishloginpage.demo.demo.loginpage.entity.User;
import java.util.List;

public interface UserServiceInterface {

    User findById(String username);

    void deleteById(String username);

    List<User> findAll();
}
