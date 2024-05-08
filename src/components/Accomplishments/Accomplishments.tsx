import React from 'react';
import './accomplishments.css'

const gym = require('../../images/gym.mp4')

const Accomplishments = () => {
  return (
    <div className="page-body">
      <div className="content">
        <video id="video" controls>
          <source src={gym} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Accomplishments;
