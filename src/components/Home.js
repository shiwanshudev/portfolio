import "./Home.css";
import { Link } from "react-router-dom";
export default function Home(props) {
  return (
    <div className="container">
      <section className="hero">
        <h1>Shiwanshu Shubham</h1>
        <p className="lead">Web Developer</p>
        <div className="projects-div">
          <Link to="/works" className="btn">
            <i className="bx bxs-briefcase"></i> Projects
          </Link>
        </div>
      </section>
    </div>
  );
}
