import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button, Icon } from "semantic-ui-react";
import HeaderCallBtn from "./Buttons/HeaderCallBtn";

const Header = () => {
  return (
    <div className='myHeader'>
     {/* Nav from React Bootstrap */}
       <Navbar collapseOnSelect expand="md" bg="my-color" variant="light">
      <Container>
        {/* bsPrefix="byBrand" below to change Brand */}
        <Navbar.Brand href="/">Keith Brown, D.D.S.</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto myNavLinks">
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/financing">Financing</Nav.Link>
            <Nav.Link href="/location">Location</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/faqs">FAQs</Nav.Link>
            <NavDropdown title="Services" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">General Dentistry</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Cosmetic Dentistry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              Surgical Dentistry
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {/* Buttons from Sematnic UI  */}
          <Nav>
          <Button className="myButton" animated id="apptBtn">
                <Button.Content  visible>
                  <Icon name="calendar" /> Make an Appointment
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <HeaderCallBtn />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
  );
};

export default Header;
