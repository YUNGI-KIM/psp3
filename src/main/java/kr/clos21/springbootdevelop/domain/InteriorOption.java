package kr.clos21.springbootdevelop.domain;

import jakarta.persistence.*;
import lombok.*;

@Embeddable
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class InteriorOption {
    private String key; // black, beige 등
    private String name;
    private String description;
    private String colorchip;
    private String interiorImage;
}
