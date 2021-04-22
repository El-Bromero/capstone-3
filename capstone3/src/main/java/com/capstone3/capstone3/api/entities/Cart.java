package com.capstone3.capstone3.api.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "cart")
public class Cart {

    @Id
    private int cartId;

    @OneToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product productCart;

    private int product_quantity;

}
