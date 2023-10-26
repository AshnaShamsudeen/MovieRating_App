import React,{useState} from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [showMoviesAndLists, setShowMoviesAndLists] = useState(false);

  const handleUserClick = () => {
    setShowMoviesAndLists(true);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home">
          <span
            style={{
              background: "linear-gradient(to right, #FD8D14, #C51605)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            <strong>MovieMania</strong>
          </span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/guest">
                Guest
              </Link>
            </li>
            {showMoviesAndLists && (
          <>
            <li className="nav-item">
              <Link className="nav-link" to="/movie">
                Movie
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/actors">
                Actors
              </Link>
            </li> */}
            <li className="nav-item">
              <Link className="nav-link" to="/lists">
                Lists
              </Link>
            </li>
            
            </>
        )}

            <li className="nav-item dropdown">
              <button
                className="nav-link"
                type="button"
                id="navbarDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <strong>•••</strong>
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link className="dropdown-item" to="/about">
                    About
                  </Link>
                </li>
                {/* <li>
                  <Link className="dropdown-item" to="/contact">
                    Contact
                  </Link>
                </li> */}
                {/* <li>
                  <Link className="dropdown-item" to="/faq">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/terms">
                    Terms of Use
                  </Link> */}
                {/* </li> */}
                <li>
                  <Link className="dropdown-item" to="/privacy">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/home">
                    LogOut
                  </Link> 
                </li>
              </ul>
            </li>
          </ul>
          <div className="d-flex">
            {/* <form className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn text-light ms-2" type="submit">
                Search
              </button>
            </form> */}
             <li className="nav-link active">
              <Link className="btn btn-dark" to="/logining">
                Login/SignUp
              </Link>
            </li>
            {/* <Link className="btn btn-dark" to="/admin">
              Admin
            </Link>&nbsp;&nbsp;
            <Link className="btn btn-dark" to="/signup">
              User
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;