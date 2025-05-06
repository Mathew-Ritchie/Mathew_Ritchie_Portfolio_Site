import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainPage from "./pages/Main.jsx";
import DJSPage from "./pages/DJSPage.jsx";
import JSLPage from "./pages/JSLPage.jsx";
import SDFPage from "./pages/SDFPage.jsx";

import "./App.css";
import ProjectHeaderFooter from "./Components/ProjectHeaderFooter.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/Project" element={<ProjectHeaderFooter />}>
          <Route path="SDF" element={<SDFPage />} />
          <Route path="JSL" element={<JSLPage />} />
          <Route path="DJS" element={<DJSPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
