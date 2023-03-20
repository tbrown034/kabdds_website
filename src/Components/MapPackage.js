import { Container, Row, Col } from "react-bootstrap";
import Map from "./Map";
import { Button, Icon } from "semantic-ui-react";
import CallBtn from "./CallBtn";

const MapPackage = () => {
  return (
    <>
      <div className="myMapPackage">
        <Container fluid>
          <Row>
            <Col md={8}>
              <Container>
                <Map />
              </Container>
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
            </Col>
            <Col className="mapCol" md={4}>
              <Container>
                <Row className="mapRows">
                  <div className="myH1">
                    Prouldy Located in the Heart of Napeville, IL.
                  </div>
                  <div className="myH2">
                    We have been located on the third floor of the FifthThird
                    bank, located just south of the Edward Hospital Main
                    Hospital, for the past 30 years. Comve visit us!{" "}
                  </div>
                </Row>
                <Row className="mapRows">
                  <h3>Office Hours</h3>
                  <Col>
                    <p>
                      <Icon name="calendar" />
                      {"  "}
                      Monday & Tuesday: 9 a.m. to 5 p.m.
                    </p>
                    <p>
                      <Icon name="calendar" />
                      {"  "}
                      Wednesday: 9 a.m. to 9 p.m.
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <Icon name="calendar" />
                      {"  "}
                      Thursday & Friday: 9 a.m. to 5 p.m.{" "}
                    </p>
                    <p>
                      <Icon name="calendar" />
                      {"  "}
                      Weekends: 5 p.m. to 9 p.m.
                    </p>{" "}
                  </Col>
                </Row>
                <Row>
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
