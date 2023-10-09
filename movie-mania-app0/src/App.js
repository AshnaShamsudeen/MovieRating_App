import React,{useState} from "react";
import { BrowserRouter as Router, Route, Routes,Switch,Link } from "react-router-dom";
import "./App.css";

import Navbar from "./components/header/Navbar";
import HomePage from "./components/pages/HomePage";
import HomeCard from "./components/pages/HomeCard";
import MovieDetails from "./user/MovieDetails";
import MoviePage from "./user/MoviePage";
import AdminPage from "./adminPage/AdminPage";
import AdminMovieCard from "./adminPage/AdminMovieCard";
import LoginSignupPopup from "./loginSignup/LoginSignupPopup";
import AdminData from "./adminPage/AdminData";
import AboutPage from "./extras/About";
import Data from "./extras/Data";
import Privacy from "./extras/Privacy";


  
function App() {
  const [showMoviesAndLists, setShowMoviesAndLists] = useState(false);
  return (
    <Router>
      <Navbar showMoviesAndLists={showMoviesAndLists} />
      <div>
        <Navbar ><Link to="/discover">Discover New Movies</Link></Navbar>
        <Routes>
        <Route path="/home" element={<HomePage />} />
         <Route path="/discover" element={<Data/>}/>
          <Route path="/review" element={<MoviePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/admin" element={<AdminPage/>} />
          <Route path="/admin/movie-list" element={<AdminData/>} />
          <Route path="/login" element={<LoginSignupPopup/>} />
          <Route path="/about"  element={<AboutPage/>} />
          <Route path="/privacy"  element={<Privacy/>} />
          <Route path="/lists" element={<Data/>} />
          
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;