import React from "react";
import MovieList from "./MovieList";

const MoviePage = () => {
  return (
    <div
      className="container-fluid bg-black text-white p-5"
      style={{ minHeight: "100vh" }}
    >
      <MovieList />
    </div>
  );
};

export default MoviePage;