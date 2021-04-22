package com.capstone3.capstone3.api.controllers;

import com.capstone3.capstone3.api.entities.Cart;
import com.capstone3.capstone3.api.services.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Cart addCart(@RequestBody Cart cart) {
        return cartService.saveCart(cart);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Cart> findAllCarts() {
        return cartService.getCarts();
    }

    @GetMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Cart> findCartById(@PathVariable int id) {
        return cartService.getCartById(id);
    }

    @PutMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Cart updateCart(@PathVariable int id, @RequestBody Cart cart) {
        return cartService.updateCart(id, cart);
    }

    @DeleteMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteCart(@PathVariable int id) {
        cartService.deleteCart(id);
    }
}
