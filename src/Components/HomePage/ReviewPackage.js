import { Container, Row, Col, Image } from "react-bootstrap";
import ReviewSlider from "./ReviewSlider";
import smile from "../../Images/smile3.webp"

const ReviewPackage = () => {
  return (
    <div className="secondaryColor ">
      <Container  fluid>
        <Row>
          <Col  lg={7} >
            <ReviewSlider />
          </Col>
          <Col className="homeImageContainer" >
            <Image className="homeImage" src={smile}  />
          </Col>
        </Row>
      </Container>
      </div>
    
    
  );
};

export default ReviewPackage;
