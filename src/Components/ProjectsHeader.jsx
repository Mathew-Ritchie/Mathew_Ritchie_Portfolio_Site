import React from "react";
import { Link } from "react-router-dom";
import "./projects-header.css";
import mathewLogo from "../assets/mathewLogo.png";

export default function ProjectsHeader() {
  return (
    <header className="projects-header-container" id="projects-header-container">
      <div className="projects-header-div">
        <img
          className="projects-header-img"
          src={mathewLogo}
          alt="logo showing computer outline with coding tags on the screen."
        />
        <Link to={"/"}>
          <button className="projects-header-nav-btn" id="projects-header-nav-btn">
            Home
          </button>
        </Link>
      </div>
    </header>
  );
}
