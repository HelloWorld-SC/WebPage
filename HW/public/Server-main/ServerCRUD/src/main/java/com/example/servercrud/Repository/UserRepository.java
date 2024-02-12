package com.example.servercrud.Repository;

import com.example.servercrud.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Long> {
}

