import React from "react";
import HeroBanner from "../HeroBanner";
import Fellow from "../SubComponents/AboutFellow";
import Meet from "../SubComponents/AboutMeet";
import Hero from "../SubComponents/AboutHero";
import Logos from "../SubComponents/AboutLogos"
import CV from "../SubComponents/AboutCv"




const About = () => {
  return (
    <div className="myAbout">
     <Hero />
      
      <Meet />
      <HeroBanner />
      <CV />
      
      <Fellow />
      {/* <Logos /> */}
    </div>
  );
};

export default About;
