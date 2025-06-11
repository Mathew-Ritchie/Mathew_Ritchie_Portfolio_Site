import React, { useEffect, useState } from "react";
import "./individual-show-pages.css";
const imageModules = import.meta.glob("../assets/JSL/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function JSLNew() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="project-body">
      <h1 className="individual-project-title">My-Fake-Store.com</h1>
      <div className="carousel">
        <div
          className="carousel-wrapper"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageList.map((item, index) => (
            <div key={index} className="carousel-item">
              <img src={item} />
            </div>
          ))}
        </div>
        <div className="carousel-btn-div">
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      </div>
      <div>
        <p className="project-technologies">| JAVASCRIPT | </p>
      </div>
      <div className="project-btn-div">
        <a
          href="https://github.com/Mathew-Ritchie/JSL_Portfolio_Piece_MATRIT24048_FTO2410_B_Mathew--Ritchie_JSL11"
          target="_blank"
          className="project-page-btns"
        >
          Github Repository
        </a>
      </div>
      <div>
        <p className="project-description">
          This project served as the culminating assignment for the CodeSpace JSL module, with a
          strong emphasis on mastering vanilla JavaScript. The initial phase of the project involved
          a critical exercise in debugging: identifying and rectifying a range of pre-existing bugs
          within provided code to ensure it met specific user story requirements. This task honed my
          analytical skills and deepened my understanding of common JavaScript errors and best
          practices for robust code.
          <br></br>
          <br></br>The second part of the assignment challenged me to develop new functionalities
          from scratch, demonstrating proficiency in core JavaScript concepts. Added functionality
          helped in creating an interactive Agile board, where users could seamlessly add, edit, and
          delete tasks. This persistence was achieved by effectively utilizing local storage to
          maintain data across sessions. Furthermore, I implemented a dynamic theme switch
          functionality, allowing users to toggle between light and dark modes through direct
          JavaScript and DOM manipulation, showcasing an understanding of responsive and interactive
          web design.
        </p>
      </div>
    </div>
  );
}
