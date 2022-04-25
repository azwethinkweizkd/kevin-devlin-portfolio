import React from "react";

import SecTitle from "../../components/section-title/secTitle.component";

import "./aboutMe.styles.scss";

export default function AboutMe({ title }) {
  console.log(title);
  return <SecTitle title={title} />;
}
