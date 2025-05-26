package kr.clos21.springbootdevelop.controller;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.VehicleProduct;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.service.VehicleProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/vehicle-products")
public class VehicleProductApiController {

    private final VehicleProductService vehicleProductService;

    @PostMapping
    public ResponseEntity<VehicleProduct> addProduct(@RequestBody AddVehicleProductRequest request) {
        VehicleProduct saved = vehicleProductService.save(request);
        return ResponseEntity.status(HttpStatus.CREATED).body(saved);
    }

    @GetMapping
    public ResponseEntity<List<VehicleProduct>> findAll() {
        return ResponseEntity.ok(vehicleProductService.findAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<VehicleProduct> findById(@PathVariable Long id) {
        return ResponseEntity.ok(vehicleProductService.findById(id));
    }

    @PutMapping("/{id}")
    public ResponseEntity<VehicleProduct> update(@PathVariable Long id,
                                                 @RequestBody UpdateVehicleProductRequest request) {
        return ResponseEntity.ok(vehicleProductService.update(id, request));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Long id) {
        vehicleProductService.delete(id);
        return ResponseEntity.noContent().build();
    }
}