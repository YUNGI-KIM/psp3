package kr.clos21.springbootdevelop.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.env.Environment;
import org.springframework.core.env.PropertySource;
import org.springframework.stereotype.Component;

@Component
public class propertiesPrint implements CommandLineRunner {

    @Autowired
    private Environment env;

    @Override
    public void run(String... args) throws Exception {
        for (PropertySource<?> propertySource : ((org.springframework.core.env.AbstractEnvironment) env).getPropertySources()) {
            System.out.println(propertySource.getName() + ": " + propertySource.getSource());
        }
    }
}
