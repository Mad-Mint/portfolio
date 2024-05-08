import React, { ReactNode } from 'react';
import './footer.css'

interface ExternalLinkProps {
  to: string;
  children: ReactNode;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ to, children }) => {
  return (
    <a href={to} target="_blank" rel="noopener noreferrer" className="footer-link">
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav>
        <div className="footer-nav">
          <div><ExternalLink to="https://www.linkedin.com/in/shayne-mintling/">LinkedIn</ExternalLink></div>
          <div><ExternalLink to="https://github.com/Mad-Mint">GitHub</ExternalLink></div>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
