package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import kr.clos21.springbootdevelop.repository.ProductRepository;
import kr.clos21.springbootdevelop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class ProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @CachePut(cacheNames = "products", key = "#result.id")
    public Product save(AddProductRequest request) {
        return productRepository.save(request.toEntity());
    }


    @Cacheable(cacheNames = "products")
    public List<Product> findAll() {
        return productRepository.findAll();
    }


    @Cacheable(cacheNames = "products", key = "#id")
    public Product findById(long id) {
        return productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + id));
    }


    @Cacheable(cacheNames = "products", key="#userId")
    public List<ProductResponse> findProductsByUserId(long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + userId));
        List<Product> products = productRepository.findProductsByUserId(userId);

        return products.stream()
                .map(ProductResponse::new)
                .collect(Collectors.toList());
    }

    @CacheEvict(cacheNames = "products", allEntries = true)
    public void delete(long id) {
        productRepository.deleteById(id);
    }

    @CachePut(cacheNames = "products", key = "#id")
    public Product update(long id, UpdateProductRequest request) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + id));

        product.update(request.getName(), request.getDescription(), request.getOriginalPrice(), request.getDiscountedPrice(), request.getStatus());

        return product;
    }
}
