import { Row, Col, Container, Image } from "react-bootstrap";
import fsa from "../../Images/fsa1.jpeg";

const FinanceTax = () => {
  return (
    <div className="defaultPadding tertiaryColor">
      <Container fluid>
        <Row>
          <Col className="leftImageContainer" xl="4">
            <Image fluid="md" className="leftImage" src={fsa} />
          </Col>
          <Col className="textBox ">
            <h1 className="center-text bottomPadding">Did You Know?</h1>
            <p>
              Flexible Spending Arrangements (FSAs) and other tax-advantaged
              accounts, such as Health Savings Accounts (HSAs), can be used to
              cover a wide range of dental expenses, making dental care more
              affordable for individuals and families. These accounts allow you
              to set aside pre-tax dollars to pay for eligible medical and
              dental expenses, ultimately saving you money by reducing your
              taxable income.
            </p>
            <p>
              Eligible dental expenses typically include preventive care,
              diagnostic services, treatments, and procedures that are deemed
              medically necessary, such as cleanings, fillings, extractions, and
              braces.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FinanceTax;
