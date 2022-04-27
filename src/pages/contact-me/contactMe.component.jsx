import React from "react";

import { Box } from "@mui/material/";

import SecTitle from "../../components/section-title/secTitle.component";
import ContactMe from "../../components/emailer/emailField.component";
import ContactInfo from "../../components/contact-info/contactInfo.component";

import "./contactMe.styles.scss";

export default function Contact({ title }) {
  return (
    <section id="contact-me" className="section">
      <SecTitle title={title} id="invert" />
      <Box className="contact-section">
        <ContactInfo />
        <ContactMe />
      </Box>
    </section>
  );
}
