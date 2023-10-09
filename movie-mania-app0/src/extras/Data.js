import React, { useState, useEffect } from "react";
import MovieCard from "../user/MovieCard";

const Data = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from your API
    fetch("http://localhost:8080/admin/movie/getall") // Replace this with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setMovies(data); // Set movies data to state
        console.log("checking the data"+data);
      })
      .catch((error) => {
        console.error("Error fetching movies: ", error);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div className="container">
     
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-5 mb-3" key={movie.id}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
