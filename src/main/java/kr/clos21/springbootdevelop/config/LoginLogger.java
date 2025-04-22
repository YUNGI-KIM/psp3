package kr.clos21.springbootdevelop.config;

import jakarta.servlet.http.HttpServletRequest;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.AddLoginHistoryRequest;
import kr.clos21.springbootdevelop.service.LoginHistoryService;
import kr.clos21.springbootdevelop.service.UserDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class LoginLogger {

    private final LoginHistoryService loginHistoryService;
    private final UserDetailService userDetailService;

    public void recordLogin(HttpServletRequest request, Authentication authentication) {
        try {
            Object principal = authentication.getPrincipal();
            UserDetails userDetails = (UserDetails) principal;
            String username = userDetails.getUsername();
            User user = userDetailService.loadUserByUsername(username);

            String clientIp = request.getHeader("X-Forwarded-For");
            if (clientIp == null || clientIp.isEmpty()) {
                clientIp = request.getRemoteAddr();
            }

            String userAgent = request.getHeader("User-Agent");

            AddLoginHistoryRequest addRequest = new AddLoginHistoryRequest();
            addRequest.setUser(user);
            addRequest.setUserAgent(userAgent);
            addRequest.setClientIp(clientIp);

            loginHistoryService.saveLogonLogin(addRequest);
        } catch (Exception e) {
            e.printStackTrace(); // 또는 log.error()
        }
    }
}

