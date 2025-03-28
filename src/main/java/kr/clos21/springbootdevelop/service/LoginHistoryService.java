package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.LoginHistory;
import kr.clos21.springbootdevelop.dto.AddLoginHistoryRequest;
import kr.clos21.springbootdevelop.dto.LoginHistoryResponse;
import kr.clos21.springbootdevelop.repository.LoginHistoryRepository;
import kr.clos21.springbootdevelop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class LoginHistoryService {
    private final LoginHistoryRepository loginHistoryRepository;
    private final UserRepository userRepository;

    @Transactional
    public LoginHistory saveLogonLogin(AddLoginHistoryRequest request) { return loginHistoryRepository.save(request.toEntity()); }

    @Transactional(readOnly = true)
    public List<LoginHistory> findAll() { return loginHistoryRepository.findAll(); }

    @Transactional(readOnly = true)
    public List<LoginHistoryResponse> findLoginHistoriesByUserIdOrderByLoginDtDesc(Long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + userId));
        List<LoginHistory> histories = loginHistoryRepository.findLoginHistoriesByUserIdOrderByLoginDtDesc(userId);

        return histories.stream()
                .map(LoginHistoryResponse::new)
                .collect(Collectors.toList());
    }

}
