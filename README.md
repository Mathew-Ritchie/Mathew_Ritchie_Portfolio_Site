---
# Mathew Ritchie - Portfolio Website

## About

Welcome to my personal portfolio, a dedicated space to showcase my journey and work as a web developer. This site is built with **React** and **JavaScript**, leveraging React's component-based architecture to create a dynamic and responsive user interface.

Initially, with just a few projects, I opted for individual pages for each. However, as my portfolio has grown, I've refactored the project display mechanism for greater scalability and maintainability. I now utilize a `projectData.js` file, which exports a `ProjectData` object containing all project details. This data is dynamically rendered on the **Projects Page** using **React Router's `useParams()` hook** and **dynamic routing**, ensuring that the correct project information is displayed seamlessly to the user.

For styling, I've adopted an **external CSS methodology**, with individual CSS files meticulously crafted for most components, promoting modularity and ease of management.
---

## Technologies Incorporated

This project seamlessly integrates the following technologies:

- **HTML**: The foundational markup language for structuring content.
- **CSS**: Used for styling and layout, with a focus on modular, component-specific stylesheets.
- **JavaScript**: The core programming language for interactive elements and logic.
- **React**: The powerful JavaScript library for building user interfaces.
- **React Router**: Essential for declarative routing within the application, enabling smooth navigation and dynamic project display.

---

## Project Setup

To get a local copy of this project up and running, follow these simple steps:

1.  **Clone the repository:**

    ```bash
    git clone [Your Repository URL Here]
    ```

    (Replace `[Your Repository URL Here]` with the actual URL of your GitHub repository.)

2.  **Navigate to the project directory:**

    ```bash
    cd [Your Project Folder Name]
    ```

    (Replace `[Your Project Folder Name]` with the actual name of the cloned folder.)

3.  **Install dependencies:**

    ```bash
    npm install
    ```

    This command will install all the necessary packages and libraries required to run the application.

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will launch the application in development mode, typically opening it in your default web browser at `http://localhost:3000`.

---
