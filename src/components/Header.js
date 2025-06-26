// src/components/Header.js (Updated)
import React, { useState, useEffect } from 'react'; // Added useEffect for potential resize handling
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Optional: Close mobile menu if window is resized to desktop width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) { // Same breakpoint as CSS
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="header">
      <Link to="/" className="logo">HASK Softwares</Link>
      <button className="mobile-menu-toggle" onClick={toggleMobileMenu} aria-label="Toggle menu" aria-expanded={isMobileMenuOpen}>
        {isMobileMenuOpen ? '✕' : '☰'} {/* Simple text icons: Close / Hamburger */}
      </button>
      <nav className={`main-nav ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
          <li><Link to="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link></li>
          <li><Link to="/blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
          <li><Link to="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
          <li><Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
