package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
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
                 .orElseThrow(() -> new EntityNotFoundException("not found: " + email));
    }

    public User findByUserId(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found: " + id));
    }
}
