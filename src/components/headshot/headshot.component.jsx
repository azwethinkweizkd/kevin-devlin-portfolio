import React from "react";

import "./headshot.styles.scss";

const me = process.env.PUBLIC_URL + "/images/professional-photo.jpg";

export default function Headshot() {
  return (
    <div className="hex draw">
      <div className="hex-background">
        <img src={me} alt="Kevin Devlin" />
      </div>
    </div>
  );
}
