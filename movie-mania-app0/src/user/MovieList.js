import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Modal, Button, Form } from "react-bootstrap";
import StarRating from "./StarRating";
import "./Modal.css";


const MovieList = ({movie}) => {
  const [searchOption, setSearchOption] = useState("movieName");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [remark, setRemark] = useState("");

  const handleStarClick = (star) => {
    setRating(star);
  };

  const handleAddRatingClick = () => {
    handleAddRating(rating, remark);
    handleModalClose();
  };
  const handleSearch = () => {
    setIsSearching(true);
    const apiUrl =
      searchOption === "movieName"
        ? `http://localhost:8080/user/movie/moviename?movieName=${searchTerm}`
        : `http://localhost:8080/user/movie/actor?actor=${searchTerm}`;

    fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Print the response data in the console
      setSearchResults(data); // Set the response data to state
    })
    .catch((error) => console.error("Error fetching data: ", error))
    .finally(() => setIsSearching(false));
  };
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
        const updatedSearchResults = searchResults.map((movie) => {
            if (movie.movieId === movieId) {
              return {
                ...movie,
                rating: rating,
                remark: remark,
              };
            }
            return movie;
          });
  
          // Set the updated search results to re-render the MovieCard component
          handleSearch(updatedSearchResults);
        })
        .catch((error) => {
          console.error("Error adding rating: ", error);
        })
        .finally(() => {
          // Close the modal and reset rating and remark state
          handleModalClose();
        });

    };
    const renderMovieCards = () => {
        return searchResults.map((movie) => (
          <div className="col-md-5 mb-3" key={movie.movieId}>
            <MovieCard movie={movie} onAddRatingClick={handleAddRating} />
          </div>
        ));
      };
  return (
    <div className="row mt-4">
      <div className="col-md-6 mb-3">
        <select
          className="form-select"
          value={searchOption}
          onChange={(e) => setSearchOption(e.target.value)}
        >
          <option value="movieName">Search by Movie Name</option>
          <option value="actorName">Search by Actor</option>
        </select>
      </div>
      <div className="col-md-4 mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter search term..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="col-md-2 mb-3">
        <button className="btn btn-primary" onClick={handleSearch}>
          Search
        </button>
      </div>
    

      {/* Display search results or message */}
      {isSearching}
      {!isSearching && searchResults.length === 0 && (
        <p>No movies available for the current search.</p>
      )}
     
       
        <div className="row">
            {renderMovieCards()}
          </div>
      
         {/* Modal for adding rating and remark */}
   
    <Modal show={showModal} onHide={handleModalClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Rating</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="rating">
            <Form.Label>Rating</Form.Label>
            <StarRating rating={rating} onStarClick={handleStarClick} />
          </Form.Group>
          <Form.Group controlId="remark">
            <Form.Label>Remark</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleAddRatingClick}>
          Add Rating
        </Button>
     
  

          <button
  className="btn btn-primary"
  onClick={() => handleAddRating(movie.movieId, rating, remark)}
>
  Add Rating
</button>

        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default MovieList;