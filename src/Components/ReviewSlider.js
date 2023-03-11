import Carousel from 'react-bootstrap/Carousel';
import { Icon, Rating } from "semantic-ui-react";
import Container from 'react-bootstrap/Container';





const ReviewSlider = () => {
    return (
        <>
          <h2 className="reviewTitle">Here from Our Patients</h2>
        

        <Carousel variant="dark" fade>

      <Carousel.Item className="reviewBackground">
        <Carousel.Caption >
         
          <p className="reviewText"><Icon name="quote left" size="big" />I have been receiving dental care from Dr. Brown for 17 years.
                  I truly believe he is the best in the business. He is a
                  perfectionist in his work. I highly recommend him and his
                  staff.<Icon name="quote right" size="big" /></p>
          <h3 className="reviewName">- Mike L.</h3>
          <h4 className="reviewCity">Naperville</h4>
          <Rating icon='star' defaultRating={5} maxRating={5} />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="reviewBackground">
        <Carousel.Caption >
        
          <p className="reviewText"><Icon name="quote left" size="big" />I initially came here with a dental crisis and needed an
                  emergency appointment. It's out of network for me but they did
                  everything they could with the insurance and I've gotten
                  excellent care. Instead of losing some teeth I have teeth that
                  look really good.<Icon name="quote right" size="big" /></p>
          <h3 className="reviewName">- Mike C.</h3>
          <h4 className="reviewCity">Markham, IL</h4>
          <Rating icon='star' defaultRating={5} maxRating={5} />
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="reviewBackground">
        <Carousel.Caption >
        
          <p className="reviewText"><Icon name="quote left" size="big" />Dr. Brown made me a total new set of dentures that attaches to
                  mini implants. Now, I can eat sandwiches, grilled meats, BBQ
                  ribs, steaks, and all kinds of hard foods. If you are having
                  problems with your dentures, I would recommended Dr. Keith
                  Brown to anyone.<Icon name="quote right" size="big" /></p>
          <h3 className="reviewName">- Mattie P W.</h3>
          <h4 className="reviewCity">Bolingbrook, IL</h4>
          <Rating icon='star' defaultRating={4} maxRating={5} />
        </Carousel.Caption>
      </Carousel.Item>

      
    </Carousel>
        </>
    )
}

export default ReviewSlider;