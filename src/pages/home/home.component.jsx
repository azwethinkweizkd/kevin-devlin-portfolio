import React from "react";

import HomeTitle from "../../components/home-title/homeTitle.component";

import "./home.styles.scss";

export default function Home() {
  return (
    <section id="home">
      <div id="bgScreen" className="canvas">
        <canvas id="landingBg" height="auto" width="auto" />
      </div>
      <HomeTitle />
    </section>
  );
}
