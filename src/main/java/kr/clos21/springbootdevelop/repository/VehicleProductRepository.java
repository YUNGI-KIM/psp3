package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.AccessoryProduct;
import kr.clos21.springbootdevelop.domain.VehicleProduct;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface VehicleProductRepository extends JpaRepository<VehicleProduct, Long> {
    List<VehicleProduct> findVehicleProductsByCategory(String category);
}

