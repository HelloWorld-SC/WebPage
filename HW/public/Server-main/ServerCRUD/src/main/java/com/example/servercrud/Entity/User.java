package com.example.servercrud.Entity;

import com.example.servercrud.Repository.PostRepository;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String username;

    @NonNull
    private String email;

    @NonNull
    private String password;

    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Long getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    @ElementCollection
    private List<Long> likedPostIds = new ArrayList<>();

    public List<Long> getLikedPostIds() {
        return likedPostIds;
    }

    public void likePost(Long postId) {
        likedPostIds.add(postId);
    }

    public void unlikePost(Long postId) {
        likedPostIds.remove(postId);
    }

    public List<Post> getLikedPosts(PostRepository postRepository) {
        return postRepository.findByIdIn(likedPostIds);
    }


    @ElementCollection
    private List<Long> bookmarkedPostIds = new ArrayList<>();

    public void bookmarkPost(Post post) {
        bookmarkedPostIds.add(post.getId());
    }

    public void unbookmarkPost(Post post) {
        bookmarkedPostIds.remove(post.getId());
    }

    public List<Long> getBookmarkedPostIds() {
        return bookmarkedPostIds;
    }

    public List<Post> getBookmarkedPosts(PostRepository postRepository) {
        return postRepository.findByIdIn(bookmarkedPostIds);
    }
}

