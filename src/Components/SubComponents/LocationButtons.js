import { Container } from "react-bootstrap";
import { Button, Icon } from "semantic-ui-react";
import CopyAddress from "../Buttons/CopyAddress";

const myAddress = "1296 Rickert Drive, Suite 300, Naperville, IL 60540";

const LocationButtons = () => {
  return (
    <div className="defaultPadding primaryColor locationGroup">


          <Button className="wideButton" animated>
            <Button.Content visible>
              <Icon name="world" /> Get Directions
            </Button.Content>
            <Button.Content hidden>
              <Icon name="car" />
            </Button.Content>
          </Button>
          <CopyAddress  address={myAddress} />
          </div>

  );
};

export default LocationButtons;
