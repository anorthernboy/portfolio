import React, { Component } from "react";
import { Link } from "react-scroll";
import "../style/NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-content">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
          >
            <div className="navbar-logo">
              <h1>
                a <br />
                northern <br />
                boy
              </h1>
            </div>
          </Link>
          <h2>_</h2>
          <div className="navbar-links">
            <Link
              activeClass="active"
              to="work"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h2>work</h2>
            </Link>
            <Link
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h2>projects</h2>
            </Link>
            <Link
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
            >
              <h2>contact</h2>
            </Link>
            <h2>_</h2>
            <a
              href="medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>blog</h2>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
