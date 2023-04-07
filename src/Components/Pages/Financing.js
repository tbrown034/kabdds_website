import React from "react";
import  HeroBanner from "../HeroBanner";
import  FinancingHero from "../SubComponents/FinancingHero";
import  FinancingInfo from "../SubComponents/FinancingInfo";





const Financing = () => {
  return (
    <div className="myFinancing">
      <FinancingHero />
      <FinancingInfo />
    
      <HeroBanner />
      </div>
  );
};

export default Financing;