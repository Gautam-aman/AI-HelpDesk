package com.cfs.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class KbChunk {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;

    private String Source;

    @Column(length = 500)
    private String text;

    @Column(columnDefinition = "text")
    private String embeddingJson;

}
