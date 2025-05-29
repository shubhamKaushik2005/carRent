import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">🚗 Car Rent</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/get-pro" className="btn-pro">Get Pro</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
