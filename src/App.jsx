import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/Main.jsx";

import SDFPage from "./pages/SDFPage.jsx";
import FakeStorePage from "./pages/FakeStorePage.jsx";

import "./App.css";
import ProjectHeaderFooter from "./Components/ProjectHeaderFooter.jsx";
import DJSNew from "./pages/DJSNew.jsx";
import JSLNew from "./pages/JSLNew.jsx";
import SDFNew from "./pages/SDFNew.jsx";
import RecipeAppPage from "./pages/RecipeAppPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project" element={<ProjectHeaderFooter />}>
          <Route path="SDF" element={<SDFNew />} />
          <Route path="JSL" element={<JSLNew />} />
          <Route path="DJS" element={<DJSNew />} />
          <Route path="fakestore" element={<FakeStorePage />} />
          <Route path="recipe_app" element={<RecipeAppPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
