package kr.clos21.springbootdevelop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
public class SpringBootDevelopApplication {

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDevelopApplication.class, args);
	}

}
