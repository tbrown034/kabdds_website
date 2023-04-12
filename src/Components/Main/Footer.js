


import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Icon } from "semantic-ui-react";
import Appointment from "./Appointment";

const Footer = ({ colorType }) => {
 
  return (
    <div className={`myFooter ${colorType === "secondary" ? "secondaryColor" : ""}`}>
      <Container fluid >
        <Appointment colorType={"tertiary"}  />
        <Row className="defaultPadding center-text">
        
          <Col className="footerCols" lg={4} xs={12}>
            <h3>Dental Services</h3>
            <p>
              <a href="/services">General Dentistry</a>
            </p>
            <p>
              <a href="/services">Surgical Dentistry</a>
            </p>
            <p>
              <a href="/services">Cosmetic Dentistry</a>
            </p>
<p>
            <a href="/services">FAQS</a>
            </p></Col>
          <Col className="footerCols" lg={4} xs={12}>
            <h3>Office Hours</h3>
            <p>
              <Icon name="calendar" />
              Monday & Tuesday: 9 a.m. to 5 p.m.
            </p>
            <p>
              <Icon name="calendar" />
              Wednesday: 9 a.m. to 9 p.m.
            </p>
            <p>
              <Icon name="calendar" />
              Thursday & Friday: 9 a.m. to 5 p.m.{" "}
            </p>
            <p>
              <Icon name="calendar" />
              Weekends: 5 p.m. to 9 p.m.
            </p>{" "}
          </Col>
          <Col lg={4} xs={12}>
            {" "}
            <h3>Contact</h3>
            <p>
              <Icon name="location arrow" />
              1295 Rickert Drive, Naperville, IL 60564
            </p>
            <p>
              <Icon name="mail" />
              kabdds@aol.com
            </p>
            <p>
              {" "}
              <Icon name="phone" />
              630-396-8702
            </p>
            <p>
              <Icon name="fax" /> 630-396-8703
            </p>{" "}
          </Col>
        </Row>
      </Container>
      <div className="copyright">© 2023 Keith Brown D.D.S.</div>
    </div>
  );
};

export default Footer;

