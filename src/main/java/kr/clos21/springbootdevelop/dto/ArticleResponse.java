package kr.clos21.springbootdevelop.dto;

import lombok.Getter;
import kr.clos21.springbootdevelop.domain.Article;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class ArticleResponse {

    private final String title;
    private final String content;
    private final List<CommentResponse> comments;

    public ArticleResponse(Article article) {
        this.title = article.getTitle();
        this.content = article.getContent();
        this.comments = article.getComments().stream().map(CommentResponse::new).collect(Collectors.toList());
    }
}
