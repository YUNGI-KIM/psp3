package kr.clos21.springbootdevelop.controller;

import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.AddCommentRequest;
import kr.clos21.springbootdevelop.dto.AddNotificationRequest;
import kr.clos21.springbootdevelop.dto.CommentResponse;
import kr.clos21.springbootdevelop.dto.UpdateCommentRequest;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import kr.clos21.springbootdevelop.service.CommentService;
import kr.clos21.springbootdevelop.service.UserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class CommentApiController {
    private final CommentService commentService;
    private final UserDetailService userDetailService;
    private final ArticleRepository articleRepository;

    //댓글 목록 조회
    @GetMapping("/api/articles/{articleId}/comments")
    public ResponseEntity<List<CommentResponse>> comments(@PathVariable Long articleId){
        //서비스에게 위임
        List<CommentResponse> comments = commentService.findCommentsByArticleId(articleId)
                .stream()
                .toList();

        //결과 응답
        return ResponseEntity.ok()
                .body(comments);
    }



    //댓글 생성
    @PostMapping("/api/articles/{articleId}/comments")
    public ResponseEntity<Comment> create(@RequestBody AddCommentRequest request, @PathVariable Long articleId){
        request.setArticle(articleRepository.findById(articleId)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + articleId)));
        User writer = userDetailService.loadUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        request.setUser(writer);
        commentService.save(request);

        return ResponseEntity.status(HttpStatus.CREATED).build();
    }


    //댓글 수정
    @PatchMapping("/api/articles/comments/{id}")
    public ResponseEntity<Comment> update(@PathVariable Long id,
                                             @RequestBody UpdateCommentRequest request){
        Comment updatedComment = commentService.update(id, request);
        return ResponseEntity.ok().body(updatedComment);
    }


    //댓글 삭제
    @DeleteMapping("/api/articles/comments/{id}")
    public ResponseEntity<Comment> delete(@PathVariable Long id){
        commentService.delete(id);
        return ResponseEntity.ok()
                .build();
    }

}
