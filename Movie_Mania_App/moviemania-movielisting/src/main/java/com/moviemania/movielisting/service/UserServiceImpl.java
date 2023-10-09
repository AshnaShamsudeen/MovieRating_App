package com.moviemania.movielisting.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moviemania.movielisting.model.Movie;
import com.moviemania.movielisting.repository.ActorRepository;
import com.moviemania.movielisting.repository.MovieRepository;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	ActorRepository actorRepo;
	@Autowired
	MovieRepository movieRepo;

	@Override
	public List<Movie> searchMovieByName(String movieName) {
		return movieRepo.findByMovieName(movieName);
	}

	@Override
	public List<Movie> searchMovieByActor(String actor) {

		return movieRepo.findMovieForAGivenActor(actor);
	}

}
