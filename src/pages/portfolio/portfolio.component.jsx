import React from "react";

import { Box } from "@mui/system";

import SecTitle from "../../components/section-title/secTitle.component";
import PortfolioCard from "../../components/portfolio-cards/portCard.component";

import projInfo from "../../utils/projInfo.json";

import "./portfolio.styles.scss";

export default function Portfolio({ title }) {
  console.log(projInfo);
  return (
    <section id="portfolio" className="section">
      <SecTitle title={title} />
      <Box className="card-container">
        {projInfo.map(({ title, image, href, gh, desc }) => {
          return (
            <PortfolioCard
              title={title}
              image={image}
              link={href}
              gh={gh}
              desc={desc}
            />
          );
        })}
      </Box>
    </section>
  );
}
