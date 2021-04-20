package com.capstone3.capstone3.api.repos;

import com.capstone3.capstone3.api.entities.Cart;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iCartRepo extends CrudRepository<Cart, Integer> {
}
