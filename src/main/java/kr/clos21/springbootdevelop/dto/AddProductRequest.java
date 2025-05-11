package kr.clos21.springbootdevelop.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.User;
import lombok.*;

import java.util.List;

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
    private Long discountedPrice;
    private String status;
    private String category;
    private String image;
    private List<String> features;
    private String buttonText;

    @JsonIgnore
    private User user;

    public Product toEntity() {
        return Product.builder()
                .name(name)
                .description(description)
                .originalPrice(originalPrice)
                .status(status)
                .category(category)
                .image(image)
                .features(features)
                .buttonText(buttonText)
                .user(user)
                .build();
    }
}