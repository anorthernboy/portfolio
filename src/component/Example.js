import React, { Component } from "react";
import "../style/Example.css";

class Example extends Component {
  render() {
    const { indent, title, text, link, target } = this.props;
    return (
      <div className="example-content-container">
        <div className="example-content-form">
          <div className="example-content-title">
            <div>{indent}</div>
          </div>
          <div className="example-content-title">
            <p>{title}</p>
          </div>
          <div className="example-content-text">
            <a href={link} target={target} rel="noopener noreferrer">
              {text}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Example;
