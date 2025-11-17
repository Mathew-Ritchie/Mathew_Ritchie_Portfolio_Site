import { Link } from "react-router-dom";
import { v4 as createId } from "uuid";
import projectsPreviewData from "../Projects-data/projectsPreviewData.js";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 600, offset: 80 });
  }, []);

  return (
    <section
      id="my-projects-div"
      className="flex flex-col justify-start items-center w-full min-h-fit h-screen bg-gray-900"
    >
      <div id="project-spacer" className="h-0"></div>

      <div className="flex flex-col justify-center items-center w-full">
        <h1 className="text-[var(--clr-accent)] text-center drop-shadow-md  mt-[80px] text-6xl">
          Projects
        </h1>
        <h3 className="text-center text-gray-200 text-xl mb-10">
          (click on an image to see more!)
        </h3>

        <div
          id="project-imgs-div"
          className="flex flex-col sm:flex-wrap justify-center items-center gap-5 sm:gap-8 pb-10"
        >
          {projectsPreviewData.map((project) => (
            <div
              key={createId()}
              className="flex flex-col lg:flex-row justify-center items-center w-[350px] lg:w-[1000px] lg:gap-5 mb-10"
            >
              <Link
                to={project.to}
                className="group flex flex-col lg:flex-row lg:gap-5 items-center"
                data-aos="flip-down"
              >
                {/* IMAGE */}
                <div className="relative w-[350px] sm:w-[400px] bg-[var(--clt-dark)]">
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

                {/* TEXT */}
                <p className="text-center lg:text-start text-[var(--clr-main-text)] mt-4 w-[350px] transition-colors duration-300 ">
                  <strong className="text-xl transition-colors duration-300 group-hover:text-[var(--clr-accent)]">
                    {project.title}
                  </strong>
                  <br />
                  <br />
                  {project.subTitle}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
