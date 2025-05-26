package kr.clos21.springbootdevelop.dto;

import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
public abstract class BaseProductDTO {
    protected String name;
    protected String status;
    protected String category;
    protected String image;
    protected List<String> features;
    protected String buttonText;


}