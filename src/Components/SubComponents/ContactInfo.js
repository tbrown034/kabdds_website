import { Container, Row, Col, Image } from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import smile from "../../Images/smile.jpeg";

const ContactInfo = () => {
  return (
    <div className="defaultPadding tertiaryColor">
      <Container fluid>
        <Row>
          <Col className="textBox">
            <h1 className="center-text">We are Here to Help</h1>
            <FontAwesomeIcon
              icon={faMessage}
              size="8x"
              className="center-text icon bounceIcon fa-bounce"
              style={{
                animationDuration: "2s",
                animationIterationCount: "1",
              }}
            />
            <p>
              We promise to give you the most affordable dental care we can
              offer. We can also assist you in arranging a financing program
              tailored to your specific needs and budget.
            </p>
            <p>
              We accept most traditional insurance plans, contact our office to
              verify acceptance of your plan. We also accept checks, cash or
              credit cards, and we offer a flexible payment plan. We, however,
              are not accepting Medicad at this time.
            </p>
          </Col>
          <Col xl="5" className="rightImageContainer">
            <Image fluid="md" className="rightImage" src={smile} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactInfo;
