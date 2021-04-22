package com.capstone3.capstone3.api.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@NoArgsConstructor
@Entity
@Table(name = "product")
public class Product {

    private String name;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private double price;
    private String category;
    private int quantity;
    private String productImg;

//    @ManyToOne(targetEntity = Cart.class)
//    @JoinColumn(name = "cart_id")
//    private Cart cartProduct;

//    @OneToMany(targetEntity = Cart.class, mappedBy = "productCart")
//    private List<Cart> carts;

    @JsonIgnore
    @OneToOne(mappedBy = "productCart", cascade = CascadeType.REMOVE)
    private Cart cart;

    public Product(String name, double price, String category, int quantity, String productImg) {
        this.name = name;
        this.price = price;
        this.category = category;
        this.quantity = quantity;
        this.productImg = productImg;
    }
}
