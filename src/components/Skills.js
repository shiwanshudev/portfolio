import "./Skills.css";
export default function Skills(props) {
  return (
    <div className="container skills-container">
      <div className="skill-card">
        <i className="bx bxl-javascript"></i>
        <p>Javascript</p>
      </div>
      <div className="skill-card">
        <i class="bx bxl-react"></i>
        <p>ReactJS</p>
      </div>

      <div className="skill-card">
        <i class="bx bxl-bootstrap"></i>
        <p>Bootstrap</p>
      </div>
      <div className="skill-card">
        <i class="bx bxl-nodejs"></i>
        <p>NodeJS</p>
      </div>

      <div className="skill-card">
        <i class="bx bxl-css3"></i>
        <p>CSS3</p>
      </div>

      <div className="skill-card">
        <i class="bx bxl-html5"></i>
        <p>HTML5</p>
      </div>
      <div className="skill-card">
        <i class="bx bxl-adobe"></i>
        <p>Phostoshop</p>
      </div>
      <div className="skill-card">
        <i class="bx bxs-data"></i>
        <p>MongoDB</p>
      </div>
    </div>
  );
}
