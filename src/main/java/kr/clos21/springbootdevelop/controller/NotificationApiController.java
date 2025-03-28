package kr.clos21.springbootdevelop.controller;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Notification;
import kr.clos21.springbootdevelop.domain.User;
import kr.clos21.springbootdevelop.dto.*;
import kr.clos21.springbootdevelop.service.NotificationService;
import kr.clos21.springbootdevelop.service.UserDetailService;
import kr.clos21.springbootdevelop.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class NotificationApiController {

    private final NotificationService notificationService;
    private final UserDetailService userDetailService;

    @PostMapping("/api/notifications")
    public ResponseEntity<Notification> addNotification(@RequestBody AddNotificationRequest request) {
        User writer = userDetailService.loadUserByUsername(SecurityContextHolder.getContext().getAuthentication().getName());
        request.setUser(writer);
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
    public ResponseEntity<NotificationResponse> findNotificationById(@PathVariable long id) {
        try {
            Notification notification = notificationService.findById(id);

            return ResponseEntity.ok()
                    .body(new NotificationResponse(notification));
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/api/notifications/user/{userId}")
    public ResponseEntity<List<NotificationResponse>> findNotificationByUserId(@PathVariable Long userId) {
        try {
            List<NotificationResponse> notifications = notificationService.findNotificationByUserId(userId)
                    .stream()
                    .toList();

            return ResponseEntity.ok()
                    .body(notifications);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
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
        try {
            Notification updatedNotification = notificationService.update(id, request);

            return ResponseEntity.ok()
                    .body(updatedNotification);
        } catch (EntityNotFoundException ENFE) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND);
        }
    }
}

