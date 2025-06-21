package khu_swcon.myanalyst.repository;

import khu_swcon.myanalyst.entity.Chat;
import khu_swcon.myanalyst.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ChatRepository extends JpaRepository<Chat, Integer> {
    List<Chat> findByReport(Report report);
}
