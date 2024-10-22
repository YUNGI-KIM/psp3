package kr.clos21.springbootdevelop.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;

@Component
public class propertiesPrint {

    @Value("${default:default_value}")
    private String yourProperty;

    @PostConstruct
    public void printProperties() {
        System.out.println("Your property: " + yourProperty);
    }
}
