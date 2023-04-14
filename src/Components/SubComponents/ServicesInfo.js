import {Container, Row, Col, Image} from "react-bootstrap/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import smile from "../../Images/smile.jpeg"

const ServicesInfo = () => {
  return (
    <div className="defaultPadding tertiaryColor">
      <Container fluid>
        <Row>
          <Col className="textBox">
          <h1 className="center-text">Routine Cleanings, Cosmetic Procueres and More.

</h1>
          
        <FontAwesomeIcon 
          icon={faMessage}
          size="8x"
          className="center-text icon bounceIcon fa-bounce"
          style={{
            animationDuration: "2s",
            animationIterationCount: "1",
          }}
        />
        
        <p >
        We provide a range of dental services to take the best care of you and your family's dental health for life. Whether it's your child's first cleaning or an emergnecy procedure, we got you covered.

        </p>
        <p>Our goal is to have your teeth looking great and free of pain or discomfort in as short a time as possible.
</p>

          
          </Col>

          <Col xl="5" className="rightImageContainer" >
          <Image  fluid="md" className="rightImage" src={smile} />

          </Col>


        </Row>
      
      </Container>
    </div>
  );
};

export default ServicesInfo;
