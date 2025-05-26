package kr.clos21.springbootdevelop.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import kr.clos21.springbootdevelop.domain.AccessoryProduct;
import kr.clos21.springbootdevelop.domain.User;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class AddAccessoryProductRequest extends BaseProductDTO {

    private String price;
    private String description;

    public AccessoryProduct toEntity() {
        return AccessoryProduct.builder()
                .name(name)
                .category(category)
                .image(image)
                .features(features)
                .buttonText(buttonText)
                .price(price)
                .description(description)
                .build();
    }
}