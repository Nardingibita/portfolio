import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../style.css/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">N.I</div>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={closeMenu}>Home</Link>
        <Link to="/about" onClick={closeMenu}>About</Link>
        <Link to="/skills" onClick={closeMenu}>Skills</Link>
        <Link to="/project" onClick={closeMenu}>Project</Link>
        <Link to="/resume" onClick={closeMenu}>Resume</Link>
        <Link to="/contacts" onClick={closeMenu}>Contact</Link>
      </div>

      <div className="desktop-menu">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/project">Project</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contacts">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
