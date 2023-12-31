package com.codewitharjun.fullstackbackend.controller;

import com.codewitharjun.fullstackbackend.exception.UserNotFoundException;
import com.codewitharjun.fullstackbackend.model.User;
import com.codewitharjun.fullstackbackend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/* Created by Arjun Gautam */
@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/v1")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/user")
    User newUser(@RequestBody User newUser) {
        return userRepository.save(newUser);
    }

    @GetMapping("/users")
    List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @GetMapping("/user/{id}")
    User getUserById(@PathVariable String id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    @PutMapping("/user/{id}")
    User updateUser(@RequestBody User newUser, @PathVariable String id) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setQuantity(newUser.getQuantity());
                    user.setPrice(newUser.getPrice());
                    return userRepository.save(user);
                }).orElseThrow(() -> new UserNotFoundException(id));
    }

    @DeleteMapping("/user/{id}")
    String deleteUser(@PathVariable String id){
        if(!userRepository.existsById(id)){
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
        return  "Stock with id "+id+" has been deleted success.";
    }



}
