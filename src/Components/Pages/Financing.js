import React from "react";
import  HeroBanner from "../HeroBanner";
import  FinancingHero from "../SubComponents/FinancingHero";
import  FinancingInfo from "../SubComponents/FinancingInfo";
import Footer from "../Footer"






const Financing = () => {
  return (
    <div className="myFinancing">
      <FinancingHero />
      <FinancingInfo />
    
      <HeroBanner colorType={"secondary"}/>
      <Footer />
      </div>
  );
};

export default Financing;