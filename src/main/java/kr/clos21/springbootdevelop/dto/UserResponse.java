package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.PurchasedProduct;
import kr.clos21.springbootdevelop.domain.User;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserResponse {
    private final Long id;
    private final String email;
    private final String name;
    private final List<PurchasedProductResponse> purchasedProductList;


    public UserResponse(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.name = user.getName();
        this.purchasedProductList = user.getPurchasedProducts().stream().map(PurchasedProductResponse::new).collect(Collectors.toList());
    }
}
