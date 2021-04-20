package com.capstone3.capstone3.api.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String name;

    @OneToOne(mappedBy = "userCart", cascade = CascadeType.REMOVE)
    private Cart cart;

    public User(String name) {
        this.name = name;
    }
}
