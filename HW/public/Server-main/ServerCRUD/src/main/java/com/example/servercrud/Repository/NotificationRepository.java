package com.example.servercrud.Repository;

import com.example.servercrud.Entity.Notification;
import com.example.servercrud.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findByUserOrderByCreatedAtDesc(User user);
}

