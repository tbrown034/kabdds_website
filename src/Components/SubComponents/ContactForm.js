import { Container } from "react-bootstrap";
import { Button, Checkbox, Form } from "semantic-ui-react";

const ContactForm = () => {
  return (
    <div className="myContactForm center-text defaultPadding tertiaryColor">
      <Container fluid>
        <h1>Contact</h1>
        <Form>
          <Form.Field>
            <label>First Name</label>
            <input placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Last Name</label>
            <input placeholder="Last Name" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="I agree to the Terms and Conditions" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
