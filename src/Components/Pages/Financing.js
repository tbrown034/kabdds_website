import React from "react";
import  HeroBanner from "../Main/HeroBanner";
import  Hero from "../SubComponents/FinanceHero";
import  Info from "../SubComponents/FinanceInfo";
import  Promo from "../SubComponents/FinancePromo";
import  Insure from "../SubComponents/FinanceInsure";
import  Tax from "../SubComponents/FinanceTax";



import Footer from "../Main/Footer"






const Financing = () => {
  return (
    <div className="myFinancing">
      <Hero />
      <HeroBanner colorType={"primary"}/>

      <Info />
      <Promo />
      {/* <Tax /> */}
      <Insure />
     
      
      <Footer colorType={"secondary"} />
      </div>
  );
};

export default Financing;