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
public class AccessoryProduct extends BaseProduct {

    @Column(nullable = false)
    private String price;

    @Column
    private String description;

    public AccessoryProduct(
            String name, String category, String image, List<String> features, String buttonText,
            String price, String description) {
        super(name, category, image, features, buttonText);
        this.price = price;
        this.description = description;
    }
}