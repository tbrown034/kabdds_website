import React from "react";
import { Card } from "react-bootstrap";
import words from "../../Images/dentistwords.jpeg";


const Contact = () => {
  return (
    <div className="myHomeHero">
      <Card className="bg-dark">
        <Card.Img src={words} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            Have Questions? We have{" "}
            <span className="curved-underline">
              Answers.
              <span className="curve"></span>
            </span>
          </Card.Title>

          <Card.Text>
          
          Let us know if you have any questions or need more information about our office, what services we provice, financing or insurance questions or anything on how we can make your visit go as pleasently as possible!

          </Card.Text>

        </Card.ImgOverlay>
      </Card>
      </div>
  );
};

export default Contact;