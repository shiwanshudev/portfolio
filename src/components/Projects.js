import "./Projects.css";
import images from "./assets/images";
import { SiGithub } from "react-icons/si";

const Projects = () => {
  return (
    <div id="projects" className="projects container">
      <h1>Projects</h1>
      <div className="cards">
        <div className="card">
          <img src={images.projectMarkdown} alt="Markdown Project" />
          <h3>Markdown Previewer</h3>
          <p>
            Project created with marked.js, water.css and create-react-app. A
            simple marked previewer created with ReactJS.
          </p>
          <div className="links">
            <a
              className="view-link"
              href="https://viewmarkdown.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
            <a
              className="github-link"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/shiwanshudev/marked_previewer"
            >
              <SiGithub />
            </a>
          </div>
          <div className="technologies">
            <span>MarkedJS</span>
            <span>Water CSS</span>
            <span>ReactJS</span>
          </div>
        </div>
        <div className="card">
          <img src={images.projectQuiz} alt="Quiz Project" />
          <h3>Quiz Trivia API</h3>
          <p>
            Side project created for practicing my skills. The application uses
            ReactJS, Open Trivia DB API, Axios and Bootstrap.
          </p>
          <div className="links">
            <a
              className="view-link"
              href="https://dynamicquizreact.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View
            </a>
            <a
              className="github-link"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/shiwanshudev/quiz-app"
            >
              <SiGithub />
            </a>
          </div>
          <div className="technologies">
            <span>ReactJS</span>
            <span>Bootstrap</span>
            <span>Axios</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
