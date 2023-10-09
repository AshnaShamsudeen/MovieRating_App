import React, { useState } from "react";
import { useParams } from "react-router";
import sampleMovieData from "../MovieData";

const MovieDetails = () => {
  // Sample music details data (replace with your actual data)
  const { id } = useParams();

  const selectedMovie = sampleMovieData.find(
    (movie) => movie.id === parseInt(id)
  );
  console.log(`${selectedMovie.image}`);

  const [myRating, setMyRating] = useState(0);

  const handleRatingChange = (event) => {
    const rating = event.target.value;
    setMyRating(rating);
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={selectedMovie.image}
            alt={selectedMovie.movieName}
            className="img-fluid"
          />
          <h3>{selectedMovie.movieName}</h3>
          {/* <p>{selectedMovie.movieName}</p> */}
          <p>{selectedMovie.actorName}</p>
        </div>
        <div className="col-md-6">
          <h4>Total Rating: {selectedMovie.totalRating}</h4>
          <h4>Average Rating: {selectedMovie.averageRating}</h4>
          <h4>My Rating: {myRating}</h4>
          <input
            type="range"
            min="1"
            max="5"
            step="0.1"
            value={myRating}
            onChange={handleRatingChange}
          />
          <button className="btn btn-primary mt-2">Sign Up to Rate</button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;