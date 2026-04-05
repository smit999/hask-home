import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] bg-gradient-to-b from-white to-gray-50 text-center px-4 py-20">
    <h1 className="text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600 tracking-tight mb-6">
      Build Software <span className="text-brand">Faster</span>
    </h1>
    <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mb-12 leading-relaxed">
      Hask Softwares provides cutting-edge solutions for modern businesses. 
      Experience performance, reliability, and beautiful design.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Link to="/contact" className="px-8 py-4 bg-brand text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-brand/90 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        Start a Project
      </Link>
      <Link to="/projects" className="px-8 py-4 bg-white text-gray-800 text-lg font-semibold rounded-xl shadow-md border border-gray-200 hover:bg-gray-50 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        View Our Work
      </Link>
    </div>
  </div>
);

export default Home;