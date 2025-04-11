import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import pawfectLogo from '../assets/Logo.png'; 

function Header() {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#153e04" }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center text-white" to="/">
            <img
              src={pawfectLogo}
              alt="Pawfect Dog Logo"
              style={{ height: "40px", marginRight: "10px" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" style={{ filter: "invert(1)" }}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-white" to="/gallery">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/apply">Apply</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/my-account">
                  <i className="bi bi-person-fill me-1"></i> My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
