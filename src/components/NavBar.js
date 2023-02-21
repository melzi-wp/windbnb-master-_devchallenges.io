import React from "react";
import { Link } from "react-router-dom";
import triangleLogo from "../assets/triangleLogo.png";
import search_icon from "../assets/search_icon.png";
import "../styles/NavBarStyle.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to="/">
          <img className="triangleLogo" src={triangleLogo} alt="triangleLogo" />
          <h1 className="header-logo">windbnb</h1>
        </Link>
      </div>
      <div className="search">
        <p className="local">Helsinki, Finland</p>
        <p className="search-p">Add guests</p>
        <img className="search_icon" src={search_icon} alt="search_icon" />
      </div>
    </div>
  );
};

export default NavBar;
