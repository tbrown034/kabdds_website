import React from "react";
import HeroBanner from "../Main/HeroBanner";
import Hero from "../SubComponents/FinanceHero";
import Info from "../SubComponents/FinanceInfo";
import Promo from "../SubComponents/FinancePromo";
import Insure from "../SubComponents/FinanceInsure";
import Tax from "../SubComponents/FinanceTax";
import Header from "../Main/Header"


import Footer from "../Main/Footer";

const Financing = () => {
  return (
    <div className="myFinancing">
          <Header />
      <Hero />
      <HeroBanner colorType={"primary"} />
      <Info />
      <Promo />
      <Insure />
      <Tax />
      <Footer colorType={"secondary"} />
    </div>
  );
};

export default Financing;
