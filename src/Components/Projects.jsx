import React from "react";
import { Link } from "react-router-dom";
import { v4 as createId } from "uuid";
import JSL from "../assets/JSL-pic.png";
import SDF from "../assets/SDF-pic.png";
import DJS from "../assets/DJS.png";
import FakeStore from "../assets/fakestore.png";
import recipeBook from "../assets/recipe1.png";
import houtbay01 from "../assets/houtbay01.png";

export default function Projects() {
  const projects = [
    {
      img: houtbay01,
      alt: "screenshot of The republic of Hout Bay landing page",
      title: "The Republic of Hout Bay - Tourism site",
      subTitle: "React | JavaScript | Tailwind | Zustand | Rest APIs",
      to: "/project/houtbay",
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
      subTitle: "JavaScript | React | CSS",
      to: "/project/DJS",
    },
    {
      img: FakeStore,
      alt: "screenshot of Fake Store App",
      title: "My-Fake-Store App",
      subTitle: "JavaScript | React | Zustand | Express.js | SQLite",
      to: "/project/fakeStore",
    },
    {
      img: recipeBook,
      alt: "screenshot of My Recipe Book App",
      title: "My Recipe Book",
      subTitle: "Tailwind | JavaScript | React | Zustand | Rest APIs",
      to: "/project/recipeBook",
    },
  ];

  return (
    <section
      id="my-projects-div"
      className="flex flex-col justify-start items-center w-full min-h-fit h-screen bg-[var(--clr-medium)]"
    >
      <div id="project-spacer" className="h-0"></div>

      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-[var(--clr-accent)] text-center drop-shadow-md  mt-[70px] text-5xl font-semibold">
          Projects
        </h1>
        <h3 className="text-center text-[var(--clr-main-text)] mb-10">
          (click on an image to see more!)
        </h3>

        <div
          id="project-imgs-div"
          className="flex flex-col sm:flex-row sm:flex-wrap justify-center items-center gap-5 sm:gap-8 pb-10"
        >
          {projects.map((project) => (
            <div
              key={createId()}
              className="flex flex-col justify-center items-center w-[350px] sm:w-[400px]"
            >
              <div className="bg-[var(--clt-dark)] h-[275px] w-[105%] flex justify-center items-center rounded-lg">
                <Link to={project.to}>
                  <div className="relative w-[350px] sm:w-[400px] bg-[var(--clt-dark)] group">
                    <img
                      src={project.img}
                      alt={project.alt}
                      className="opacity-100 w-full h-[254px] transition-opacity duration-500 group-hover:opacity-30"
                    />
                    <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="bg-[var(--clr-accent)] text-white text-base px-8 py-4 rounded">
                        Click to see More
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <p className="text-center text-[var(--clr-main-text)] mt-4">
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
