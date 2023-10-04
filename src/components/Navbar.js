import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = ({onCitySelect}) => {
  const handleCityClick = (city) => {
    onCitySelect(city);
  };
  return (
    <div style={{height:'40px'}}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-navbar fixed-top" style={{marginTop:'15px', position:'fixed', top:0, width:'100%', padding:'10px 20px'}}>
        <Link className="navbar-brand" to="">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active rounded-item">
              <Link className="nav-link" onClick={() => handleCityClick('New York')} to="">
                New York
              </Link>
            </li>
            <li className="nav-item rounded-item">
              <Link className="nav-link" onClick={() => handleCityClick('Mumbai')} to="">
                Mumbai
              </Link>
            </li>
            <li className="nav-item rounded-item">
              <Link className="nav-link" onClick={() => handleCityClick('Paris')} to="">
                Paris
              </Link>
            </li>
            <li className="nav-item rounded-item">
              <Link className="nav-link" onClick={() => handleCityClick('London')} to="">
                London
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


