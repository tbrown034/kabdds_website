import React from "react";
import HeroBanner from "../HeroBanner";
import Fellow from "../SubComponents/AboutFellow";
import Meet from "../SubComponents/AboutMeet";
import Hero from "../SubComponents/AboutHero";



const About = () => {
  return (
    <div className="myAbout">
     <Hero />
      <HeroBanner />
      <Meet />
      <Fellow />
    </div>
  );
};

export default About;
