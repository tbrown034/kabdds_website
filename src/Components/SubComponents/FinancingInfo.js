import {Container, Row, Col, Image} from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPiggyBank } from "@fortawesome/free-solid-svg-icons";
import Reception from "../../Images/Reception.jpeg"

const FinancingInfo = () => {
  return (
    <div className="myFinancingInfo ">
      <Container fluid>
        <Row>
          <Col className="personalText">
          <h1 className="center-text">Financing Made Easy</h1>
          <div className="center-text">
        <FontAwesomeIcon 
          icon={faPiggyBank}
          size="8x"
          className="center-text icon fa-bounce"
          style={{
            animationDuration: "2s",
            animationIterationCount: "1",
          }}
        />
        </div>
        <p >
          We promise to give you the most affordable dental care we can offer.
          We can also assist you in arranging a financing program tailored to
          your specific needs and budget.
        </p>
        <p>
          We accept most traditional insurance plans, contact our office to
          verify acceptance of your plan. We also accept checks, cash or credit
          cards, and we offer a flexible payment plan. We, however, are not
          accepting Medicad at this time.
        </p>
          
          </Col>

          <Col xl="4" className="imageContain">
          <Image fluid="md" className="secondaryImage" src={Reception} />

          </Col>


        </Row>
      
      </Container>
    </div>
  );
};

export default FinancingInfo;
