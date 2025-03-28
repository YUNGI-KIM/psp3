package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.LoginHistory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoginHistoryRepository extends JpaRepository<LoginHistory, Long> {
    // 회원 목록에 회원 별 마지막 로그인 일자 추가를 위한 메소드
    List<LoginHistory> findLoginHistoriesByUserIdOrderByLoginDtDesc(Long userId);
}
