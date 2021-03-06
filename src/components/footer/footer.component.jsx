import React from "react";

import { IconButton } from "@mui/material/";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./footer.styles.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="btn-group-footer">
        <IconButton
          href="https://github.com/azwethinkweizkd"
          target="_blank"
          rel="noreferrer noopener"
          disableRipple
        >
          <GitHubIcon className="icon-btn-footer" id="github" />
        </IconButton>
        <IconButton
          href="https://www.linkedin.com/in/kevin-devlin-b67b3a7a/"
          target="_blank"
          rel="noreferrer noopener"
          disableRipple
        >
          <LinkedInIcon className="icon-btn-footer" id="linkedIn" />
        </IconButton>
      </div>
      <h4>Kevin Devlin - &copy; {new Date().getFullYear()}</h4>
    </footer>
  );
}
