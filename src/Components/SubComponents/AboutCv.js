import React from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import dentist from "../../Images/keith2.jpeg";



const AboutCv = () => (
  <div className="myAboutCv">
    <Container fluid>
      <Row>
      <Col lg="4" style={{ padding: 0 }}> <Image fluid="md" className="secondaryImage" src={dentist} /></Col>
        <Col lg="8"> <h1 className="center-text">Experience you can Trust</h1>
    <p>
      Keith A. Brown DDS FAGD is an experienced dentist with over 42 years of
      experience in the field. Since July 1980, he has been providing top-notch
      dental care to patients of all ages. Dr. Brown's passion for dentistry is
      driven by his commitment to staying current with the latest techniques and
      technology.
    </p>
    <p>
      Dr. Brown received his Doctor of Dental Surgery degree from Loyola Dental
      School in 1980. Prior to that, he earned his Bachelor of Arts degree in
      Chemistry and Biology from North Central College in 1976. He attended
      Naperville Central High School and Fenger High School in the Southside of Chicago before that.
    </p>
   
    <p>
      In addition to his commitment to dentistry, Dr. Brown is a Fellow of the
      Academy of General Dentistry. This prestigious designation is reserved for
      dentists who have completed over 500 hours of continuing education in
      various areas of dentistry. Dr. Brown is a true professional who is
      passionate about his work and dedicated to his patients.
    </p></Col>
        
      </Row>
    </Container>
   
  </div>
);

export default AboutCv;
