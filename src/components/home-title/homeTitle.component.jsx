import React from "react";

import "./homeTitle.styles.scss";

export default function HomeTitle() {
  return (
    <div className="flex">
      <div className="text">
        Hello, I'm <span className="highlight">Kevin Devlin</span>. <br /> I'm a
        full-stack web developer
      </div>
    </div>
  );
}
