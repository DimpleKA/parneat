import React from "react";
import './MainRes.css';
import noodlebowl from "../Assets/noodle bowl.jpg";

const Main = () => {
  const handleMouseOver = (event) => {
    event.currentTarget.style.transform = "translateY(-10px)";
  };

  const handleMouseOut = (event) => {
    event.currentTarget.style.transform = "translateY(0)";
  };
  return (
    <div className="main">
      <div className="main-left">
        <div className="main-left-container">
          <div className="main-left-heading">Are you starving?</div>
          <div className="main-left-content" style={{ paddingBottom: '40px' }}>
            Within a few clicks, find meals that are accessible near you
          </div>
          <div className="main-left-location">
            <div className="main-left-location-up">
              <div className="main-left-location-up-left"></div>
              <div className="main-left-location-up-right"></div>
            </div>
            <div className="main-left-location-down">
            <div className="main-left-location-down-"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-right">
        <div className="main-right-img" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
          <img src={noodlebowl}  />
        </div>
      </div>
    </div>
  );
};

export default Main;
