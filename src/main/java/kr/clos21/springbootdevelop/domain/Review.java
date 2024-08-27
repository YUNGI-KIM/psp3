package kr.clos21.springbootdevelop.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;

@Table(name = "review")
@EntityListeners(AuditingEntityListener.class)
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Review extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content; // 리뷰 내용

    @Column(nullable = false)
    private Float rate;

    @ManyToOne
    @JoinColumn(name = "product_id")
    @JsonBackReference
    private Product product;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Builder
    public Review(String content, Float rate, Product product, User user, LocalDateTime createdAt, LocalDateTime updatedAt) {
        this.content = content;
        this.rate = rate;
        this.product = product;
        this.user = user;
        super.createdAt = createdAt;
        super.updatedAt = updatedAt;
    }

    public void update(String content, Float rate) {
        this.content = content;
        this.rate = rate;
    }
}

