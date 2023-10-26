package com.moviemania.movielisting.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.moviemania.movielisting.exception.ActorAlreadyExistException;
import com.moviemania.movielisting.exception.ActorNotFoundException;
import com.moviemania.movielisting.model.Actor;
import com.moviemania.movielisting.repository.ActorRepository;
@Service
public class ActorServiceImpl implements ActorService {
	@Autowired
	ActorRepository actorRepo;

	@Override
	public Actor addActors(Actor actor) {
		Optional<Actor> optActor=actorRepo.findById(actor.getActorId());
		if(optActor.isEmpty()) {
			throw new ActorAlreadyExistException("Actor Already Exist");
		}
		Actor newActor=actorRepo.save(actor);
		return newActor;
	}

	@Override
	public Actor updateActors(Actor actor) {
		Optional<Actor> optActor=actorRepo.findById(actor.getActorId());
		if(optActor.isEmpty()) {
			throw new ActorNotFoundException("Actor Not Found");
		}
		Actor updatedActor=actorRepo.save(actor);
		return updatedActor;
	}

	@Override
	public List<Actor> viewActors() {
		List<Actor> actorList=actorRepo.findAll();
		return actorList;
	}

	@Override
	public Actor deleteActors(int actorId) {
		Optional<Actor> optActor=actorRepo.findById(actorId);
		if(optActor.isEmpty()) {
			throw new ActorNotFoundException("Actor Not Found");
		}
		actorRepo.deleteById(actorId);
		return optActor.get();
	}

}
