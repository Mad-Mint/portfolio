import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li><Link to="https://www.linkedin.com/in/shayne-mintling/" className="footer-link">LinkedIn</Link></li>
          <li><Link to="https://github.com/Mad-Mint" className="footer-link">GitHub</Link></li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
