package kr.clos21.springbootdevelop.repository;

import kr.clos21.springbootdevelop.domain.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
