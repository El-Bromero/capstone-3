package com.capstone3.capstone3.api.controllers;

import com.capstone3.capstone3.api.entities.Product;
import com.capstone3.capstone3.api.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    @PostMapping
    public Product addProduct(@RequestBody Product product) {
        return productService.saveProduct(product);
    }

//    @PostMapping
//    public Iterable<Product> addProducts(@RequestBody List<Product> products) {
//        return productService.saveProducts(products);
//    }

    @GetMapping
    public Iterable<Product> findAllProducts() {
        return productService.getProducts();
    }

    @GetMapping(path = "/id/{id}")
    public Product findProductById(@PathVariable int id) {
        return productService.getProductById(id);
    }

    @GetMapping(path = "/name/{name}")
    public Product findProductByName(@PathVariable String name) {
        return productService.getProductByName(name);
    }

    @PutMapping(path = "/id/{id}")
    public Product updateProduct(@PathVariable int id, @RequestBody Product product) {
        return productService.updateProduct(id, product);
    }

    @DeleteMapping(path = "/id/{id}")
    public void deleteProduct(@PathVariable int id) {
        productService.deleteProduct(id);
    }
}
