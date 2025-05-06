import React from "react";
import me from "../assets/me.jpeg";
import "./intro.css";

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-div" id="intro-div">
        <h1 className="intro-title">Hi, I am</h1>
        <strong className="intro-title-2">Mathew Ritchie</strong>
        <p className="intro-subtitle">Welcome to my portfolio</p>
        <img className="intro-img" src={me} alt="profile picture of Mathew Ritchie" />
      </div>
    </section>
  );
}
