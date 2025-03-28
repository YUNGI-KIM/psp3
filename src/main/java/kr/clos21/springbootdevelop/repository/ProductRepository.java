package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findProductsByUserId(Long userId);
}

