import { Row, Col, Container, Image } from "react-bootstrap";
import bank from "../../Images/bank2.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const LocationInfo = () => (
  <div className="defaultPadding tertiaryColor">
    <Container fluid>
      <Row>
        <Col className="leftImageContainer" xl="4">
          <Image fluid="md" className="leftImage" src={bank} />
        </Col>
        <Col className="textBox ">
          <h1 className="center-text">Naperville's Trusted Dentist</h1>
          <FontAwesomeIcon
            icon={faLocationDot}
            size="8x"
            className="icon fa-bounce bounceIcon"
            style={{
              animationDuration: "2s",
              animationIterationCount: "1",
            }}
          />
          <p>
            Since 1994, Dr. Brown has been proudly serving the Naperville
            community from his conveniently located practice at the Fifth Third
            Bank building, at the intersection of 75th Street and Ricket Drive.
            This prime location provides easy access, ample parking, and a safe
            environment for all our patients.
          </p>
          <p>
            As a long-standing member of the Naperville community, Dr. Brown is
            dedicated to providing exceptional dental care to his neighbors and
            friends. Choose Dr. Brown as your trusted dentist and become a part
            of our dental family.
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default LocationInfo;
