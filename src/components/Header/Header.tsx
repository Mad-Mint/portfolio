import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const lightModeImg = require('../../images/lightmode.png');
const darkModeImg = require('../../images/darkmode.png');

const Header = () => {
  // State to track the current theme
  const [currentTheme, setCurrentTheme] = useState('');

  // Function to toggle dark mode
  const toggleDarkMode = () => {
    const root = document.documentElement;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', newTheme);
    setCurrentTheme(newTheme);
  };

  // Effect to set the current theme on initial render
  useEffect(() => {
    const theme = document.documentElement.getAttribute('data-theme');
    setCurrentTheme(currentTheme);
  }, []);

  return (
    <header>
      <nav className="navbar">
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
          {/* Button to toggle dark mode */}
          <div className="nav-item">
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
              <img src={currentTheme === 'dark' ? lightModeImg : darkModeImg} alt="Toggle Dark Mode" className="DarkModeSwitch" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
