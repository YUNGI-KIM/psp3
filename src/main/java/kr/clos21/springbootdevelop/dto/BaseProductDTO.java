package kr.clos21.springbootdevelop.dto;

import java.util.List;

public abstract class BaseProductDTO {
    protected String name;
    protected String status;
    protected String category;
    protected String image;
    protected List<String> features;
    protected String buttonText;


}