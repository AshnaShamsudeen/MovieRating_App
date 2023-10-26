package com.moviemania.movielisting.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Rating {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	public int ratingId;
	public String remark;
	public float rating;
	public int movieId;
	
	

}
