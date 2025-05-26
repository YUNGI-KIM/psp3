package kr.clos21.springbootdevelop.domain;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class VehicleProduct extends BaseProduct {

    @Column(nullable = false)
    private String brand;

    @Column(nullable = false)
    private String type; // 세단, SUV 등

    @Column(nullable = false)
    private String priceAfterTax;

    @Column(nullable = false)
    private String priceBeforeTax;

    @Column
    private String efficiency;

    @Column
    private String displacement;

    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "interior_options", joinColumns = @JoinColumn(name = "vehicle_id"))
    private List<InteriorOption> interiorOptions;

    public VehicleProduct(
            String name, String category, String image, List<String> features, String buttonText,
            String brand, String type, String priceAfterTax, String priceBeforeTax,
            String efficiency, String displacement, List<InteriorOption> interiorOptions) {
        super(name, category, image, features, buttonText);
        this.brand = brand;
        this.type = type;
        this.priceAfterTax = priceAfterTax;
        this.priceBeforeTax = priceBeforeTax;
        this.efficiency = efficiency;
        this.displacement = displacement;
        this.interiorOptions = interiorOptions;
    }
}