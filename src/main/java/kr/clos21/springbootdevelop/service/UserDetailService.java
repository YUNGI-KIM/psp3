package kr.clos21.springbootdevelop.service;

import lombok.RequiredArgsConstructor;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.repository.UserRepository;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserDetailService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public User loadUserByUsername(String email) {
        return userRepository.findByEmail(email)
                 .orElseThrow(() -> new IllegalArgumentException((email)));
    }
}
