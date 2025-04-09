import React, { useState, useEffect } from "react";
import WebcamViewer from "./components/WebcamViewer";
import Navbar from "./components/Navbar";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen relative transition duration-500">
      {/* 📷 Background Image */}
      <div
        className={`absolute inset-0 z-0 bg-center bg-no-repeat bg-cover ${
          darkMode ? "brightness-50" : "brightness-110"
        }`}
        style={{ backgroundImage: "url('/bg.jpg')" }}
      ></div>

      {/* 🌚 Dark Overlay */}
      {darkMode && <div className="absolute inset-0 bg-black bg-opacity-50 z-0"></div>}

      {/* 🧭 Navbar */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* 📦 Feed Section (left-aligned) */}
      <div className="relative z-10 flex justify-center min-h-[80vh] px-4 py-6 mt-10 md:mt-20">
        <div className="flex flex-col md:flex-row w-full max-w-6xl gap-8 items-start">
          
          {/* 🎥 Left-aligned Webcam Feed */}
          <div
            className={`w-full md:w-[600px] rounded-2xl shadow-2xl border-2 overflow-hidden transition duration-300 ${
              darkMode ? "bg-gray-900 border-gray-700" : "bg-white border-white"
            }`}
          >
            <div
              className={`p-4 rounded-lg ${
                darkMode ? "bg-gray-800" : "bg-gray-100"
              }`}
            >
              <WebcamViewer />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
