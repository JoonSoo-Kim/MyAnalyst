package khu_swcon.myanalyst.repository;

import khu_swcon.myanalyst.entity.Dictionary;
import khu_swcon.myanalyst.entity.Report;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DictionaryRepository extends JpaRepository<Dictionary, Integer> {
    List<Dictionary> findByReport(Report report);
    void deleteByReport(Report report);
}
