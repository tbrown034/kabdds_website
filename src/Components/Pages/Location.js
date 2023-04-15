import React from "react";
import HeroBanner from "../Main/HeroBanner";
import Hero from "../SubComponents/LocationHero";
import Info from "../SubComponents/LocationInfo";
import Map from "../Main/Map";
import Footer from "../Main/Footer";
import LocationButtons from "../SubComponents/LocationButtons";

const Location = () => {
  return (
    <div className="myLocation">
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
