package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.LoginHistory;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class LoginHistoryResponse {
    private final Long id;
    private final Long userId;
    private final String clientIp;
    private final String userAgent;
    private final LocalDateTime loginDt;

    public LoginHistoryResponse(LoginHistory loginHistory) {
        this.id = loginHistory.getId();
        this.userId = loginHistory.getUser().getId();
        this.clientIp = loginHistory.getClientIp();
        this.userAgent = loginHistory.getUserAgent();
        this.loginDt = loginHistory.getLoginDt();
    }
}
