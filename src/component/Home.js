import React, { Component } from "react";
import Example from "./Example.js";
import "../style/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="home-container" id="home">
        <Example
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
      </div>
    );
  }
}

export default Home;
