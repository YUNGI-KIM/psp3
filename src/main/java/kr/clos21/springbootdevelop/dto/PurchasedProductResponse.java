package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.PurchasedProduct;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class PurchasedProductResponse {
    private final Long id;
    private final Long userId;
    private final Long productId;
    private final LocalDateTime createdAt;

    public PurchasedProductResponse(PurchasedProduct purchasedProduct) {
        this.id = purchasedProduct.getId();
        this.userId = purchasedProduct.getUser().getId();
        this.productId = purchasedProduct.getProduct().getId();
        this.createdAt = purchasedProduct.getCreatedAt();
    }
}
