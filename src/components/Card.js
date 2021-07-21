export default function Card(props) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={props.img} alt="project" />
      </div>
      <div className="card-info">
        <div className="card-heading">
          <h2>{props.title}</h2>
        </div>
        <div className="card-desc">
          <p>{props.desc}</p>
        </div>

        {props.link && <a
          className="card-btn"
          href={props.link}
          rel="noreferrer"
          target="_blank"
        >
          View Demo
        </a>}
        {props.github && <a
          style={{marginLeft: '10px'}}
          className="card-btn"
          href={props.github}
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>}
      </div>
    </div>
  );
}
