package kr.clos21.springbootdevelop.controller;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.PurchasedProduct;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.service.ProductService;
import kr.clos21.springbootdevelop.service.PurchasedProductService;
import kr.clos21.springbootdevelop.service.UserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class PurchasedProductApiController {

    private final ProductService productService;
    private final UserDetailService userDetailService;
    private final PurchasedProductService purchasedProductService;

    @PostMapping("/api/products/purchased/{productId}")
    public ResponseEntity<PurchasedProduct> addPurchasedProduct(@PathVariable Long productId) {
        try {
            AddPurchasedProductRequest request = new AddPurchasedProductRequest();
            User writer = userDetailService.loadUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName()); //유저 정보 요펑
            Product product = productService.findById(productId); //Product 요청

            //AddPurchasedProductRequest set Variable
            request.setUser(writer);
            request.setProduct(product);

            //purchasedProduct Add using AddPurchasedProductRequset
            PurchasedProduct savedPurchasedProduct = purchasedProductService.save(request);

            // User, Product 모두에 기록
            writer.addPurchasedProduct(savedPurchasedProduct);
            product.getPurchasedProducts().add(savedPurchasedProduct);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(savedPurchasedProduct);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/products/purchased")
    public ResponseEntity<List<PurchasedProductResponse>> findAllProducts() {
        List<PurchasedProductResponse> purchasedProducts = purchasedProductService.findAll()
                .stream()
                .map(PurchasedProductResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(purchasedProducts);
    }

    @GetMapping("/api/products/purchased/{id}")
    public ResponseEntity<PurchasedProductResponse> findPurchasedProductById(@PathVariable long id) {
        try {
            PurchasedProduct purchasedProduct = purchasedProductService.findById(id);

            return ResponseEntity.ok()
                    .body(new PurchasedProductResponse(purchasedProduct));
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/products/purchased/user/{userId}")
    public ResponseEntity<List<PurchasedProductResponse>> findPurchasedProductsByUserId(@PathVariable Long userId) {
        try{
            List<PurchasedProductResponse> purchasedProducts = purchasedProductService.findPurchasedProductsByUserId(userId)
                    .stream()
                    .toList();
            return ResponseEntity.ok()
                    .body(purchasedProducts);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/products/purchased/{id}")
    public ResponseEntity<Void> deletePurchasedProduct(@PathVariable long id) {
        purchasedProductService.delete(id);

        return ResponseEntity.ok()
                .build();

    }
}

