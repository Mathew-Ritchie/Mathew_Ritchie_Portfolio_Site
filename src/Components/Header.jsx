import React, { useContext } from "react";
import "./header.css";
import { ThemeContext } from "../Context/ThemeProvider";
import mathewLogo from "../assets/mathewLogo.png";

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
        <button onClick={toggleTheme}>
          {theme === "light" ? "Switch to Dark" : "Switch to Light"}
        </button>
        <button className="header-nav-btn" id="header-nav-btn" onClick={onToggleModal}>
          ☰
        </button>
      </div>
    </header>
  );
}
