package com.moviemania.movielisting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.moviemania.movielisting.model.Movie;
import com.moviemania.movielisting.service.MovieService;
@CrossOrigin("*")
@RequestMapping("/admin/movie")
@RestController
public class MovieController {

	@Autowired
	private MovieService service;

	@GetMapping("/getall")
	public List<Movie> viewMovie() {
		return service.viewMovie();
	}

	@PostMapping("/add")
	private Movie addMovie(@RequestBody Movie movie) {
		return service.addMovie(movie);
	}

	@PutMapping("/update")
	private Movie updateMovie(@RequestBody Movie movie) {
		return service.updateMovie(movie);
	}

	@DeleteMapping("/delete")
	private Movie deleteMovie(@RequestParam int movieId) {
		return service.deleteMovie(movieId);
	}

}
