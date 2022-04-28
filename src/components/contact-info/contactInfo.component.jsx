import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Box, Typography, Grid } from "@mui/material/";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

import "./contactInfo.styles.scss";

export default function ContactInfo() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <Box className="contact-info-box" data-aos="fade-right">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="baseline"
      >
        <Grid item>
          <Typography variant="h5" className="contact-info">
            <LocationOnIcon /> Location: Denver, CO
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className="contact-info">
            <PhoneIcon /> Phone: (239)405-4064
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className="contact-info">
            <EmailIcon /> Email: kevindevlin11@gmail.com
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
