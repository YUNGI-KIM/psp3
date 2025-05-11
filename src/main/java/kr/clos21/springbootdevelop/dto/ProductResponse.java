package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Product;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class ProductResponse {
    private final Long id;
    private final String name;
    private final String description;
    private final Long originalPrice;
    private final Long discountedPrice;
    private final String status;
    private final String category;
    private final String image;
    private final List<String> features;
    private final String buttonText;
    private final Long userId;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;

    public ProductResponse(Product product) {
        this.id = product.getId();
        this.name = product.getName();
        this.description = product.getDescription();
        this.originalPrice = product.getOriginalPrice();
        this.discountedPrice = product.getDiscountedPrice();
        this.status = product.getStatus();
        this.category = product.getCategory();
        this.image = product.getImage();
        this.features = product.getFeatures();
        this.buttonText = product.getButtonText();
        this.userId = product.getUser().getId();
        this.createdAt = product.getCreatedAt();
        this.updatedAt = product.getUpdatedAt();
    }
}