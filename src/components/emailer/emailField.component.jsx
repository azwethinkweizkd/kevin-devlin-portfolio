import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import validator from "validator";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography, Button } from "@mui/material";
// import LocationCityRoundedIcon from "@mui/icons-material/LocationCityRounded";
// import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
// import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import emailjs from "emailjs-com";

import "./emailField.styles.scss";

export default function ContactMe() {
  const [emailError, setEmailError] = useState("");
  useEffect(() => {
    Aos.init({ duration: 750 });
  }, []);
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError("Email Accepted ✓");
    } else {
      setEmailError("Please enter a valid email");
    }
  };
  const handleEmailSend = async (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_v2t8la9",
        "template_ez7qzov",
        event.target,
        "user_zzp2OJxmtkqUAgjHv4VC4"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    event.target.reset();
    window.location.reload(true);
  };

  return (
    <Box className="emailer">
      <Typography variant="p" className="email-msg">
        Ready to work together? Email me below
      </Typography>
      <Box
        component="form"
        className="email-form"
        noValidate
        autoComplete="off"
        onSubmit={handleEmailSend}
        data-aos="zoom-in"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            "& .MuiTextField-root": { width: "100%" },
          }}
        >
          <TextField
            id="outlined-search"
            label="Name"
            type="search"
            placeholder="Please write your name here"
            name="nameInput"
            fullWidth
            margin="normal"
          />
          <TextField
            fullWidth
            id="outlined-search"
            label="Email"
            type="search"
            placeholder="Please write your email here"
            name="emailInput"
            onChange={(e) => validateEmail(e)}
            helperText={emailError}
            margin="normal"
          />
          <TextField
            fullWidth
            id="outlined-textarea"
            label="Message"
            placeholder="Your message here"
            multiline
            minRows={12}
            justifyContent="flex-start"
            name="msgInput"
            margin="normal"
          ></TextField>
        </Box>
        <Button variant="contained" type="submit">
          Send Email
        </Button>
      </Box>
    </Box>
  );
}
