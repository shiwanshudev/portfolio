import "./index.css";
import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <Skills />
      <Projects />
      <About />
      <footer
        style={{
          backgroundColor: "slateblue",
          color: "var(--lightSlateBlue)",
          textAlign: "center",
          padding: "1rem",
          fontSize: "0.8rem",
        }}
      >
        Designed and Developed by Shiwanshu &copy; 2022
      </footer>
    </div>
  );
};

export default App;
