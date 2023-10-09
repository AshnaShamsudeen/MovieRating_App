import React from "react";
import PropTypes from "prop-types";
import "./StarRating.css";

const StarRating = ({ rating, onStarClick }) => {
  const totalStars = 5;
  const stars = Array.from({ length: totalStars }, (_, index) => index + 1);

  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={star <= rating ? "star active" : "star"}
          onClick={() => onStarClick(star)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  onStarClick: PropTypes.func.isRequired,
};

export default StarRating;
