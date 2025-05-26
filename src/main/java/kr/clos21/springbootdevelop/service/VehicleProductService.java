package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.VehicleProduct;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.repository.UserRepository;
import kr.clos21.springbootdevelop.repository.VehicleProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class VehicleProductService {

    private final VehicleProductRepository vehicleProductRepository;

    @CachePut(cacheNames = "vehicleProducts", key = "#result.id")
    public VehicleProduct save(AddVehicleProductRequest request) {
        return vehicleProductRepository.save(request.toEntity());
    }

    @Cacheable(cacheNames = "vehicleProducts")
    public List<VehicleProduct> findAll() {
        return vehicleProductRepository.findAll();
    }

    @Cacheable(cacheNames = "vehicleProducts", key = "#id")
    public VehicleProduct findById(Long id) {
        return vehicleProductRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Vehicle product not found: " + id));
    }

    @Cacheable(cacheNames = "vehicleProducts", key = "#name")
    public VehicleProduct findByName(String name) {
        return vehicleProductRepository.findVehicleProductByName(name);
    }

    @Cacheable(cacheNames = "vehicleProducts", key = "#category")
    public List<VehicleProductResponse> findByCategory(String category) {
        List<VehicleProduct> vehicleProducts = vehicleProductRepository.findVehicleProductsByCategory(category);

        return vehicleProducts.stream()
                .map(VehicleProductResponse::new)
                .collect(Collectors.toList());
    }

    @CacheEvict(cacheNames = "vehicleProducts", allEntries = true)
    public void delete(Long id) {
        vehicleProductRepository.deleteById(id);
    }

    @CachePut(cacheNames = "vehicleProducts", key = "#id")
    public VehicleProduct update(Long id, UpdateVehicleProductRequest request) {
        VehicleProduct product = vehicleProductRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Vehicle product not found: " + id));

        product.setName(request.getName());
        product.setCategory(request.getCategory());
        product.setImage(request.getImage());
        product.setFeatures(request.getFeatures());
        product.setButtonText(request.getButtonText());

        product.setBrand(request.getBrand());
        product.setType(request.getType());
        product.setPriceAfterTax(request.getPriceAfterTax());
        product.setPriceBeforeTax(request.getPriceBeforeTax());
        product.setEfficiency(request.getEfficiency());
        product.setDisplacement(request.getDisplacement());

        return product;
    }
}