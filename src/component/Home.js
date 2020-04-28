import React, { Component } from "react";
import Example from "./Example.js";
import "../style/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container" id="home">
        <Example
          title="There is no learning without trying lots of careers"
          text="So said Jony Ive (well, almost). Product Manager and expert-generalist with 5+ years of product development experience plus time spent working as a Software Developer. Business mentor to 30+ start-up entrepreneurs. Currently leading on our multi-channel product offer at GoodBox, delivering innovation for good causes and helping the charity sector navigate the cashless society. Would-be creative with left-brain sensibilities, living a life of essentialism and trying to do the most good I can do. I love good product, and product for good. Reach out to discuss social-impact tech, the North, and the product output of Braun between 1961 and 1995."
        />
      </div>
    );
  }
}

export default Home;
