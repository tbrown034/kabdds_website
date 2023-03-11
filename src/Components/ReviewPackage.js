import { Container, Row, Col, Image } from "react-bootstrap";
import ReviewSlider from "./ReviewSlider";
import smile from "../Images/smile3.webp"

const ReviewPackage = () => {
  return (
    <>
    <div className="reviewPackageContainer">
      <Container  fluid>
        <Row className="align-items-center">
          <Col id="col1" md={6} className="p-0">
            <ReviewSlider />
          </Col>
          <Col id="col1" md={6}>
            <Image fluid className="reviewImage" src={smile}  />
          </Col>
        </Row>
      </Container>
      </div>
    </>
    
  );
};

export default ReviewPackage;
