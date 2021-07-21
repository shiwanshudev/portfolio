import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Works from "./components/Works";
import About from "./components/About";
import Skills from "./components/Skills";
import Error from "./components/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/works" component={Works} />
        <Route path="/skills" component={Skills} />
        <Route path="/about" component={About} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
