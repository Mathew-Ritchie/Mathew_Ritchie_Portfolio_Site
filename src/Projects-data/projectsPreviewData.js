import JSL from "../assets/JSL-pic.png";
//import SDF from "../assets/SDF-pic.png";
import DJS from "../assets/DJS.png";
import FakeStore from "../assets/fakestore.png";
import recipeBook from "../assets/recipe1.png";
import houtbay01 from "../assets/houtbay01.png";

const projectsPreviewData = [
  {
    img: houtbay01,
    alt: "screenshot of The republic of Hout Bay landing page",
    title: "The Republic",
    subTitle: "React | JavaScript | Tailwind | Zustand | Rest APIs",
    description: `A Tourism/visitor directory for the village of Hout Bay.
        Front end is built with React and tailwind, while the backend is an 
        API created with Express.js and hosted on Render.`,
    to: "/project/houtbay",
  },
  {
    img: JSL,
    alt: "screenshot of Agile Board App",
    title: "Agile Board App",
    subTitle: "JavaScript",
    description: `A CodeSpace Academy portfolio piece which involved bug
        fixing and code creation to complete a fully functional Agile board
        which utilises local storage.`,
    to: "/project/JSL",
  },
  {
    img: DJS,
    alt: "screenshot of Podcast App",
    title: "Podcast App",
    subTitle: "JavaScript | React | CSS",
    description: `Final project for CodeSpace Academy's Software Development
        course. Building a podcast app based on given user stories and fetching 
        Data from a REST API.`,
    to: "/project/DJS",
  },
  {
    img: FakeStore,
    alt: "screenshot of Fake Store App",
    title: "My-Fake-Store App",
    subTitle: "JavaScript | React | Zustand | Express.js | SQLite",
    description: `A personal project helping me learn to use Express.js and
        SQLite, while continuing my skill development with React, Zustand and
        tailwind. `,
    to: "/project/fakeStore",
  },
  {
    img: recipeBook,
    alt: "screenshot of My Recipe Book App",
    title: "My Recipe Book",
    subTitle: "Tailwind | JavaScript | React | Zustand | Rest APIs",
    description: `A fun personal project fetching recipes from a public API, 
        and using the data to build a recipe book app.`,
    to: "/project/recipeBook",
  },
];

export default projectsPreviewData;
