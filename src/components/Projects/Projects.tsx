import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'

const UNL = require('../../images/UNL.jpg')
const OpenECUs = require('../../images/OpenECUs.jpg')
const Forklift = require('../../images/Forklift.jpg')

const ProjectsPage = () => {
  return (
    <div className="projects-container"> {/* Applying a class name */}
      {/* HuskerNet Card */}
      <Link to="/huskernet" className="project-card">
        <img src={UNL} alt="Husker-Net" />
        <div className="overlay">
          <div className="project-info">
            <h3>HuskerNet</h3>
            <p>More information about HuskerNet project...</p>
          </div>
        </div>
      </Link>
      
      {/* OpenECUs Card */}
      <Link to="/openecus" className="project-card">
        <img src={OpenECUs} alt="OpenECUs" />
        <div className="overlay">
          <div className="project-info">
            <h3>OpenECUs</h3>
            <p>More information about OpenECUs project...</p>
          </div>
        </div>
      </Link>

      {/* Automated Inventory Card */}
      <Link to="/dmsi" className="project-card">
        <img src={Forklift} alt="Automated Inventory" />
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
