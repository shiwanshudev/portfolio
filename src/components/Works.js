import "./Works.css";
import Img1 from "../images/project1.png";
import Img2 from "../images/project2.png";
import Img3 from "../images/project3.png";
import Card from "./Card";

const projectsArr = [
  {
    title: "Sales Invoice MERN",
    img: Img1,
    desc:
      "Application created as a minor project for University which manages items in the Grocery Store and generates invoices which are stored in database. Project was designed and implemented from scratch with MERN stack.",
    link: "https://sales-invoice-mern.netlify.app/",

    github: ""
  },
  {
    title: "Marked Previewer",
    img: Img2,
    desc:
      "Project created with marked.js, water.css and create-react-app. A simple marked previewer created with ReactJS.",
    link: "https://viewmarkdown.netlify.app/",

    github: 'https://github.com/shiwanshudev/marked_previewer'
  },
  {
    title: "ReactJS Dynamic Quiz (Trivia API)",
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
