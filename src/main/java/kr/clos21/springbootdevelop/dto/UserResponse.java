package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.User;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class UserResponse {
    private final Long id;
    private final String email;
    private final List<ProductResponse> productResponseList;


    public UserResponse(User user) {
        this.id = user.getId();
        this.email = user.getEmail();
        this.productResponseList = user.getPurchasedProducts().stream().map(ProductResponse::new).collect(Collectors.toList());
    }
}
