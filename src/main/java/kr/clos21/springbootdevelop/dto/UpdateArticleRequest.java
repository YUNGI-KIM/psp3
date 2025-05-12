package kr.clos21.springbootdevelop.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class UpdateArticleRequest {
    private String title;
    private String content;
    private int status = 0;
}
