import React, { useEffect, useState } from "react";
import "./individual-show-pages.css";
const imageModules = import.meta.glob("../assets/SDF/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function SDFNew() {
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
      <h1 className="individual-project-title">The Best Ever Podcast web App</h1>
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
        <p className="project-technologies">| HTML | CSS TAILWINDS | JAVASCRIPT | </p>
      </div>
      <div className="project-btn-div">
        <a
          href="https://github.com/Mathew-Ritchie/SDF_Portfolio_Piece_MATRIT24048_FTO1024_B_Mathew-Ritchie_SDF11"
          target="_blank"
          className="project-page-btns"
        >
          Github Repository
        </a>
      </div>
      <div>
        <p className="project-description">
          My first portfolio piece for CodeSpace was a code along experience where we focussed on
          HTML and CSS which was added with Tailwinds.
        </p>
      </div>
    </div>
  );
}
