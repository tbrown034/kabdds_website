import React from "react";
import { Icon } from "semantic-ui-react";
import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTooth } from '@fortawesome/free-solid-svg-icons'


const AboutMeet = () => {
  const iconStyle = {
    animation: 'custom-beat 2s infinite',
    animationDuration: '10s',
    animationTimingFunction: 'linear',
  };
  return (
    <div className="myAboutMeet center-text">
      <Container fluid>
       
          <h1  >Our Dental Philosophy</h1>
          <FontAwesomeIcon
  icon={faTooth}
  size="8x"
  className="icon fa-bounce"
  style={{
    animationDuration: '2s',
    animationIterationCount: '5',
  }}
/>
                  <p>
                  {" "}<Icon name="quote left"  />
                    Working in dentistry for
                    over 40 years, it has always been my goal to provide the
                    highest level of dental care possible. By working my hardest
                    to stay current with the latest techniques and technology I
                    am devoted to giving all my patients the finest care with
                    financing they can afford. </p>
                    <p>
                    I strive daily to make sure that my patients are
                    comfortable, informed and happy with their treatment. Your
                    smile and how you feel are what is most important to me, and
                    I will go out of my way to make sure that you feel at home
                    in my office.{" "} <Icon name="quote right"  />
                  </p>
                  <p className="signature">- Dr. Keith Brown, D.D.S. F.A.G.C</p>
          
  
      </Container>
       
                 
             

          
            
  


    </div>
  );
};

export default AboutMeet;
