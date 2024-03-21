import React, { useContext, useState } from "react";
import { BiSupport } from "react-icons/bi";
import { FaHandsHelping } from "react-icons/fa";
import { FaAppStore } from "react-icons/fa6";
import { GrCloudSoftware } from "react-icons/gr";
import { IoMail } from "react-icons/io5";
import { RiFilePaperLine } from "react-icons/ri";
import { GiLifeSupport } from "react-icons/gi";
import {
  SiBmcsoftware,
  SiMarketo,
  SiSpringsecurity,
  SiWebmoney,
} from "react-icons/si";
import { ThemeContext } from "../ThemeContext";
import ThemeToggle from "../ThemeToggle";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  const { darkMode } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const showService = () => setShowServices(true);
  const hideServices = () => setShowServices(false);
  const [showCompanys, setShowCompanys] = useState(false);
  const showCompany = () => setShowCompanys(true);
  const hideCompany = () => setShowCompanys(false);

  const services = [
    {
      name: "Digital Marketing",
      icon: <SiMarketo className="text-2xl text-blue-700" />,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Software Development",
      icon: <SiBmcsoftware className="text-2xl text-blue-700" />,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Web Development",
      icon: <SiWebmoney className="text-2xl text-blue-700" />,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "App Development",
      icon: <FaAppStore className="text-2xl text-blue-700" />,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Cloud Computing Services",
      icon: <GrCloudSoftware className="text-2xl text-blue-700" />,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "Cybersecurity Services",
      icon: <SiSpringsecurity className="text-2xl text-blue-700" />,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "IT Support and Maintenance",
      icon: <BiSupport className="text-2xl text-blue-700" />,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
    {
      name: "IT Consulting",
      icon: <FaHandsHelping className="text-2xl text-blue-700" />,
      description: "Lorem ipsum dolor sit amet, consectetur",
    },
  ];
  const company = [
    {
      name: "Contact Us",
      icon: <IoMail className="text-2xl text-blue-700" />,
      description: "Want to Reach Out? It's here",
    },
    {
      name: "Blog",
      icon: <RiFilePaperLine className="text-2xl text-blue-700" />,
      description: "Stay connected for our latest news",
    },
    {
      name: "Support Us",
      icon: <GiLifeSupport className="text-2xl text-blue-700" />,
      description: "Want to Support? It's here",
    },
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
                } hover:text-gray-400 flex items-center`}
                onMouseEnter={showService}
              >
                Services
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              {/* Dropdown Menu */}
              {showServices && (
                <div
                  className={`absolute z-50 mt-[-10px]${
                    darkMode ? "bg-white mt-[-10px]" : ""
                  }`}
                >
                  <DropdownMenu items={services} />
                </div>
              )}
            </div>
            <div className="relative mx-4" onMouseLeave={hideCompany}>
              <a
                href="#"
                className={`${
                  darkMode ? "text-gray-300" : "text-black"
                } hover:text-gray-400 flex items-center`}
                onMouseEnter={showCompany}
              >
                Company
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              {/* Dropdown Menu */}
              {showCompanys && (
                <div
                  className={`absolute z-50 mt-[-10px]${
                    darkMode ? "bg-white mt-[-10px]" : ""
                  }`}
                >
                  <DropdownMenu items={company} />
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
              <a
                href="#"
                className="inline-flex items-center py-2"
                onMouseEnter={showService}
              >
                <span className="ml-5">Services</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              {/* Dropdown Menu */}
              {showServices && (
                <div
                  className={`absolute z-50 mt-[-10px] ${
                    darkMode ? "bg-white" : ""
                  }`}
                >
                  <DropdownMenu items={services} />
                </div>
              )}
            </div>
            <div className="relative" onMouseLeave={hideCompany}>
              <a
                href="#"
                className="inline-flex items-center py-2"
                onMouseEnter={showCompany}
              >
                <span className="ml-5">Company</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              {/* Dropdown Menu */}
              {showCompanys && (
                <div
                  className={`absolute z-50 mt-[-10px] ml-[200px] ${
                    darkMode ? "bg-white" : ""
                  }`}
                >
                  <DropdownMenu items={company} />
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
