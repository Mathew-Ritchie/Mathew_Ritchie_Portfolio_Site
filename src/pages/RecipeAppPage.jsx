import React, { useEffect, useState } from "react";
import "./individual-show-pages.css";
const imageModules = import.meta.glob("../assets/recipe-app/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function RecipeAppPage() {
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
      <h1 className="individual-project-title">My Recipe Book</h1>
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
        <p className="project-technologies">| JAVASCRIPT | REACT | ZUSTAND | TAILWIND CSS</p>
      </div>
      <div className="project-btn-div">
        <a
          href="https://github.com/Mathew-Ritchie/Recipe_App_API_Practice_Mathew_Ritchie"
          target="_blank"
          className="project-page-btns"
        >
          Github Repository
        </a>
        <a
          href="https://mathews-recipe-book.netlify.app/recipes/a"
          target="_blank"
          className="project-page-btns"
        >
          Website
        </a>
      </div>
      <div>
        <p className="project-description">
          The "My Recipe Book" web application was developed as a personal project to explore and
          implement modern web development technologies. The primary focus of this was to gain more
          practical experience with Tailwind CSS for styling and to integrate with The MealDB API
          for data retrieval.
          <br></br>
          <br></br>The application leverages React with JavaScript for its front-end architecture,
          utilizing a Zustand store to efficiently fetch and manage data from The MealDB API. The
          MealDB API is a publicly available resource that provides comprehensive meal and recipe
          data. Users can search for recipes based on the initial letter of the recipe title or by
          category. Upon selecting a specific recipe, the application fetches detailed information,
          including ingredients, measurements, preparation instructions, and links to associated
          YouTube videos, all identified via a unique recipe ID.
          <br></br>
          <br></br>A core objective of this project was to thoroughly engage with the Tailwind CSS
          framework. A significant advantage observed during development was Tailwind's ability to
          streamline project file organization by reducing the need for numerous external CSS files,
          a common practice in traditional component-based styling. While this approach effectively
          declutters the project's file structure, it does introduce a trade-off by increasing the
          density of className attributes within JSX files.
          <br></br>
          <br></br>
          Furthermore, Tailwind CSS significantly streamlines the process of implementing responsive
          design. Its utility-first and mobile-first philosophy, coupled with an intuitive system of
          responsive variants and built-in breakpoints (e.g., sm:, md:, lg:), allows developers to
          define how elements behave and appear across different screen sizes directly within the
          HTML markup. This eliminates the need for writing verbose custom media queries in separate
          CSS files, thereby accelerating development cycles and ensuring consistent, adaptive
          layouts with remarkable ease. This approach fundamentally simplifies the creation of user
          interfaces that gracefully scale from mobile devices to large desktop displays.
        </p>
      </div>
    </div>
  );
}
