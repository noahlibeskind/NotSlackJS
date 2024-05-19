import React, { createContext, useContext, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";

const NavigationContext = createContext(null);

export const NavigationProvider = ({ children }) => {
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [currentPath, setCurrentPath] = useState(location.pathname);

  const value = {
    isAuthenticated,
    setIsAuthenticated,
    currentPath,
    setCurrentPath,
  };
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
