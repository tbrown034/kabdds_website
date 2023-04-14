import React from "react";

import Footer from "../Main/Footer";
import HeroBanner from "../Main/HeroBanner";
import ContactHero from "../SubComponents/ContactHero"
import ContactInfo from "../SubComponents/ContactInfo";



const Contact = () => {
  return (
    <div className="myContact">
      <ContactHero />
      <HeroBanner />
      
      <ContactInfo />
      <Footer />
      
      </div>
  );
};

export default Contact;