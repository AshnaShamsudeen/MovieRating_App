import React from "react";
import { Link } from "react-router-dom";
import "./Pages.css";
const HomeCard = () => {
  return (
    <div>
      <h5 className="mt-5">MovieMania Lets You...</h5>

      <div className="row mt-4">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
        <Link to="/discover" className="text-decoration-none">
          <div
            className="card text-center  text-white "
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-music-note h5 mb-3"></i>
              <p className="card-text text-center">Discover New Movies</p>
            </div>
          </div>
          </Link>
        </div>

        {/* Card 2 */}
        <div className="col-md-4 mb-4">
        <Link to="/review" className="text-decoration-none">
          <div
            className="card text-center text-white"
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-pencil h5 mb-3"></i>
              <p className="card-text text-center">Write Reviews</p>
            </div>
          </div>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
        <Link to="/review" className="text-decoration-none">
          <div
            className="card text-center  text-white"
            style={{ background: "#001c30" }}
          >
            <div className="card-body">
              <i className="bi bi-star h5 mb-3"></i>
              <p className="card-text text-center">Rate Movie</p>
            </div>
          </div>
          </Link>
        </div>

      
      </div>
    </div>
  );
};

export default HomeCard;