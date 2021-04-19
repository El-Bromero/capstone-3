package com.capstone3.capstone3.api.repos;

import com.capstone3.capstone3.api.entities.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iProductRepo extends CrudRepository<Product, Integer> {
    Product findByName(String name);
}
