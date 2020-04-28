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
          text="A craft-beer discovery app using algorithmic recommendations and augmented reality rendering to direct the 	user to the beers most suited to their preferences | more..."
          link="https://photos.app.goo.gl/pwQPM899HxmVY5em9"
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
          text="A reddit-like discussion aggregation app allowing users to intuitively interact with content - viewing, posting, 	voting, and deleting - includes login authentication functionality, and optimistic inline rendering | more..."
          link="https://the-source-news.netlify.com"
          target="_blank"
        />
      </div>
    );
  }
}

export default Work;
