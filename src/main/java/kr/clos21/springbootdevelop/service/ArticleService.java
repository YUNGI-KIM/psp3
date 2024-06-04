package kr.clos21.springbootdevelop.service;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.dto.AddArticleRequest;
import kr.clos21.springbootdevelop.dto.ArticleResponse;
import kr.clos21.springbootdevelop.dto.UpdateArticleRequest;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import kr.clos21.springbootdevelop.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final UserRepository userRepository;

    @Transactional
    public Article save(AddArticleRequest request) {
        return articleRepository.save(request.toEntity());
    }

    @Transactional
    @Cacheable(cacheNames = "articles")
    public List<Article> findAll() {
        return articleRepository.findAll();
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "articles")
    public Article findById(long id) {
        return articleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));
    }

    @Transactional(readOnly = true)
    @Cacheable(cacheNames = "articles")
    public List<ArticleResponse> findArticlesByUserId(long userId) {
        userRepository.findById(userId)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + userId));
        List<Article> articles = articleRepository.findArticlesByUserId(userId);

        return articles.stream()
                .map(ArticleResponse::new)
                .collect(Collectors.toList());
    }

    public void delete(long id) {
        articleRepository.deleteById(id);
    }

    @Transactional
    public Article update(long id, UpdateArticleRequest request) {
        Article article = articleRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));

        article.update(request.getTitle(), request.getContent());

        return article;
    }
}
