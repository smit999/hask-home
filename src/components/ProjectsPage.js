import React from 'react';
import './ProjectsPage.css';

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <h1>Our Projects</h1>
      <div className="project-item">
        <h2>HVAC Shapes Weight & Price Calculator</h2>
        <p>An intuitive tool to accurately calculate weight and price for various HVAC ductwork shapes and materials, streamlining the estimation process for HVAC professionals.</p>
      </div>
      <div className="project-item">
        <h2>ERP for HVAC Business Warehouse</h2>
        <p>A comprehensive Enterprise Resource Planning system tailored for managing HVAC business operations, from inventory and stock control to customer and order management.</p>
      </div>
      <div className="project-item">
        <h2>Future Innovations</h2>
        <p>We are constantly innovating. Check back soon for more exciting projects designed to tackle the challenges of the HVAC and warehousing industries!</p>
      </div>
    </div>
  );
};

export default ProjectsPage;
