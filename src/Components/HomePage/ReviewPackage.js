import { Container, Row, Col, Image } from "react-bootstrap";
import ReviewSlider from "./ReviewSlider";
import smile from "../../Images/smile3.webp"

const ReviewPackage = () => {
  return (
    <div className=" secondaryColor">
      <Container  fluid>
        <Row className="align-items-center">
          <Col className="bottomPadding" lg={7} >
            <ReviewSlider />
          </Col>
          <Col className="noPadding border">
            <Image fluid="md" className="homeImage" src={smile}  />
          </Col>
        </Row>
      </Container>
      </div>
    
    
  );
};

export default ReviewPackage;
