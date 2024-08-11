package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.PurchasedProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PurchasedProductRepository extends JpaRepository<PurchasedProduct, Long> {
    List<PurchasedProduct> findPurchasedProductsByUserId(Long userId);
    List<PurchasedProduct> findPurchasedProductsByProductId(Long productId);
}

