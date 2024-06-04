package kr.clos21.springbootdevelop.dto;

import lombok.Getter;
import kr.clos21.springbootdevelop.domain.Article;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
public class ArticleResponse {
    private final Long articleId;
    private final String title;
    private final String content;
    private final Long userId;
    private final List<CommentResponse> comments;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;

    public ArticleResponse(Article article) {
        this.articleId = article.getId();
        this.title = article.getTitle();
        this.content = article.getContent();
        this.userId = article.getUser().getId();
        this.comments = article.getComments().stream().map(CommentResponse::new).collect(Collectors.toList());
        this.createdAt = article.getCreatedAt();
        this.updatedAt = article.getUpdatedAt();
    }
}
