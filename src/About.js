import React from 'react';

const About = () => (
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">About Hask Softwares</h1>
    <p className="text-xl text-gray-600 leading-relaxed mb-12">
      We are a team of passionate engineers, designers, and strategists dedicated to building world-class software. 
      Our mission is to empower businesses with technology that is as beautiful as it is reliable.
    </p>
    <div className="relative h-64 sm:h-96 bg-gray-100 rounded-3xl overflow-hidden shadow-inner border border-gray-200 flex items-center justify-center">
      {/* Placeholder for an agency team photo */}
      <span className="text-gray-400 font-medium">Team Photo Placeholder</span>
    </div>
  </div>
);

export default About;