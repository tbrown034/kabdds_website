import React from "react";
import { Card, Image } from "react-bootstrap";
import dad2 from "../../Images/dad2.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const AboutMeet = () => {
  return (
    <div className="myAboutMeet">
          <Container className="secondContainer" >
        <Row>
          <Col lg={7}>
           
       
              <Card>
              <Card.Title>About Keith A. Brown, DDS</Card.Title>
              <Card.Body>
                <Card.Text>
                  Hello, and welcome to my practice. Working in dentistry for
                  over 40 years, it has always been my goal to provide the
                  highest level of dental care possible. By working my hardest
                  to stay current with the latest techniques and technology I
                  am devoted to giving all my patients the finest care with
                  financing they can afford.
                  <br />
                  <br />
                  I strive daily to make sure that my patients are comfortable,
                  informed and happy with their treatment. Your smile and how
                  you feel are what is most important to me, and I will go out
                  of my way to make sure that you feel at home in my office. I
                  will do everything within my power to give you the dental
                  care you deserve.
                </Card.Text>
              </Card.Body>
            </Card>
     
          </Col>
          <Col lg={5}>
            <Image fluid="md" className="secondaryImage" src={dad2} />
          </Col>
        </Row>
       
      </Container>
    </div>
  );
};

export default AboutMeet;
