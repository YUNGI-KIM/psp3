package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.dto.CommentRequest;
import kr.clos21.springbootdevelop.repository.UserRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.transaction.annotation.Transactional;
import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.dto.AddCommentRequest;
import kr.clos21.springbootdevelop.dto.CommentResponse;
import kr.clos21.springbootdevelop.dto.UpdateCommentRequest;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import kr.clos21.springbootdevelop.repository.CommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class CommentService {
    private final CommentRepository commentRepository;
    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    @Transactional
    @CacheEvict(cacheNames = {"allComments", "articleComments"}, allEntries = true)
    public Comment save(AddCommentRequest request) {
        return commentRepository.save(request.toEntity());
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "allComments")
    public List<Comment> findAll() {
        return commentRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "articleComments")
    public List<CommentResponse> findCommentsByArticleId(Long articleId) {
        articleRepository.findById(articleId)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Article with ID %d not found", articleId)));
        List<Comment> comments = commentRepository.findCommentsByArticleId(articleId);


        return comments.stream()
                .map(CommentResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "articleComments")
    public List<CommentResponse> findCommentsByUserId(Long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + userId));
        List<Comment> comments = commentRepository.findCommentsByUserId(userId);

        return comments.stream()
                .map(CommentResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    @CacheEvict(cacheNames = {"allComments", "articleComments"}, allEntries = true)
    public void delete(long id) {
        commentRepository.deleteById(id);
    }

    @Transactional
    @CacheEvict(cacheNames = {"allComments", "articleComments"}, allEntries = true)
    public Comment update(long id, UpdateCommentRequest request) {
        Comment comment = commentRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Comment with ID %d not found", id)));

        comment.update(request.getComment());

        return comment;
    }

}