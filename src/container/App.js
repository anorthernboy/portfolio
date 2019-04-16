import React, { Component } from "react";
import NavBar from "../component/NavBar.js";
import Home from "../component/Home.js";
import Work from "../component/Work.js";
import Projects from "../component/Projects.js";
import Contact from "../component/Contact.js";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Home />
        <Work />
        <Projects />
        <Contact />
      </div>
    );
  }
}

export default App;
