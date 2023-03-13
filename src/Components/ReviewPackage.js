import { Container, Row, Col, Image } from "react-bootstrap";
import ReviewSlider from "./ReviewSlider";
import smile from "../Images/smile3.webp"

const ReviewPackage = () => {
  return (
    <>
    <div className="reviewPackageContainer">
      <Container  fluid>
        <Row className="align-items-center">
          <Col  md={7} >
            <ReviewSlider />
          </Col>
          <Col  md={5}>
            <Image fluid="md" className="reviewImage" src={smile}  />
          </Col>
        </Row>
      </Container>
      </div>
    </>
    
  );
};

export default ReviewPackage;
