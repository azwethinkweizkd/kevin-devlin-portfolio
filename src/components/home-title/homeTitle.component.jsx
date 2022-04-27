import React from "react";

import CustomBtn from "../custom-btn/custom-btn.component";

import "./homeTitle.styles.scss";

export default function HomeTitle() {
  return (
    <div className="flex home-title">
      <div className="text">
        Hello, I'm <span className="highlight">Kevin Devlin</span>. <br /> I'm a
        full-stack web developer
      </div>
      <div className="home-btn">
        <CustomBtn />
      </div>
    </div>
  );
}
