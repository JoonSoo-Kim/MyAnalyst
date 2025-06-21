package khu_swcon.myanalyst.dto;

import com.fasterxml.jackson.annotation.JsonAlias;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReportDto {
    private String userid;
    private String title;
    private String chapter;
    private String content;
    private String indicator;
    
    @JsonAlias({"evaluation"})  // evaluation 필드도 evaluations에 매핑되도록 설정
    private String evaluations;
    
    private String company;
    private String date;
}
