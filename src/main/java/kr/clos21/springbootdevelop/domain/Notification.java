package kr.clos21.springbootdevelop.domain;

import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.List;

@Table(name = "notification")
@EntityListeners(AuditingEntityListener.class)
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Notification extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false)
    private Long id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "content", nullable = false)
    private String content;

    @Column(name = "emergency", nullable = false)
    private Boolean emergency = Boolean.FALSE;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;


    @Builder
    public Notification(String title, String content, Boolean emergency, User user, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.title = title;
        this.content = content;
        this.emergency = emergency;
        this.user = user;
        super.createdAt = createdAt;
        super.updatedAt = updatedAt;
    }

    public void update(String title, String content, Boolean emergency) {
        this.title = title;
        this.content = content;
        this.emergency = emergency;
    }

    public void setEmergency(Boolean emergency) {
        this.emergency = emergency;
    }
    public String getEmergencyToString() {
        return (this.emergency != null && this.emergency) ? "Y" : "N";
    }
}
