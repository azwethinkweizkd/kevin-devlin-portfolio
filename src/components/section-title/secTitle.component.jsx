import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import "./secTitle.styles.scss";

export default function SecTitle({ title }) {
  useEffect(() => {
    Aos.init({ duration: 250 });
  }, []);
  return (
    <div className="section-title" data-aos="fade-down-left">
      <h2 className="title">{title}</h2>
    </div>
  );
}
