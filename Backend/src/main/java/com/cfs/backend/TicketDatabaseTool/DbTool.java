package com.cfs.backend.TicketDatabaseTool;

import com.cfs.backend.Service.AIService;
import com.cfs.backend.Service.TIcketService;
import com.cfs.backend.entity.Ticket;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;
import org.springframework.ai.tool.annotation.Tool;
import org.springframework.ai.tool.annotation.ToolParam;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
@Getter
@Setter
public class DbTool {

    private final TIcketService tIcketService;

    @Tool(description = "This tool helps to create new ticket in database")
    public Ticket createTicket(@ToolParam(description = "Ticket details to create new ticket") Ticket ticket) {
       try{
           System.out.println("Creating a new ticket");
           return tIcketService.CreateTicket(ticket);
       }
       catch(Exception e){
           System.out.println(e.getMessage());
           return null;
       }
    }

    // get ticket using username;

    @Tool(description = "This tool help to search ticket by username")
    public Ticket getTicketByUsername(@ToolParam(description = "Username to get ticket") String username) {
        return tIcketService.findByName(username);
    }

    @Tool(description = "This tool help to update ticket by new ticket")
    public Ticket updateTicket(@ToolParam(description = "Ticket details to update ticket") Ticket ticket) {
        return tIcketService.UpdateTicket(ticket);
    }

    @Tool(description = "This tool help to get current system time")
    public String getCurrentTime(){
        return String.valueOf(System.currentTimeMillis());
    }



}
