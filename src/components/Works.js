import "./Works.css";
import Img3 from "../images/project3.png";
import Card from "./Card";

const projectsArr = [
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
