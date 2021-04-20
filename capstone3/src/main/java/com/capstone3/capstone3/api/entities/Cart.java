package com.capstone3.capstone3.api.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cart")
public class Cart {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int cartId;

    @OneToOne(optional = false)
    @JoinColumn(name = "user_id", referencedColumnName = "userId")
    private User userCart;

//    @OneToOne(optional = false)
//    @JoinColumn(name = "product_id", referencedColumnName = "id")
//    private Product productCart;

//    private int product_quantity;

//    @OneToMany(targetEntity = Product.class, mappedBy = "cartProduct")
//    private List<Product> products;

//    @ManyToOne(targetEntity = Product.class)
//    @JoinColumn(name = "id")
//    private Product productCart;
}
