'use client';

import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

const defaultState = {
  theme: 'light',
  toggleTheme: () => { },
};

const ThemeContext = createContext<ThemeContextType>(defaultState);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(storedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.remove('light', 'dark'); // Removes previously applied theme class from the <html> element, so that it won't conflict with theme changer.
    document.documentElement.classList.add(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
