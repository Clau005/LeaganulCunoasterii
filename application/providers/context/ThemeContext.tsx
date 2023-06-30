import React from "react";

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  isDarkTheme: false,
  toggleTheme: () => {},
});
