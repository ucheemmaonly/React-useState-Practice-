import React, { useState } from 'react';

 function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    // Flip the value using prev to guarantee reading the most current state
    setIsDark(prev => !prev);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-300 font-sans ${
        isDark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
              }`}>
          
             <h1 className="text-black font-bold">
            Question3
          </h1>
          
      <h2 className="text-2xl font-bold mb-4">
        Current Mode: {isDark ? 'Dark' : 'Light'} Mode
      </h2>
      <button
        onClick={toggleTheme}
        className={`px-5 py-2.5 rounded-lg border text-base font-medium transition-colors duration-200 cursor-pointer ${
          isDark
            ? 'bg-gray-800 hover:bg-gray-700 border-gray-600 text-white'
            : 'bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-900'
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default ThemeToggle