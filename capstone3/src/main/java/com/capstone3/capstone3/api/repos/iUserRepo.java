package com.capstone3.capstone3.api.repos;

import com.capstone3.capstone3.api.entities.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface iUserRepo extends CrudRepository<User, Integer> {
}
