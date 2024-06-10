'use client';

import { useEffect, useState } from 'react';

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timeout to hide splash after a delay
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 350); // duration

    // Cleanup function to clear timeout
    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
        showSplash ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ backgroundColor: '#0f0f11', zIndex: 9999 }}
    >
      
    </div>
  );
};

export default SplashScreen;
