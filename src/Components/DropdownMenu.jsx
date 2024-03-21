import React, { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const DropdownMenu = ({ items }) => {
  const { darkMode } = useContext(ThemeContext);
  const columns = Math.ceil(items.length / 4);

  return (
    <div
      className={`absolute ${darkMode ? "bg-gray-800" : "bg-white"} ${
        darkMode ? "text-gray-300" : "text-black"
      } mt-2 p-2 rounded-2xl shadow-lg grid gap-5`}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(240px, 1fr))`,
      }}
    >
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-2 hover:bg-gray-100 hover:cursor-pointer hover: rounded-md"
        >
          {item.icon}
          <div>
            <span>{item.name}</span>{" "}
            {item.description && (
              <small className="block text-xs">{item.description}</small>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DropdownMenu;
