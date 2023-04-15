import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Button, Icon } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";

const CallToAction = ({ colorType }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to call?");
    if (confirmed) {
      window.location.href = "tel:5553010589";
    }
  };
  return (
    <div
      className={`myApt ${colorType === "secondary" ? "secondaryColor" : ""}`}
      horizontal
    >
      <Container className="center-text footer-container" fluid>
        <Row className="footerApptBox">
          <h1>Make your Appointment Today</h1>
          <h2>
            Give us a call, send us a message or request an appointment today!
          </h2>
          <div className="threeBtnGroup">
            <Button
              onClick={() => handleNavigation("/appointment")}
              className="footer-button"
              animated
            >
              <Button.Content visible>
                <Icon name="calendar" /> Request an Appointment Online
              </Button.Content>
              <Button.Content hidden>
                <Icon name="calendar" />
              </Button.Content>
            </Button>
            <Button
              onClick={handleClick}
              className="footer-button"
              animated="vertical"
            >
              <Button.Content hidden>
                <Icon name="phone" />
              </Button.Content>
              <Button.Content visible>
                <Icon name="phone" /> Call us
              </Button.Content>
            </Button>
            <Button
              onClick={() => handleNavigation("/contact")}
              className="footer-button"
              animated
            >
              <Button.Content visible>
                <Icon name="mail" /> Send us a Message
              </Button.Content>
              <Button.Content hidden>
                <Icon name="mail" />
              </Button.Content>
            </Button>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default CallToAction;
