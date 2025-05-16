import React, { useContext } from "react";
import "./header.css";
import { ThemeContext } from "../Context/ThemeProvider";
import { FaLightbulb } from "react-icons/fa6";
import { FaRegLightbulb } from "react-icons/fa";

export default function ThemeToggleBtn() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button className="toggle-btn" onClick={toggleTheme}>
      {theme === "light" ? <FaLightbulb /> : <FaRegLightbulb />}
    </button>
  );
}
