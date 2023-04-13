import { Icon } from 'semantic-ui-react';
import { Row, Col, Container } from 'react-bootstrap';

const FinanceTax = () => (
  <div className='defaultPadding quadColor'>
    <Container fluid>
      <Row>
        <Col lg='9'>
          <h1 className='center-text'>Tax-Advantaged Accounts</h1>
          <p>
            Did you know you can use Health Savings Accounts (HSAs) and Flexible Spending Accounts (FSAs) to cover your dental expenses? These accounts offer tax benefits that can help you save money while accessing the dental care you need.
          </p>
          <p>
            By using an HSA or FSA, you can set aside pre-tax dollars to pay for eligible dental expenses, reducing your taxable income and potentially lowering your tax bill.
          </p>
          <p>
            It's important to check with your plan administrator to determine which dental procedures are eligible for reimbursement from your HSA or FSA. Typically, preventive and diagnostic services, restorative treatments, and orthodontics are covered, but cosmetic procedures may not be eligible.
          </p>
          <div className='quote-card'>
            <p className='quote-text'>
              <Icon name='quote left' />
              Take advantage of tax savings while ensuring your oral health is a top priority. Consult your plan administrator to learn more about how HSAs and FSAs can be used for your dental care.
              <Icon name='quote right' />
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default FinanceTax;