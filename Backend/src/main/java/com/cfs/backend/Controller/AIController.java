package com.cfs.backend.Controller;

import com.cfs.backend.Service.AIService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

@RestController
@RequiredArgsConstructor
@Getter
@Setter
@RequestMapping("api/v1/helpdesk")
public class AIController {

    private final AIService aiService;

    @PostMapping
    public ResponseEntity<String>  getResponse(@RequestBody String query , @RequestHeader("ConversationId")  String ConvoId){
        return ResponseEntity.ok(aiService.getResponse(query , ConvoId));
    }

    @PostMapping("/stream")
    public Flux<String> streamResponse(@RequestBody String query , @RequestHeader("ConversationId")  String ConvoId){
        return this.aiService.streamResponse(query,ConvoId);
    }

}
