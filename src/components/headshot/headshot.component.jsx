import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./headshot.styles.scss";

const me = process.env.PUBLIC_URL + "/images/professional-photo.jpg";

export default function Headshot() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="hex draw" id="octogon" data-aos="fade-right">
      <div className="hex-background">
        <img src={me} alt="Kevin Devlin" />
      </div>
    </div>
  );
}
