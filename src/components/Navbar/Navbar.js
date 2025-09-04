import React from "react";
import "./Navbar.css";

export default function Navbar(props) {
  return (
    <header>
      <div className="navbar">
        <div className="nav_content left">
          <div className="nav-logo">
            <div className="logo">
              <i className="fa-solid fa-person-running" />
            </div>
            <div className="brand_name">
              <span id="solid">FIND</span>
              <span id="thin">MYGYM</span>
            </div>
          </div>
          <div className="nav-search">
            <input
              name="search"
              type="search"
              placeholder="Search"
              className="search-input"
            />
            <div className="search-icon">
              <i className="fa-solid fa-magnifying-glass" />
            </div>
          </div>
        </div>
        <div className="nav_content right">
          <form name="userAddress">
            <select className="userAddress">
              <option>{props.location}</option>
              <option value="noida">Noida</option>
              <option value="greaterNoida">Greater Noida</option>
              <option value="ghaziabad">Ghaziabad</option>
            </select>
          </form>
          <div className="login">
            <button className="login-button">Sign In</button>
          </div>
        </div>
      </div>
    </header>
  );
}
