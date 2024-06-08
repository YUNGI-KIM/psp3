package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.domain.User;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collector;

@Getter
public class CommentResponse {
    private final Long id;
    private final Long articleId;
    private final Long userId;
    private final String comment;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;


    public CommentResponse(Comment comment) {
        this.id = comment.getId();
        this.articleId = comment.getArticle().getId();
        this.userId = comment.getUser().getId();
        this.comment = comment.getComment();
        this.createdAt = comment.getCreatedAt();
        this.updatedAt = comment.getUpdatedAt();
    }
}
