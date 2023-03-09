import React from 'react';
import { Button, Icon } from "semantic-ui-react";



const HeroCallBtn = () => {
  const handleClick = () => {
    const confirmed = window.confirm('Are you sure you want to call?');
    if (confirmed) {
      window.location.href = 'tel:5553010589';
    }
  };

  return (
    <>


<Button id="apptBtn" onClick={handleClick} animated="vertical">
                <Button.Content visible> <Icon name="phone" /> Call Us Now</Button.Content>
                <Button.Content hidden>
                  <Icon name="phone" />
                </Button.Content>
              </Button>
    </>
  );
};

export default HeroCallBtn;