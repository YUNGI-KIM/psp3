package kr.clos21.springbootdevelop.controller;

import jakarta.persistence.EntityNotFoundException;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kr.clos21.springbootdevelop.config.UserAuthenticationSuccessHandler;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.AddLoginHistoryRequest;
import kr.clos21.springbootdevelop.dto.AddUserRequest;
import kr.clos21.springbootdevelop.dto.UserResponse;
import kr.clos21.springbootdevelop.repository.UserRepository;
import kr.clos21.springbootdevelop.service.LoginHistoryService;
import kr.clos21.springbootdevelop.service.UserDetailService;
import kr.clos21.springbootdevelop.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.server.ResponseStatusException;

import java.io.IOException;

@RequiredArgsConstructor
@Controller
public class UserApiController {
    private final UserService userService;
    private final UserDetailService userDetailService;
    private final LoginHistoryService loginHistoryService;

    @PostMapping("/user")
    public ResponseEntity<String> signup(AddUserRequest request) {
        userService.save(request);
        return new ResponseEntity<>("create success", HttpStatus.CREATED);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<UserResponse> getUserByUserId(@PathVariable long userId) {
        try {
            User user = userDetailService.findByUserId(userId);

            return ResponseEntity.ok()
                    .body(new UserResponse(user));
        } catch(EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/user/email/{email}")
    public ResponseEntity<UserResponse> getUserByUserId(@PathVariable String email) {
        try {
            User user = userDetailService.loadUserByUsername(email);

            return ResponseEntity.ok()
                    .body(new UserResponse(user));
        } catch(EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
        return new ResponseEntity<>("logout success", HttpStatus.OK);
    }

    @GetMapping("/login-success")
    public ResponseEntity<String> success(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws ServletException, IOException {
        onAuthenticationSuccess(request, response, authentication);
        return new ResponseEntity<>("success", HttpStatus.OK);
    }

    @GetMapping("/success")
    public ResponseEntity<String> success() { return new ResponseEntity<>("success", HttpStatus.OK); }

    public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication)
            throws IOException, ServletException {
        try {
            Object principal = authentication.getPrincipal();
            UserDetails userDetails = (UserDetails) principal;

            String username = userDetails.getUsername();
            User user = userDetailService.loadUserByUsername(username);

            String clientIp = "";
            if (request != null) {
                clientIp = request.getHeader("X-Forwarded-For");
                if (clientIp == null || clientIp.isEmpty()) {
                    clientIp = request.getRemoteAddr();
                }
            }
            String userAgent = request.getHeader("User-Agent");

            AddLoginHistoryRequest addRequest = new AddLoginHistoryRequest();
            addRequest.setUser(user);
            addRequest.setUserAgent(userAgent);
            addRequest.setClientIp(clientIp);
            loginHistoryService.saveLogonLogin(addRequest);
        } catch (Exception e) {
            throw new ServletException("Error during authentication success handling", e);
        }
    }
}
