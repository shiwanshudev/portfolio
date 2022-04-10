import "./About.css";
import { BsPersonFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
const About = () => {
  return (
    <div id="about" className="about container">
      <section className="intro">
        <h1>About</h1>
        <p>
          I'm a Developer with a knack for clean and minimal design. I don't
          limit myself to a certain set of tools and technologies. Searching for
          a place to add value and hone my skills.
        </p>
      </section>
      <section className="contact-info">
        <div className="contact-icons">
          <a
            href="https://github.com/shiwanshudev/"
            target="_blank"
            rel="noreferrer"
            className="contact-icon"
          >
            <AiFillGithub />
          </a>
          <a href="#" className="contact-icon">
            <AiFillLinkedin />
          </a>
          <p>shiwanshudev@outlook.com</p>
        </div>
      </section>
    </div>
  );
};

export default About;
