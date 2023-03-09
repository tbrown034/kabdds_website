import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CallBtn from "./CallBtn";
import { Button, Icon } from "semantic-ui-react";

const Footer = () => {
  return (
    <div className="myFooter">
      <Container fluid="md">
        <Row >
          <div className="footerApptBox">
            <h2>Ready for Your Appointment?</h2>
            <p>
              Give us a call, send us a message or request an appointment today
            </p>
            <div className="btnGroup">
              <Button animated id="apptBtn">
                <Button.Content visible>
                  <Icon name="calendar" /> Request an Appointment Online
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <CallBtn />
            </div>
          </div>
        </Row>
        <Row>
          <Col>
            <h3>Member</h3>
            <p>ADA</p>
            <p>ADA</p>
            <p>ADA</p>
            <p>ADA</p>
          </Col>
          <Col>
            <h3>Dental Services</h3>
            <p>General</p>
            <p>Cosmetic</p>
            <p>FAQS</p>
            <p>Financing</p>
          </Col>
          <Col>
            <h3>Office Hours</h3>
            <p>Monday & Tuesday: 9 a.m. to 5 p.m.</p>
            <p>Wednesday: 9 a.m. to 9 p.m.</p>
            <p>Thursday & Friday: 9 a.m. to 5 p.m. </p>
            <p>Weekends: 5 p.m. to 9 p.m.</p>{" "}
          </Col>

          <Col>
            {" "}
            <h3>Contact</h3>
            <p>1295 Rickert Drive, Naperville, IL 60564</p>
            <p>kabdds@aol.com</p>
            <p> 630-396-8702</p>
            <p> 630-396-8703
</p>{" "}
          </Col>
        </Row>
        <div className="text-center p-1">© 2023 Keith Brown D.D.S.</div>
      </Container>
    </div>
  );
};

export default Footer;
