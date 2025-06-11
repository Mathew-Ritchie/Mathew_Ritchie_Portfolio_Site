import React, { useEffect, useState } from "react";
import "./individual-show-pages.css";
const imageModules = import.meta.glob("../assets/myFakeStore/*", { eager: true });
const imageList = Object.values(imageModules).map((module) => module.default);

export default function FakeStorePage() {
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
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
      <div>
        <p className="project-technologies">| JAVASCRIPT | REACT | ZUSTAND | FIREBASE</p>
      </div>
      <div className="project-btn-div">
        <a
          href="https://github.com/Mathew-Ritchie/Fake_Store_Mathew_Ritchie"
          target="_blank"
          className="project-page-btns"
        >
          GitHub Repository
        </a>
        <a
          href="https://mathews-fake-store.netlify.app/"
          target="_blank"
          className="project-page-btns"
        >
          Website
        </a>
      </div>
      <div>
        <p className="project-description">
          This project was the culmination of my Web Development course at CodeSpace Academy. This
          was an opportunity to put all that I had learnt during my time at CodeSpace into a single
          application.
          <br></br>
          <br></br>
          We were given a podcast API and asked to use the data to create a podcast playing App that
          would fulfil a list of use stories. How we chose to achieve these stories was completely
          up to our own preference.
          <br></br>
          <br></br>
          The project had to be completed with the use of React. Apart from React we had free reign
          over the technologies we used. I decided to use a Zustand store to help me with the
          fetching, sorting and storing of the podcast data. The store made it easy to pass the data
          and functionality to the pages that required it. I also used React Router in the project,
          making the app into a SPA, and helping to structure the UI and make user navigation
          easier.
          <br></br>
          <br></br>
          The API we were given had multiple endpoints and it was up to us to navigate these to get
          the data we required for the app. Once the data was fetched, we had to offer the user way
          to sort the podcast shows, and to search by title. The user then needed to be able to view
          a page dedicated to each show, where they could then browse episodes by season. Local
          Storage was utilised to be able to give the use a way to store their favourites which
          could then be viewed in a separate favourites page. Local storage was also used to keep
          track of which episodes the user had already watched and how many times.
        </p>
      </div>
    </div>
  );
}
