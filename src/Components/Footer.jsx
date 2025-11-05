import React from "react";

export default function Footer() {
  return (
    <footer
      id="contact-div"
      className="flex flex-col justify-center items-center h-[60vh] w-full h-screen bg-[var(--clt-dark)] text-[var(--clr-main-text)] py-5"
    >
      <div className="flex flex-col justify-center items-center mx-5 text-center">
        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
          I would love for you to get in touch!
        </h1>
        <a
          className="text-xl text-[var(--clr-accent)] hover:text-[var(--clr-light)] drop-shadow-md transition-colors duration-200"
          href="mailto:ritchmat89@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          mathew.j.ritchie@gmail.com
        </a>
      </div>

      <ul className="flex justify-center mt-8 gap-5 list-none p-0">
        <li>
          <a
            href="https://github.com/Mathew-Ritchie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--clr-accent)] text-5xl drop-shadow-md hover:text-[var(--clr-light)] transition-colors duration-200"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mathew-ritchie-802a9114b/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--clr-accent)] text-5xl drop-shadow-md hover:text-[var(--clr-light)] transition-colors duration-200"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mathew.j.ritchie/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--clr-accent)] text-5xl drop-shadow-md hover:text-[var(--clr-light)] transition-colors duration-200"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
