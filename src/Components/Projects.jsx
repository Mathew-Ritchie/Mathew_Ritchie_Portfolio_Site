import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";
import { v4 as createId } from "uuid";
import JSL from "../assets/JSL-pic.png";
import SDF from "../assets/SDF-pic.png";
import DJS from "../assets/DJS.png";
import FakeStore from "../assets/fakestore.png";
import recipeBook from "../assets/recipe1.png";

export default function Projects() {
  const projects = [
    {
      img: SDF,
      alt: "screenshot of Bank Landing Page",
      title: "Cache Bank Landing Page",
      subTitle: "HTML & CSS",
      to: "/project/SDF",
    },
    {
      img: JSL,
      alt: "screenshot of Agile Board App",
      title: "Agile Board App",
      subTitle: "JavaScript",
      to: "/project/JSL",
    },
    {
      img: DJS,
      alt: "screenshot of Podcast App",
      title: "Podcast App",
      subTitle: "JavaScript, React, Css",
      to: "/project/DJS",
    },
    {
      img: FakeStore,
      alt: "screenshot of Fake Store App",
      title: "My-Fake-Store App",
      subTitle: "JavaScript, React, Zustand, Firebase",
      to: "/project/fakeStore",
    },
    {
      img: recipeBook,
      alt: "screenshot of My Recipe Book App",
      title: "My Recipe Book",
      subTitle: " Tailwind, JavaScript, React, Zustand",
      to: "/project/recipeBook",
    },
  ];

  return (
    <section className="my-projects-div" id="my-projects-div">
      <div className="project-spacer" id="project-spacer"></div>
      <div>
        <h1 className="projects-title">Projects</h1>
        <h3 className="projects-sub-title">(click on an image to see more!)</h3>
        <div id="project-imgs-div">
          {projects.map((project) => (
            <div key={createId()} className="project-img-wrapper">
              <div className="image-boarder">
                <Link to={project.to}>
                  <div className="container">
                    <img
                      src={project.img}
                      alt={project.alt}
                      className="image"
                      // style="width: 100%"
                    />
                    <div className="middle">
                      <div className="text">Click to see More</div>
                    </div>
                  </div>
                </Link>
              </div>
              <p className="project-title-sub">
                <strong>{project.title}</strong> <br />
                <br />
                {project.subTitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
