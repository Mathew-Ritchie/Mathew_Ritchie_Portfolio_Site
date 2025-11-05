import React from "react";
import me from "../assets/me.jpeg";

export default function Intro() {
  return (
    <section className="w-full min-h-screen flex justify-center items-start md:items-center bg-[var(--clt-dark)] overflow-hidden pt-5">
      <div
        id="intro-div"
        className={
          "flex flex-col justify-center items-center gap-6 px-6 " +
          "md:grid md:w-min md:mx-auto md:gap-4 " +
          "md:[grid-template-areas:'img_title1''img_title2''img_subtitle'] " +
          "md:[grid-template-columns:min-content_max-content] " +
          "md:[grid-template-rows:180px_50px_200px]"
        }
      >
        {/* Title */}
        <h1 className="text-[var(--clr-main-text)] leading-none font-[var(--fw-reg)] m-0 text-2xl md:text-3xl md:[grid-area:title1] self-center md:self-end">
          Hi, I am
        </h1>

        {/* Name */}
        <strong className="text-[var(--clr-main-text)] font-[var(--fw-bold)] text-3xl md:text-[50px] md:[grid-area:title2] self-center">
          Mathew Ritchie
        </strong>

        {/* Subtitle */}
        <p className="inline-block bg-orange-400 text-white font-[var(--ff-secondary)] px-4 py-1 rounded-sm text-lg md:text-[var(--fs-h3)] self-center md:self-start md:text-right md:[grid-column:-1/1] md:[grid-row:3] md:relative md:left-[-1.5em] md:w-[calc(100%+1.5em)]">
          Welcome to my portfolio
        </p>

        {/* Image — mobile-first: no fixed height, image flows below text */}
        <div className="w-full flex justify-center items-center h-auto md:[grid-area:img]">
          <img
            src={me}
            alt="profile picture of Mathew Ritchie"
            className="max-w-[80%] sm:max-w-[350px] md:max-w-[400px] shadow-[var(--bs)] rounded-lg mb-6 md:mb-0 md:relative md:z-10"
          />
        </div>
      </div>
    </section>
  );
}
