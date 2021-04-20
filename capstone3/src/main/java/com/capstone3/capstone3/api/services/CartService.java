package com.capstone3.capstone3.api.services;

import com.capstone3.capstone3.api.entities.Cart;
import com.capstone3.capstone3.api.repos.iCartRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private iCartRepo cartRepo;

    public Cart saveCart(Cart cart) {
        return cartRepo.save(cart);
    }

    public Iterable<Cart> getCarts() {
        return cartRepo.findAll();
    }

    public Optional<Cart> getCartById(int id) {
        return cartRepo.findById(id);
    }

    public void deleteCart(int id) {
        cartRepo.deleteById(id);
    }

    public Cart updateCart(int id, Cart cart) {
        Optional<Cart> oCart = getCartById(id);

        if(oCart.isPresent()) {
            Cart modifiedCart = oCart.get();

        }
        return cart;
    }
}
