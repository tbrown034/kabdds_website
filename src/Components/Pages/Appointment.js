import React from "react";

import Footer from "../Main/Footer";
import AppointmentHero from "../SubComponents/AppointmentHero";
import AppointmentInfo from "../SubComponents/AppointmentInfo";
import HeroBanner from "../Main/HeroBanner";

const Appointment = () => {
  return (
    <div className="myAppointment">
      <AppointmentHero />
      <HeroBanner />
      <AppointmentInfo />
      <Footer />
    
      </div>
  );
};

export default Appointment;