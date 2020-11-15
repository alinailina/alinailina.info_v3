import React from "react";
import Project from "./Project";

// Styles
import css from "./index.module.scss";

const Projects = ({ projects }) => {
  return (
    <div className={css.projects}>
      {projects.map((project, i) => (
        <Project key={i} id={i} project={project} />
      ))}
    </div>
  );
};

export default Projects;
