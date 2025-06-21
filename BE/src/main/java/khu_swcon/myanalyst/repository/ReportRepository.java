package khu_swcon.myanalyst.repository;

import khu_swcon.myanalyst.entity.Report;
import khu_swcon.myanalyst.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report, Integer> {
    // JpaRepository provides basic CRUD operations
    
    // Find reports by user
    List<Report> findByUser(User user);
}
