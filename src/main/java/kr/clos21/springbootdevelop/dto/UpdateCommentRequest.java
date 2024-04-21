package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Getter
public class UpdateCommentRequest {
    private String comment;
}
