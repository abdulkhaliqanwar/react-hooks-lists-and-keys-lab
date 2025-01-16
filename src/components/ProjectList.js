import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {/* Render ProjectItem components here */}
        {projects.map((project) => (
          // For each project, render a ProjectItem and pass props like id, title, and technologies
          <ProjectItem 
            key={project.id}       // Unique key prop
            name={project.name}  // Passing the title of the project
            about={project.about}  // Passing the description
            technologies={project.technologies}  // Passing the technologies used
          />
        ))}
      </div>
    </div>
  );
}


export default ProjectList;
