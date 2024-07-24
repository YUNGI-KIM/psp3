package kr.clos21.springbootdevelop.config;

import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.AddLoginHistoryRequest;
import kr.clos21.springbootdevelop.service.LoginHistoryService;
import kr.clos21.springbootdevelop.service.UserDetailService;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;

import java.io.IOException;

public class UserAuthenticationSuccessHandler extends SimpleUrlAuthenticationSuccessHandler {
    private final LoginHistoryService loginHistoryService;
    private final UserDetailService userDetailService;

    public UserAuthenticationSuccessHandler(LoginHistoryService loginHistoryService, UserDetailService userDetailService) {
        this.loginHistoryService = loginHistoryService;
        this.userDetailService = userDetailService;
    }

    @Override
    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
        Object principal = authentication.getPrincipal();
        UserDetails userDetails = (UserDetails) principal;

        String username = userDetails.getUsername();
        User user = userDetailService.loadUserByUsername(username);
        String clientIp = request.getRemoteAddr();
        String userAgent = request.getHeader("User-Agent");

        AddLoginHistoryRequest addRequest = new AddLoginHistoryRequest();
        addRequest.setUser(user);
        addRequest.setUserAgent(userAgent);
        addRequest.setClientIp(clientIp);
        loginHistoryService.saveLogonLogin(addRequest);

        super.onAuthenticationSuccess(request, response, authentication);
    }
}
