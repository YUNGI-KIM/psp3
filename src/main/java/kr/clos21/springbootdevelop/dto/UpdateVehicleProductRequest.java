package kr.clos21.springbootdevelop.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UpdateVehicleProductRequest {
    private String name;
    private String description;
    private String priceAfterTax;
    private String priceBeforeTax;
    private String status;
    private String category;
    private String image;
    private List<String> features;
    private String buttonText;
    private String brand;
    private String efficiency;
    private String displacement;
    private String type;
}