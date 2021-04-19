package com.capstone3.capstone3.api.services;

import com.capstone3.capstone3.api.entities.Product;
import com.capstone3.capstone3.api.repos.iProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private iProductRepo productRepo;

    public Product saveProduct(Product product) {
        return productRepo.save(product);
    }

    public Iterable<Product> saveProducts(List<Product> products) {
        return productRepo.saveAll(products);
    }

    public Iterable<Product> getProducts() {
        return productRepo.findAll();
    }

    public Product getProductById(int id) {
        return productRepo.findById(id).orElse(null);
    }

    public Product getProductByName(String name) {
        return productRepo.findByName(name);
    }

    public void deleteProduct(int id) {
        productRepo.deleteById(id);
    }

    public Product updateProduct(int id, Product product) {
//        Product existingProduct = productRepo.findById(product.getId()).orElse(null);
//        existingProduct.setName(product.getName());
//        existingProduct.setPrice(product.getPrice());
//        existingProduct.setQuantity(product.getQuantity());
//        existingProduct.setProductImg(product.getProductImg());
//        return productRepo.save(existingProduct);
        Optional<Product> oProduct = Optional.ofNullable(getProductById(id));
        if (oProduct.isPresent()) {
            Product modifiedProduct = oProduct.get();
            modifiedProduct.setName(product.getName());
            modifiedProduct.setPrice(product.getPrice());
            modifiedProduct.setQuantity(product.getQuantity());
            modifiedProduct.setProductImg(product.getProductImg());
            return productRepo.save(modifiedProduct);
        }
        return product;
    }
}
