import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-one">
        <img className="logo" alt="foodwagon" />
        <span>FoodWagon</span>
      </div>

      <div className="navbar-two">
      <span className="navbar-two-span">Deliverty to:</span>
      <span className="navbar-two-span">ICON</span>
      <span className="navbar-two-span">Currnet Location</span>
      <span className="navbar-two-span">TC Palya main Road</span>
      </div>

      <div className="navbar-three">
        <div className="navbar-three-search"></div>
            <input type="text" placeholder="search"/>
        <div className="navbar-three-Login">
            ICON
            Login
        </div>
      </div>
    </div>
  );
};

export default Navbar;
