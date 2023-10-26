// AboutPage.js
import React from "react";
import { Container } from "react-bootstrap";
import "./extrastyle.css"; // Import your custom styles

const AboutPage = () => {
  return (
    <div className="about-container">
      <Container className="cont">
        <h1 className="about-title">MovieMania</h1>
        <div className="about-content">
          <p>
            Welcome to MovieMania, your ultimate destination for discovering the latest movies,
            exploring genres, and getting information about your favorite actors and directors.
            Whether you are a movie enthusiast or a casual viewer, MovieMania provides you with
            a curated collection of movies, reviews, and interesting facts about the film industry.
          </p>
          <p>
            Our mission is to deliver high-quality movie content to our users and help them stay
            updated with the ever-changing world of cinema. Feel free to explore our website, search
            for your favorite movies, and immerse yourself in the world of entertainment.
          </p>
        </div>
      </Container>
     
    </div>
  );
};

export default AboutPage;
