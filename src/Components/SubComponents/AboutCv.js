import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import dentist from "../../Images/keith2.jpeg";

const AboutCv = () => (
  <div className="myAboutCv">
    <Container fluid>
      <Row>
        <Col xl="4">
          {" "}
          <Image fluid="md" className="secondaryImage" src={dentist} />
        </Col>
        <Col className="experience side-padding" lg="8">
          {" "}
          <h1 className="center-text padding-bottom" >Experience You Can Trust</h1>
          <p>
            Keith A. Brown DDS FAGD is an experienced dentist with over 42 years
            of experience in the field. Since 1980, he has been providing
            top-notch dental care to patients of all ages. Dr. Brown's passion
            for dentistry is driven by his commitment to staying current with
            the latest techniques and technology.
          </p>
          <p>
            Dr. Brown earned  his Doctor of Dental Surgery degree from Loyola
            Dental School. Prior to that, he earned Bachelor of Arts
            degrees in Chemistry and Biology from North Central College. A lifelong Chicagoland residnet, Dr. Brown attended Naperville Central High School and Fenger High School in
            the Southside of Chicago.
          </p>
          <p>
            In addition to his commitment to dentistry, Dr. Brown is a Fellow of
            the Academy of General Dentistry. This prestigious designation is
            reserved for dentists who have completed over 500 hours of
            continuing education in various areas of dentistry. Dr. Brown is a
            true professional who is passionate about his work and dedicated to
            his patients.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AboutCv;
