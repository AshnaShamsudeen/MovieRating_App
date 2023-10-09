package com.moviemania.movielisting.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.moviemania.movielisting.model.Rating;

public interface RatingRepo extends JpaRepository<Rating, Integer> {

}
