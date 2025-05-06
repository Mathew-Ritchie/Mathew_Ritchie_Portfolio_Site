import React, { useState } from "react";

import Header from "../Components/Header.jsx";
import Intro from "../Components/Intro.jsx";
import Footer from "../Components/Footer.jsx";
import AboutMe from "../Components/AboutMe.jsx";
import Projects from "../Components/Projects.jsx";
import NavModal from "../Components/NavModal.jsx";

export default function MainPage() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const hideModal = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Header onToggleModal={toggleModal} />
      <NavModal isModalVisible={isModalVisible} onHideModal={hideModal} />
      <div className="spacer" id="intro-spacer"></div>
      <Intro id="intro-div" />
      <div className="about-spacer" id="about-spacer"></div>
      <AboutMe id="about-me-div" />
      <div className="project-spacer" id="project-spacer"></div>
      <Projects id="my-projects-div" />
      <Footer id="contact-div" />
    </div>
  );
}
