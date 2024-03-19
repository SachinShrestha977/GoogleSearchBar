import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

const AnimatedComponent = () => {
  const [stopGurkhaAnimation, setStopGurkhaAnimation] = useState(false);
  const [stopGurkhaGoogleAnimation, setStopGurkhaGoogleAnimation] =
    useState(false);

  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const gurkhaTimer = setTimeout(() => {
      setStopGurkhaAnimation(true);
    }, 3000);

    const gurkhaGoogleTimer = setTimeout(() => {
      setStopGurkhaGoogleAnimation(true);
    }, 5000);

    return () => {
      clearTimeout(gurkhaTimer);
      clearTimeout(gurkhaGoogleTimer);
    };
  }, []);

  return (
    <div
      className={`flex flex-col items-center justify-center h-screen mt-[-180px] ${
        darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h1
        className={`text-4xl font-bold text-center mb-8 ${
          stopGurkhaGoogleAnimation ? "" : "animate-bounce"
        } ${darkMode ? "text-gray-300" : "text-gray-800"}`}
      >
        Gurkha Google
      </h1>
      <div
        className={`text-2xl font-bold text-center ${
          stopGurkhaAnimation ? "" : "animate-spin"
        } ${darkMode ? "text-gray-300" : "text-gray-800"}`}
      >
        Gurkha
      </div>
    </div>
  );
};

export default AnimatedComponent;
