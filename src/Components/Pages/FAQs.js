import React from "react";
import HeroBanner from "../Main/HeroBanner";
import FAQsHero from "../SubComponents/FAQsHero";
import FAQsInfo from "../SubComponents/FAQsInfo";
import Footer from "../Main/Footer";

const FAQS = () => {
  return (
    <div className="myFAQs">
      <FAQsHero />
      <HeroBanner />
      <FAQsInfo />
      <Footer />
    </div>
  );
};

export default FAQS;
