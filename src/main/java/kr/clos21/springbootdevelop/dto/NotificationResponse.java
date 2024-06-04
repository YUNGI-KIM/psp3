package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Notification;
import lombok.Getter;

@Getter
public class NotificationResponse {
    private final Long id;
    private final String title;
    private final String content;
    private final String emergency;
    private final Long userId;

    public NotificationResponse(Notification notification) {
        this.id = notification.getId();
        this.title = notification.getTitle();
        this.content = notification.getContent();
        this.emergency = notification.getEmergencyToString();
        this.userId = notification.getUser().getId();
    }
}
