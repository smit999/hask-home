// src/contexts/AppContext.js (Updated)
import React, { createContext, useState, useContext, useCallback } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [isImmersiveMode, _setImmersiveMode] = useState(false);
  const [currentPageTitle, setCurrentPageTitle] = useState('');
  const [isMainNavVisible, setIsMainNavVisible] = useState(false); // New state

  const setImmersiveMode = useCallback((mode) => {
    _setImmersiveMode(mode);
    if (mode) { // When entering immersive mode
      setIsMainNavVisible(false); // Ensure main nav is hidden
    }
  }, []);

  const toggleMainNav = useCallback(() => {
    setIsMainNavVisible(prev => !prev);
  }, []);

  return (
    <AppContext.Provider value={{
      isImmersiveMode, setImmersiveMode,
      currentPageTitle, setCurrentPageTitle,
      isMainNavVisible, toggleMainNav // Expose new state and function
    }}>
      {children}
    </AppContext.Provider>
  );
};
