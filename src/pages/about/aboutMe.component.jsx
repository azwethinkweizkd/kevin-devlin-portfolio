import React from "react";

import { Typography, Grid } from "@mui/material";

import Headshot from "../../components/headshot/headshot.component";
import SecTitle from "../../components/section-title/secTitle.component";

import "./aboutMe.styles.scss";

export default function AboutMe({ title }) {
  return (
    <section id="about" className="section">
      <SecTitle title={title} />
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={4}>
          <Headshot />
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <Typography paragraph className="paragraph">
            Versatile Full Stack Developer with a background in CAD design and a
            passion for web development. I bring strong skills in JavaScript,
            jQuery, Node.js, React.js, and Express, among others. I've
            collaborated on various projects, including several MERN stack
            applications, honing my passion for solving coding challenges as
            part of a dynamic team. My strengths lie in customer-driven design,
            team organization, and meeting project deadlines. Eager to
            contribute innovative solutions to the tech industry.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
