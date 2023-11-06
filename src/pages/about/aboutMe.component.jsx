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
            I'm a passionate Full Stack Web Developer with 2 years of experience
            under my belt. My toolkit includes React, JavaScript, C#, HTML, CSS,
            ASP.NET, Entity Framework Core, REST APIs, SQL, AWS, and Azure
            DevOps. Over the past 2 years, I've been dedicated to maintaining
            Novus Home Mortgage's internal application with React and EF Core as
            well as developing a cosumer facing web application in Remix. My
            career started with frontend technologies at Novus, and I swiftly
            transitioned into a full-stack role to collaborate more with
            projects, making me well-versed in Agile and DevOps practices.
            Before my web development journey, I worked as a Biomedical Design
            Engineer at 3D Systems. I'm a proud holder of a Full Stack Web
            Development Certification from the University of Denver and a
            Bachelor of Science in Biomedical Engineering from Florida Gulf
            Coast University. My approach to work is defined by my rapid
            learning ability, effective teamwork, and an insatiable curiosity
            that drives me to continuously tinker and seek knowledge.
          </Typography>
        </Grid>
      </Grid>
    </section>
  );
}
