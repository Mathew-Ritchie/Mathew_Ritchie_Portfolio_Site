import React, { useEffect, useState } from "react";
import "./individual-show-pages.css";
const imageModules = import.meta.glob("../assets/DJS/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function DJSNew() {
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
        <p className="project-technologies">| JAVASCRIPT | REACT | ZUSTAND | FIREBASE</p>
      </div>
      <div className="project-btn-div">
        <a
          href="https://github.com/Mathew-Ritchie/Mathew_Ritchie_Podcast_Portfolio_Project_CodeSpace_DJS11"
          target="_blank"
          className="project-page-btns"
        >
          Github Repository
        </a>
        <a
          href="https://the-best-ever-podcast-web-app-2.netlify.app/"
          target="_blank"
          className="project-page-btns"
        >
          Website
        </a>
      </div>
      <div>
        <p className="project-description">
          This project represents the culmination of my Web Development course at CodeSpace Academy,
          serving as a comprehensive application of all the skills and knowledge acquired during my
          studies. Tasked with developing a podcast playing app from a given API, the objective was
          to fulfill a specific list of user stories, with almost complete autonomy over the
          technological approaches used to achieve them.
          <br></br>
          <br></br>At its core, the application is built with React, adhering to the project's
          foundational requirement. Beyond that, I had the freedom to select supplementary
          technologies. I chose Zustand as the state management solution, which proved highly
          effective for handling the fetching, sorting, and storage of podcast data. This
          centralized store simplified the process of distributing data and functionality to various
          components and pages as needed. Additionally, React Router was integrated to transform the
          application into a Single Page Application (SPA), significantly enhancing the UI structure
          and streamlining user navigation.
          <br></br>
          <br></br>
          The provided podcast API offered multiple endpoints, requiring careful navigation to
          extract the necessary data for the app's features. Once the data was successfully fetched,
          users are provided with intuitive ways to sort podcast shows and search by title. A
          dedicated page for each show allows users to effortlessly browse episodes by season.
          Furthermore, local storage plays a crucial role in enhancing the user experience, enabling
          users to store their favorite shows for quick access on a separate favorites page. Local
          storage is also utilized to track previously played episodes and their play counts,
          providing a personalized playback history.
        </p>
      </div>
    </div>
  );
}
