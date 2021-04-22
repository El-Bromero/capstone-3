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
        Optional<Cart> oCart = getCartById(cart.getCartId());

        if(oCart.isPresent()) {
            return updateCart(cart.getCartId(), cart);
        }
        return cartRepo.save(cart);
    }

    public Iterable<Cart> getCarts() {
        return cartRepo.findAll();
    }

    public Optional<Cart> getCartById(int id) {
        return cartRepo.findById(id);
    }

    public void deleteCart(int id) {
        Optional<Cart> oCart = getCartById(id);
        if(oCart.isPresent()) {
            Cart alreadyPresentCart = oCart.get();
            alreadyPresentCart.setProduct_quantity(alreadyPresentCart.getProduct_quantity()-1);
            System.out.println(alreadyPresentCart.getProduct_quantity());
            if(alreadyPresentCart.getProduct_quantity() > 0) {
                cartRepo.save(alreadyPresentCart);
            }
            else {
                cartRepo.deleteById(id);
            }
            //return;
        }
        //cartRepo.deleteById(id);
    }

    public Cart updateCart(int id, Cart cart) {
        Optional<Cart> oCart = getCartById(id);
        System.out.println("Hey");
        if(oCart.isPresent()) {
            Cart alreadyPresentCart = oCart.get();
            alreadyPresentCart.setProduct_quantity(alreadyPresentCart.getProduct_quantity()+1);
            //System.out.println(alreadyPresentCart);
            return cartRepo.save(alreadyPresentCart);
        }
        System.out.println("Listen");
        return cart;
    }
}
