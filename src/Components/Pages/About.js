import React from "react";
import HeroBanner from "../Main/HeroBanner";
import Quote from "../SubComponents/AboutQuote";
import Hero from "../SubComponents/AboutHero";
import Logos from "../SubComponents/AboutLogos";
import Experience from "../SubComponents/AboutExperience";
import DYK from "../SubComponents/AboutDYK";
import Footer from "../Main/Footer";
import More from "../SubComponents/AboutMore";
import Header from "../Main/Header"

const About = () => {
  return (
    <div className="myAbout">
      <Header />
      <Hero />
      <HeroBanner colorType={"primary"} />
      <Experience />
      <Quote />
      <DYK />
      <More />
      <Logos colorType={"primary"} />
      <Footer colorType={"secondary"} />
    </div>
  );
};

export default About;
