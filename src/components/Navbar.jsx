import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <div className="logo">
      <img src="./vite.svg" style={{height:"45px",width:"45px"}} />Relational Chroma DB
      </div>
      <ul className="nav-links">
        <li><a href="#features">Features</a></li>
        <li><a href="#how-it-works">How It Works</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
