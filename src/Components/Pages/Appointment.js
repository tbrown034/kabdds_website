import React from "react";

import Footer from "../Main/Footer";
import AppointmentHero from "../SubComponents/AppointmentHero";
import AppointmentInfo from "../SubComponents/AppointmentInfo";
import HeroBanner from "../Main/HeroBanner";
import Header from "../Main/Header"


const Appointment = () => {
  return (
    <div className="myAppointment">
       <Header />
      <AppointmentHero />
      <HeroBanner />
      <AppointmentInfo />
      <Footer />
    
      </div>
  );
};

export default Appointment;