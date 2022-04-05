import "./index.css";
import React from "react";
import Home from "./components/Home";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  );
};

export default App;
