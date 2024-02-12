package com.example.servercrud.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import jakarta.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    private String title;

    @NonNull
    private String content;

    private LocalDateTime createdAt;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Getter
    @ElementCollection
    private List<Long> likes = new ArrayList<>();
    @Getter
    private boolean bookmarked;

    public Post(@NonNull String title, @NonNull String content) {
        this.title = title;
        this.content = content;
        this.createdAt = LocalDateTime.now();
    }

    public void setUser(User user) {
        this.user = user;
    }

    public void addComment(Comment comment) {
        comments.add(comment);
        comment.setPost(this);
    }

    public void removeComment(Comment comment) {
        comments.remove(comment);
        comment.setPost(null);
    }

    public void setLikes(List<Long> likes) {
        this.likes = likes;
    }

    public void like(Long userId) {
        likes.add(userId);
    }

    public void unlike(Long userId) {
        likes.remove(userId);
    }

    public boolean isLikedBy(Long userId) {
        return likes.contains(userId);
    }

    public boolean hasLikes() {
        return !likes.isEmpty();
    }

    public void setBookmarked(boolean bookmarked) {
        this.bookmarked = bookmarked;
    }

    public void setTitle(String title) {
        this.title = title;
    }
    public void setContent(String content) {
        this.content = content;
    }
}

