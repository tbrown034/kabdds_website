import React from "react";
import HeroBanner from "../Main/HeroBanner";
import ServicesHero from "../SubComponents/ServicesHero";
import ServicesInfo from "../SubComponents/ServicesInfo";
import Footer from "../Main/Footer";
import ServicesBanner from "../HomePage/ServicesBanner";
import Header from "../Main/Header"


const Services = () => {
  return (
    <div className="myServices">
          <Header />
      <ServicesHero />
      <HeroBanner />
      <ServicesInfo />
      <ServicesBanner />
      <Footer />
    </div>
  );
};

export default Services;
