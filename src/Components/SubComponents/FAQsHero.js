import React from "react";
import { Card } from "react-bootstrap";
import smile from "../../Images/smile.jpeg";

const FAQsHero = () => {
  return (
    <div className="myFinancing">
      <Card className="bg-dark">
        <Card.Img src={smile} alt="insurance" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            Frequently Asked{" "}
            <span className="curved-underline">
              Questions.
              <span className="curve"></span>
            </span>
          </Card.Title>

          <Card.Text>
            We promise to give you the most affordable dental care we can offer.
            We can also assist you in finding a financing program tailored to
            your needs and budget.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default FAQsHero;
