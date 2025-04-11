import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer py-3" style={{ backgroundColor: "#153e04", color: "#fff" }}>
      <div className="container text-center">
        <p>© Pawfect {currentYear}</p>
      </div>
    </footer>
  );
}

export default Footer;
