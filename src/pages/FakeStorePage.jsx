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
          href="https://github.com/Mathew-Ritchie/Fake_Store_Mathew_Ritchie"
          target="_blank"
          className="project-page-btns"
        >
          Github Repository
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
          This project showcases a dynamic web store built with a modern technology stack, focusing
          on a seamless user experience. The front-end is powered by React, providing a robust and
          component-based architecture for efficient development and maintainability. To manage the
          application's state effectively, I integrated Zustand, a lightweight and flexible state
          management solution that ensures predictable data flow throughout the application.
          <br></br>
          <br></br>A core feature of this store is its user authentication system. I leveraged
          Firebase to handle user registration and secure storage of user credentials, enabling
          users to log in with their unique details. This robust backend integration provides a
          reliable and scalable solution for user management, ensuring a personalized experience for
          each visitor.
          <br></br>
          <br></br>
          Beyond user accounts, the store offers practical e-commerce functionalities. Users can add
          items to their shopping cart or mark them as favorites, with these preferences persisting
          across sessions. This is achieved through the strategic use of local storage, providing a
          straightforward and efficient method for storing user-specific data directly within the
          browser, enhancing the user's shopping journey. The entire interactive experience, from
          form validation to dynamic content updates, is orchestrated using JavaScript.
          <br></br>
          <br></br>I am continuing to work on this project and will be looking to incorporate the
          favourites and cart storage to Firebase. I would also like to add functionality whereby
          the user can add more information to their account details, as well as update or delete
          their account.
        </p>
      </div>
    </div>
  );
}
