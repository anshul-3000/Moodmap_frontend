import React from "react";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white dark:bg-gray-800 transition duration-300">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        MoodMap - Emotion Detector
      </h1>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white text-sm px-4 py-2 rounded shadow hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
