import React from 'react';
import './Dropdown.css';
import { Link } from 'react-router-dom';

const Dropdown: React.FC = () => {

  const handleOutsideClick = (event: MouseEvent) => {
    if (!(event.target as HTMLElement).matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  };

  React.useEffect(() => {
    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  
  return (
    <div>
      <div className="dropdown">
        <div id="myDropdown" className="dropdown-content">
          <a href="/">Home</a>
          <a href="/aboutme">About</a>
          <a href="/projects">Projects</a>
          <a href="/accomplishments">Accomplishments</a>
          <a href="/contactme">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
