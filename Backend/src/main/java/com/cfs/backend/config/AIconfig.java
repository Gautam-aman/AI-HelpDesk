package com.cfs.backend.config;

import lombok.extern.slf4j.Slf4j;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.ai.chat.client.advisor.MessageChatMemoryAdvisor;
import org.springframework.ai.chat.client.advisor.SimpleLoggerAdvisor;
import org.springframework.ai.chat.memory.ChatMemory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Slf4j
@Configuration
public class AIconfig {

    Logger logger = org.slf4j.LoggerFactory.getLogger(this.getClass());

    @Bean
    public ChatClient chatClient(ChatClient.Builder chatClientBuilder , ChatMemory chatMemory){
        logger.info(chatClientBuilder.toString());
        logger.info(chatMemory.getClass().getName());
        return chatClientBuilder.
                defaultSystem("Summarise the reponse within 400 words").
                defaultAdvisors(new SimpleLoggerAdvisor() , MessageChatMemoryAdvisor.builder(chatMemory).build()).build();
    }

}
