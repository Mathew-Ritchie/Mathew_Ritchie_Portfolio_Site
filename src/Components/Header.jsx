import React from "react";
import "./header.css";
import mathewLogo from "../assets/mathewLogo.png";

export default function Header({ onToggleModal }) {
  return (
    <header className="header-container" id="header-container">
      <div className="header-div">
        <img
          className="header-img"
          src={mathewLogo}
          alt="logo showing computer outline with coding tags on the screen."
        />
        <div class="toggle-div">
          <img src="./assets/icon-dark-theme.svg" id="icon-dark" alt="icon-dark-theme" />
          <input type="checkbox" id="switch" />
          <label for="switch" id="label-checkbox-theme"></label>
          <img src="./assets/icon-light-theme.svg" id="icon-light" alt="icon-light-theme" />
        </div>
        <button className="header-nav-btn" id="header-nav-btn" onClick={onToggleModal}>
          ☰
        </button>
      </div>
    </header>
  );
}
