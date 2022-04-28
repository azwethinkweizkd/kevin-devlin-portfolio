import React from "react";
import { Link } from "react-scroll/modules";
import "./navBar.styles.scss";

export default function NavBar() {
  return (
    <div id="navbar">
      <div className="selections">
        <Link
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          duration={1000}
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-88}
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-88}
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-88}
        >
          Resume
        </Link>
        <Link
          activeClass="active"
          to="contact-me"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-88}
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
