import React from "react";
import tw from "twin.macro";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Tilt } from "@jdion/tilt-react";

const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Icon = tw.img`rounded-full`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-300`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose text-gray-800`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition-all duration-300 border-b-2 border-transparent hover:border-primary-500`;
const TimelineRow = tw.div`p-8`;

class Tilter extends React.Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
  }

  render() {
    const card = this.props.card;
    return (
      <div ref={this.wrapper}>
        <TimelineRow>
          <Tilt className="Tilt" options={{ max: 15, reverse: true }}>
            <VerticalTimelineElement
              contentStyle={{ borderTop: "4px solid steelblue" }}
              date={card.date}
              iconStyle={{
                background: "rgb(33, 150, 243)",
                color: "#000",
                display: card.icon ? "block" : "none",
              }}
              icon={<Icon src={card.icon} alt="" />}
              position={card.position}
            >
              <Details>
                <Subtitle>
                  <Link href={card.url}>{card.subtitle}</Link>
                </Subtitle>
                <Title>{card.title}</Title>
                <Description>{card.description}</Description>
              </Details>
            </VerticalTimelineElement>
          </Tilt>
        </TimelineRow>
      </div>
    );
  }
}

export default Tilter;
