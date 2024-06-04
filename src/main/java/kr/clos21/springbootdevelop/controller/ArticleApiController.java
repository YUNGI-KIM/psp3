package kr.clos21.springbootdevelop.controller;

import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.service.UserDetailService;
import lombok.RequiredArgsConstructor;
import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.dto.AddArticleRequest;
import kr.clos21.springbootdevelop.dto.ArticleResponse;
import kr.clos21.springbootdevelop.dto.UpdateArticleRequest;
import kr.clos21.springbootdevelop.service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class ArticleApiController {

    private final ArticleService articleService;
    private final UserDetailService userDetailService;

    @PostMapping("/api/articles")
    public ResponseEntity<Article> addArticle(@RequestBody AddArticleRequest request) {
        try {
            User writer = userDetailService.loadUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
            request.setUser(writer);
            Article savedArticle = articleService.save(request);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(savedArticle);
        } catch (IllegalArgumentException IAE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/articles")
    public ResponseEntity<List<ArticleResponse>> findAllArticles() {
        List<ArticleResponse> articles = articleService.findAll()
                .stream()
                .map(ArticleResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(articles);
    }

    @GetMapping("/api/articles/{id}")
    public ResponseEntity<ArticleResponse> findArticle(@PathVariable long id) {
        try {
            Article article = articleService.findById(id);

            return ResponseEntity.ok()
                    .body(new ArticleResponse(article));
        } catch (IllegalArgumentException IAE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/articles/user/{userId}")
    public ResponseEntity<List<ArticleResponse>> findArticlesByUserId(@PathVariable Long userId) {
        try{
            List<ArticleResponse> articles = articleService.findArticlesByUserId(userId)
                    .stream()
                    .toList();
            return ResponseEntity.ok()
                    .body(articles);
        } catch (IllegalArgumentException IAE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/api/articles/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable long id) {
        articleService.delete(id);

        return ResponseEntity.ok()
                .build();

    }

    @PutMapping("/api/articles/{id}")
    public ResponseEntity<Article> updateArticle(@PathVariable long id,
                                                 @RequestBody UpdateArticleRequest request) {
        try {
            Article updatedArticle = articleService.update(id, request);

            return ResponseEntity.ok()
                    .body(updatedArticle);
        } catch (IllegalArgumentException IAE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

}

