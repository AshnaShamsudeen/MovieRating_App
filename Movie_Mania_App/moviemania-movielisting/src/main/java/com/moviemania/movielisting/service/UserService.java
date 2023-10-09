package com.moviemania.movielisting.service;

import java.util.List;



import com.moviemania.movielisting.model.Movie;

public interface UserService {
	public List<Movie> searchMovieByName(String movieName);
	public List<Movie> searchMovieByActor(String actor);
	

}
