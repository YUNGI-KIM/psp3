package kr.clos21.springbootdevelop.domain;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.List;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Getter
@Setter
@NoArgsConstructor
@SuperBuilder
public abstract class BaseProduct extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String category;

    @Column
    private String image;

    @ElementCollection
    @CollectionTable(name = "product_features", joinColumns = @JoinColumn(name = "product_id"))
    @Column(name = "feature")
    private List<String> features;

    @Column
    private String buttonText;

    protected BaseProduct(String name, String category, String image, List<String> features, String buttonText) {
        this.name = name;
        this.category = category;
        this.image = image;
        this.features = features;
        this.buttonText = buttonText;
    }
}