import "./Projects.css";
import { SiGithub } from "react-icons/si";
import projects from "./assets/data";

const renderedProjects = projects.map((project) => {
  return (
    <div className="card">
      <img src={project.img} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <div className="links">
        <a
          className="view-link"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View
        </a>
        <a
          className="github-link"
          rel="noreferrer"
          target="_blank"
          href={project.github}
        >
          <SiGithub />
        </a>
      </div>
      <div className="technologies">
        {project.tags.map((tag) => (
          <span>{tag}</span>
        ))}
      </div>
    </div>
  );
});

const Projects = () => {
  return (
    <div id="projects" className="projects container">
      <h1>Projects</h1>
      <div className="cards">{renderedProjects}</div>
    </div>
  );
};

export default Projects;
