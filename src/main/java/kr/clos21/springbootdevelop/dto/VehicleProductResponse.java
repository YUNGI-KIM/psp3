package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.VehicleProduct;
import kr.clos21.springbootdevelop.domain.InteriorOption;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class VehicleProductResponse {
    private final Long id;
    private final String name;
    private final String category;
    private final String image;
    private final List<String> features;
    private final String buttonText;

    private final String brand;
    private final String type;
    private final String priceAfterTax;
    private final String priceBeforeTax;
    private final String efficiency;
    private final String displacement;

    private final List<InteriorOption> interiorOptions;

    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;

    public VehicleProductResponse(VehicleProduct product) {
        this.id = product.getId();
        this.name = product.getName();
        this.category = product.getCategory();
        this.image = product.getImage();
        this.features = product.getFeatures();
        this.buttonText = product.getButtonText();

        this.brand = product.getBrand();
        this.type = product.getType();
        this.priceAfterTax = product.getPriceAfterTax();
        this.priceBeforeTax = product.getPriceBeforeTax();
        this.efficiency = product.getEfficiency();
        this.displacement = product.getDisplacement();

        this.interiorOptions = product.getInteriorOptions();

        this.createdAt = product.getCreatedAt();
        this.updatedAt = product.getUpdatedAt();
    }
}