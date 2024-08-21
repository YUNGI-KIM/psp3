package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.domain.Review;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class ReviewResponse {
    private final Long id;
    private final Long productId;
    private final Long userId;
    private final String content;
    private final Float rate;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;


    public ReviewResponse(Review review) {
        this.id = review.getId();
        this.productId = review.getProduct().getId();
        this.userId = review.getUser().getId();
        this.content = review.getContent();
        this.rate = review.getRate();
        this.createdAt = review.getCreatedAt();
        this.updatedAt = review.getUpdatedAt();
    }
}
