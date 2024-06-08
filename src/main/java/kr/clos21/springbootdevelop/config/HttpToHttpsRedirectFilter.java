package kr.clos21.springbootdevelop.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.FilterConfig;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpFilter;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;

public class HttpToHttpsRedirectFilter extends HttpFilter {

    @Override
    protected void doFilter(HttpServletRequest request, HttpServletResponse response, FilterChain chain)
            throws IOException, ServletException {
        if (!request.isSecure()) {
            String redirectUrl = "https://" + request.getServerName() + request.getRequestURI() +
                    (request.getQueryString() != null ? "?" + request.getQueryString() : "");
            response.setStatus(HttpServletResponse.SC_TEMPORARY_REDIRECT); // 307
            response.setHeader("Location", redirectUrl);
        } else {
            chain.doFilter(request, response);
        }
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // 필터 초기화 로직이 필요한 경우 여기에 추가
    }

    @Override
    public void destroy() {
        // 필터 종료 로직이 필요한 경우 여기에 추가
    }
}

