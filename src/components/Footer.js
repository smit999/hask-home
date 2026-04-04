import React from 'react';

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="text-2xl font-bold text-gray-900 tracking-tight mb-4 md:mb-0">Hask.</div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Hask Softwares. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;