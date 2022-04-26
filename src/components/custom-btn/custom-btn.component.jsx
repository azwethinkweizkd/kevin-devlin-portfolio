import React from "react";

import { Link } from "react-scroll";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./custom-btn.styles.scss";

export default function CustomBtn() {
  return (
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      duration={1000}
      offset={-86}
    >
      <div className="custom-btn draw meet">
        <div className="btn-text">
          Find Out More <ArrowForwardIosIcon className="arrow-icon" />
        </div>
      </div>
    </Link>
  );
}
