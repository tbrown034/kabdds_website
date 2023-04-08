import { Container } from "react-bootstrap/";

const Promo = () => {
  return (
    <div className="promo">
      <Container fluid>
        <h2 className="center-text">Current Offer</h2>
        <h3 className="center-text">Get 10% off on teeth whitening!</h3>
        <p className="center-text">
          Use promo code: <strong>WHITEN10</strong>
        </p>
      </Container>
    </div>
  );
};

export default Promo;