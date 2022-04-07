import "./index.css";
import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <Projects />
    </div>
  );
};

export default App;
