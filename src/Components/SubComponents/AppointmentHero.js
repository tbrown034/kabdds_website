import React from "react";
import { Card } from "react-bootstrap";
import appointment from "../../Images/appointment.webp";

const AppointmentHero = () => {
  return (
    <div className="myHomeHero">
      <Card className="bg-dark">
        <Card.Img src={appointment} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            Schedule Your First (or Next){" "}
            <span className="curved-underline">
              Appointment.
              <span className="curve"></span>
            </span>
          </Card.Title>
          <Card.Text>
            We are excited to see and help assist you. Your journey to a
            healthier, brighter smile starts today!
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default AppointmentHero;
