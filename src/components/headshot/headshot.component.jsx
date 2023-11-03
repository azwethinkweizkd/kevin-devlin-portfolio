import React from "react";

import "./headshot.styles.scss";

import me from "../../assets/images/professional-photo.jpg";

export default function Headshot() {
  return (
    <div className="hex draw" id="octogon">
      <div className="hex-background">
        <img src={me} alt="Kevin Devlin" />
      </div>
    </div>
  );
}
