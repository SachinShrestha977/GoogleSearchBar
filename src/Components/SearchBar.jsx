import React, { useState, useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const SearchBar = () => {
  const { darkMode } = useContext(ThemeContext);

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const staticSuggestions = [
    "Animations",
    "Automotive",
    "Artificial Intelligence",
    "App Development",
    "Analytics",
    "Business",
    "Blockchain",
    "Cloud Computing",
    "Cybersecurity",
    "Design",
    "Digital Marketing",
    "Data Science",
    "E-commerce",
    "Education",
    "Engineering",
    "Finance",
    "Gaming",
    "Healthcare",
    "Hospitality",
    "Insurance",
    "IoT",
    "Machine Learning",
    "Mobile Apps",
    "Networking",
    "Online Courses",
    "Programming",
    "Quality Assurance",
    "Robotics",
    "Software Development",
    "Security",
    "Technology",
    "UI/UX Design",
    "Virtual Reality",
    "Web Development",
    "Xenon",
    "Yoga",
    "Zoology",
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filteredSuggestions = staticSuggestions.filter(
      (item) =>
        item.toLowerCase().charAt(0) === value.toLowerCase().charAt(0) &&
        item.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div
      className={`relative w-full max-w-md mx-auto mt-[-180px] ${
        darkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg
          className={`w-4 h-4 ${darkMode ? "text-gray-300" : "text-gray-500"}`}
          aria-hidden="true"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </div>
      <input
        type="text"
        className={`pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500 ${
          darkMode ? "dark" : ""
        }`}
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      {suggestions.length > 0 && (
        <ul
          className={`mt-2 border border-gray-300 rounded-md shadow-md ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
