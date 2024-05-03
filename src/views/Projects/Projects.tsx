import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="projects-container"> {/* Applying a class name */}
      {/* HuskerNet Card */}
      <Link to="/projects/huskernet" className="project-card">
        <img src="huskernet.jpg" alt="HuskerNet" />
        <div className="overlay">
          <div className="project-info">
            <h3>HuskerNet</h3>
            <p>More information about HuskerNet project...</p>
          </div>
        </div>
      </Link>
      
      {/* OpenECUs Card */}
      <Link to="/projects/openecus" className="project-card">
        <img src="openecus.jpg" alt="OpenECUs" />
        <div className="overlay">
          <div className="project-info">
            <h3>OpenECUs</h3>
            <p>More information about OpenECUs project...</p>
          </div>
        </div>
      </Link>

      {/* Automated Inventory Card */}
      <Link to="/projects/automated-inventory" className="project-card">
        <img src="automated-inventory.jpg" alt="Automated Inventory" />
        <div className="overlay">
          <div className="project-info">
            <h3>Automated Inventory</h3>
            <p>More information about Automated Inventory project...</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ProjectsPage;
