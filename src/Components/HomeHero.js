import React from 'react';
import { Card } from 'react-bootstrap';
import dentist from "../Images/dentist.jpeg";
import { Button, Icon } from "semantic-ui-react";

import HeroCallBtn from './HeroCallBtn';

const HomeHero = () => {
    return (
      <>
        <Card className="bg-dark">
      <Card.Img src={dentist} alt="Keith Brown" />
      <Card.ImgOverlay>
        <Card.Title className="heroTitle">Let us brighten your smile.</Card.Title>
        <Card.Text>
          We offer a wide range of dental services to keep your smile healthy and bright.
        </Card.Text>
        <div className="btnGroup">
        <Button animated id="apptBtn">
                <Button.Content  visible>
                  <Icon name="calendar" /> Request an Appointment Online
                </Button.Content>
                <Button.Content hidden>
                  <Icon name="arrow right" />
                </Button.Content>
              </Button>
              <HeroCallBtn />
              </div>
      </Card.ImgOverlay>
    </Card>
      </>
    );
  }
  
  export default HomeHero;