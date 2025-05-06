import React, { useEffect } from "react";
import "./individual-show-pages.css";
const imageModules = import.meta.glob("../assets/JSL/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function JSLPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-body">
      <h1 className="individual-project-title">SDF</h1>
      <div className="ind-project-img-container">
        {imageList.map((image, index) => (
          <div key={index} className="ind-project-img-div">
            <img className="ind-project-img" src={image} alt={`SDF Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div>
        <p className="project-technologies">| JAVASCRIPT |</p>
      </div>
      <div className="project-btn-div">
        <a
          href="https://github.com/Mathew-Ritchie/JSL_Portfolio_Piece_MATRIT24048_FTO2410_B_Mathew--Ritchie_JSL11"
          target="_blank"
          className="project-page-btns"
        >
          GitHub Repository
        </a>
      </div>
      <div>
        <p className="project-description">
          This project was the assignment given to us at the end of our CodeSpace JSL module. This
          project was all about vanilla JavaScript.
          <br></br>
          <br></br>
          Some of the code for this assignment was provided, but will a different range of buggs. It
          was our job to fgind the bugs and fix them so that the code worked accoring to the user
          stories requirements.
          <br></br>
          <br></br>
          The second part of this assignemnt involved writing code from scratch to accomplish other
          user stories that were provided to us. We had to be able to work with localstorage to be
          able to add tasks to our Agile board, as well as edit or delete tasks. We were also asked
          to use JS and Dom manipulation to make a working theme switch to change between light and
          dark modes.
        </p>
      </div>
    </div>
  );
}
