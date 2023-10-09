package com.moviemania.movielisting.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.moviemania.movielisting.model.Actor;
import com.moviemania.movielisting.service.ActorService;

@RestController
@RequestMapping("/admin/actor")
public class ActorController {
	
	@Autowired
	ActorService service;
	
	
	@GetMapping("/getall")
	public List<Actor> viewActor(){
		return service.viewActors();
		
	}
	
	@PostMapping("/add")
	public Actor addActor(@RequestBody Actor actor) {
		return service.addActors(actor);
	}
	
	@PutMapping("/update")
	public Actor updateActor(@RequestBody Actor actor) {
		return service.updateActors(actor);
	}
	
	@DeleteMapping("/delete")
	public Actor deleteActor(@RequestBody int actorId) {
		return service.deleteActors(actorId);
	}

}
