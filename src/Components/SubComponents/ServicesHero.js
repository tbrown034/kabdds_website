import React from "react";
import { Card } from "react-bootstrap";
import  HeroBanner from "../Main/HeroBanner";
import dentist2 from "../../Images/dentist2.jpeg";




const ServicesHero = () => {
  return (
    <div className="myServices">
      <Card className="bg-dark">
        <Card.Img src={dentist2} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            We'll Take Care of Your {" "}
            <span className="curved-underline">
              Teeth.
              <span className="curve"></span>
            </span>
          </Card.Title>

          <Card.Text>
          
          Our goal is to have your teeth looking great and free of pain or discomfort in as short a time as possible.

          </Card.Text>

        </Card.ImgOverlay>
      </Card>
      </div>
  );
};

export default ServicesHero;