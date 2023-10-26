import React, { useState, useEffect } from "react";
import { Container, Row, Col,Form, Modal, Button } from "react-bootstrap";
import MovieForm from "./MovieForm";
import { Link } from "react-router-dom";
import "./style.css"; // Import the CSS file
import "bootstrap/dist/css/bootstrap.min.css";


const AdminPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalAction, setModalAction] = useState("add"); // "add", "update", or "delete"
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [movieIdToDelete, setMovieIdToDelete] = useState("");
  const handleModalClose = () => {
    setShowModal(false);
    setSelectedMovie(null);
    setMovieIdToDelete("");
  };

  const handleModalAction = (action) => {
    setModalAction(action);
    setShowModal(true);
  };
  const handleDeleteMovie = (movieId) => {
    // Send DELETE request to the backend API
    fetch(`http://localhost:8080/admin/movie/delete?movieId=${movieIdToDelete}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle response from the server, you can update UI or show a message to the user
        console.log("Movie deleted successfully!", data);
        // Close the modal after deleting the movie
        handleModalClose();
      })
      .catch((error) => {
        // Handle error if the request fails
        console.error("Error deleting movie:", error);
        // Close the modal in case of an error
        handleModalClose();
      });
  };
  return (
    <Container className="mt-5">
     <h1 className="admin-title mb-4 text-center waving-text">
  Hey Admin <span className="wave">👋</span>
</h1>

      <Col>
        <Col md={12} className="text-center button-container">
          <Button className="admin-button" onClick={() => handleModalAction("add")}>
            Add Movie
          </Button>
          <Button className="admin-button" onClick={() => handleModalAction("update")}>
            Update Movie
          </Button>
          <Button className="admin-button" onClick={() => handleModalAction("delete")}>
            Delete Movie
          </Button>
        </Col>
      </Col>
       {/* Dropdown button for "List Movie" */}
       <Row className="mt-3">
  <Col md={12} className="text-center">
          <Link to="/admin/movie-list" className="styled-button">
            List Movie
          </Link>
  </Col>
</Row>

       {/* Modal for adding, updating, or deleting movie */}
       <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>{modalAction === "add" ? "Add Movie" : modalAction === "update" ? "Update Movie" : "Delete Movie"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalAction === "add" || modalAction === "update" ? (
            <MovieForm
              action={modalAction} // Pass the modalAction as a prop to MovieForm
              onAddOrUpdateMovie={(movie) => {
                // Handle add or update movie logic here
                // You can differentiate between add and update based on modalAction
                // For example, if (modalAction === "add") { /* add movie */ } else { /* update movie */ }
                handleModalClose();
              }}
              initialMovieData={modalAction === "update" ? selectedMovie : null}
            />
          ) : (
            <div>
            <Form.Group className="mb-3">
              <Form.Label>Movie ID</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter movie ID"
                value={movieIdToDelete}
                onChange={(e) => setMovieIdToDelete(e.target.value)}
                required
              />
            </Form.Group>
           
          </div>
          )}
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleModalClose}>
          Close
        </Button>
        {modalAction === "delete" && (
          <Button variant="danger" onClick={handleDeleteMovie}>
            Delete
          </Button>
          )}
      </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AdminPage;


