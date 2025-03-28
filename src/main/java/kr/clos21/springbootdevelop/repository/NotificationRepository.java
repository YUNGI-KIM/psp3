package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.Article;
import kr.clos21.springbootdevelop.domain.Notification;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
    List<Notification> findNotificationsByUserId(Long userId);
}

