package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.domain.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findReviewsByProductId(Long productId);
    List<Review> findReviewsByUserId(Long userId);
}
