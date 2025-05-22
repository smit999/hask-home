import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <h1>Innovative Software Solutions by HASK Softwares</h1>
      <p>
        HASK Softwares is dedicated to providing innovative solutions for the HVAC and warehousing industries. 
        We leverage cutting-edge technology to solve complex problems and streamline operations for our clients. 
        Our team of experts is passionate about technology and committed to delivering high-quality, reliable software.
      </p>
      <div className="cta-placeholder">
        <p>Interested in our work? <a href="/projects">Learn More About Our Projects</a></p>
      </div>
    </div>
  );
};

export default HomePage;
