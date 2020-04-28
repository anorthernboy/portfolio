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
            </div>
          }
    
      title="Good design is innovative"
          text="Good design makes a product useful Good
              design is aesthetic Good design makes a product understandable
              Good design is unobtrusive Good design is honest Good design is
              long lasting Good design is thorough down to the last detail Good
              design is environmentally friendly Good design is as little design
          as possible | more..."
          link="https://the-wisdom-of-rams.netlify.com/"
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
