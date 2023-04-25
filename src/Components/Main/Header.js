import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Icon } from "semantic-ui-react";
import HeaderCallBtn from "../Buttons/HeaderCallBtn";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/appointment");
  };
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="myHeader">
      {/* Nav from React Bootstrap */}
      <Navbar collapseOnSelect expand="md" bg="my-color" variant="light">
        <Container>
          {/* bsPrefix="byBrand" below to change Brand */}
          <Navbar.Brand onClick={() => handleNavigation("/")}>
            Keith Brown, D.D.S.
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" aria-label="Toggle navigation"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto myNavLinks">
              <Nav.Link onClick={() => handleNavigation("/about")}>
                About Us
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/financing")}>
                Financing
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/location")}>
                Location
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/contact")}>
                Contact
              </Nav.Link>
              <Nav.Link onClick={() => handleNavigation("/faqs")}>
                FAQs
              </Nav.Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <NavDropdown.Item onClick={() => handleNavigation("/services")}>
                  General Dentistry
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigation("/services")}>
                  Cosmetic Dentistry
                </NavDropdown.Item>
                <NavDropdown.Item onClick={() => handleNavigation("/services")}>
                  Surgical Dentistry
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            {/* Buttons from Sematnic UI  */}
            <Nav>
              <Button
                className="myButton"
                animated
                id="apptBtn"
                onClick={handleClick}
              >
                <Button.Content visible>
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
