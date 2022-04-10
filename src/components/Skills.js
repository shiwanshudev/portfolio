import "./Skills.css";
import { GiPencilBrush } from "react-icons/gi";
import { HiOutlineCode } from "react-icons/hi";
import {
  SiReact,
  SiAdobephotoshop,
  SiFigma,
  SiNodedotjs,
  SiPython,
  SiJavascript,
} from "react-icons/si";
const Skills = () => {
  return (
    <div id="skills" className="skills container">
      <section className="design">
        <h3>Design</h3>
        <span className="skill-icon">
          <GiPencilBrush />
        </span>
        <p>
          I design UX, UI, Logo and Illustrations. The tools I use include Adobe
          Photoshop, Figma, Krita, and Clip Studio Paint.
        </p>

        <span className="skill-icon">
          <i>
            <SiAdobephotoshop />
          </i>
          <i>
            <SiFigma />
          </i>
        </span>
      </section>
      <section className="development">
        <h3>Development</h3>
        <span className="skill-icon">
          <HiOutlineCode />
        </span>
        <p>
          I develop Web Applications using various technologies like HTML5,
          CSS3, JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB and Python.
        </p>
        <span className="skill-icon">
          <i>
            <SiReact />
          </i>
          <i>
            <SiNodedotjs />
          </i>
          <i>
            <SiPython />
          </i>
          <i>
            <SiJavascript />
          </i>
        </span>
      </section>
    </div>
  );
};

export default Skills;
