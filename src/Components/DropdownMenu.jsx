import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const DropdownMenu = ({ items }) => {
  const { darkMode } = useContext(ThemeContext);
  const columns = Math.ceil(items.length / 4);

  return (
    <div
      className={`absolute ${darkMode ? "bg-gray-800" : "bg-white"} ${
        darkMode ? "text-gray-300" : "text-black"
      } mt-2 p-2 rounded-lg shadow-lg grid`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(120px, 1fr))`,
      }}
    >
      {items.map((item, index) => (
        <a href="#" className="block hover:text-gray-400" key={index}>
          {item}
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;
