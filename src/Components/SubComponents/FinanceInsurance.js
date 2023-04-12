import care from "../../Images/care.png";
import citi from "../../Images/citi_logo.png";
import { Item } from "semantic-ui-react";

const FinanceInsurance = () => {
  return (
    <div className="center-text defaultPadding">
    
        <h1>No Insurance, No Problem</h1>
        <p>
          Whether you don't have dental insurance or your plan doesn't cover
          certain procedures, we are ready to help and advise you on a variety
          of financial services. Each service offers No Interest or Low Interest
          financing and low minimum monthly payment options, so you can get the
          treatment you want, when you want it. Our Financial Coordinator can
          walk you through the application process for{" "}
          <a href="https://www.carecredit.com/">Care Credit</a> or{" "}
          <a href="https://www.citibenefits.com/">Citi Benefits </a> Health
          financing options. See more details below.
        </p>

   
      <Item.Group className="financeGroup">
        <Item id="topItem">
          <Item.Image size="large" src={care} />

          <Item.Content>
            <Item.Header className="itemHead" as="a">
              Care Credit
            </Item.Header>

            <Item.Description>
              Whether you use your healthcare credit card to pay for
              deductibles, or for treatments and procedures not covered by
              insurance*, CareCredit helps make the health, wellness and beauty
              treatments and procedures you want possible today.
            </Item.Description>
            <Item.Extra>*Subject to credit approval.</Item.Extra>
          </Item.Content>
        </Item>
        <Item id="bottomItem">
          <Item.Image size="large" src={citi} />

          <Item.Content>
            <Item.Header className="itemHead" as="a">
              Citi Benefits
            </Item.Header>

            <Item.Description>
              Your needs are unique to you, so Citi provides you with different
              medical options from which to choose. Each plan offers
              comprehensive benefits to help you and your family stay healthy
              throughout the year.
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </div>
  );
};

export default FinanceInsurance;
