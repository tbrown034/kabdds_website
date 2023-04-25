import React from "react";

import Footer from "../Main/Footer";
import HeroBanner from "../Main/HeroBanner";
import ContactHero from "../SubComponents/ContactHero";
import ContactInfo from "../SubComponents/ContactInfo";
import ContactForm from "../SubComponents/ContactForm";
import ContactSidebar from "../SubComponents/ContactSidebar";
import { Container, Row, Col } from "react-bootstrap";
import Header from "../Main/Header"


const Contact = () => {
  return (
    <div className="myContact">
            <Header />

      <ContactHero />
      <HeroBanner />
      <ContactInfo />
      <Container fluid>
        <Row>
          <Col lg={9}>
            <ContactForm />
          </Col>
          <Col>
            <ContactSidebar />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Contact;
