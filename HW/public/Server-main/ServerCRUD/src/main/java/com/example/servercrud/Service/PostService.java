package com.example.servercrud.Service;

import com.example.servercrud.Dto.PostDTO;
import com.example.servercrud.Entity.Post;
import com.example.servercrud.Entity.User;
import com.example.servercrud.Repository.PostRepository;
import com.example.servercrud.Repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {
    private final PostRepository postRepository;

    private final UserRepository userRepository;

    public PostService(PostRepository postRepository, UserRepository userRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
    }


    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Optional<Post> getPostById(Long id) {
        return postRepository.findById(id);
    }

    public Post createPost(PostDTO postDTO) {
        Post post = new Post();
        post.setTitle(postDTO.getTitle());
        post.setContent(postDTO.getContent());
        return postRepository.save(post);
    }

    public void updatePost(Long id, PostDTO postDTO) {
        Optional<Post> optionalPost = postRepository.findById(id);
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            post.setTitle(postDTO.getTitle());
            post.setContent(postDTO.getContent());
            postRepository.save(post);
        }
    }

    public void deletePost(Long id) {
        postRepository.deleteById(id);
    }

    public void likePost(Long postId, Long userId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Optional<Optional<com.example.servercrud.Entity.User>> optionalUser = Optional.of(userRepository.findById(userId));
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            Optional<com.example.servercrud.Entity.User> user = optionalUser.get();
            List<Long> likes = post.getLikes();
            likes.add(userId);
            post.setLikes(likes);
            postRepository.save(post);
        }
    }

    public void unlikePost(Long postId, Long userId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Optional<Optional<com.example.servercrud.Entity.User>> optionalUser = Optional.of(userRepository.findById(userId));
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            Optional<com.example.servercrud.Entity.User> user = optionalUser.get();
            if (!post.getLikes().isEmpty()) {
                List<Long> likes = post.getLikes();
                likes.remove(userId);
                post.setLikes(likes);
                postRepository.save(post);
            }

        }
        }

    public void bookmarkPost(Long postId, Long userId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Optional<Optional<com.example.servercrud.Entity.User>> optionalUser = Optional.of(userRepository.findById(userId));
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            Optional<com.example.servercrud.Entity.User> user = optionalUser.get();
            post.setBookmarked(true);
            postRepository.save(post);
        }
    }

    public void unbookmarkPost(Long postId, Long userId) {
        Optional<Post> optionalPost = postRepository.findById(postId);
        Optional<Optional<com.example.servercrud.Entity.User>> optionalUser = Optional.of(userRepository.findById(userId));
        if (optionalPost.isPresent()) {
            Post post = optionalPost.get();
            Optional<User> user = optionalUser.get();
            post.setBookmarked(false);
            postRepository.save(post);
        }
    }
}

