import React, { useState } from "react";
import { Link } from "react-scroll/modules";

import { IconButton } from "@mui/material/";

import MenuOpenIcon from "@mui/icons-material/MenuOpen";

import InfoIcon from "@mui/icons-material/Info";
import WorkIcon from "@mui/icons-material/Work";
import ArticleIcon from "@mui/icons-material/Article";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";

import "./mobileNav.styles.scss";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleOpenClose = (e) => {
    e.preventDefault();
    setOpen(!open);
  };
  return (
    <div className="mobile-nav">
      <IconButton onClick={handleOpenClose} disableRipple>
        <MenuOpenIcon id="menu-open-icon" className="mobile-nav-icon" />
      </IconButton>
      <div className={`selections-mobile  ${!open ? "hide" : "show"}`}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-88}
        >
          <IconButton disableRipple>
            <InfoIcon className="mobile-nav-icon dropdown-icon" />
          </IconButton>
        </Link>
        <Link
          activeClass="active"
          to="portfolio"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-88}
        >
          <IconButton disableRipple>
            <WorkIcon className="mobile-nav-icon dropdown-icon" />
          </IconButton>
        </Link>
        <Link
          activeClass="active"
          to="resume"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-88}
        >
          <IconButton disableRipple>
            <ArticleIcon className="mobile-nav-icon dropdown-icon" />
          </IconButton>
        </Link>
        <Link
          activeClass="active"
          to="contact-me"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-88}
        >
          <IconButton disableRipple>
            <ConnectWithoutContactIcon className="mobile-nav-icon dropdown-icon" />
          </IconButton>
        </Link>
      </div>
    </div>
  );
}
