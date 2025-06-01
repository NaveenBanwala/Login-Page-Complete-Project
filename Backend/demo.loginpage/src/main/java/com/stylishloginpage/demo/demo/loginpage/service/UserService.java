package com.stylishloginpage.demo.demo.loginpage.service;

import com.stylishloginpage.demo.demo.loginpage.entity.User;
import com.stylishloginpage.demo.demo.loginpage.jpa.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements UserServiceInterface {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> findAll() {
        return userRepository.findAll();
    }

    @Override
    public User findById(String username) {
        return userRepository.findById(username).orElse(null);
    }

    @Override
    @Transactional
    public void deleteById(String username) {
        userRepository.deleteById(username);
    }
}

