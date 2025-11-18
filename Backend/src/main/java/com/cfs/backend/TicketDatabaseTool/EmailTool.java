package com.cfs.backend.TicketDatabaseTool;

import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.stereotype.Component;

@Component
public class EmailTool {

    // Send email to support team regarding new tickets
    @Tool(description = "this tool help in sending email to support team")
    public void sendEmail (@ToolParam(description = "Help in sending email to support team") String email , @ToolParam(description = "Short desc of issue") String message){

    }

}
