import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/navbar.css';

import logo from "../assets/images/Logo.png";
const Header = () => {
  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Wedding Planner Logo" />
        </Link>
      </div>
      <div id="menu-toggle" className="hamburger">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      <nav id="nav" className="nav-links">
        <ul id="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Event Services</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
