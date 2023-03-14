import { Container, Row, Col } from "react-bootstrap";
import Map from "./Map";

import { Icon } from "semantic-ui-react";

const MapPackage = () => {
  return (
    <>
      <div className="myMapPackage">
        <Container fluid>
          <Row>
            <Col md={7}>
              <Container className="mapHolder">
                <Map />
              </Container>
            </Col>
            <Col className="mapCol" md={5}>
              <Container>
                <Row className="mapRows">
                  <h2>Our Convenient Location in the Heart of Naperville</h2>
                  <p>
                    We have proudly been located on the third floor of the
                    FifthThird bank, located just south of the Edward Hospital
                    Main Hospital, for the past 30 years. Comve visit us!{" "}
                  </p>
                </Row>
                <Row className="mapRows">
                  <h3>Office Hours</h3>
                  <Col>
                    <p>
                      <Icon name="calendar" />
                      Monday & Tuesday: 9 a.m. to 5 p.m.
                    </p>
                    <p>
                      <Icon name="calendar" />
                      Wednesday: 9 a.m. to 9 p.m.
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <Icon name="calendar" />
                      Thursday & Friday: 9 a.m. to 5 p.m.{" "}
                    </p>
                    <p>
                      <Icon name="calendar" />
                      Weekends: 5 p.m. to 9 p.m.
                    </p>{" "}
                  </Col>
                </Row>
                <Row >
                  <h3>Contact</h3>

                    <p>
                      <Icon name="location arrow" />
                      1295 Rickert Drive, Naperville, IL 60564
                    </p>
                    <Col>
                    <p>
                      <Icon name="mail" />
                      kabdds@aol.com
                    </p>
                    <p>
                      <Icon name="facebook" />
                      Facebook
                    </p>
                    </Col>
                    
                  
                  <Col>
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
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MapPackage;
