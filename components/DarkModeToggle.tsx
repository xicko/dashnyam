'use client';

import React, { useEffect } from 'react';

const ThemeToggleButton: React.FC<{ theme: string; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      document.documentElement.classList.add(storedTheme);
    } else {
      document.documentElement.classList.add('light');
    }
  }, []);

  return (
    <button
      aria-label="Theme Toggle"
      onClick={toggleTheme}
      className="p-2 m-[-8px] bg-gray-200 dark:bg-gray-800 bg-opacity-20 dark:bg-opacity-20 rounded-lg focus:outline-none"
    >
      {theme === 'light' ? (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-9.485h-1M4.515 12h-1m15.657-7.071l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m8.485-9.485h-1M4.515 12h-1m15.657-7.071l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"></path>
        </svg>
      )}
    </button>
  );
};

export default ThemeToggleButton;