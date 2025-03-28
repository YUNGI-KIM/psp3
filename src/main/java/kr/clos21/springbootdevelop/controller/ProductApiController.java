package kr.clos21.springbootdevelop.controller;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Product;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.AddProductRequest;
import kr.clos21.springbootdevelop.dto.ProductResponse;
import kr.clos21.springbootdevelop.dto.UpdateProductRequest;
import kr.clos21.springbootdevelop.service.ProductService;
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
public class ProductApiController {

    private final ProductService productService;
    private final UserDetailService userDetailService;

    @PostMapping("/api/products")
    public ResponseEntity<Product> addProduct(@RequestBody AddProductRequest request) {
        try {
            User writer = userDetailService.loadUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
            request.setUser(writer);
            Product savedProduct = productService.save(request);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(savedProduct);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/products")
    public ResponseEntity<List<ProductResponse>> findAllProducts() {
        List<ProductResponse> products = productService.findAll()
                .stream()
                .map(ProductResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(products);
    }

    @GetMapping("/api/products/{id}")
    public ResponseEntity<ProductResponse> findProduct(@PathVariable long id) {
        try {
            Product product = productService.findById(id);

            return ResponseEntity.ok()
                    .body(new ProductResponse(product));
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/products/user/{userId}")
    public ResponseEntity<List<ProductResponse>> findProductsByUserId(@PathVariable Long userId) {
        try{
            List<ProductResponse> products = productService.findProductsByUserId(userId)
                    .stream()
                    .toList();
            return ResponseEntity.ok()
                    .body(products);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/products/{id}")
    public ResponseEntity<Void> deleteProduct(@PathVariable long id) {
        productService.delete(id);

        return ResponseEntity.ok()
                .build();

    }

    @PutMapping("/api/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable long id,
                                                 @RequestBody UpdateProductRequest request) {
        try {
            Product updatedProduct = productService.update(id, request);

            return ResponseEntity.ok()
                    .body(updatedProduct);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}

