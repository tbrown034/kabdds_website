import React from "react";
import { Card, Image } from "react-bootstrap";
import HeroBanner from "../HeroBanner";
import keith from "../../Images/practice.jpeg";
import dad2 from "../../Images/dad2.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fellow from "../SubComponents/Fellow";

const About = () => {
  return (
    <div className="myAbout">
      <Card className="bg-dark">
        <Card.Img src={keith} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            Meet Your Next{" "}
            <span className="curved-underline">
              Dentist.
              <span className="curve"></span>
            </span>
          </Card.Title>
          <Card.Text>
            Dr. Keith A. Brown, D.D.S., F.A.G.D, has been practicing dentristry
            in Naperville for more than 40 years.
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
      <HeroBanner />
      <Container className="secondContainer"  fluid>
        <Row>
          <Col lg={8}>
            <Container className="textHolder">
              <h1 className="center-text">More than a Typical Dentist</h1>



              <h2 >
                Dr. Brown is one of just{" "}
                <a href="https://www.agd.org/education/awards-recognition/become-an-agd-fellow">
                  6% of all dentists
                </a>{" "}
                in the country to become a Fellow or Master of the Academy of
                General Dentistry (F.A.G.D.).
               
              </h2>
              
            </Container>
          </Col>
          <Col style={{ padding: 0 }} lg={4}>
            <Image fluid="md" className="secondaryImage" src={dad2} />
          </Col>
        </Row>
        <Fellow />
      </Container>
    </div>
  );
};

export default About;
