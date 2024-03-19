import React, { useContext, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import ThemeToggle from "../ThemeToggle";
import { ThemeContext } from "../ThemeContext";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const showService = () => setShowServices(true);
  const hideServices = () => setShowServices(false);
  const [showContacts, setShowContacts] = useState(false);
  const showContact = () => setShowContacts(true);
  const hideContact = () => setShowContacts(false);

  const services = [
    "Design",
    "Develop",
    "Secure",
    "Scale",
    "Innovate",
    "Transform",
    "Automate",
    "Analyze",
    "Cloud",
    "Support",
    "Train",
    "Consult",
    "Host",
  ];
  const contacts = [
    "Contact 1",
    "Contact 2",
    "Contact 3",
    "Contact 4",
    "Contact 5",
    "Contact 6",
    "Contact 7",
    "Contact 8",
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav
        className={`py-2 mt-2 ${
          darkMode ? "bg-gray-800" : "bg-white"
        } text-black`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img
              src="https://i.pinimg.com/originals/5b/3f/74/5b3f74051f3d20927f282e4be67e8c06.jpg"
              alt="Logo"
              className="h-10 mr-4"
            />
            <h1
              className={`text-lg font-bold ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              Gurkha Google
            </h1>
          </div>
          <div
            className={`hidden md:flex flex-grow justify-center ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            <a href="#" className={`hover:text-gray-400 mx-4`}>
              Home
            </a>
            <a href="#" className={`hover:text-gray-400 mx-4`}>
              About
            </a>
            <div
              className={`relative mx-4 hover:text-gray-400 `}
              onMouseLeave={hideServices}
            >
              <a
                href="#"
                className={`${
                  darkMode ? "text-gray-300" : "text-black"
                } hover:text-gray-400`}
                onMouseEnter={showService}
              >
                Services
              </a>
              {/* Dropdown Menu */}
              {showServices && (
                <div className={`absolute z-50 ${darkMode ? "bg-white" : ""}`}>
                  <DropdownMenu items={services} />
                </div>
              )}
            </div>
            <div className="relative mx-4" onMouseLeave={hideContact}>
              <a
                href="#"
                className={`${
                  darkMode ? "text-gray-300" : "text-black"
                } hover:text-gray-400`}
                onMouseEnter={showContact}
              >
                Contact
              </a>
              {/* Dropdown Menu */}
              {showContacts && (
                <div className={`absolute z-50 ${darkMode ? "bg-white" : ""}`}>
                  <DropdownMenu items={contacts} />
                </div>
              )}
            </div>
          </div>
          <div
            className={`hidden md:flex items-center ${
              darkMode ? "text-gray-300" : "text-black"
            }`}
          >
            <a href="#" className={`hover:text-gray mx-4`}>
              Login
            </a>
            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className={`text-black focus:outline-none ${
                darkMode ? "text-gray-300" : "text-black"
              }`}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div
            className={`md:hidden px-4 pt-2 pb-8 ${
              darkMode ? "bg-gray-800 text-gray-300" : "bg-white text-black"
            }`}
          >
            <a href="#" className="block py-2">
              Home
            </a>
            <a href="#" className="block py-2">
              About
            </a>
            <div className="relative" onMouseLeave={hideServices}>
              <a href="#" className="block py-2" onMouseEnter={showService}>
                Services
              </a>
              {/* Dropdown Menu */}
              {showServices && (
                <div className={`absolute z-50 ${darkMode ? "bg-white" : ""}`}>
                  <DropdownMenu items={services} />
                </div>
              )}
            </div>
            <div className="relative" onMouseLeave={hideContact}>
              <a href="#" className="block py-2" onMouseEnter={showContact}>
                Contact
              </a>
              {/* Dropdown Menu */}
              {showContacts && (
                <div className={`absolute z-50 ${darkMode ? "bg-white" : ""}`}>
                  <DropdownMenu items={contacts} />
                </div>
              )}
            </div>
            <div className="flex justify-end mt-4">
              <a href="#" className="hover:text-gray-400 mr-4">
                Login
              </a>
              <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </nav>
      <ThemeToggle></ThemeToggle>
    </>
  );
};

export default Navbar;
