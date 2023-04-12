import React from "react";
import { Card } from "react-bootstrap";
import  HeroBanner from "../Main/HeroBanner";
import bank from "../../Images/bank.jpeg";




const Location = () => {
  return (
    <div className="myLocation">
      <Card className="bg-dark">
        <Card.Img src={bank} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            Conveiently Located in {" "}
            <span className="curved-underline">
              Naperville.
              <span className="curve"></span>
            </span>
          </Card.Title>

          <Card.Text>
          
          Located in the thrid floor of the Fifth Third Bank at 75th St. and Rickert Drive


          </Card.Text>

        </Card.ImgOverlay>
      </Card>
      <HeroBanner />
      </div>
  );
};

export default Location;