package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.*;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class AddReviewRequest {
    private Long id;
    private Product product;
    private User user;
    private String content;
    private Float rate;

    public Review toEntity() {
        return Review.builder()
                .product(product)
                .user(user)
                .content(content)
                .rate(rate)
                .build();
    }
}
