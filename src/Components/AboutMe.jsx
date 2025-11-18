import React from "react";
import aboutBg from "../assets/Aboutmeback.jpeg";

export default function AboutMe() {
  return (
    <div
      id="about-me-div"
      className="flex flex-col justify-center items-center min-h-fit h-screen w-full text-white bg-cover bg-no-repeat bg-fixed"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <div id="about-spacer" className="h-0"></div>

      <div className="flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] rounded-md mx-4 lg:mx-20 px-3 py-1 my-10">
        <h1 className="text-orange-400 py-7 drop-shadow-md text-5xl mb-0">About me</h1>

        <p className="text-gray-100 text-start mt-0 px-2 pb-2 text-base lg:text-xl">
          Currently based in the vibrant community of Hout Bay, Cape Town, I'm an easy-going and
          friendly individual who appreciates a balanced approach to life. My inherent drive and
          meticulous nature naturally align with my passion for web development, where I find
          immense satisfaction in creative problem-solving and thinking innovatively.
          <br />
          <br />
          The dynamic nature of front-end development truly excites me, particularly the art of
          crafting aesthetically pleasing, user-friendly, and responsive interfaces through
          thoughtful styling and component design. I'm particularly enthusiastic about leveraging
          JavaScript and React to build dynamic applications with virtually limitless possibilities,
          focusing on creating intuitive and engaging user experiences.
          <br />
          <br />
          My formal training at CodeSpace Academy, where I graduated with distinction from the
          Software Development course, has provided me with a strong technical foundation. I possess
          practical experience with Git and Github, VSCode, HTML, CSS, CSS Tailwinds, JavaScript,
          Typescript, and React.
          <br />
          <br />I am currently seeking a permanent position within a collaborative environment where
          I can continue to expand my coding expertise and contribute positively to team and
          organizational objectives. I am eager to engage with challenging projects and further
          develop my skills in a supportive and growth-oriented setting.
        </p>
      </div>
    </div>
  );
}
