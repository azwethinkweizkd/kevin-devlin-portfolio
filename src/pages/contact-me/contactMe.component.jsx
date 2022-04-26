import React from "react";

import SecTitle from "../../components/section-title/secTitle.component";

import "./contactMe.styles.scss";

export default function ContactMe({ title }) {
  return (
    <section id="contact-me" className="section">
      <SecTitle title={title} />
    </section>
  );
}
