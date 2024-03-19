import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center">
      <span className={`${darkMode ? "text-white" : "text-black"} mr-2`}>
        Light
      </span>
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleTheme} />
        <span className="slider round"></span>
      </label>
      <span className={`${darkMode ? "text-white" : "text-black"} ml-2`}>
        Dark
      </span>
    </div>
  );
};

export default ThemeToggle;
