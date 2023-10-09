package com.moviemania.movielisting.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moviemania.movielisting.model.Movie;
import com.moviemania.movielisting.model.Rating;
import com.moviemania.movielisting.repository.MovieRepository;
import com.moviemania.movielisting.repository.RatingRepo;

@Service
public class RatingServiceImpl implements RatingService {
	@Autowired
	RatingRepo repo;

	@Autowired
	MovieRepository movieRepo;

	

	@Override
	public Rating addRating(Rating rating) {

		Movie fetchedMovie = movieRepo.findById(rating.getMovieId()).get();
		if (fetchedMovie.getRating()==0) {
			float fetchedMovieRating = rating.getRating() + fetchedMovie.getRating();
			fetchedMovie.setRating(fetchedMovieRating);
			movieRepo.save(fetchedMovie);
		} else {
			float fetchedMovieRating = (rating.getRating() + fetchedMovie.getRating()) / 2;
			fetchedMovie.setRating(fetchedMovieRating);
			movieRepo.save(fetchedMovie);
		}

		return repo.save(rating);
	}

//	@Override
//	public Rating viewRating(String movieName) {
//		return repo.;
//	}

}
