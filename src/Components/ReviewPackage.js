import { Container, Row, Col, Image } from "react-bootstrap";
import ReviewSlider from "./ReviewSlider";
import smile from "../Images/smile3.webp"

const ReviewPackage = () => {
  return (
    <>
    <div className="reviewPackageContainer">
      <Container  fluid>
        <Row >
          <Col md={6} className="p-0">
            <ReviewSlider />
          </Col>
          <Col  className="imageCol" md={6}>
            
            <Image fluid thumbnail className="reviewImage" src={smile}  />
            
          </Col>
        </Row>
      </Container>
      </div>
    </>
    
  );
};

export default ReviewPackage;
