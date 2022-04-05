import "./Home.css";
import React from "react";
import { SiReact } from "react-icons/si";
import images from "./assets/images";

export default function Home() {
  return (
    <div id="home" className="home container">
      <section className="text-content">
        <h1>Hi! I'm Shiwanshu!</h1>
        <p>I create web applications, ux designs and blog about technology.</p>
        <a className="hire-button">Hire Me!</a>
      </section>
      <section className="home-vector">
        <img src={images.homeBg} alt="Home Vector" />
      </section>
    </div>
  );
}
