import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./projects-header.css";
import newLogo from "../assets/newLogo.png";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function ProjectsHeader() {
  return (
    <header className="projects-header-container" id="projects-header-container">
      <img
        className="projects-header-img"
        src={newLogo}
        alt="logo showing computer outline with coding tags on the screen."
      />
      <div className="project-header-btn-div">
        <Link to={"/#project-spacer"} smooth>
          <button className="projects-header-nav-btn" id="projects-header-nav-btn">
            Back to projects
          </button>
        </Link>
        <ThemeToggleBtn />
      </div>
    </header>
  );
}
