import React from "react";
import { Card } from "react-bootstrap";
import dentist from "../../Images/dentist.jpeg";

const Appointment = () => {
  return (
    <div className="myHomeHero">
      <Card className="bg-dark">
        <Card.Img src={dentist} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            Let us brighten your{" "}
            <span className="curved-underline">
              Appointment.
              <span className="curve"></span>
            </span>
          </Card.Title>

          <Card.Text>
          
            Dr. Keith A. Brown, D.D.S., F.A.G.D., has been serving Naperville and
            the Chicagoland area for more than 40 years. Schedule a cleaning or
            appointment today!
          </Card.Text>

        </Card.ImgOverlay>
      </Card>
      </div>
  );
};

export default Appointment;