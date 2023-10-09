package com.moviemania.movielisting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moviemania.movielisting.model.Movie;
import com.moviemania.movielisting.service.UserService;
@CrossOrigin("*")
@RestController
@RequestMapping("/user/movie")
public class UserController {
	
	@Autowired
	UserService service;
	
	
	@GetMapping("/moviename")
	public List<Movie> searchMovieByName(@RequestParam String movieName) {
		return service.searchMovieByName(movieName);
	}
	
	@GetMapping("/actor")
	public List<Movie> searchMovieByActor(@RequestParam String actor){
		return service.searchMovieByActor(actor);
	}

}
