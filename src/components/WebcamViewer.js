import React, { useEffect, useState } from "react";

const BACKEND_URL = "https://moodmap-backend-au2f.onrender.com";

const WebcamViewer = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const startDetection = async () => {
    setLoading(true);
    try {
      await fetch(`${BACKEND_URL}/start`, { method: "POST" });
      setVideoStarted(true);
    } catch (err) {
      alert("Error starting detection.");
    }
    setLoading(false);
  };

  const stopDetection = async () => {
    try {
      await fetch(`${BACKEND_URL}/stop`, { method: "POST" });
      setVideoStarted(false);
    } catch (err) {
      alert("Error stopping detection.");
    }
  };

  useEffect(() => {
    return () => {
      fetch(`${BACKEND_URL}/cleanup`, { method: "POST" });
    };
  }, []);

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 w-full transition-colors duration-300">
      <div className="text-center mb-4">
        <h2 className="text-xl font-bold text-blue-700 dark:text-blue-400">
          Live Webcam Feed
        </h2>
      </div>

      {videoStarted ? (
        <div className="border-4 border-blue-300 dark:border-blue-600 rounded-lg overflow-hidden mb-4 bg-gray-100 dark:bg-gray-700">
          <img
            src={`${BACKEND_URL}/video_feed`}
            alt="Webcam Stream"
            className="max-w-full max-h-[400px] object-contain mx-auto"
          />
        </div>
      ) : (
        <div className="w-full h-[300px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4">
          <p className="text-gray-500 dark:text-gray-300 text-lg">
            Video feed will appear here
          </p>
        </div>
      )}

      <div className="flex justify-center gap-4">
        <button
          onClick={startDetection}
          disabled={loading || videoStarted}
          className={`px-6 py-2 rounded-full text-white font-semibold transition ${
            videoStarted || loading
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          ▶ Start Detection
        </button>

        <button
          onClick={stopDetection}
          disabled={!videoStarted}
          className={`px-6 py-2 rounded-full text-white font-semibold transition ${
            !videoStarted
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600"
          }`}
        >
          ⏹ Stop Detection
        </button>
      </div>
    </div>
  );
};

export default WebcamViewer;
