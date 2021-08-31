import "./Works.css";
import salesImg from "../images/project1.png";
import weatherAppImg from '../images/weather.png';
import markedAppImg from "../images/project2.png";
import quizImg from "../images/project3.png";
import portfolioImg from "../images/project4.png";
import nodeBlogImg from "../images/project5.png";
import Card from "./Card";

const projectsArr = [
  {
    title: "Sales Invoice MERN",
    img: salesImg,
    desc:
      "Application created as a minor project for University which manages items in the Grocery Store and generates invoices.",
    link: "https://sales-invoice-mern.netlify.app/",

    github: "https://github.com/shiwanshudev/mern-invoice-app"
  },

  {
    title: "Weather (Material UI)",
    img: weatherAppImg,
    desc:
      "Learned about Material UI from building this project. The application uses ReactJS, Open Weather API, Axios and Material UI.",
    link: "http://react-openweatherapi.netlify.app/",
    github: 'https://github.com/shiwanshudev/weather-app'
  },  {
    title: "Quiz (Trivia API)",
    img: quizImg,
    desc:
      "Side project created for practicing my skills. The application uses ReactJS, Open Trivia DB API, Axios and Bootstrap.",
    link: "https://dynamicquizreact.netlify.app/",
    github: 'https://github.com/shiwanshudev/quiz-app'
  },
  {
    title: "Portfolio Site",
    img: portfolioImg,
    desc:
      "This portfolio site was created with the help of ReactJS. It utilizes React Hooks and uses react-router-dom for routing.",
    link: "https://shiwanshu.netlify.app/",
    github: 'https://github.com/shiwanshudev/portfolio'
  },
  {
    title: "Marked Previewer",
    img: markedAppImg,
    desc:
      "Project created with marked.js, water.css and create-react-app. A simple marked previewer created with ReactJS.",
    link: "https://viewmarkdown.netlify.app/",

    github: 'https://github.com/shiwanshudev/marked_previewer'
  },
  {
    title: "NodeJS Blog",
    img: nodeBlogImg,
    desc: "Simple blog that supports markdown. Created this while learning about NodeJS and ExpressJS. It uses EJS as templating engine.",
    link: "https://node-markdown-blog.herokuapp.com/",
    github: "https://github.com/shiwanshudev/nodejs-markdown-blog"

  }
];
export default function Works(props) {
  return (
    <div className="container">
      <h1>Project Works</h1>
      <div className="card-container">
        {projectsArr.map((project, i) => (
          <Card
            img={project.img}
            title={project.title}
            desc={project.desc}
            link={project.link}
            github = {project.github}
            key={i}
          />
        ))}
      </div>
    </div>
  );
}
