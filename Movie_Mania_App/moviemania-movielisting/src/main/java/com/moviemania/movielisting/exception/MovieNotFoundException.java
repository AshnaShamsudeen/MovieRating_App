package com.moviemania.movielisting.exception;

public class MovieNotFoundException extends RuntimeException {
	public MovieNotFoundException(String message) {
		super(message);
	}

}
