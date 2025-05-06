import React from "react";
import ProjectsHeader from "./ProjectsHeader";
import { Outlet } from "react-router-dom";

export default function ProjectHeaderFooter() {
  return (
    <>
      <ProjectsHeader />
      <Outlet />
    </>
  );
}
