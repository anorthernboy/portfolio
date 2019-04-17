import React, { Component } from "react";
import Example from "./Example.js";
import "../style/Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact-container" id="contact">
        <Example
          indent={
            <div>
              <br />
              <br />
            </div>
          }
          title=""
          text=""
          link=""
          target=""
        />
        <Example
          indent={
            <div>
              <br />
              <br />
            </div>
          }
          title="say hello"
          text="You say Yes, I say No You say Stop and I say Go, go, go Oh no You say Goodbye and I say Hello, hello, hello I don't know why you say Goodbye, I say Hello, hello, hello I don't know why you say goodbye, I say hello I say High, you say Low You say Why? And I say I don't know Oh no You say Goodbye and I say Hello, hello, hello I don't know why you say Goodbye, I say Hello, hello, hello | more..."
          link="mailto:craigweighman@gmail.com?Subject=Hello,%20hello%20hello"
          target=""
        />
      </div>
    );
  }
}

export default Contact;
