package com.cfs.backend.Service;

import com.cfs.backend.Repo.TIcketRepo;
import com.cfs.backend.entity.Ticket;
import lombok.*;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Getter
@Setter
@RequiredArgsConstructor
public class TIcketService {

    private final TIcketRepo repo;

    // Create ticket

    @Transactional
    public Ticket CreateTicket(Ticket ticket){
        ticket.setId(null);
        return repo.save(ticket);
    }

    // Update

    public Ticket UpdateTicket(Ticket ticket){
        return repo.save(ticket);
    }

    //get ticket
    public Ticket findById(Long id){
        return repo.findById(id).orElse(null);
    }

    public Ticket findByName(String name){
        return repo.findByUsername(name).orElse(null);
    }

}
