package kr.clos21.springbootdevelop.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Comment;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.repository.ArticleRepository;
import lombok.*;
import org.springframework.web.bind.annotation.PathVariable;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class AddCommentRequest {
    private Long id;
    private Article article;
    private User user;
    private String comment;

    public Comment toEntity() {
        return Comment.builder()
                .article(article)
                .user(user)
                .comment(comment)
                .build();
    }
}
