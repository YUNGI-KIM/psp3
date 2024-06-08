package kr.clos21.springbootdevelop.dto;

import kr.clos21.springbootdevelop.domain.Notification;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class NotificationResponse {
    private final Long id;
    private final String title;
    private final String content;
    private final String emergency;
    private final Long userId;
    private final LocalDateTime createdAt;
    private final LocalDateTime updatedAt;

    public NotificationResponse(Notification notification) {
        this.id = notification.getId();
        this.title = notification.getTitle();
        this.content = notification.getContent();
        this.emergency = notification.getEmergencyToString();
        this.userId = notification.getUser().getId();
        this.createdAt = notification.getCreatedAt();
        this.updatedAt = notification.getUpdatedAt();
    }
}
