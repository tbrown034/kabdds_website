import React from "react";
import HeroBanner from "../Main/HeroBanner";
import Hero from "../SubComponents/LocationHero";
import Info from "../SubComponents/LocationInfo";
import Map from "../Main/Map";
import Footer from "../Main/Footer";
import LocationButtons from "../SubComponents/LocationButtons";
import Header from "../Main/Header"


const Location = () => {
  return (
    <div className="myLocation">
          <Header />
      <Hero />
      <HeroBanner />
      <Info />
      <Map />
      <LocationButtons />
      <Footer />
    </div>
  );
};

export default Location;
