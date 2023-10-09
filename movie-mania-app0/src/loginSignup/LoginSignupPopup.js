import React from "react";
import { Link } from "react-router-dom";
import './WelcomePage.css';
const LoginSignupPopup = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h2><strong>Welcome to MovieMania!</strong></h2>
        <Link to="/admin">
          <button className="welcome-button">Admin</button>
        </Link>
        <Link to="/">
          <button className="welcome-button">User</button>
        </Link>
      </div>
    </div>
  );
};
export default LoginSignupPopup;

