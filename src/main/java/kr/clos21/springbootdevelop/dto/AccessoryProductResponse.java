package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.AccessoryProduct;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class AccessoryProductResponse {
    private final Long id;
    private final String name;
    private final String category;
    private final String image;
    private final List<String> features;
    private final String buttonText;

    private final String price;
    private final String description;

    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;

    public AccessoryProductResponse(AccessoryProduct product) {
        this.id = product.getId();
        this.name = product.getName();
        this.category = product.getCategory();
        this.image = product.getImage();
        this.features = product.getFeatures();
        this.buttonText = product.getButtonText();
        this.price = product.getPrice();
        this.description = product.getDescription();
        this.createdAt = product.getCreatedAt();
        this.updatedAt = product.getUpdatedAt();
    }
}