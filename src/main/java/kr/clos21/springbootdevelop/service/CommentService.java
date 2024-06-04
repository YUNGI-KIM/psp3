package kr.clos21.springbootdevelop.service;

import org.springframework.cache.annotation.Cacheable;
import org.springframework.transaction.annotation.Transactional;
import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.dto.AddCommentRequest;
import kr.clos21.springbootdevelop.dto.CommentResponse;
import kr.clos21.springbootdevelop.dto.UpdateCommentRequest;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import kr.clos21.springbootdevelop.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final ArticleRepository articleRepository;

    @Transactional
    public Comment save(AddCommentRequest request) {
        return commentRepository.save(request.toEntity());
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "Comments")
    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "Comments")
    public List<CommentResponse> findCommentsByArticleId(Long articleId) {
        articleRepository.findById(articleId)
                .orElseThrow(() -> new IllegalArgumentException("not fount: " + articleId));
        List<Comment> comments = commentRepository.findCommentsByArticleId(articleId);


        return comments.stream()
                .map(CommentResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void delete(long id) {
        commentRepository.deleteById(id);
    }

    @Transactional
    public Comment update(long id, UpdateCommentRequest request) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));

        comment.update(request.getComment());

        return comment;
    }

}