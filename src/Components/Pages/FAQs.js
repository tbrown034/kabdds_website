import React from "react";
import HeroBanner from "../Main/HeroBanner";
import FAQsHero from "../SubComponents/FAQsHero";
import FAQsInfo from "../SubComponents/FAQsInfo";
import Footer from "../Main/Footer";
import Header from "../Main/Header"



const FAQS = () => {
  return (
    <div className="myFAQs">
            <Header />

      <FAQsHero />
      <HeroBanner />
      <FAQsInfo />
      <Footer />
    </div>
  );
};

export default FAQS;
