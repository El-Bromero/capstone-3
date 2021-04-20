package com.capstone3.capstone3.api.controllers;

import com.capstone3.capstone3.api.entities.User;
import com.capstone3.capstone3.api.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping(path = "/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public User addUser(@RequestBody User user) {
        return userService.saveUser(user);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public Iterable<User> findAllUsers() {
        return userService.getUsers();
    }

    @GetMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Optional<User> findUserById(@PathVariable int id) {
        return userService.getUserById(id);
    }

    @PutMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.OK)
    public User updateUser(@PathVariable int id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @DeleteMapping(path = "/id/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteUser(@PathVariable int id) {
        userService.deleteUser(id);
    }
}
