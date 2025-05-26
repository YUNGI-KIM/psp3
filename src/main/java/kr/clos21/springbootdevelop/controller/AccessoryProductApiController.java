package kr.clos21.springbootdevelop.controller;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.AccessoryProduct;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.service.AccessoryProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/accessory-products")
public class AccessoryProductApiController {

    private final AccessoryProductService accessoryProductService;

    @PostMapping
    public ResponseEntity<AccessoryProduct> addProduct(@RequestBody AddAccessoryProductRequest request) {
        AccessoryProduct saved = accessoryProductService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping
    public ResponseEntity<List<AccessoryProduct>> findAll() {
        return ResponseEntity.ok(accessoryProductService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<AccessoryProduct> findById(@PathVariable Long id) {
        return ResponseEntity.ok(accessoryProductService.findById(id));
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<AccessoryProductResponse>> findByCategory(@PathVariable String category) {
        List<AccessoryProductResponse> accessoryProductResponses = accessoryProductService.findByCategory(category)
                .stream()
                .toList();
        return ResponseEntity.ok()
                .body(accessoryProductResponses);
    }

    @PutMapping("/{id}")
    public ResponseEntity<AccessoryProduct> update(@PathVariable Long id,
                                                   @RequestBody UpdateAccessoryProductRequest request) {
        return ResponseEntity.ok(accessoryProductService.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        accessoryProductService.delete(id);
        return ResponseEntity.noContent().build();
    }
}