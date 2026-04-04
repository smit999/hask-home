import React from 'react';

const projectsData = [
  {
    id: 1,
    title: "HVAC Shapes Weight & Price Calculator",
    description: "An intuitive tool to accurately calculate weight and price for various HVAC ductwork shapes and materials, streamlining the estimation process for HVAC professionals."
  },
  {
    id: 2,
    title: "ERP for HVAC Business Warehouse",
    description: "A comprehensive Enterprise Resource Planning system tailored for managing HVAC business operations, from inventory and stock control to customer and order management."
  },
  {
    id: 3,
    title: "Future Innovations",
    description: "We are constantly innovating. Check back soon for more exciting projects designed to tackle the challenges of the HVAC and warehousing industries!"
  }
];

const Projects = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Projects</h1>
      <p className="text-xl text-gray-500 max-w-2xl mx-auto">
        Discover the amazing projects we've delivered for our clients.
      </p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project) => (
        <div key={project.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-snug">{project.title}</h3>
          <p className="text-gray-600 leading-relaxed flex-grow">{project.description}</p>
          <div className="mt-8 pt-4 border-t border-gray-100">
            <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors inline-flex items-center">
              Learn More <span className="ml-2">&rarr;</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;