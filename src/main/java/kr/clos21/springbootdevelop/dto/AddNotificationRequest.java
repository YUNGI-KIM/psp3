package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Notification;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Getter
public class AddNotificationRequest {
    private String title;
    private String content;
    private Boolean emergency;

    public Notification toEntity() {
        return Notification.builder()
                .title(title)
                .content(content)
                .emergency(emergency)
                .build();
    }
}
