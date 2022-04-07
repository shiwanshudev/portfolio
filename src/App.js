import "./index.css";
import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";
import { Wip } from "./components/Wip";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
      <Projects />
      <Wip />
    </div>
  );
};

export default App;
