package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.User;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class AddProductRequest {
    private String name;
    private String description;
    private Long originalPrice;
    private String status;
    private User user;


    public Product toEntity() {
        return Product.builder()
                .name(name)
                .description(description)
                .originalPrice(originalPrice)
                .status(status)
                .user(user)
                .build();
    }
}
