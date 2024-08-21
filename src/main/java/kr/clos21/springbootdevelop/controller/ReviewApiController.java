package kr.clos21.springbootdevelop.controller;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.AddReviewRequest;
import kr.clos21.springbootdevelop.dto.ReviewResponse;
import kr.clos21.springbootdevelop.dto.UpdateCommentRequest;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import kr.clos21.springbootdevelop.repository.ProductRepository;
import kr.clos21.springbootdevelop.service.CommentService;
import kr.clos21.springbootdevelop.service.ReviewService;
import kr.clos21.springbootdevelop.service.UserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ReviewApiController {
    private final ReviewService reviewService;
    private final UserDetailService userDetailService;
    private final ProductRepository productRepository;

    //댓글 목록 조회(ArticleId)
    @GetMapping("/api/products/{productId}/reviews")
    public ResponseEntity<List<ReviewResponse>> findReviewsByProductId(@PathVariable Long productId){
        try {//서비스에게 위임
            List<ReviewResponse> reviews = reviewService.findReviewsByProductId(productId)
                    .stream()
                    .toList();

            //결과 응답
            return ResponseEntity.ok()
                    .body(reviews);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    //댓글 목록 조회(UserId)
    @GetMapping("/api/products/reviews/user/{userId}")
    public ResponseEntity<List<ReviewResponse>> findReviewsByUserId(@PathVariable Long userId) {
        try {//서비스에게 위임
            List<ReviewResponse> reviews = reviewService.findReviewsByUserId(userId)
                    .stream()
                    .toList();
            //결과 응답
            return ResponseEntity.ok()
                    .body(reviews);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND); //유저 Not Found 에러 구문
        }
    }

    //댓글 생성
    @PostMapping("/api/products/{productId}/reviews")
    public ResponseEntity<Comment> create(@RequestBody AddReviewRequest request, @PathVariable Long productId){
        try {
            request.setProduct(productRepository.findById(productId)
                    .orElseThrow(() -> new EntityNotFoundException("not found : " + productId)));
            User writer = userDetailService.loadUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
            request.setUser(writer);
            reviewService.save(request);

            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch(EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


    //댓글 수정
    @PutMapping("/api/products/reviews/{id}")
    public ResponseEntity<Comment> update(@PathVariable Long id,
                                             @RequestBody UpdateCommentRequest request){
        try {
            reviewService.update(id, request);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }


    //댓글 삭제
    @DeleteMapping("/api/products/reviews/{id}")
    public ResponseEntity<Comment> delete(@PathVariable Long id){
        reviewService.delete(id);
        return ResponseEntity.ok()
                .build();
    }

}
