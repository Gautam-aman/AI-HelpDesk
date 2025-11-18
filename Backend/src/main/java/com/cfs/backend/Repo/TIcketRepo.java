package com.cfs.backend.Repo;

import com.cfs.backend.entity.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface TIcketRepo extends JpaRepository<Ticket, Long> {
    Optional<Ticket> findById(Long ticketId);
   Optional<Ticket> findByUsername(String name);
}
