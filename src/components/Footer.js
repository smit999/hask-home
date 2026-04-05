import React from 'react';

const Footer = () => (
  <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
    <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col items-end text-[#333333] mb-4 md:mb-0" style={{ fontFamily: '"M PLUS 1 Code", monospace' }}>
        <span className="text-2xl font-bold leading-none tracking-widest uppercase">HASK</span>
        <span className="text-[8.5px] font-bold leading-none tracking-[0.45em] mt-0.5 text-right">Softwares</span>
      </div>
      <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Hask Softwares. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;