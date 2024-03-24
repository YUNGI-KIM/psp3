package kr.clos21.springbootdevelop.controller;

import kr.clos21.springbootdevelop.domain.Notification;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.service.NotificationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class NotificationApiController {

    private final NotificationService notificationService;

    @PostMapping("/api/notifications")
    public ResponseEntity<Notification> addNotification(@RequestBody AddNotificationRequest request) {
        Notification savedNotification = notificationService.save(request);

        return ResponseEntity.status(HttpStatus.CREATED)
                .body(savedNotification);
    }

    @GetMapping("/api/notifications")
    public ResponseEntity<List<NotificationResponse>> findAllNotifications() {
        List<NotificationResponse> notifications = notificationService.findAll()
                .stream()
                .map(NotificationResponse::new)
                .toList();

        return ResponseEntity.ok()
                .body(notifications);
    }
    @GetMapping("/api/notifications/{id}")
    public ResponseEntity<NotificationResponse> findNotification(@PathVariable long id) {
        Notification notification = notificationService.findById(id);

        return ResponseEntity.ok()
                .body(new NotificationResponse(notification));
    }

    @DeleteMapping("/api/notifications/{id}")
    public ResponseEntity<Void> deleteNotification(@PathVariable long id) {
        notificationService.delete(id);

        return ResponseEntity.ok()
                .build();
    }

    @PutMapping("/api/notifications/{id}")
    public ResponseEntity<Notification> updateNotification(@PathVariable long id,
                                                 @RequestBody UpdateNotificationRequest request) {
        Notification updatedNotification = notificationService.update(id, request);

        return ResponseEntity.ok()
                .body(updatedNotification);
    }

}

