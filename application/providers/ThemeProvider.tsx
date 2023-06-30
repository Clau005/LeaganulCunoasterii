import React, { useState } from 'react';
import { ThemeContext } from './context/ThemeContext';


interface ThemeProviderProps {
    children: React.ReactNode;
  }


const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
    console.log(isDarkTheme, 'isDarkTheme from providers ThemeProvider')
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;