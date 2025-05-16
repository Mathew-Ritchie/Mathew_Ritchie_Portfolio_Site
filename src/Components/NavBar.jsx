import React from "react";
import "./header.css";

export default function NavBar() {
  return (
    <nav className="nav-bar-header" id="nav-bar-header">
      <div className="header-nav-bar-big-srn">
        <a href="#intro-spacer">
          <button className="header-nav-btn">Introduction</button>
        </a>
        <a href="#about-spacer">
          <button className="header-nav-btn">About Me</button>
        </a>
        <a href="#project-spacer">
          <button className="header-nav-btn">Projects</button>
        </a>
        <a href="#contact-div">
          <button className="header-nav-btn">contact</button>
        </a>
      </div>
    </nav>
  );
}
