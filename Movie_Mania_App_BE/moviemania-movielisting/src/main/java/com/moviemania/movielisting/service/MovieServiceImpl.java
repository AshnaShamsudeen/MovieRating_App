package com.moviemania.movielisting.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moviemania.movielisting.exception.MovieAlreadyExistException;
import com.moviemania.movielisting.exception.MovieNotFoundException;
import com.moviemania.movielisting.model.Movie;
import com.moviemania.movielisting.repository.ActorRepository;
import com.moviemania.movielisting.repository.MovieRepository;
@Service
public class MovieServiceImpl implements MovieService {
	@Autowired
	MovieRepository movieRepo;
	@Autowired
	ActorRepository actorRepo;

	@Override
	public Movie addMovie(Movie movie) {
		Optional<Movie> optMovie = movieRepo.findById(movie.getMovieId());
		if (optMovie.isPresent()) {
			throw new MovieAlreadyExistException("Movie Already Exist");
		}
		Movie newMovie = movieRepo.save(movie);
		return newMovie;
	}

	@Override
	public Movie updateMovie(Movie movie) {
		Optional<Movie> optMovie = movieRepo.findById(movie.getMovieId());
		if (optMovie.isEmpty()) {
			throw new MovieNotFoundException("Movie Not Found");
		}
		Movie updatedMovie = movieRepo.save(movie);
		return updatedMovie;
	}

	@Override
	public Movie deleteMovie(int movieId) {
		Optional<Movie> optMovie=movieRepo.findById(movieId);
		if(optMovie.isEmpty()) {
			throw new MovieNotFoundException("Movie Not Found");
		}
		movieRepo.deleteById(movieId);
		return optMovie.get();
	}

	@Override
	public List<Movie> viewMovie() {
		List<Movie> movieList=movieRepo.findAll();
		return movieList;
	}

}
