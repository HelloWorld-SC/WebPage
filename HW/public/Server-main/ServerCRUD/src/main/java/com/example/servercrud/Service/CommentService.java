package com.example.servercrud.Service;

import com.example.servercrud.Dto.CommentDTO;
import com.example.servercrud.Entity.Comment;
import com.example.servercrud.Entity.Post;
import com.example.servercrud.Repository.CommentRepository;
import com.example.servercrud.Repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentService {
    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private PostRepository postRepository;

    public Comment createComment(Long postId, CommentDTO commentDTO) {
        Comment comment = new Comment();
        comment.setContent(commentDTO.getContent());
        comment.setCreatedAt(LocalDateTime.now());

        Post post = postRepository.getById(postId);
        comment.setPost(post);

        return commentRepository.save(comment);
    }

}
