const projectData = {
  // SDF: {
  //   title: "Cache Bank Landing Page",
  //   technoligies: "HTML | CSS",
  //   imagePaths: ["/sdf/sdf1.png", "/sdf/sdf2.png", "/sdf/sdf3.png", "/sdf/sdf4.png"],
  //   githubURL:
  //     "https://github.com/Mathew-Ritchie/SDF_Portfolio_Piece_MATRIT24048_FTO1024_B_Mathew-Ritchie_SDF11",
  //   website: null,
  //   description: [
  //     `My first portfolio piece for CodeSpace was a code along experience where we focussed on HTML and CSS
  //      which was added with Tailwinds.`,
  //   ],
  // },
  houtbay: {
    title: "The Republic of Hout Bay - Tourism site",
    technoligies: "React | JavaScrit | Tailwind CSS | Zustand | Rest APIs",
    imagePaths: [
      "/houtbay/houtbay01.png",
      "/houtbay/houtbay02.png",
      "/houtbay/houtbay03.png",
      "/houtbay/houtbay04.png",
      "/houtbay/houtbay05.png",
    ],
    githubURL: "https://github.com/Mathew-Ritchie/Hout_Bay_Tourism_Site_Mathew_Ritchie",
    website: "https://the-republic-of-houtbay.netlify.app/",
    description: [
      `The Republic is a tourism website that I am developing, with the hope that it could 
      ultimately grow into a realistic, real world opportunity. It was the idea of taking my home of 
      Hout Bay and creating a space where local and foreign visitors can get to know the
      village and obtain information about local restarants, shops and activities.`,
      `I have used React as my framework for this project, and continued to practice and
      grow my JavaScript skills. In addition I have used Zustand for store and State management
      and Tailwind for styling and layout. For user navigation and routing I have used React Router.`,
      `At present I have created a data object that contains all of my establishments data, this 
      I hope to covert to a fully functioning API in the near future. In addition I am also making 
      use of the Open Weather and free currency APIs to add more dynamic information to the site.`,
    ],
  },
  JSL: {
    title: "Agile Board App",
    technoligies: "JAVASCRIPT",
    imagePaths: [
      "/JSL/JSL1.png",
      "/JSL/JSL2.png",
      "/JSL/JSL3.png",
      "/JSL/JSL4.png",
      "/JSL/JSL5.png",
      "/JSL/JSL6.png",
      "/JSL/JSL7.png",
      "/JSL/JSL8.png",
    ],
    githubURL:
      "https://github.com/Mathew-Ritchie/JSL_Portfolio_Piece_MATRIT24048_FTO2410_B_Mathew--Ritchie_JSL11",
    website: null,
    description: [
      `This project served as the culminating assignment for the CodeSpace JSL module, 
       with a strong emphasis on mastering vanilla JavaScript. The initial phase of the 
       project involved a critical exercise in debugging: identifying and rectifying a range 
       of pre-existing bugs within provided code to ensure it met specific user story requirements.
       This task honed my analytical skills and deepened my understanding of common JavaScript errors
       and best practices for robust code.`,

      `The second part of the assignment challenged me to develop new functionalities from scratch,
       demonstrating proficiency in core JavaScript concepts. Added functionality helped in creating
       an interactive Agile board, where users could seamlessly add, edit, and delete tasks. This
       persistence was achieved by effectively utilizing local storage to maintain data across sessions.
       Furthermore, I implemented a dynamic theme switch functionality, allowing users to toggle between
       light and dark modes through direct JavaScript and DOM manipulation, showcasing an understanding
       of responsive and interactive web design.`,
    ],
  },
  DJS: {
    title: "The Best Ever Podcast web App",
    technoligies: "JAVASCRIPT | REACT | CSS",
    imagePaths: ["/DJS/DJS1.png", "/DJS/DJS2.png", "/DJS/DJS3.png", "/DJS/DJS4.png"],
    githubURL:
      "https://github.com/Mathew-Ritchie/Mathew_Ritchie_Podcast_Portfolio_Project_CodeSpace_DJS11",
    website: "https://the-best-ever-podcast-web-app-2.netlify.app/",
    description: [
      `This project represents the culmination of my Web Development course at CodeSpace Academy,
          serving as a comprehensive application of all the skills and knowledge acquired during my
          studies. Tasked with developing a podcast playing app from a given API, the objective was
          to fulfill a specific list of user stories, with almost complete autonomy over the
          technological approaches used to achieve them.`,

      `At its core, the application is built with React, adhering to the project's
          foundational requirement. Beyond that, I had the freedom to select supplementary
          technologies. I chose Zustand as the state management solution, which proved highly
          effective for handling the fetching, sorting, and storage of podcast data. This
          centralized store simplified the process of distributing data and functionality to various
          components and pages as needed. Additionally, React Router was integrated to transform the
          application into a Single Page Application (SPA), significantly enhancing the UI structure
          and streamlining user navigation.`,

      `The provided podcast API offered multiple endpoints, requiring careful navigation to
          extract the necessary data for the app's features. Once the data was successfully fetched,
          users are provided with intuitive ways to sort podcast shows and search by title. A
          dedicated page for each show allows users to effortlessly browse episodes by season.
          Furthermore, local storage plays a crucial role in enhancing the user experience, enabling
          users to store their favorite shows for quick access on a separate favorites page. Local
          storage is also utilized to track previously played episodes and their play counts,
          providing a personalized playback history.`,
    ],
  },
  fakeStore: {
    title: "My-Fake-Store.com",
    technoligies: "JAVASCRIPT | REACT | ZUSTAND | FIREBASE",
    imagePaths: [
      "/myFakeStore/fakeStore1.png",
      "/myFakeStore/fakeStore2.png",
      "/myFakeStore/fakeStore3.png",
      "/myFakeStore/fakeStore4.png",
      "/myFakeStore/fakeStore5.png",
      "/myFakeStore/fakeStore6.png",
    ],
    githubURL: "https://github.com/Mathew-Ritchie/Fake_Store_Mathew_Ritchie",
    website: "https://mathews-fake-store.netlify.app/",
    description: [
      `This project showcases a dynamic web store built with a modern technology stack, focusing
          on a seamless user experience. The front-end is powered by React, providing a robust and
          component-based architecture for efficient development and maintainability. To manage the
          application's state effectively, I integrated Zustand, a lightweight and flexible state
          management solution that ensures predictable data flow throughout the application.`,
      `A core feature of this store is its user authentication system. I leveraged
          Firebase to handle user registration and secure storage of user credentials, enabling
          users to log in with their unique details. This robust backend integration provides a
          reliable and scalable solution for user management, ensuring a personalized experience for
          each visitor.`,
      `Beyond user accounts, the store offers practical e-commerce functionalities. Users can add
          items to their shopping cart or mark them as favorites, with these preferences persisting
          across sessions. This is achieved through the strategic use of local storage, providing a
          straightforward and efficient method for storing user-specific data directly within the
          browser, enhancing the user's shopping journey. The entire interactive experience, from
          form validation to dynamic content updates, is orchestrated using JavaScript.`,
      `I am continuing to work on this project and will be looking to incorporate the
          favourites and cart storage to Firebase. I would also like to add functionality whereby
          the user can add more information to their account details, as well as update or delete
          their account.`,
    ],
  },

  recipeBook: {
    title: "My Recipe Book",
    technoligies: "| JAVASCRIPT | REACT | ZUSTAND | TAILWIND CSS",
    imagePaths: [
      "/recipe-app/recipe1.png",
      "/recipe-app/recipe2.png",
      "/recipe-app/recipe3.png",
      "/recipe-app/recipe4.png",
    ],
    githubURL: "https://github.com/Mathew-Ritchie/Recipe_App_API_Practice_Mathew_Ritchie",
    website: "https://mathews-recipe-book.netlify.app/recipes/a",
    description: [
      `The "My Recipe Book" web application was developed as a personal project to explore and
          implement modern web development technologies. The primary focus of this was to gain more
          practical experience with Tailwind CSS for styling and to integrate with The MealDB API
          for data retrieval.`,

      `The application leverages React with JavaScript for its front-end architecture,
          utilizing a Zustand store to efficiently fetch and manage data from The MealDB API. The
          MealDB API is a publicly available resource that provides comprehensive meal and recipe
          data. Users can search for recipes based on the initial letter of the recipe title or by
          category. Upon selecting a specific recipe, the application fetches detailed information,
          including ingredients, measurements, preparation instructions, and links to associated
          YouTube videos, all identified via a unique recipe ID.`,

      `A core objective of this project was to thoroughly engage with the Tailwind CSS
          framework. A significant advantage observed during development was Tailwind's ability to
          streamline project file organization by reducing the need for numerous external CSS files,
          a common practice in traditional component-based styling. While this approach effectively
          declutters the project's file structure, it does introduce a trade-off by increasing the
          density of className attributes within JSX files.`,

      `Furthermore, Tailwind CSS significantly streamlines the process of implementing responsive
          design. Its utility-first and mobile-first philosophy, coupled with an intuitive system of
          responsive variants and built-in breakpoints (e.g., sm:, md:, lg:), allows developers to
          define how elements behave and appear across different screen sizes directly within the
          HTML markup. This eliminates the need for writing verbose custom media queries in separate
          CSS files, thereby accelerating development cycles and ensuring consistent, adaptive
          layouts with remarkable ease. This approach fundamentally simplifies the creation of user
          interfaces that gracefully scale from mobile devices to large desktop displays.`,
    ],
  },
};

export default projectData;
