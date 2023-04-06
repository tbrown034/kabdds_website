import { Icon } from "semantic-ui-react";
import Stats from "./AboutStats";
import AGD from "../../Images/AGD.png";
import { Row, Col, Container, Image } from "react-bootstrap";

const AboutDYK = () => (
  <div className="myDYK">
    <Container fluid>
      <Row>
        <Col lg="9">
        <h1 className="center-text">Did You Know?</h1>
        <p>
          Dr. Brown is one of just six percent of U.S. dentists who have earned
          the prestigous <a href="https://www.agd.org/practice/tools/patient-resources/know-my-dentist/why-choose-an-fagd-or-magd-dentist">Fellow of the Academy of General Dentistry designation. </a>
        
        </p> <p>
          We think that's pretty cool, but don't take our word for it!
          </p>
      
        
          <div className="quote-card">
            <p className="quote-text">
              <Icon name="quote left" />
              If your dentist is a Fellow or Master of the Academy of General
              Dentistry (FAGD or MAGD), they are the best of the best in the
              field. You can rest assured that your dentist cares about knowing
              the latest techniques and best practices in dentistry. Your
              dentist practices these techniques in a classroom setting multiple
              times a year — not every dentist does this.
              <Icon name="quote right" />
            </p>
            <cite>- Academy of General Dentistry</cite>
            <Image fluid="md" className="logoQuote" src={AGD} />
          </div>
        
        
        </Col>

        <Col>
        <Stats />
        
        </Col>
        
        
        
      

    
      </Row>
      
    </Container>
  </div>
);

export default AboutDYK;
