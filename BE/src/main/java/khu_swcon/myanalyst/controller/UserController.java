package khu_swcon.myanalyst.controller;

import khu_swcon.myanalyst.dto.UserDto;
import khu_swcon.myanalyst.exception.InvalidPasswordException;
import khu_swcon.myanalyst.exception.UserNotFoundException;
import khu_swcon.myanalyst.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
    
    private final UserService userService;
    
    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @PostMapping("/users")
    public ResponseEntity<?> registerUser(@RequestBody UserDto userDto) {
        try {
            userService.registerUser(userDto);
            return new ResponseEntity<>("", HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
    
    @PostMapping("/sessions")
    public ResponseEntity<?> login(@RequestBody UserDto userDto) {
        try {
            userService.login(userDto);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (UserNotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        } catch (InvalidPasswordException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.UNAUTHORIZED);
        } catch (Exception e) {
            return new ResponseEntity<>("로그인 중 오류가 발생했습니다", HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
