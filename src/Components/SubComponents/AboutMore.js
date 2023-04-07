import { Row, Col, Container, Image } from "react-bootstrap";
import dad from "../../Images/dad2.jpg";

const AboutMore = () => {
  return (
    <div className="myAboutMore">
      <Container fluid>
        <Row>
          <Col className="center-text personalText" xl="6">
            <h1>Outside the Office</h1>
            <p>
              When Dr. Brown is not helping his patients, he loves spending time
              with much of time with his family, including his two children and three granchldren. In addition to landscaping, he
              is also an avid fisherman and a faithful Bears and Cubs fan.{" "}
            </p>
          </Col>
          <Col>
            <Image fluid="md" className="secondaryImage" src={dad} />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMore;
