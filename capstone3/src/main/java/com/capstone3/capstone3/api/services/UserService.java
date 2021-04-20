package com.capstone3.capstone3.api.services;

import com.capstone3.capstone3.api.entities.User;
import com.capstone3.capstone3.api.repos.iUserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private iUserRepo userRepo;

    public User saveUser(User user) {
        return userRepo.save(user);
    }

    public Iterable<User> getUsers() {
        return userRepo.findAll();
    }

    public Optional<User> getUserById(int id) {
        return userRepo.findById(id);
    }

    public void deleteUser(int id) {
        userRepo.deleteById(id);
    }

    public User updateUser(int id, User user) {
        Optional<User> oUser = getUserById(id);
        if (oUser.isPresent()) {
            User modifiedUser = oUser.get();
            modifiedUser.setName(user.getName());
            return userRepo.save(modifiedUser);
        }
        return user;
    }
}
