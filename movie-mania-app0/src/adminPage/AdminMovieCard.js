import React, { useState,useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminMovieCard = ({ movie, onUpdateClick, onDeleteClick,key }) => {
  const [remark, setRemark] = useState("");
  const [imageError, setImageError] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  console.log(movie);
  const [formData, setFormData] = useState({
    // Initialize formData state with movie data
    movieName: movie.movieName || "",
    movieId: movie.movieId || "",
    language: movie.language || "",
    genre: movie.genre || "",
    releaseDate: movie.releaseDate || "",
    duration: movie.duration || "",
    actors: (movie.actors || movie.actors.join(", ")) && "",
    rating: movie.rating || "",
    imageUrl: movie.imageUrl || "",
  });

  const handleImageError = () => {
    setImageError(true);
  };
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);

  };

//   const handleUpdateClick = () => {
//     onUpdateClick(movie.id, { ...formData, remark });
//     handleModalClose();
//   };
const handleUpdateClick = () => {
    fetch("http://localhost:8080/admin/movie/update", {
        
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle successful response, e.g., show a success message
        console.log("Movie updated successfully!", data);
        onUpdateClick(data);
        toast.success("Movie updated successfully!", {
            position: toast.POSITION.TOP_CENTER,
          });
       
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error updating movie: ", error);
      });
      handleModalClose();
  };


  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };
  const handleConfirmDelete = () => {
    fetch(`http://localhost:8080/admin/movie/delete?movieId=${movie.movieId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Movie deleted successfully!", data);
        // Handle success message, e.g., show toast message
        handleDeleteModalClose();
        onDeleteClick(movie.id, { ...formData });
        alert("Movie deleted successfully!");
      })
      .catch((error) => {
        console.error("Error deleting movie: ", error);
      });
      window.location.reload();
    };

  useEffect(() => {
    // Update formData when movie data changes
    setFormData({
      movieName: movie.movieName || "",
      movieId: movie.movieId || "",
      language: movie.language || "",
      genre: movie.genre || "",
      releaseDate: movie.releaseDate || "",
      duration: movie.duration || "",
      actors: (movie.actors || movie.actors.join(", ")) || "",
      rating: movie.rating || "",
      imageUrl: movie.imageUrl || "",
    });
  }, [movie]);

  const handleInputChange = (e) => {
    // Update formData state when form fields change
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        <h4 className="card-title text-center mb-4"><strong>{formData.movieName}</strong></h4>
        <div>
          <strong>Language:</strong> {formData.language} <br />
          <strong>Genre:</strong> {formData.genre} <br />
          <strong>Release Date:</strong> {formData.releaseDate} <br />
          <strong>Duration:</strong> {formData.duration} mins <br />
          <strong>Actors:</strong>  <br />
          <ul className="list-unstyled">
            {movie.actors.map((actor, index) => (
              <li key={index}>{actor}</li>
            ))}
          </ul>
          <strong>Rating:</strong> {movie.rating} <br />
        </div>

        <div className="d-flex justify-content-between w-100">
          <button
            className="btn btn-primary"
            style={{ padding: "4px 8px" }}
            onClick={() => setShowModal(true)}
          >
            Update
          </button>
          <button
            className="btn btn-danger"
            style={{ padding: "4px 8px" }}
            onClick={handleDeleteClick}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal for updating movie details */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group controlId="movieName">
        <Form.Label>Movie Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter movie name"
          name="movieName"
          value={formData.movieName || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
            <Form.Group controlId="movieId">
              <Form.Label>Movie Id</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter movie id"
                name="movieId"
                value={movie.movieId}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="language">
        <Form.Label>Language</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter language"
          name="language"
          value={formData.language || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
            <Form.Group controlId="releaseDate">
              <Form.Label>Release Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Release Date"
                name="releaseDate"
                value={formData.releaseDate}
                onChange={handleInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="genre">
        <Form.Label>Genre</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter genre"
          name="genre"
          value={formData.genre || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="duration">
        <Form.Label>Duration (mins)</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter duration"
          name="duration"
          value={formData.duration || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>
      <Form.Group controlId="actors">
        <Form.Label>Actors (comma-separated)</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter actors"
          name="actors"
          value={formData.actors ? formData.actors.join(", ") : ""}
          onChange={(e) => {
            const actorsArray = e.target.value.split(",").map(actor => actor.trim());
            setFormData({ ...formData, actors: actorsArray });
          }}
          required
        />
      </Form.Group>
      <Form.Group controlId="imageUrl">
        <Form.Label>Image URL</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter image URL"
          name="imageUrl"
          value={formData.imageUrl || ""}
          onChange={handleInputChange}
          required
        />
      </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdateClick}>
            Update Movie
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={showDeleteModal} onHide={handleDeleteModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this movie?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleDeleteModalClose}>
            No
          </Button>
          <Button variant="danger" onClick={handleConfirmDelete}>
            Yes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AdminMovieCard;
