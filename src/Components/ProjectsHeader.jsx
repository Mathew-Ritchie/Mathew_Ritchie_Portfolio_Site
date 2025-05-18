import React from "react";
import { Link } from "react-router-dom";
import "./projects-header.css";
import newLogo from "../assets/newLogo.png";
import ThemeToggleBtn from "./ThemeToggleBtn";

export default function ProjectsHeader() {
  return (
    <header className="projects-header-container" id="projects-header-container">
      <div className="projects-header-div">
        <img
          className="projects-header-img"
          src={newLogo}
          alt="logo showing computer outline with coding tags on the screen."
        />
        <div className="project-header-btn-div">
          <Link to={"/"}>
            <button className="projects-header-nav-btn" id="projects-header-nav-btn">
              Home
            </button>
          </Link>
          <ThemeToggleBtn />
        </div>
      </div>
    </header>
  );
}
