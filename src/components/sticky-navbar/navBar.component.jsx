import React from "react";

import "./navBar.styles.scss";

export default function NavBar() {
  return (
    <div id="navbar">
      <div className="selections">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/portfolio">Portfolio</a>
        <a href="/resume">Resume</a>
        <a href="/contact-me">Contact</a>
      </div>
    </div>
  );
}
