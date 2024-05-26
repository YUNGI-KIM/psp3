package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Notification;
import kr.clos21.springbootdevelop.domain.User;
import lombok.Getter;

@Getter
public class NotificationResponse {

    private final String title;
    private final String content;
    private final String emergency;
    private final Long userId;

    public NotificationResponse(Notification notification) {
        this.title = notification.getTitle();
        this.content = notification.getContent();
        this.emergency = notification.getEmergencyToString();
        this.userId = notification.getUser().getId();
    }
}
