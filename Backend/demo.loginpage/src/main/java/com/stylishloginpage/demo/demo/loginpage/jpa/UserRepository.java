package com.stylishloginpage.demo.demo.loginpage.jpa;

import com.stylishloginpage.demo.demo.loginpage.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    // JpaRepository provides CRUD and finder methods for User entity with username as PK (String)
}

