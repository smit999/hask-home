// src/components/ImmersiveHeader.js (Updated)
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import './ImmersiveHeader.css'; // Import CSS file

const ImmersiveHeader = ({ title }) => {
  const { toggleMainNav, isMainNavVisible } = useAppContext();

  return (
    <header className="immersive-header">
      <div className="immersive-header-content">
        <Link to="/blog" className="immersive-back-link">&larr; Blog List</Link>
        <h1 className="immersive-title">{title}</h1>
        <button onClick={toggleMainNav} className="immersive-nav-toggle">
          {isMainNavVisible ? 'Close Menu' : 'Menu'}
        </button>
      </div>
    </header>
  );
};

export default ImmersiveHeader;
