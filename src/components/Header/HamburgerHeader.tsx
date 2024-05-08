import React, { useState } from 'react';
import './Hamburger.css';
import Dropdown from './Dropdown';
import DarkModeToggle from '../DarkMode/DarkModeToggle';

const HamburgerHeader = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
    const dropdown = document.getElementById("myDropdown");
    if (dropdown) {
      dropdown.classList.toggle("show");
    }
  };

  return (
    <header className="navbar">
      <div className="header-nav"></div>
      <button className="hamburger-menu" onClick={toggleDropdown}>&#9776;</button>
      {dropdownOpen && <Dropdown />}
      <DarkModeToggle />
    </header>
  );
};

export default HamburgerHeader;
