import Intro from "../Components/Intro.jsx";
import Footer from "../Components/Footer.jsx";
import AboutMe from "../Components/AboutMe.jsx";
import Projects from "../Components/Projects.jsx";

import Technologies from "../Components/Technologies.jsx";
import NavModalHeader from "../Components/NavModalHeader.jsx";

export default function MainPage() {
  return (
    <div>
      <NavModalHeader />
      <div className="spacer" id="intro-spacer"></div>
      <Intro id="intro-div" />
      <div className="about-spacer" id="about-spacer"></div>
      <AboutMe id="about-me-div" />
      <Technologies />
      <div className="project-spacer" id="project-spacer"></div>
      <Projects id="my-projects-div" />
      <Footer id="contact-div" />
    </div>
  );
}
