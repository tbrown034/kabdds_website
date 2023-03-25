import React from "react";
import { Card } from "react-bootstrap";
import dentist from "../../Images/dentist.jpeg";
import { Button, Icon } from "semantic-ui-react";
import CallBtn from "../Buttons/CallBtn";

const HomeHero = () => {
  return (
    <div className="myHomeHero">
      <Card className="bg-dark">
        <Card.Img src={dentist} alt="Keith Brown" />
        <Card.ImgOverlay className="heroOverlay">
          <Card.Title className="heroTitle">
            Let us brighten your{" "}
            <span className="curved-underline">
              smile.
              <span className="curve"></span>
            </span>
          </Card.Title>

          <Card.Text>
          
            Dr. Keith A. Brown, D.D.S., F.A.G.D., has been serving Naperville and
            the Chicagoland area for more than 40 years. Schedule a cleaning or
            appointment today!
          </Card.Text>
          <div className="btnGroup">
            <Button animated id="apptBtn">
              <Button.Content visible>
                <Icon name="calendar" /> Request an Appointment Online
              </Button.Content>
              <Button.Content hidden>
                <Icon name="arrow right" />
              </Button.Content>
            </Button>
            <CallBtn />
          </div>
        </Card.ImgOverlay>
      </Card>
      </div>
  );
};

export default HomeHero;
