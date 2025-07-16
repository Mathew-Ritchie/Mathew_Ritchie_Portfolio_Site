import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./individual-show-pages.css";
import projectData from "../Projects-data/projectData";

export default function ProjectsPage() {
  const { projectId } = useParams();

  const project = projectData[projectId];

  const [currentIndex, setCurrentIndex] = useState(0);

  const imageList = project.imagePaths || [];

  console.log(project.imagePaths);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageList.length) % imageList.length);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentIndex(0);
  }, [projectId]);

  return (
    <div className="project-body">
      <h1 className="individual-project-title">{project.title}</h1>
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
        <p className="project-technologies">{project.technoligies} </p>
      </div>
      <div className="project-btn-div">
        <a href={project.githubURL} target="_blank" className="project-page-btns">
          Github Repository
        </a>
      </div>
      <div>
        {project.description.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
}
