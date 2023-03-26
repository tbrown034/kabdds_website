import React from "react";
import { Card } from "react-bootstrap";
import  HeroBanner from "../HeroBanner";
import insurance from "../../Images/insurance.jpeg";



const Services = () => {
  return (
    <div className="myServices">
      <Card className="bg-dark">
        <Card.Img src={insurance} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            Meet Your Next {" "}
            <span className="curved-underline">
              Dentist.
              <span className="curve"></span>
            </span>
          </Card.Title>

          <Card.Text>
          
          Dr. Keith A. Brown, D.D.S., F.A.G.D, has been practicing dentristry in Naperville for more than 40 years.

          </Card.Text>

        </Card.ImgOverlay>
      </Card>
      <HeroBanner />
      </div>
  );
};

export default Services;