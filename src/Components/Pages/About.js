import React from "react";
import HeroBanner from "../HeroBanner";
import Quote from "../SubComponents/AboutQuote";
import Hero from "../SubComponents/AboutHero";
import Logos from "../SubComponents/AboutLogos"
import Experience from "../SubComponents/AboutExperience"
import DYK from "../SubComponents/AboutDYK"
import Footer from "../Footer"
import More from "../SubComponents/AboutMore"






const About = () => {
  return (
    <div className="myAbout">
     <Hero />
     <HeroBanner colorType={"primary"} />
     <Experience />

      <Quote />
      
      
      <DYK />
      <More />
      <Logos colorType={"primary"}/>
    
      <Footer colorType={"primary"}/>


      
    </div>
  );
};

export default About;
