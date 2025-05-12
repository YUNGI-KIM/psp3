package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.dto.AddArticleRequest;
import kr.clos21.springbootdevelop.dto.ArticleResponse;
import kr.clos21.springbootdevelop.dto.UpdateArticleRequest;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import kr.clos21.springbootdevelop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
@Transactional
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    @CachePut(cacheNames = "articles", key = "#result.id")
    public Article save(AddArticleRequest request) {
        return articleRepository.save(request.toEntity());
    }


    @Cacheable(cacheNames = "articles")
    public List<Article> findAll() {
        return articleRepository.findAll();
    }


    @Cacheable(cacheNames = "articles", key = "#id")
    public Article findById(long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + id));
    }


    @Cacheable(cacheNames = "articles", key="#userId")
    public List<ArticleResponse> findArticlesByUserId(long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + userId));
        List<Article> articles = articleRepository.findArticlesByUserId(userId);

        return articles.stream()
                .map(ArticleResponse::new)
                .collect(Collectors.toList());
    }

    @CacheEvict(cacheNames = "articles", allEntries = true)
    public void delete(long id) {
        articleRepository.deleteById(id);
    }

    @CachePut(cacheNames = "articles", key = "#id")
    public Article update(long id, UpdateArticleRequest request) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + id));

        article.update(request.getTitle(), request.getContent(), request.getStatus());

        return article;
    }

    @Cacheable(cacheNames = "articles", key = "'status_' + #status")
    public List<ArticleResponse> findArticlesByStatus(int status) {
        List<Article> articles = articleRepository.findArticlesByStatus(status);
        return articles.stream()
                .map(ArticleResponse::new)
                .collect(Collectors.toList());
    }
}

