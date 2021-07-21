import "./Works.css";
import Img2 from "../images/project2.png";
import Img3 from "../images/project3.png";
import Card from "./Card";

const projectsArr = [
  {
    title: "Marked Previewer",
    img: Img2,
    desc:
      "Project created with marked.js, water.css and create-react-app.",
    link: "https://viewmarkdown.netlify.app/",

    github: 'https://github.com/shiwanshudev/marked_previewer'
  },
  {
    title: "ReactJS Dynamic Quiz",
    img: Img3,
    desc:
      "Side project created for practicing my skills. The application uses ReactJS, Open Trivia DB API, Axios and Bootstrap.",
    link: "https://dynamicquizreact.netlify.app/",
    github: 'link'
  },
];
export default function Works(props) {
  return (
    <div className="container">
      <h1>Project Works</h1>
      <div className="card-container">
        {projectsArr.map((project) => (
          <Card
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
            github = {project.github}
          />
        ))}
      </div>
    </div>
  );
}
