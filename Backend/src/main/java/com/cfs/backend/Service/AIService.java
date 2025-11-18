package com.cfs.backend.Service;

import com.cfs.backend.TicketDatabaseTool.DbTool;
import com.cfs.backend.TicketDatabaseTool.EmailTool;
import jakarta.annotation.Resource;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Getter
@Setter
public class AIService {

    private final ChatClient chatClient;
    private final DbTool dbTool;
    private final EmailTool emailTool;

    @Value("classpath:/helpdesk-system.st")
    private String systemPrompt;

    // call to llm
    public String getResponse(String query , String ConvoId){
        return this.chatClient.
                prompt()
                .advisors(advisorSpec -> advisorSpec.param(ChatMemory.CONVERSATION_ID, ConvoId))
                .tools(dbTool , emailTool)
                .system(String.valueOf(systemPrompt))
                .user(query).
                call().
                content();
    }

}
