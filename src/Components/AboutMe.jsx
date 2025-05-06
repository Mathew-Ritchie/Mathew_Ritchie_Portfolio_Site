import React from "react";
import boat from "../assets/boat.jpg";
import "./about-me.css";

export default function AboutMe() {
  return (
    <section className="about-me-div" id="about-me-div">
      <div className="about-spacer" id="about-spacer"></div>
      <h1 className="about-me-heading">About me</h1>
      <div className="about-me-grid">
        <img
          className="about-me-img"
          src={boat}
          alt="Picture of Mathew Ritchie on a boat and table mountian in the background"
        />
        <p className="about-me-p">
          I live in Cape Town, and I am relatively new to the web developemnt world, but I already
          love it!
          <br />
          <br />I have just finished my Software Development course at CodeSpace Academy, which has
          given me a great foundation for what it hopefully to come. I have a good understanding of
          HTML, CSS and most impotantly JavaScript and React.
          <br />
          <br />I am hoping to start a new and exciting career in the Web Developemt world. I love
          being creative and problem solving, while creating new things. I am looking for
          opportunities to learn, grow, and hopefully contribute to something exciting.
        </p>
      </div>
    </section>
  );
}
