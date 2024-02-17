package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}

