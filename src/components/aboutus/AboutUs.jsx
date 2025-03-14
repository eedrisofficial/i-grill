import React from "react";
import AboutHero from "./abouthero/AboutHero";
import AboutMission from "./mission/AboutMission";
import AboutNumbers from "./aboutnumbers/AboutNumbers";
import AboutChef from "./aboutchef/AboutChef";

const AboutUs = () => {
  return (
    <React.Fragment>
      <AboutHero />
      <AboutMission />
      <AboutNumbers />
      <AboutChef />
    </React.Fragment>
  );
};

export default AboutUs;
