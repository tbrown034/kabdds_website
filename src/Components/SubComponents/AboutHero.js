import React from "react";
import { Card } from "react-bootstrap";
import keith from "../../Images/practice.jpeg";



const AboutHero = () => {
  return (
    <div className="myAboutHero">
      <Card className="bg-dark">
        <Card.Img src={keith} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
        <Card.Text className="next">Meet your Next Dentist</Card.Text>
          <Card.Title className="heroTitle">Dr. Keith Brown {" "}<span className="curved-underline">
              DDS, FAGD
              <span className="curve"></span>
            </span>
          
            
          </Card.Title>
          <Card.Text className="heroSubtitle">
            <span className="bold">Dr. Brown is one of Chicagolands most experienced and dedicated dentists. With more than 40 years treating patients in Naperville, Il., he is a doctor you can trust.</span> 
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      </div>
)}

export default AboutHero;
