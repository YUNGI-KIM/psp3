package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.AccessoryProduct;
import kr.clos21.springbootdevelop.domain.VehicleProduct;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.repository.AccessoryProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class AccessoryProductService {

    private final AccessoryProductRepository accessoryProductRepository;

    @CachePut(cacheNames = "accessoryProducts", key = "#result.id")
    public AccessoryProduct save(AddAccessoryProductRequest request) {
        return accessoryProductRepository.save(request.toEntity());
    }

    @Cacheable(cacheNames = "accessoryProducts")
    public List<AccessoryProduct> findAll() {
        return accessoryProductRepository.findAll();
    }

    @Cacheable(cacheNames = "accessoryProducts", key = "#id")
    public AccessoryProduct findById(Long id) {
        return accessoryProductRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Accessory product not found: " + id));
    }

    @Cacheable(cacheNames = "vehicleProducts", key = "#category")
    public List<AccessoryProductResponse> findByCategory(String category) {
        List<AccessoryProduct> accessoryProducts = accessoryProductRepository.findAccessoryProductsByCategory(category);

        return accessoryProducts.stream()
                .map(AccessoryProductResponse::new)
                .collect(Collectors.toList());
    }

    @CacheEvict(cacheNames = "accessoryProducts", allEntries = true)
    public void delete(Long id) {
        accessoryProductRepository.deleteById(id);
    }

    @CachePut(cacheNames = "accessoryProducts", key = "#id")
    public AccessoryProduct update(Long id, UpdateAccessoryProductRequest request) {
        AccessoryProduct product = accessoryProductRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Accessory product not found: " + id));

        product.setName(request.getName());
        product.setCategory(request.getCategory());
        product.setImage(request.getImage());
        product.setFeatures(request.getFeatures());
        product.setButtonText(request.getButtonText());

        product.setPrice(request.getPrice());
        product.setDescription(request.getDescription());

        return product;
    }
}