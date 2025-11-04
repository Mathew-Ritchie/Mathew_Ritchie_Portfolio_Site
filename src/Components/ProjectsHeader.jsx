import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import newLogo from "../assets/newLogo.png";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function ProjectsHeader() {
  return (
    <header
      className="projects-header-container w-full fixed z-50 flex justify-between items-center p-4 shadow-md bg-gray-800/80"
      id="projects-header-container"
    >
      <img
        className="projects-header-img w-50 sm:w-70"
        src={newLogo}
        alt="logo showing computer outline with coding tags on the screen."
      />
      <div className="project-header-btn-div flex gap-2">
        <Link to={"/#project-spacer"} smooth>
          <button
            className="projects-header-nav-btn text-white text-md sm:text-2xl "
            id="projects-header-nav-btn"
          >
            Back to projects
          </button>
        </Link>
        <ThemeToggleBtn />
      </div>
    </header>
  );
}
