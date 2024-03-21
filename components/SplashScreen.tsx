'use client';

import { useEffect, useState } from "react";

const SplashScreen = () => {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Set a timeout to hide splash after a delay
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 300); // 3000 milliseconds = 3 seconds

    // Cleanup function to clear timeout
    return () => {
      clearTimeout(splashTimeout);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-1000 ease-in-out ${
        showSplash ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "#0e1126", zIndex: 9999 }}
    >
      <div hidden className="text-white">
        {/* Your splash screen content goes here */}
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default SplashScreen;
