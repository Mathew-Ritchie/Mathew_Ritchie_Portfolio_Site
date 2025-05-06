import React, { useEffect } from "react";
import "./individual-show-pages.css";

const imageModules = import.meta.glob("../assets/SDF/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function SDFPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="project-body">
      <h1 className="individual-project-title">Cache Bank Landing page</h1>
      <div className="ind-project-img-container">
        {imageList.map((image, index) => (
          <div key={index} className="ind-project-img-div">
            <img className="ind-project-img" src={image} alt={`SDF Image ${index + 1}`} />
          </div>
        ))}
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
          GitHub Repository
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
