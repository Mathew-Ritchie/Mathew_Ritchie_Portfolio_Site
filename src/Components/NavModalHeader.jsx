import React, { useState } from "react";
import Logo from "../assets/mathewLogo.png";
import { Link } from "react-router-dom";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function NavModalHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  // const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  // const [isAboutUsOpen, setIsAboutUsOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
    setIsServicesOpen(false);
    setIsGalleryOpen(false);
    setIsAboutUsOpen(false);
  };

  // const toggleServices = () => {
  //   setIsServicesOpen(!isServicesOpen);

  //   setIsGalleryOpen(false);
  //   setIsAboutUsOpen(false);
  // };

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);

    setIsServicesOpen(false);
    setIsAboutUsOpen(false);
  };

  // const toggleAboutUs = () => {
  //   setIsAboutUsOpen(!isAboutUsOpen);

  //   setIsServicesOpen(false);
  //   setIsGalleryOpen(false);
  // };

  return (
    <>
      <div className="bg-gray-800/90 flex items-center justify-between py-2 text-white w-full fixed h-17 z-20">
        <div className="flex items-center gap-2 w-full justify-between">
          <Link className="w-100" to={"/about-us"}>
            <img src={Logo} className="w-70" alt="Maichatron Logo" />
          </Link>
          <div className="flex items-center gap-2  justify-end pr-3">
            <button
              className="lg:hidden text-white hover:text-gray-400 focus:outline-none p-2 rounded-md transition duration-300"
              onClick={toggleNav}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-9 h-9"
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
            <div className="lg:hidden">
              <ThemeToggleBtn />
            </div>
          </div>
        </div>

        {/* Desktop Navigation for lg and up */}
        <div className="flex items-center justify-end">
          <nav className="hidden w-full lg:flex items-center space-x-4 text-2xl pr-5">
            <a
              href="#intro-spacer"
              className="p-2 rounded-md hover:bg-gray-700 transition duration-200 text-shadow-xs text-shadow-neutral-700"
            >
              Introduction
            </a>

            <a
              href="#about-spacer"
              className="p-2 w-30 rounded-md hover:bg-gray-700 transition duration-200  text-shadow-xs text-shadow-neutral-700"
            >
              About Me
            </a>

            {/* Projects section */}

            <div className="relative group">
              <a
                href="#project-spacer"
                className="p-2 rounded-md hover:bg-gray-700 transition duration-200  text-shadow-xs text-shadow-neutral-700"
              >
                Projects
              </a>
              <div className="absolute left-0 mt-2 hidden group-hover:block bg-gray-800 text-white rounded-md shadow-lg py-1 w-60">
                <Link
                  to={"/project/houtbay"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                >
                  The Republic
                </Link>
                <Link
                  to={"/project/JSL"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                >
                  Agile Board App
                </Link>
                <Link
                  to={"/project/DJS"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                >
                  Podcast App
                </Link>
                <Link
                  to={"/project/fakeStore"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                >
                  My-Fake-Store.com
                </Link>
                <Link
                  to={"/project/recipeBook"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                >
                  My Recipe Book
                </Link>
              </div>
            </div>
            <a
              href="#contact-div"
              className="p-2 rounded-md hover:bg-gray-700 transition duration-200  text-shadow-xs text-shadow-neutral-700"
            >
              Contact
            </a>
          </nav>
          <div className="hidden lg:block">
            <ThemeToggleBtn />
          </div>
        </div>
      </div>

      {/* Backdrop for the navigation modal. Closes the modal on click. */}
      <div
        className={`fixed inset-0 z-40 bg-gray-900/70 transition-opacity duration-300 ${
          isNavOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        // style={{
        //   backgroundColor: "var(--transparent-tech-grey)",
        // }}
        onClick={toggleNav}
        aria-hidden={!isNavOpen}
      ></div>

      {/* Navigation modal content */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white shadow-xl transform transition-transform duration-300 z-50 lg:hidden ${
          isNavOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Modal header with a close button */}
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button
            className="text-white hover:text-gray-400 focus:outline-none p-2 rounded-md transition duration-300"
            onClick={toggleNav}
            aria-label="Close navigation menu"
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
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        {/* Modal navigation links */}
        <div className="flex flex-col justify-between items-start h-140">
          <nav className="p-4 space-y-2">
            <a
              href="#intro-spacer"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Introduction
            </a>
            <a
              href="#about-spacer"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              About Me
            </a>
            {/* Projects clickdown */}
            <div>
              <div
                className="flex items-center justify-between p-2 rounded-md hover:bg-gray-700 transition duration-200 cursor-pointer"
                onClick={toggleGallery}
              >
                <p>Projects</p>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    isGalleryOpen ? "rotate-90" : "rotate-0"
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 ease-in-out ${
                  isGalleryOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <a
                  href="#project-spacer"
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                  onClick={toggleNav}
                >
                  All Projects
                </a>
                <Link
                  to={"/project/houtbay"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                  onClick={toggleNav}
                >
                  The Republic
                </Link>
                <Link
                  to={"/project/JSL"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                  onClick={toggleNav}
                >
                  Agile Board App
                </Link>
                <Link
                  to={"/project/DJS"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                  onClick={toggleNav}
                >
                  Podcast App
                </Link>{" "}
                <Link
                  to={"/project/fakeStore"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                  onClick={toggleNav}
                >
                  My-Fake-Store App
                </Link>{" "}
                <Link
                  to={"/project/recipeBook"}
                  className="block p-2 hover:bg-gray-700 transition duration-200"
                  onClick={toggleNav}
                >
                  My Recipe Book
                </Link>
              </div>
            </div>
            <a
              href="#contact-div"
              className="block p-2 rounded-md hover:bg-gray-700 transition duration-200"
              onClick={toggleNav}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
