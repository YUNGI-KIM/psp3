package kr.clos21.springbootdevelop.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import kr.clos21.springbootdevelop.domain.InteriorOption;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.domain.VehicleProduct;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public class AddVehicleProductRequest extends BaseProductDTO {

    private String brand;
    private String efficiency;
    private String displacement;
    private String type;
    private String priceAfterTax;
    private String priceBeforeTax;
    private String cbti;
    private List<InteriorOption> interiorOptions;

    public VehicleProduct toEntity() {
        return VehicleProduct.builder()
                .name(name)
                .category(category)
                .image(image)
                .features(features)
                .buttonText(buttonText)
                .brand(brand)
                .type(type)
                .priceAfterTax(priceAfterTax)
                .priceBeforeTax(priceBeforeTax)
                .efficiency(efficiency)
                .displacement(displacement)
                .cbti(cbti)
                .interiorOptions(interiorOptions)
                .build();
    }
}