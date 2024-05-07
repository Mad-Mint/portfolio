import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <nav>
        <div className="footer-nav">
          <div><Link to="https://www.linkedin.com/in/shayne-mintling/" className="footer-link">LinkedIn</Link></div>
          <div><Link to="https://github.com/Mad-Mint" className="footer-link">GitHub</Link></div>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
