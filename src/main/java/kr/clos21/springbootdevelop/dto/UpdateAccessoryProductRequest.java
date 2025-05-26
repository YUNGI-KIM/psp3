package kr.clos21.springbootdevelop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UpdateAccessoryProductRequest {
    private String name;
    private String description;
    private Long originalPrice;
    private Long discountedPrice;
    private String status;
    private String category;
    private String image;
    private List<String> features;
    private String buttonText;
    private String price;
}