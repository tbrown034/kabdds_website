import Carousel from "react-bootstrap/Carousel";
import { Icon, Rating } from "semantic-ui-react";

const ReviewSlider = () => {
  return (
    <div className="defaultPadding center-text">
      <h1>Hear from our Patients</h1>

      <Carousel variant="dark">
        <Carousel.Item className="reviewHolder">
          <p>
            <Icon name="quote left" size="big" />
      
            Dr. Brown made me a total new set of dentures that attaches to mini implants. Now, I can eat sandwiches, grilled meats, BBQ ribs, steaks, and all kinds of hard foods. If you are having problems with your dentures, I would recommended Dr. Keith Brown to anyone.
            {"  "}
            <Icon name="quote right" size="big" />
          </p>

          <h5>- Mattie P W.</h5>
          <h5>Bolingbrook, IL</h5>
          <h5>
            {" "}
            <Rating icon="star" defaultRating={4} maxRating={5} />
          </h5>
        </Carousel.Item>
        <Carousel.Item className="reviewHolder">
          <p>
            <Icon name="quote left" size="big" />
            {"  "}I have been receiving dental care from Dr. Brown for 17 years.
            I truly believe he is the best in the business. He is a
            perfectionist in his work. I highly recommend him and his staff.
            {"  "}
            <Icon name="quote right" size="big" />
          </p>

          <h5>- Mattie P W.</h5>
          <h5>Bolingbrook, IL</h5>
          <h5>
            {" "}
            <Rating icon="star" defaultRating={4} maxRating={5} />
          </h5>
        </Carousel.Item>
        <Carousel.Item className="reviewHolder">
          <p>
            <Icon name="quote left" size="big" />
            {"  "}I initially came here with a dental crisis and needed an
            emergency appointment. It's out of network for me but they did
            everything they could with the insurance and I've gotten excellent
            care. Instead of losing some teeth I have teeth that look really
            good.
            {"  "}
            <Icon name="quote right" size="big" />
          </p>

          <h5>- Mike C.</h5>
          <h5>Naperville, IL</h5>
          <h5>
            {" "}
            <Rating icon="star" defaultRating={4} maxRating={5} />
          </h5>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default ReviewSlider;
