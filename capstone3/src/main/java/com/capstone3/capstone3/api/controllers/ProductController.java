package com.capstone3.capstone3.api.controllers;

import com.capstone3.capstone3.api.entities.Product;
import com.capstone3.capstone3.api.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Product> findAllProducts() {
        return productService.getProducts();
    }

    @GetMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<Product> findProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @GetMapping(path = "/name/{name}")
    @ResponseStatus(HttpStatus.OK)
    public Product findProductByName(@PathVariable String name) {
        return productService.getProductByName(name);
    }

    @PutMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    @DeleteMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }
}
