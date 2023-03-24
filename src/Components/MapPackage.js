import { Container, Row, Col } from "react-bootstrap";
import Map from "./Map";
import { Button, Icon } from "semantic-ui-react";
import CopyAddress from "./CopyAddress";

const myAddress = "1296 Rickert Dr #300, Naperville, IL 60540";

const MapPackage = () => {
  return (
    <>
      <div className="myMapPackage">
        <Container fluid>
          <Row>
            <Col className="colMap" lg={9}>
              <Map />
            </Col>
            <Col className="colText" lg={3}>
              <div className="myH1">
                Prouldy Located in the Heart of Napeville, IL.
              </div>
              <div className="myH2">
                We have been located on the third floor of the FifthThird bank,
                located at <span className="address">{myAddress}</span>, for the
                past 30 years. Come visit us!{" "}
              </div>
              <div className="btnGroup">
                <Button id="directButton" animated>
                  <Button.Content visible>
                    <Icon name="world" /> Get Directions
                  </Button.Content>
                  <Button.Content hidden>
                    <Icon name="car" />
                  </Button.Content>
                </Button>
                <CopyAddress address={myAddress} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MapPackage;
