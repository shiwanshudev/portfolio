import "./Projects.css";
import images from "./assets/images";

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
          <a
            className="view-link"
            href="https://viewmarkdown.netlify.app/"
            target="_blank"
          >
            View
          </a>
          <div className="technologies">
            <span>MarkedJS</span>
            <span>Water CSS</span>
            <span>ReactJS</span>
          </div>
        </div>
        <div className="card">
          <img src={images.projectMarkdown} alt="Markdown Project" />
          <h3>Markdown Previewer</h3>
          <p>
            Project created with marked.js, water.css and create-react-app. A
            simple marked previewer created with ReactJS.
          </p>
          <a
            className="view-link"
            href="https://viewmarkdown.netlify.app/"
            target="_blank"
          >
            View
          </a>
          <div className="technologies">
            <span>MarkedJS</span>
            <span>Water CSS</span>
            <span>ReactJS</span>
          </div>
        </div>
        <div className="card">
          <img src={images.projectMarkdown} alt="Markdown Project" />
          <h3>Markdown Previewer</h3>
          <p>
            Project created with marked.js, water.css and create-react-app. A
            simple marked previewer created with ReactJS.
          </p>
          <a
            className="view-link"
            href="https://viewmarkdown.netlify.app/"
            target="_blank"
          >
            View
          </a>
          <div className="technologies">
            <span>MarkedJS</span>
            <span>Water CSS</span>
            <span>ReactJS</span>
          </div>
        </div>
        <div className="card">
          <img src={images.projectMarkdown} alt="Markdown Project" />
          <h3>Markdown Previewer</h3>
          <p>
            Project created with marked.js, water.css and create-react-app. A
            simple marked previewer created with ReactJS.
          </p>
          <a
            className="view-link"
            href="https://viewmarkdown.netlify.app/"
            target="_blank"
          >
            View
          </a>
          <div className="technologies">
            <span>MarkedJS</span>
            <span>Water CSS</span>
            <span>ReactJS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
