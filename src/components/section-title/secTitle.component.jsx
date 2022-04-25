import React from "react";

import "./secTitle.styles.scss";

export default function SecTitle({ title }) {
  return (
    <div className="section-title">
      <h2 className="title">{title}</h2>
    </div>
  );
}
