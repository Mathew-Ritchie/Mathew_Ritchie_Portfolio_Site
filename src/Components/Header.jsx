import React, { useContext } from "react";
import "./header.css";
// import { ThemeContext } from "../Context/ThemeProvider";
import mathewLogo from "../assets/mathewLogo.png";
import newLogo from "../assets/newLogo.png";
// import { FaLightbulb } from "react-icons/fa6";
// import { FaRegLightbulb } from "react-icons/fa";
import NavBar from "./NavBar";

import ThemeToggleBtn from "./ThemeToggleBtn";

export default function Header({ onToggleModal }) {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header-container" id="header-container">
      <div className="header-background-div">
        <div className="header-div">
          <img
            className="header-img"
            src={newLogo}
            alt="logo showing computer outline with coding tags on the screen."
          />
          <div className="header-nav-toggle-div">
            <NavBar />
            <button
              className="header-nav-modal-btn"
              id="header-nav-modal-btn"
              onClick={onToggleModal}
            >
              ☰
            </button>
            <ThemeToggleBtn />
          </div>
        </div>
      </div>
    </header>
  );
}
