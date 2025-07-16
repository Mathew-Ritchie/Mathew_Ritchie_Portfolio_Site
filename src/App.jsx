import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/Main.jsx";

import FakeStorePage from "./pages/FakeStorePage.jsx";

import "./App.css";
import ProjectHeaderFooter from "./Components/ProjectHeaderFooter.jsx";

import RecipeAppPage from "./pages/RecipeAppPage.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project" element={<ProjectHeaderFooter />}>
          <Route path=":projectId" element={<ProjectsPage />} />
          <Route path="fakestore" element={<FakeStorePage />} />
          <Route path="recipe_app" element={<RecipeAppPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
