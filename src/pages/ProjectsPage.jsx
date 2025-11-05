import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projectData from "../Projects-data/projectData";

export default function ProjectsPage() {
  const { projectId } = useParams();
  const project = projectData[projectId];

  const [currentIndex, setCurrentIndex] = useState(0);
  const imageList = project.imagePaths || [];

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % imageList.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);

  useEffect(() => {
    window.scrollTo(0, 0);
    setCurrentIndex(0);
  }, [projectId]);

  return (
    <div className="bg-[var(--clt-dark)] text-[var(--clr-main-text)] w-full min-h-screen pt-32 px-4 md:px-8">
      {/* Title */}
      <h1 className="text-center text-3xl md:text-5xl font-bold mb-8">{project.title}</h1>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden rounded-lg shadow-lg mb-10 max-w-5xl mx-auto">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {imageList.map((item, index) => (
            <div
              key={index}
              className="min-w-full flex justify-center items-center bg-[var(--clr-light)]"
            >
              <img
                src={item}
                alt=""
                className="max-w-full max-h-[500px] object-contain rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="absolute inset-0 flex justify-between items-center px-3">
          <button
            onClick={handlePrev}
            className="bg-black/40 hover:bg-black/70 text-white px-4 py-2 rounded-full transition"
          >
            ‹
          </button>
          <button
            onClick={handleNext}
            className="bg-black/40 hover:bg-black/70 text-white px-4 py-2 rounded-full transition"
          >
            ›
          </button>
        </div>
      </div>

      {/* Technologies */}
      <p className="text-center text-xl text-[var(--clr-accent)] font-semibold mb-6">
        {project.technoligies}
      </p>

      {/* Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        <a
          href={project.githubURL}
          target="_blank"
          rel="noreferrer"
          className="bg-[var(--clr-accent)] hover:bg-[var(--clr-accent-hover,#ffb733)] text-white px-6 py-2 rounded-full text-lg shadow-md hover:shadow-lg transition"
        >
          GitHub Repository
        </a>
        {project.website && (
          <a
            href={project.website}
            target="_blank"
            rel="noreferrer"
            className="bg-[var(--clr-accent)] hover:bg-[var(--clr-accent-hover,#ffb733)] text-white px-6 py-2 rounded-full text-lg shadow-md hover:shadow-lg transition"
          >
            Website
          </a>
        )}
      </div>

      {/* Description */}
      <div className="max-w-4xl mx-auto space-y-4 pb-16">
        {project.description.map((item, index) => (
          <p key={index} className="text-lg leading-relaxed">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
