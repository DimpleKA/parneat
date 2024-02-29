import React from "react";
import "./NavbarRes.css";
import PlaceIcon from "@mui/icons-material/Place";
import Person2Icon from "@mui/icons-material/Person2";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-one">
        <img
          src="https://icones.pro/wp-content/uploads/2021/06/symbole-burger-orange.png"
          className="navbar-one-logo"
          alt="foodwagon"
        />
        <span className="gradient-text">FoodWagon</span>
      </div>
  
        <div className="navbar-two" id='hide'>
          <span className="navbar-two-span-deliver">Deliver to:</span>
          <span className="navbar-two-span">
            <PlaceIcon />
          </span>
          <span className="navbar-two-span-current-loc">
            Currnet Location:{" "}
          </span>
          <span className="navbar-two-span-street">TC Palya main Road</span>
        </div>

        <div className="navbar-three" id='hide'>
          <div className="navbar-three-search">
            <div className="search-container">
              <SearchIcon className="search-icon" />
              <input type="text" placeholder="Search Food" />
            </div>
          </div>

          <div className="navbar-three-Login">
            <div className="navbar-three-Login-icon">
              {" "}
              <Person2Icon />
            </div>
            <div className="navbar-three-Login-text">Login</div>
          </div>
        </div>
     
      <div className="navbar-four">
        <div className="navbar-four-menu">
            <MenuIcon/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
