package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.AccessoryProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccessoryProductRepository extends JpaRepository<AccessoryProduct, Long> {
    List<AccessoryProduct> findProductsByUserId(Long userId);
}

