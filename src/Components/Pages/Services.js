import React from "react";
import { Card } from "react-bootstrap";
import  HeroBanner from "../Main/HeroBanner";
import dentist2 from "../../Images/dentist2.jpeg";
import ServicesHero from "../SubComponents/ServicesHero";
import ServicesInfo from "../SubComponents/ServicesInfo";
import Footer from "../Main/Footer";
import ServicesBanner from "../HomePage/ServicesBanner";




const Services = () => {
  return (
    <div className="myServices">
      <ServicesHero />
      <HeroBanner />
      <ServicesInfo />
      <ServicesBanner />
      <Footer />
    
      </div>
  );
};

export default Services;