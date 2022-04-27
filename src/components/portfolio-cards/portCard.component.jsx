import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import { Box, Typography, IconButton } from "@mui/material/";

import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

import "./portCard.styles.scss";

export default function PortfolioCard({ title, image, link, gh, desc }) {
  console.log(title, image, link, gh, desc);
  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);

  return (
    <Box className="container">
      <Box className="card" data-aos="flip-up">
        <Box className="proj-img-box">
          <img src={image} alt="placeholder" />
        </Box>
        <Box className="content">
          <Typography variant="h3" className="proj-title">
            {title}
          </Typography>
          <Typography variant="p" className="tech">
            Tech Used: <br />
          </Typography>
          <Typography variant="p" className="proj-desc">
            {desc}
          </Typography>
          <Box className="btn-group">
            <IconButton href={gh} target="_blank" rel="noreferrer noopener">
              <GitHubIcon />
            </IconButton>
            <IconButton href={link} target="_blank" rel="noreferrer noopener">
              <WebIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
