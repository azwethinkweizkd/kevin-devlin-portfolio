import React, { useEffect, useLayoutEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box, Typography, IconButton, Skeleton } from "@mui/material/";
import GitHubIcon from "@mui/icons-material/GitHub";
import WebIcon from "@mui/icons-material/Web";

import "./portCard.styles.scss";

export default function PortfolioCard({ project }) {
  const { projTitle, image, href, gh, desc } = project;

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Aos.init({ duration: 5000 });
  }, []);

  useLayoutEffect(() => {
    getImgs();
  }, []);

  const getImgs = () => {
    const img = new Image();
    img.onload = () => {
      setIsLoading(!isLoading);
    };
    img.src = image;
  };

  return (
    <Box className="container">
      <Box className="card" data-aos="flip-up">
        {!isLoading ? (
          <Skeleton variant="rectangle" animation="wave" className="skeleton" />
        ) : (
          <Box className="proj-img-box">
            <img src={image} alt={projTitle} />
          </Box>
        )}
        <Box className="content">
          <Typography variant="h3" className="proj-title">
            {projTitle}
          </Typography>
          <Typography variant="p" className="tech">
            Tech Used: <br />
          </Typography>
          <Typography variant="p" className="proj-desc">
            {desc}
          </Typography>
          <Box className="btn-group">
            <IconButton
              disableRipple
              href={gh}
              target="_blank"
              rel="noreferrer noopener"
            >
              <GitHubIcon className="iconBtn" id="github" />
            </IconButton>
            <IconButton
              disableRipple
              href={href}
              target="_blank"
              rel="noreferrer noopener"
            >
              <WebIcon className="iconBtn" id="deployed" />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
