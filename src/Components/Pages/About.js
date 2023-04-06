import React from "react";
import HeroBanner from "../HeroBanner";
import Meet from "../SubComponents/AboutMeet";
import Hero from "../SubComponents/AboutHero";
import Logos from "../SubComponents/AboutLogos"
import CV from "../SubComponents/AboutCv"
import DYK from "../SubComponents/AboutDYK"





const About = () => {
  return (
    <div className="myAbout">
     <Hero />
      
      <Meet />
      <HeroBanner />
      <CV />
      <Logos />
      <DYK />

      
    </div>
  );
};

export default About;
