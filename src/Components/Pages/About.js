import React from "react";
import HeroBanner from "../HeroBanner";
import Meet from "../SubComponents/AboutMeet";
import Hero from "../SubComponents/AboutHero";
import Logos from "../SubComponents/AboutLogos"
import CV from "../SubComponents/AboutCv"
import DYK from "../SubComponents/AboutDYK"
import Footer from "../Footer"






const About = () => {
  return (
    <div className="myAbout">
     <Hero />
      
      <Meet />
      <HeroBanner colorType={"secondary"} />
      <CV />
      
      <DYK />
      <Logos />
      <Footer colorType={"secondary"}/>


      
    </div>
  );
};

export default About;
