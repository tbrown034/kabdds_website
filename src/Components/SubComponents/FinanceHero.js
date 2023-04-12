import React from "react";
import { Card } from "react-bootstrap";
import insurance from "../../Images/insurance.jpeg";



const FinancingHero = () => {
  return (
    
      <Card className="bg-dark">
        <Card.Img src={insurance} alt="insurance" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
           Making Dental Care {" "}
            <span className="curved-underline">
            Affordable.
              <span className="curve"></span>
            </span>
          </Card.Title>

          <Card.Text>
          
          We promise to give you the most affordable dental care we can offer. We can also assist you in finding a financing program tailored to your needs and budget.


          </Card.Text>

        </Card.ImgOverlay>
      </Card>
    
  );
};

export default FinancingHero;