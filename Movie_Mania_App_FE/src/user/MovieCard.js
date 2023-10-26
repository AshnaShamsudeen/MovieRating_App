import React, { useState } from "react";
import "./style1.css"; // Import your CSS file
import { Button, Modal, Form } from "react-bootstrap";
const MovieCard = ({ movie,onAddRatingClick }) => {
  const [rating, setRating] = useState(0);
  const [remark, setRemark] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setRating(0);
    setRemark("");
  };

  const handleAddRating = () => {
    onAddRatingClick(movie.movieId, rating, remark);
    handleModalClose();
  };

  return (
    <div className={`card ${imageError ? "image-error" : ""} d-flex flex-row align-items-center movie-card`}>
    <div className="ml-auto mr-3" style={{ height: "100%" }}>
      <img
        src={movie.imageUrl}
        alt={movie.movieName}
        className="card-img-top"
        style={{ width: "auto", height: "100%" }}
        onError={handleImageError}
      />
    </div>
      
     
    
    <div className="card-body d-flex flex-column justify-content-center align-items-start">
        <h4 className="card-title text-center mb-1"><strong>{movie.movieName}</strong></h4>
        <p >
            
          <strong>Language:</strong> {movie.language} <br /></p>
         <p> <strong>Genre:</strong> {movie.genre} <br /></p>
         <p> <strong>Release Date:</strong> {movie.releaseDate} <br /></p>
          <p><strong>Duration:</strong> {movie.duration} mins <br />
          </p>
          <strong>Actors:</strong>
            
          <ul className="list-unstyled">
            {movie.actors.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul> 
          <p><strong>Rating:</strong> {movie.rating} <br /></p>
          {/* <div className="card-footer text-center"> */}
          <button className=" bottom-0   btn btn-primary"
            style={{ padding: "4px 8px" }} onClick={() => setShowModal(true)}>
            Add Rating
          </button>
        </div>
       
      
    
      {/* </div> */}
       {/* Modal for adding rating and remark */}
       <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Rating</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="rating">
              <Form.Label>Rating (0-10)</Form.Label>
              <div className="d-flex align-items-center">
              <Form.Control
                type="number"
                min="0"
                max="10"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
                style={{ marginRight: "10px" }}
              />
              <span>Rating</span>
              </div>
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
          <Button variant="primary" onClick={handleAddRating}>
            Done
          </Button>
 
        </Modal.Footer>
      </Modal>

    </div>
  );
};

export default MovieCard;