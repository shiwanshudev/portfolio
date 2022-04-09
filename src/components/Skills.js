import "./Skills.css";
import { GiPencilBrush } from "react-icons/gi";
import { HiOutlineCode } from "react-icons/hi";
const Skills = () => {
  return (
    <div id="skills" className="skills container">
      <section className="design">
        <h3>Design</h3>
        <span className="skill-icon">
          <GiPencilBrush />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          consequuntur suscipit explicabo assumenda doloremque, cum maxime
          nesciunt harum quae rem quis asperiores sapiente quod! Veniam, id? Eum
          iure animi aut.
        </p>
      </section>
      <section className="development">
        <h3>Development</h3>
        <span className="skill-icon">
          <HiOutlineCode />
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
          consequuntur suscipit explicabo assumenda doloremque, cum maxime
          nesciunt harum quae rem quis asperiores sapiente quod! Veniam, id? Eum
          iure animi aut.
        </p>
      </section>
    </div>
  );
};

export default Skills;
