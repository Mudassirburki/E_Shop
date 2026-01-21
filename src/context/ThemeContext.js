import React, { createContext, useState, useEffect, useContext } from 'react';
import { useColorScheme } from 'react-native';
import Colors from '../theme/Colors';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const systemScheme = useColorScheme();
  const [theme, setTheme] = useState(systemScheme || 'light');

  const toggleTheme = (newTheme) => {
      setTheme(newTheme);
  };

  const themeColors = Colors[theme] || Colors.light;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors: themeColors, spacing: Colors.spacing, radius: Colors.radius, text: Colors.text }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
