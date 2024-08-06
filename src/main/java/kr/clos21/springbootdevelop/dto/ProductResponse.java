package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.User;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class ProductResponse {
    private final Long id;
    private final String name;
    private final String description;
    private final Long originalPrice;
    private final Long discountedPrice;
    private final String status;
    private final Long userId;
//    private final List<CommentResponse> comments;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;

    public ProductResponse(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.originalPrice = product.getOriginalPrice();
        this.discountedPrice = product.getDiscountedPrice();
        this.status = product.getStatus();
        this.userId = product.getUser().getId();
//        this.comments = product.getComments().stream().map(CommentResponse::new).collect(Collectors.toList());
        this.createdAt = product.getCreatedAt();
        this.updatedAt = product.getUpdatedAt();
    }
}
