package com.moviemania.movielisting.service;

import java.util.List;


import com.moviemania.movielisting.model.Actor;


public interface ActorService {

	public Actor addActors(Actor actor);
	//public List<Actor> deleteActors(Actor actorId);
	public Actor updateActors(Actor actor);
	public List<Actor> viewActors();
	public Actor deleteActors(int actorId);
	
}
