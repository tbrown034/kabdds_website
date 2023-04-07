import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Icon } from "semantic-ui-react";

const Footer = ({colorType}) => {
  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to call?");
    if (confirmed) {
      window.location.href = "tel:5553010589";
    }
  };
  return (
    <div className={`myFooter ${colorType === "secondary" ? 'secondaryColor' : ''}`} horizontal>
      <Container fluid="md">
        <Row className="footerApptBox ">
          <h1>Make your Appointment Today</h1>
          <h2>
            Give us a call, send us a message or request an appointment today!
          </h2>
          <div className="threeBtnGroup">
            <Button animated>
              <Button.Content visible>
                <Icon name="calendar" /> Request an Appointment Online
              </Button.Content>
              <Button.Content hidden>
                <Icon name="calendar" />
              </Button.Content>
            </Button>
            <Button onClick={handleClick} animated="vertical">
              <Button.Content hidden>
                <Icon name="phone" />
              </Button.Content>
              <Button.Content visible>
                <Icon name="phone" /> Call us
              </Button.Content>
            </Button>
            <Button animated>
              <Button.Content visible>
                <Icon name="mail" /> Send us a Message
              </Button.Content>
              <Button.Content hidden>
                <Icon name="mail" />
              </Button.Content>
            </Button>
          </div>
        </Row>
        <Row>
          <Col>
            <h3>Member</h3>
            <p>
              <a href="/services">American Dental Association</a>
            </p>
            <p>Chicago Dental Society</p>
            <p>American Equilibration Society</p>
            <p>Fellow in the Academy of General Dentistry</p>
          </Col>
          <Col>
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

            <a href="/services">FAQS</a>
          </Col>
          <Col>
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
          <Col>
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
