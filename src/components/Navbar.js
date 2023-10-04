import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ onCitySelect }) => {
  const [activeCity, setActiveCity] = useState("New York");

  const handleCityClick = (city) => {
    onCitySelect(city);
    setActiveCity(city);
  };

  const getLinkClass = (city) => {
    return city === activeCity ? 'nav-link active' : 'nav-link';
  };

  return (
    <div style={{ height: '40px' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded-navbar fixed-top" style={{ position: 'fixed', top: 0, width: '100%', padding: '10px 20px' }}>
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
              <Link className={getLinkClass('New York')} onClick={() => handleCityClick('New York')} to="">
                New York
              </Link>
            </li>
            <li className="nav-item rounded-item">
              <Link className={getLinkClass('Mumbai')} onClick={() => handleCityClick('Mumbai')} to="">
                Mumbai
              </Link>
            </li>
            <li className="nav-item rounded-item">
              <Link className={getLinkClass('Paris')} onClick={() => handleCityClick('Paris')} to="">
                Paris
              </Link>
            </li>
            <li className="nav-item rounded-item">
              <Link className={getLinkClass('London')} onClick={() => handleCityClick('London')} to="">
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
