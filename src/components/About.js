import "./About.css";
export default function About(props) {
  return (
    <div className="about-container">
      <h1>About</h1>
      <section className="about-section">
        <h2 className="about-title">About me</h2>
        <p className="about-text">
          Hello! I'm Shiwanshu, a Web Developer from India. I specialize in
          using ReactJS and Javascript. Some other technologies that I've worked
          with inculdes MongoDB, NodeJS, Mongoose, Bootstrap etc. I also have
          experience using Adobe After Effects and Photoshop.
        </p>
        <h2 className="about-title">FreeCodeCamp Certifications</h2>
        <ul className="cert">
          <li>
            <a
              href="https://www.freecodecamp.org/certification/shiwanshudev/javascript-algorithms-and-data-structures"
              rel="noreferrer"
              target="_blank"
            >
              Algorithms and Data Structures
            </a>
          </li>
        </ul>
        <div className="contact-icons">
          <a href="https://github.com/shiwanshudev" rel="noreferrer" target="_blank">
            <i class="bx bxl-github"></i>
          </a>
        </div>
      </section>
    </div>
  );
}
