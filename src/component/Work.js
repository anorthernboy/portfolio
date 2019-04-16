import React, { Component } from "react";
import Example from "./Example.js";
import "../style/Work.css";

class Work extends Component {
  render() {
    return (
      <div className="work-container" id="work">
        <Example
          indent={
            <div>
              <br />
              <br />
            </div>
          }
          title="hoptions"
          text="A craft-beer discovery app using algorithmic recommendations and augmented reality rendering to direct the 	user to the beers most suited to their preferences"
          link="https://drive.google.com/file/d/1Jk9fPB4lrkaxYcsXoYVET7Jno1jcMIK9/view?usp=sharing"
          target="_blank"
        />
        <Example
          indent={
            <div>
              <br />
              <br />
              <br />
              <br />
            </div>
          }
          title="the source"
          text="A reddit-like discussion aggregation app allowing users to intuitively interact with content - viewing, posting, 	voting, and deleting - includes login authentication functionality, and optimistic inline rendering"
          link="https://the-source-news.netlify.com"
          target="_blank"
        />
      </div>
    );
  }
}

export default Work;
