package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.PurchasedProduct;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.repository.PurchasedProductRepository;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class AddPurchasedProductRequest {
    private User user;
    private Product product;

    public PurchasedProduct toEntity() {
        return PurchasedProduct.builder()
                .user(user)
                .product(product)
                .build();
    }
}
