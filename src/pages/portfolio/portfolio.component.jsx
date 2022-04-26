import React from "react";

import SecTitle from "../../components/section-title/secTitle.component";

import "./portfolio.styles.scss";

export default function Portfolio({ title }) {
  return (
    <section id="portfolio">
      <SecTitle title={title} />
    </section>
  );
}
