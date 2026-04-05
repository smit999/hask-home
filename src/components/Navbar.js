import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../hask-logo.png';

const Navbar = () => (
  <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <div className="flex-shrink-0 flex items-center">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <img src={logo} alt="Hask Logo" className="h-10 w-auto" />
            <div className="flex flex-col items-end text-[#333333]" style={{ fontFamily: '"M PLUS 1 Code", monospace' }}>
              <span className="text-3xl font-bold leading-none tracking-widest uppercase">HASK</span>
              <span className="text-[10px] font-bold leading-none tracking-[0.45em] mt-0.5 text-right">Softwares</span>
            </div>
          </Link>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-gray-600 hover:text-brand font-medium transition-colors">Home</Link>
          <Link to="/projects" className="text-gray-600 hover:text-brand font-medium transition-colors">Projects</Link>
          <Link to="/about" className="text-gray-600 hover:text-brand font-medium transition-colors">About</Link>
          <Link to="/blog" className="text-gray-600 hover:text-brand font-medium transition-colors">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-brand font-medium transition-colors">Contact</Link>
        </div>
        <div className="flex items-center">
          <button className="px-6 py-2.5 bg-brand text-white font-semibold rounded-lg shadow-md hover:bg-brand/90 hover:shadow-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;