package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Notification;
import kr.clos21.springbootdevelop.domain.User;
import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class AddNotificationRequest {
    private String title;
    private String content;
    private Boolean emergency;
    private User user;

    public Notification toEntity() {
        return Notification.builder()
                .title(title)
                .content(content)
                .emergency(emergency)
                .user(user)
                .build();
    }
}
