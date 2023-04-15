import React from "react";
import { Button, Icon } from "semantic-ui-react";

const HeaderCallBtn = () => {
  const handleClick = () => {
    const confirmed = window.confirm("Are you sure you want to call?");
    if (confirmed) {
      window.location.href = "tel:5553010589";
    }
  };

  return (
    <>
      <Button onClick={handleClick} animated="vertical">
        <Button.Content hidden>Call Us</Button.Content>
        <Button.Content visible>
          <Icon name="phone" />
        </Button.Content>
      </Button>
    </>
  );
};

export default HeaderCallBtn;
