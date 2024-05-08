import React from 'react';
import './styles.css'

const pdf = require('./Resume_Shayne_Mintling.pdf');

const AboutMe: React.FC = () => {
  return (
    <div className="page-body">
      <div className="content">
        <p>
          I am from a small town in southwest Nebraska. I have a passion for technology and
          enjoy exploring new concepts and technologies in the field of computer science.
        </p>
        <p>
          In addition to my academic pursuits, I have hands-on experience in software development
          and have worked on various projects ranging from web development to machine learning.
        </p>
        <p>
          Currently, I am seeking opportunities to further enhance my skills and contribute to
          innovative projects.
        </p>
        <div className="resume-container">
          <embed src={pdf} type="application/pdf" className='pdf' />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
