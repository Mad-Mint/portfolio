import React from 'react';
import { Link } from 'react-router-dom';
import './Desktop.css'
import DarkModeToggle from '../DarkMode/DarkModeToggle';

const NavBar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="navbar-nav">
        <div className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </div>
        <div className="nav-item">
          <Link to="/aboutme" className="nav-link">About</Link>
        </div>
        <div className="nav-item">
          <Link to="/projects" className="nav-link">Projects</Link>
        </div>
        <div className="nav-item">
          <Link to="/accomplishments" className="nav-link">Accomplishments</Link>
        </div>
        <div className="nav-item">
          <Link to="/contactme" className="nav-link">Contact</Link>
        </div>
        <DarkModeToggle />
      </div>
    </header>
  );
};

export default NavBar;
