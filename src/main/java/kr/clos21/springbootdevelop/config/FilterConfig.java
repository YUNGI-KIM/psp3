package kr.clos21.springbootdevelop.config;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {

    @Bean
    public FilterRegistrationBean<HttpToHttpsRedirectFilter> httpToHttpsRedirectFilter() {
        FilterRegistrationBean<HttpToHttpsRedirectFilter> registrationBean = new FilterRegistrationBean<>();
        registrationBean.setFilter(new HttpToHttpsRedirectFilter());
        registrationBean.addUrlPatterns("/*"); // 필터를 적용할 URL 패턴 설정
        return registrationBean;
    }
}

