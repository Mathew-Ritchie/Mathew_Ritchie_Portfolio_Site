import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/Main.jsx";
import ProjectHeaderFooter from "./Components/ProjectHeaderFooter.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project" element={<ProjectHeaderFooter />}>
          <Route path=":projectId" element={<ProjectsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
