package kr.clos21.springbootdevelop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UpdateProductRequest {
    private String name;
    private String description;
    private Long originalPrice;
    private Long discountedPrice;
    private String status;
}
