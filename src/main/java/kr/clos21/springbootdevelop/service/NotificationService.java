package kr.clos21.springbootdevelop.service;

import jakarta.transaction.Transactional;
import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Notification;
import kr.clos21.springbootdevelop.dto.AddNotificationRequest;
import kr.clos21.springbootdevelop.dto.NotificationResponse;
import kr.clos21.springbootdevelop.dto.UpdateNotificationRequest;
import kr.clos21.springbootdevelop.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class NotificationService {

    private final NotificationRepository notificationRepository;

    public Notification save(AddNotificationRequest request) {
        return notificationRepository.save(request.toEntity());
    }

    public List<Notification> findAll() {
        return notificationRepository.findAll();
    }

    public Notification findById(long id) {
        return notificationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));
    }

    public void delete(long id) {
        notificationRepository.deleteById(id);
    }

    @Transactional
    public Notification update(long id, UpdateNotificationRequest request) {
        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("not found : " + id));

        notification.update(request.getTitle(), request.getContent(), request.getEmergency());

        return notification;
    }
}
