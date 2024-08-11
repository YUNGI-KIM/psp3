package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.PurchasedProduct;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.repository.ProductRepository;
import kr.clos21.springbootdevelop.repository.PurchasedProductRepository;
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
public class PurchasedProductService {

    private final ProductRepository productRepository;
    private final UserRepository userRepository;
    private final PurchasedProductRepository purchasedProductRepository;

    @CachePut(cacheNames = "purchased_products", key = "#result.id")
    public PurchasedProduct save(AddPurchasedProductRequest request) {
        return purchasedProductRepository.save(request.toEntity());
    }


    @Cacheable(cacheNames = "purchased_products")
    public List<PurchasedProduct> findAll() {
        return purchasedProductRepository.findAll();
    }


    @Cacheable(cacheNames = "purchased_products", key = "#id")
    public PurchasedProduct findById(long id) {
        return purchasedProductRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + id));
    }


    @Cacheable(cacheNames = "purchased_products", key="#userId")
    public List<PurchasedProductResponse> findPurchasedProductsByUserId(long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + userId));
        List<PurchasedProduct> purchasedProducts = purchasedProductRepository.findPurchasedProductsByUserId(userId);

        return purchasedProducts.stream()
                .map(PurchasedProductResponse::new)
                .collect(Collectors.toList());
    }

    @Cacheable(cacheNames = "purchased_products", key="#productId")
    public List<PurchasedProductResponse> findPurchasedProductsByProductId(long productId) {
        productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + productId));
        List<PurchasedProduct> purchasedProducts = purchasedProductRepository.findPurchasedProductsByProductId(productId);

        return purchasedProducts.stream()
                .map(PurchasedProductResponse::new)
                .collect(Collectors.toList());
    }

    @CacheEvict(cacheNames = "purchased_products", allEntries = true)
    public void delete(long id) {
        purchasedProductRepository.deleteById(id);
    }
}
