import React, { useContext } from "react";
import "./header.css";
import { ThemeContext } from "../Context/ThemeProvider";
import mathewLogo from "../assets/mathewLogo.png";
import logoGreen from "../assets/logoGreen.png";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";
import NavBar from "./NavBar";

export default function Header({ onToggleModal }) {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header-container" id="header-container">
      <div className="header-div">
        <img
          className="header-img"
          src={mathewLogo}
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
          <button className="toggle-btn" onClick={toggleTheme}>
            {theme === "light" ? <FaLightbulb /> : <FaRegLightbulb />}
          </button>
        </div>
      </div>
    </header>
  );
}
