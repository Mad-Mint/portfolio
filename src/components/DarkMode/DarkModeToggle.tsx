import React, { useState, useEffect } from 'react';
import './styles.css'

const lightModeImg = require('../../images/lightmode.png');
const darkModeImg = require('../../images/darkmode.png');

const DarkModeToggle: React.FC = () => {
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
    setCurrentTheme(theme || ''); // Set current theme to the initial theme
  }, []);

  return (
    <div className="nav-item">
      <button className="dark-mode-toggle" onClick={toggleDarkMode}>
        <img src={currentTheme === 'dark' ? darkModeImg : lightModeImg} alt="Toggle Dark Mode" className="DarkModeSwitch" />
      </button>
    </div>
  );
};

export default DarkModeToggle;
