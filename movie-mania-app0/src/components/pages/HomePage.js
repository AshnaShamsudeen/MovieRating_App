import React from "react";
import { useLocation } from "react-router-dom";
import HomeCard from "./HomeCard";
import "./Pages.css"



 

const HomePage = () => {
  const location = useLocation();
  const isHomePath = location.pathname === "/home";
  return (
    <div className="container-fluid bg-black text-white">
       <br/><br/>
       <div className={`row ${isHomePath ? "custom-row" : ""}`}>
       
        <div className="col-md-6 p-5">
          <h1 className="display-1">
            <strong>
              Share{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #279EFF, #0C356A)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Your
              </span>
            </strong>
          </h1>
          <h1 className="display-1">
            <strong>
              Love for{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #279EFF, #0C356A)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                {" "}
                Movie
              </span>
            </strong>
          </h1>
          <h1 className="display-1">
            <strong>
              with{" "}
              <span
                style={{
                  background: "linear-gradient(to right, #279EFF, #0C356A)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Friends
              </span>
            </strong>
          </h1>
          <p>
           
         <strong> <i>Where Every Frame Tells a Story: 
          Your Ultimate Destination for Cinematic Magic!</i></strong>
          </p>
        </div>
        <div className="col-md-6 p-5">
          <img
            src="/images/homeimage3.png"
            alt="Movie"
            className="rounded-start-pill"
          />
        </div>

        {location.pathname === "/" && <HomeCard />}

        {/* <PopularWeek /> */}
      </div>
    </div>
  );
};

export default HomePage;