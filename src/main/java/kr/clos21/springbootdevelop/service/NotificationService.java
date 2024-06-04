package kr.clos21.springbootdevelop.service;

import jakarta.persistence.EntityNotFoundException;
import kr.clos21.springbootdevelop.domain.Notification;
import kr.clos21.springbootdevelop.dto.AddNotificationRequest;
import kr.clos21.springbootdevelop.dto.UpdateNotificationRequest;
import kr.clos21.springbootdevelop.repository.NotificationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.CachePut;
import org.springframework.stereotype.Service;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@RequiredArgsConstructor
@Service
@Transactional
public class NotificationService {

    private final NotificationRepository notificationRepository;

    @CachePut(cacheNames = "notifications", key = "#result.id")
    public Notification save(AddNotificationRequest request) {
        return notificationRepository.save(request.toEntity());
    }

    @Cacheable(cacheNames = "notifications")
    public List<Notification> findAll() {
        return notificationRepository.findAll();
    }

    @Cacheable(cacheNames = "notifications", key = "#id")
    public Notification findById(long id) {
        return notificationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + id));
    }

    @CacheEvict(cacheNames = "notifications", allEntries = true)
    public void delete(long id) {
        notificationRepository.deleteById(id);
    }

    @CachePut(cacheNames = "notifications", key = "#id")
    public Notification update(long id, UpdateNotificationRequest request) {
        Notification notification = notificationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("not found : " + id));

        notification.update(request.getTitle(), request.getContent(), request.getEmergency());

        return notification;
    }
}
