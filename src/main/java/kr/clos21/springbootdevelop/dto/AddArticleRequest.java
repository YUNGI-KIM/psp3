package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.User;
import lombok.*;
import kr.clos21.springbootdevelop.domain.Article;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class AddArticleRequest {
    private String title;
    private String content;
    private User user;

    public Article toEntity() {
        return Article.builder()
                .title(title)
                .content(content)
                .user(user)
                .build();
    }
}
