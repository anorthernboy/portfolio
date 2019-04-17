import React, { Component } from "react";
import Example from "./Example.js";
import "../style/Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className="projects-container" id="projects">
        <Example
          indent={
            <div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          }
          title="canvas designer"
          text="an exploration into art and minimalism, using p5.js to randomly generate a rendered canvas with an abstract geometric composition of shape and colour | more..."
          link="http://canvasdesigner.rf.gd"
          target="_blank"
        />
        <Example
          indent={
            <div>
              <br />
            </div>
          }
          title="parent-e"
          text="an app for consolidated passive monitoring of young people's social media presence using artificial intelligence to alert parents to signs of mental health issues | more..."
          link="https://www.figma.com/proto/IJIpTd6m0Cy5YFOgM6NQUcEa/Untitled?node-id=1%3A3&scaling=scale-down&redirected=1"
          target="_blank"
        />
      </div>
    );
  }
}

export default Projects;
