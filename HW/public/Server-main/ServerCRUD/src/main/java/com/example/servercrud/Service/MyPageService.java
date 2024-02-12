package com.example.servercrud.Service;

import com.example.servercrud.Entity.Comment;
import com.example.servercrud.Entity.Post;
import com.example.servercrud.Entity.User;
import com.example.servercrud.Repository.CommentRepository;
import com.example.servercrud.Repository.PostRepository;
import com.example.servercrud.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class MyPageService {
    @Autowired
    private PostRepository postRepository;

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private UserRepository userRepository;

    public List<Post> getMyPosts(Long userId) {
        return postRepository.findByUserId(userId);
    }

    public List<Comment> getMyComments(Long userId) {
        return commentRepository.findByUserId(userId);
    }

    public List<Post> getLikedPosts(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return user.getLikedPosts(postRepository);
        }
        return Collections.emptyList();
    }

    public List<Post> getBookmarkedPosts(Long userId) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            return user.getBookmarkedPosts(postRepository);
        }
        return Collections.emptyList();
    }
}
