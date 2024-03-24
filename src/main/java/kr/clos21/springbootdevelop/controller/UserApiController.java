package kr.clos21.springbootdevelop.controller;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import kr.clos21.springbootdevelop.dto.AddUserRequest;
import kr.clos21.springbootdevelop.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

@RequiredArgsConstructor
@Controller
public class UserApiController {
    private final UserService userService;

    @PostMapping("/user")
    public ResponseEntity<String> signup(AddUserRequest request) {
        userService.save(request);
        return new ResponseEntity<>("create success", HttpStatus.CREATED);
    }
    @GetMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request, HttpServletResponse response) {
        new SecurityContextLogoutHandler().logout(request, response, SecurityContextHolder.getContext().getAuthentication());
        return new ResponseEntity<>("logout success", HttpStatus.OK);
    }
    @GetMapping("/success")
    public ResponseEntity<String> success() {
        return new ResponseEntity<>("success", HttpStatus.OK);
    }
}
