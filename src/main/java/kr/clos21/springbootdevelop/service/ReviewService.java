package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Review;
import kr.clos21.springbootdevelop.dto.AddReviewRequest;
import kr.clos21.springbootdevelop.dto.ReviewResponse;
import kr.clos21.springbootdevelop.dto.UpdateReviewRequest;
import kr.clos21.springbootdevelop.repository.*;
import kr.clos21.springbootdevelop.repository.ReviewRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;


@RequiredArgsConstructor
@Service
public class ReviewService {
    private final ReviewRepository reviewRepository;
    private final ProductRepository productRepository;
    private final UserRepository userRepository;

    @Transactional
    @CacheEvict(cacheNames = {"allReviews", "productReviews"}, allEntries = true)
    public Review save(AddReviewRequest request) {
        return reviewRepository.save(request.toEntity());
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "allReviews")
    public List<Review> findAll() {
        return reviewRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "productReviews")
    public List<ReviewResponse> findReviewsByProductId(Long productId) {
        productRepository.findById(productId)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Article with ID %d not found", productId)));
        List<Review> reviews = reviewRepository.findReviewsByProductId(productId);


        return reviews.stream()
                .map(ReviewResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "productReviews")
    public List<ReviewResponse> findReviewsByUserId(Long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + userId));
        List<Review> reviews = reviewRepository.findReviewsByUserId(userId);

        return reviews.stream()
                .map(ReviewResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    @CacheEvict(cacheNames = {"allReviews", "productReviews"}, allEntries = true)
    public void delete(long id) {
        reviewRepository.deleteById(id);
    }

    @Transactional
    @CacheEvict(cacheNames = {"allReviews", "productReviews"}, allEntries = true)
    public Review update(long id, UpdateReviewRequest request) {
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException(String.format("Review with ID %d not found", id)));

        review.update(request.getContent(), request.getRate());

        return review;
    }

}