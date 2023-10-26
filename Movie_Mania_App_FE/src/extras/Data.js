import React, { useState, useEffect } from "react";
import MovieCard from "../user/MovieCard";

const Data = () => {
  const [movies, setMovies] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [remark, setRemark] = useState("");

  // useEffect(() => {
  //   // Fetch movies from your API
  //   fetch("http://localhost:8080/admin/movie/getall") // Replace this with your API endpoint
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setMovies(data); // Set movies data to state
  //       console.log("checking the data"+data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching movies: ", error);
  //     });
  // }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleSearch = () => {
    // Fetch movies from your API
    fetch("http://localhost:8080/admin/movie/getall") // Replace this with your API endpoint
      .then((response) => response.json())
      .then((data) => {
        setMovies(data); // Set movies data to state
        console.log("checking the data", data);
      })
      .catch((error) => {
        console.error("Error fetching movies: ", error);
      });
  };
  
  useEffect(() => {
    handleSearch();
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  const handleModalClose = () => {
    setShowModal(false);
    setRating(0);
    setRemark("");
  };
  const handleAddRating = (movieId, rating, remark) => {
    fetch("http://localhost:8080/user/movie/addRating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movieId: movieId,
        rating: rating,
        remark: remark,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Rating Added Successfully!", data);
        // Handle success or display a success message to the user
        
        })
        .catch((error) => {
          console.error("Error adding rating: ", error);
        })
        .finally(() => {
          // Close the modal and reset rating and remark state
          handleSearch();
          handleModalClose();
        });

    };
    // const renderMovieCards = () => {
    //     return searchResults.map((movie) => (
    //       <div className="col-md-5 mb-3" key={movie.movieId}>
    //         <MovieCard movie={movie} onAddRatingClick={handleAddRating} />
    //       </div>
    //     ));
    //   };  
  return (
    <div className="container">
     
      <div className="row">
        {movies.map((movie) => (
          <div className="col-md-5 mb-3" key={movie.id}>
            <MovieCard movie={movie} onAddRatingClick={handleAddRating}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Data;
