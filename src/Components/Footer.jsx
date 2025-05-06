import React from "react";

import "./footer.css";

export default function Footer() {
  return (
    <footer className="contact-div" id="contact-div">
      <div className="header-mail">
        <h1 className="contact-title">I would love for you to get in touch!</h1>
        <a className="contact-email" href="mailto:ritchmat89@gmail.com" target="_blank">
          ritchmat89@gmail.com
        </a>
      </div>
      <div>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://github.com/Mathew-Ritchie"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/mathew-ritchie-802a9114b/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
          {/* <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://codepen.io/Mathew-Ritchie"
              target="_blank"
            >
              <i className="fa-brands fa-codepen"></i>
            </a>
          </li> */}
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.instagram.com/mathew.j.ritchie/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
