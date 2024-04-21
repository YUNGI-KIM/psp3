package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.domain.User;
import lombok.Builder;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collector;

@Getter
public class CommentResponse {
    private final Long articleId;
    private final Long userId;
    private final String comment;


    public CommentResponse(Comment comment) {
        this.articleId = comment.getArticle().getId();
        this.userId = comment.getUser().getId();
        this.comment = comment.getComment();
    }



}
