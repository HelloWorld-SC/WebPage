package com.example.servercrud.Controller;
import com.example.servercrud.Dto.CommentDTO;
import com.example.servercrud.Dto.PostDTO;
import com.example.servercrud.Entity.Comment;
import com.example.servercrud.Entity.Post;
import com.example.servercrud.Entity.User;
import com.example.servercrud.Repository.UserRepository;
import com.example.servercrud.Service.CommentService;
import com.example.servercrud.Service.NotificationService;
import com.example.servercrud.Service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/posts")
public class PostController {
    @Autowired
    private PostService postService;
    @Autowired
    private CommentService commentService;
    @Autowired
    private NotificationService notificationService;
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public ResponseEntity<List<Post>> getAllPosts() {
        List<Post> posts = postService.getAllPosts();
        return new ResponseEntity<>(posts, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Post> getPostById(@PathVariable Long id) {
        Optional<Post> post = postService.getPostById(id);
        return post.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping
    public ResponseEntity<Post> createPost(@RequestBody PostDTO postDTO) {
        Post post = postService.createPost(postDTO);
        return new ResponseEntity<>(post, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> updatePost(@PathVariable Long id, @RequestBody PostDTO postDTO) {
        postService.updatePost(id, postDTO);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePost(@PathVariable Long id) {
        postService.deletePost(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/{postId}/comments")
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody CommentDTO commentDTO) {
        Comment comment = commentService.createComment(postId, commentDTO);

        Optional<Post> optionalPost = postService.getPostById(postId);
        optionalPost.ifPresent(post -> {
            User postOwner = post.getUser();
            notificationService.createNotification(postOwner, "New comment added to your post");
        });

        return new ResponseEntity<>(comment, HttpStatus.CREATED);
    }

    @PostMapping("/{postId}/like")
    public ResponseEntity<Void> likePost(@PathVariable Long postId, @RequestParam Long userId) {
        postService.likePost(postId, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{postId}/unlike")
    public ResponseEntity<Void> unlikePost(@PathVariable Long postId, @RequestParam Long userId) {
        postService.unlikePost(postId, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{postId}/bookmark")
    public ResponseEntity<Void> bookmarkPost(@PathVariable Long postId, @RequestParam Long userId) {
        postService.bookmarkPost(postId, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/{postId}/unbookmark")
    public ResponseEntity<Void> unbookmarkPost(@PathVariable Long postId, @RequestParam Long userId) {
        postService.unbookmarkPost(postId, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}

