import { Button, Icon } from "semantic-ui-react";

const CopyAddress = ({ address }) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(address);
  };


  return (
    <div>
      
      <Button  onClick={handleCopy} animated >
                    <Button.Content visible>
                      <Icon name="copy" />Copy Address
                    </Button.Content>
                    <Button.Content hidden>
                      <Icon name="copy" />
                    </Button.Content>
                  </Button>
    </div>
  );
};

export default CopyAddress;