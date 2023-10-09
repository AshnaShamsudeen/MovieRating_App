package com.moviemania.movielisting.service;

import java.util.List;

import com.moviemania.movielisting.model.Movie;

public interface MovieService {
	
	public Movie addMovie(Movie movie);
	public Movie updateMovie(Movie movie);
	public Movie deleteMovie(int movieId);
	public List<Movie> viewMovie();

}
