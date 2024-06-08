package kr.clos21.springbootdevelop.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class mainController {
    @GetMapping("/")
    public String home() {
        return "clos21.kr API Home.";
    }

}
