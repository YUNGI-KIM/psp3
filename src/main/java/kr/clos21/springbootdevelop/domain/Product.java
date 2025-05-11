package kr.clos21.springbootdevelop.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.ColumnDefault;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import java.time.LocalDateTime;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@EntityListeners(AuditingEntityListener.class)
@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Product extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name; // 예: 소나타

    @Column
    private String description;

    @Column(nullable = false)
    private Long originalPrice;

    private Long discountedPrice;

    @Column(nullable = false)
    private String status; // 판매중, 시승가능 등

    // ✅ 상품 카테고리: car, electronics, etc
    @Column
    private String category;

    // ✅ 이미지 URL
    @Column
    private String image;

    // ✅ 자동차 기능 리스트
    @ElementCollection
    @CollectionTable(name = "product_features", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "feature")
    private List<String> features;

    // ✅ 프론트 버튼 텍스트 (예: "시승 신청")
    @Column
    private String buttonText;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonBackReference
    private User user;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference
    private Set<PurchasedProduct> purchasedProducts = new HashSet<>();

    @OneToMany(mappedBy = "product", fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
    @OrderBy("id asc")
    @JsonManagedReference
    private List<Review> reviews;

    @Builder
    public Product(String name, String description, Long originalPrice, String status, String category,
                   String image, List<String> features, String buttonText, User user) {
        this.name = name;
        this.description = description;
        this.originalPrice = originalPrice;
        this.status = status;
        this.category = category;
        this.image = image;
        this.features = features;
        this.buttonText = buttonText;
        this.user = user;
    }

    public void update(String name, String description, Long originalPrice, Long discountedPrice, String status,
                       String category, String image, List<String> features, String buttonText) {
        this.name = name;
        this.description = description;
        this.originalPrice = originalPrice;
        this.discountedPrice = discountedPrice;
        this.status = status;
        this.category = category;
        this.image = image;
        this.features = features;
        this.buttonText = buttonText;
    }
}