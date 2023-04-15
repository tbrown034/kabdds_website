import React from "react";
import { Card } from "react-bootstrap";
import bank from "../../Images/bank.jpeg";

const LocationHero = () => {
  return (
    <Card className="bg-dark">
      <Card.Img src={bank} alt="insurance" />
      <Card.ImgOverlay className="heroOverlay">
        <Card.Title className="heroTitle">
          Making Dental Care{" "}
          <span className="curved-underline">
            Affordable.
            <span className="curve"></span>
          </span>
        </Card.Title>
        <Card.Text>
          Located in the thrid floor of the Fifth Third Bank at 75th St. and
          Rickert Drive
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default LocationHero;
