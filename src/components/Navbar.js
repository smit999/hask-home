import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="text-3xl font-black text-blue-600 tracking-tighter hover:text-blue-700 transition">
            Hask.
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Home</Link>
          <Link to="/projects" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Projects</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">About</Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">Contact</Link>
        </div>
        <div className="flex items-center">
          <button className="px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;