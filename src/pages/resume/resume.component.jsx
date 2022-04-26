import React from "react";
import SecTitle from "../../components/section-title/secTitle.component";
import { Grid, Typography, Divider } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3,
  faJsSquare,
  faSass,
  faReact,
  faNodeJs,
  faGithubSquare,
  faBootstrap,
} from "@fortawesome/free-brands-svg-icons";
import JQueryIcon from "../../utils/jQueryIcon";
import MySqlIcon from "../../utils/mySqlIcon";
import MongoDbIcon from "../../utils/mongoDbIcon";

import resume from "../../utils/Kevin-Devlin-Web-Development-Resume.pdf";

import "./resume.styles.scss";

export default function Resume({ title }) {
  return (
    <section id="resume" className="section">
      <SecTitle title={title} />
      <Grid container className="grid">
        <Grid item className="grid-item">
          <FontAwesomeIcon
            icon={faHtml5}
            className="icon"
            style={{ color: "rgb(228, 77, 38)", order: 1 }}
            size="10x"
          />
        </Grid>
        <Grid item className="grid-item">
          <JQueryIcon />
        </Grid>
        <Grid item className="grid-item">
          <FontAwesomeIcon
            icon={faJsSquare}
            style={{ color: "rgb(240, 219, 79)", order: 3 }}
            className="icon"
            size="10x"
          />
        </Grid>
        <Grid item className="grid-item">
          <FontAwesomeIcon
            icon={faNodeJs}
            style={{ color: "rgb(131, 205, 41)", order: 4 }}
            className="icon"
            size="10x"
          />
        </Grid>
      </Grid>
      <Grid container className="grid">
        <Grid item className="grid-item">
          <FontAwesomeIcon
            icon={faSass}
            style={{ color: "rgb(203, 102, 153)", order: 5 }}
            className="icon"
            size="10x"
          />
        </Grid>
        <Grid item className="grid-item">
          <FontAwesomeIcon
            icon={faCss3}
            style={{ color: "rgb(21, 114, 182)", order: 6 }}
            className="icon"
            size="10x"
          />
        </Grid>
        <Grid item className="grid-item">
          <FontAwesomeIcon
            icon={faBootstrap}
            style={{ color: "#9933CC", order: 7 }}
            className="icon"
            size="10x"
          />
        </Grid>
      </Grid>
      <Grid container className="grid">
        <Grid item className="grid-item">
          <FontAwesomeIcon
            icon={faGithubSquare}
            style={{ color: "rgb(243, 79, 41)", order: 8 }}
            className="icon"
            size="10x"
          />
        </Grid>
        <Grid item className="grid-item">
          <MySqlIcon />
        </Grid>
        <Grid item className="grid-item">
          <MongoDbIcon />
        </Grid>
        <Grid item className="grid-item">
          <FontAwesomeIcon
            icon={faReact}
            style={{ color: "rgb(97, 218, 251)", order: 11 }}
            className="icon"
            size="10x"
          />
        </Grid>
      </Grid>
      <Divider mt="5" className="fade-in" />
      <Typography variant="h4" mt="8px" className="resumeDiv">
        <a
          id="resumeLink"
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="fade-in"
        >
          Download Resume
        </a>
      </Typography>
    </section>
  );
}
