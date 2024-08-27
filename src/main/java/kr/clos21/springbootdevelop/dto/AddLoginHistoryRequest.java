package kr.clos21.springbootdevelop.dto;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import kr.clos21.springbootdevelop.domain.LoginHistory;
import lombok.*;
import kr.clos21.springbootdevelop.domain.User;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class AddLoginHistoryRequest {
    @JsonBackReference
    private User user;
    private String clientIp;
    private String userAgent;

    public LoginHistory toEntity() {
        return LoginHistory.builder()
                .user(user)
                .clientIp(clientIp)
                .userAgent(userAgent)
                .build();
    }
}
