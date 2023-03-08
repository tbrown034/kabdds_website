import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Icon } from 'semantic-ui-react'

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="md" bg="my-color">
      <Container  >
        <Navbar.Brand href="#home">Keith Brown, D.D.S.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/practice">Our Practice</Nav.Link>
            <Nav.Link href="/financing">Financing</Nav.Link>
            <Nav.Link href="/location">Location</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/faqs">FAQs</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/services">General Dentistry</NavDropdown.Item>
              <NavDropdown.Item href="/services">
                Cosmetic Dentistry
              </NavDropdown.Item>
              <NavDropdown.Item href="/services">Surgical Dentistry</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Button  >
      <Icon name="user" /> Make an Appointment
    </Button>
            <Button>Call Us Now</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;