import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const MovieForm = ({ onAddOrUpdateMovie, initialMovieData,action }) => {
  const [movieData, setMovieData] = useState(initialMovieData || {
    actors: [], 
    
  });

  const [showMovieIdField, setShowMovieIdField] = useState(action === "update");
  const handleAddSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/admin/movie/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log("Movie added successfully:", data);
        // Call the onAddOrUpdateMovie function if you need to do something with the response
        onAddOrUpdateMovie(data);
        // Optionally, reset the form after successful submission
        setMovieData({});
      } else {
        console.error("Failed to add movie:", response.statusText);
      }
    } catch (error) {
      // Handle errors
      console.error("Error adding movie:", error);
    }
  };
  
  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = "http://localhost:8080/admin/movie/update";
  
      const response = await fetch(apiUrl, {
        method: "PUT", // Using PUT method for updating the movie
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(movieData),
      });
      console.log(movieData);
  
      if (response.ok) {
        const data = await response.json();
        console.log("Movie updated successfully:", data);
        onAddOrUpdateMovie(data);
        // Optionally, reset the form after successful submission
        setMovieData({});
      } else {
        console.error("Failed to update movie:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating movie:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "add") {
      handleAddSubmit(e);
    } else if (action === "update") {
      handleUpdateSubmit(e);
    }
  };
  
  useEffect(() => {
    setMovieData(initialMovieData || {});
  }, [initialMovieData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMovieData({ ...movieData, [name]: value });
  };

 
  return (
    <Form onSubmit={handleSubmit}>
      {/* Movie ID Field */}
      {showMovieIdField && (
        <Form.Group className="mb-3">
          <Form.Label>Movie ID</Form.Label>
          <Form.Control
            placeholder="Enter movie id"
            type="number"
            name="movieId"
            value={movieData.movieId || ""}
            onChange={handleInputChange}
          />
        </Form.Group>
      )}
      {/* Movie Name */}
      <Form.Group className="mb-3">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter movie name"
          name="movieName"
          value={movieData.movieName || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      {/* Language */}
      <Form.Group className="mb-3">
        <Form.Label>Language</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter language"
          name="language"
          value={movieData.language || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      {/* Genre */}
      <Form.Group className="mb-3">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter genre"
          name="genre"
          value={movieData.genre || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      {/* Release Date */}
      <Form.Group className="mb-3">
        <Form.Label>Release Date</Form.Label>
        <Form.Control
          type="date"
          name="releaseDate"
          value={movieData.releaseDate || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      {/* Duration */}
      <Form.Group className="mb-3">
        <Form.Label>Duration (mins)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter duration"
          name="duration"
          value={movieData.duration || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      {/* Actors */}
      <Form.Group className="mb-3">
        <Form.Label>Actors (comma-separated)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter actors"
          name="actors"
          value={movieData.actors ? movieData.actors.join(", ") : ""}
          onChange={(e) => {
            const actorsArray = e.target.value.split(",").map(actor => actor.trim());
            setMovieData({ ...movieData, actors: actorsArray });
          }}
          required
        />
      </Form.Group>

      {/* Rating */}
      {!showMovieIdField && (
        <Form.Group className="mb-3">
          <Form.Label>Rating</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter rating"
            name="rating"
            value="0"
            readOnly
            onChange={handleInputChange}
            
          />
        </Form.Group>
      )}


      {/* Image URL */}
      <Form.Group className="mb-3">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          name="imageUrl"
          value={movieData.imageUrl || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        {action === "add" ? "Add Movie" : "Update Movie"}
      </Button>
      
    </Form>
  );
};

export default MovieForm;