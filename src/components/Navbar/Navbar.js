import React from "react";
import { useState } from "react";
import "./Navbar.css";

export default function Navbar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    props.setSearch(searchTerm);
  };
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
          <form className="nav-search" onSubmit={handleSubmit}>
            <input
              name="search"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
              className="search-input"
            />
            <div
              className="search-icon"
              onClick={handleSubmit}
            >
              <i className="fa-solid fa-magnifying-glass" />
            </div>
          </form>
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
