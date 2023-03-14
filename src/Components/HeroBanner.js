import { Segment, Icon, Button } from "semantic-ui-react";


const HeroBanner = () => {
  const data = [
    {
      id: 1,
      icon: "user md",
      title: "40+ Years of Experience",
      buttonText: "Meet Dr. Brown, D.D.S., F.A.G.D.",
    },
    {
      id: 2,
      icon: "emergency",
      title: "24/7 Emergency Services",
      buttonText: "Emergency? Call Now",
    },
    {
      id: 3,
      icon: "money bill alternate outline",
      title: "Affordable Care",
      buttonText: "Check Your Financing Options",
    },
    {
      id: 4,
      icon: "heartbeat",
      title: "State of the Art Facilities",
      buttonText: "Take a Tour of our Office",
    },
  ];

  return (
    <div className="mySegment">
    <Segment.Group  className="heroSegment" horizontal>
      {data.map((item) => (
        <Segment  key={item.id}>
          <Icon name={item.icon} size="big" />
          <p>{item.title}</p>
          <Button animated id="apptBtn">
            <Button.Content visible>
                {/* If I want to add icons to the buttons --> */}
              {/* <Icon name={item.icon} /> */}
              {item.buttonText}
            </Button.Content>
            <Button.Content hidden>
              <Icon name="arrow right" />
            </Button.Content>
          </Button>
          
        </Segment>
      ))}
    </Segment.Group>
    </div>

  );
};

export default HeroBanner;
