package com.moviemania.movielisting.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.moviemania.movielisting.model.Movie;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
	public List<Movie> findByMovieName(String movieName);
	
	
	@Query(value="from Movie where :actorName MEMBER of actors")
	public List<Movie> findMovieForAGivenActor(String actorName);
}
