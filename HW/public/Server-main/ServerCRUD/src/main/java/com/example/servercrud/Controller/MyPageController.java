package com.example.servercrud.Controller;

import com.example.servercrud.Entity.Comment;
import com.example.servercrud.Entity.Post;
import com.example.servercrud.Service.MyPageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/mypage")
public class MyPageController {
    @Autowired
    private MyPageService myPageService;

    @GetMapping("/{userId}/myposts")
    public ResponseEntity<List<Post>> getMyPosts(@PathVariable Long userId) {
        List<Post> myPosts = myPageService.getMyPosts(userId);
        return new ResponseEntity<>(myPosts, HttpStatus.OK);
    }

    @GetMapping("/{userId}/mycomments")
    public ResponseEntity<List<Comment>> getMyComments(@PathVariable Long userId) {
        List<Comment> myComments = myPageService.getMyComments(userId);
        return new ResponseEntity<>(myComments, HttpStatus.OK);
    }

    @GetMapping("/{userId}/likedposts")
    public ResponseEntity<List<Post>> getLikedPosts(@PathVariable Long userId) {
        List<Post> likedPosts = myPageService.getLikedPosts(userId);
        return new ResponseEntity<>(likedPosts, HttpStatus.OK);
    }

    @GetMapping("/{userId}/bookmarkedposts")
    public ResponseEntity<List<Post>> getBookmarkedPosts(@PathVariable Long userId) {
        List<Post> bookmarkedPosts = myPageService.getBookmarkedPosts(userId);
        return new ResponseEntity<>(bookmarkedPosts, HttpStatus.OK);
    }

}

