package com.moviemania.movielisting.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moviemania.movielisting.model.Rating;
import com.moviemania.movielisting.service.RatingService;
@CrossOrigin("*")
@RestController
@RequestMapping("/user/movie")
public class RatingController {
	@Autowired
	RatingService service;
	
	@PostMapping("/addRating")
	public Rating addRating(@RequestBody Rating rating) {
		return service.addRating(rating);
		
	}
//	
//	@GetMapping("/viewRating")
//	public R

}
