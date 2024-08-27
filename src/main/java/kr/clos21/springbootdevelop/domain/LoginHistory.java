package kr.clos21.springbootdevelop.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.Entity;
import jakarta.persistence.EntityListeners;
import lombok.*;
import jakarta.persistence.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Table(name = "loginHistory")
@Getter
@Setter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Entity
@EntityListeners(AuditingEntityListener.class)
public class LoginHistory {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @CreatedDate
    @Column(name = "loginDt", updatable = false)
    private LocalDateTime loginDt; // 로그인 날짜

    @Column(name = "clientIp", nullable = false)
    private String clientIp;

    @Column(name = "userAgent", nullable = false)
    private String userAgent;

    @Builder
    public LoginHistory(User user, LocalDateTime loginDt, String clientIp, String userAgent) {
        this.user = user;
        this.loginDt = loginDt;
        this.clientIp = clientIp;
        this.userAgent = userAgent;
    }

}
