import React, { useState, useEffect } from "react";
import AdminMovieCard from "./AdminMovieCard";

const AdminData = () => {
  const [movies, setAdminMovies] = useState([]);

  useEffect(() => {
    // Fetch movies from your API
    fetch("http://localhost:8080/admin/movie/getall") // Replace this with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setAdminMovies(data); // Set movies data to state
        console.log("Fetched data"+movies)
      })
      .catch((error) => {
        console.error("Error fetching movies: ", error);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleDeleteClick = (movieId, formData) => {
    fetch(`http://localhost:8080/admin/movie/delete?movieId=${movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Movie deleted successfully!", data);
        // Assuming setMovies is a state updater function
        setAdminMovies((prevMovies) => prevMovies.filter((movie) => movie.movieId !== movieId));
      })
      .catch((error) => {
        console.error("Error deleting movie: ", error);
      });
  };
  return (
    <div className="container">
      <div className="row">
        {movies.map((film) => (
          <div className="col-md-5 mb-3" key={film.id}>
            <AdminMovieCard key={film.id} movie={film}
             />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminData;
