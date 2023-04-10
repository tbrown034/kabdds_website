import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import CDS from "../../Images/cds1.png";
import ADA from "../../Images/ada-logo1.svg";
import AES from "../../Images/AES1.png";
import Fellow from "../../Images/Fellow.png";
import NCC from "../../Images/ncc3.webp";
import Loyola from "../../Images/loyola.png";

const Logos = ({colorType}) => (
  <div className={`myLogos ${colorType === "secondary" ? 'secondaryColor' : ''}`}>
    <Container fluid>
      <Row className="logoGroup">
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={Loyola} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={NCC} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={ADA} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={CDS} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={AES} /></Col>
        <Col xs={6} sm={4} md={2}><Image className="logoImage" src={Fellow} /></Col>
      </Row>
    </Container>
  </div>
);

export default Logos;