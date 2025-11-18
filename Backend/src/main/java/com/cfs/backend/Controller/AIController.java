package com.cfs.backend.Controller;

import com.cfs.backend.Service.AIService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@Getter
@Setter
@RequestMapping("api/v1/ai")
public class AIController {

    private final AIService aiService;

    @PostMapping
    public ResponseEntity<String>  getResponse(@RequestBody String query){
        return ResponseEntity.ok(aiService.getResponse(query));
    }

}
