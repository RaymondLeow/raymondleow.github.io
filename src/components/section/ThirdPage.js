import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";

import { Carousel } from "components/features/Carousel.js";

const Container = tw.div`relative -mx-8 text-gray-100`;
const LiuLogo = require("../../images/liu-logo.png");
const LynesLogo = require("../../images/lynes-logo.svg");
const EuroneticsLogo = require("../../images/euronetics-logo.png");
const InforLogo = require("../../images/infor-logo.png");

const ThreeColumnContainer = styled.div`
  ${tw`z-10 mb-10 relative flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto h-[300px]`}
`;
const Subheading = tw(SubheadingBase)`mb-4 text-gray-100`;
const Heading = tw(SectionHeading)`w-full sm:text-4xl md:text-5xl xl:text-6xl`;
const Description = tw(SectionDescription)`w-full text-center text-gray-300`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-4 inline-block w-56 tracking-wide text-center py-5 bg-gray-300 text-gray-800 hocus:bg-gray-400 hocus:text-gray-900`;
const VerticalSpacer = tw.div`md:mt-10 w-full`;
const SmallVerticalSpacer = tw.div`mt-1 w-full`;

const Column = styled.div`
  ${tw`sm:w-full md:w-1/2 lg:w-1/3 md:max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2`}

  .cardContent {
    ${tw`flex sm:flex-row md:flex-col`}
  }
  .imageContainer {
    ${tw`bg-white text-center rounded-full sm:w-12 md:w-20 sm:h-12 md:h-20 sm:p-3 md:p-2`}
    img {
      ${tw`sm:w-12 md:w-16 sm:w-12 md:h-16 rounded-full`}
    }
  }

  .textContainer {
    ${tw`sm:pl-6 md:pl-0 sm:mt-3 md:mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;

const MiddleContainer = tw.div`flex items-center justify-center`;
const Title = tw.div`text-black text-[32px] font-bold mb-10`;
const LogoContainer = ({ logo, title }) => {
  const renderContainer = () => {
    if (logo) {
      return (
        <img
          alt={title}
          src={logo.default || logo}
          style={{ height: "60px", backgroundSize: "cover" }}
        />
      );
    } else {
      return <div></div>;
    }
  };
  return renderContainer();
};

export default ({ cards = null, buttonRounded = true }) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;
  const defaultCards = [
    {
      description: "Enterprise Applications Deployed",
      number: 50,
      postFix: "+",
    },
    {
      description: "Companies Using My Components",
      number: 800,
      postFix: "+",
    },
    {
      description: "Cross-Functional Team Members",
      number: 100,
      postFix: "+",
    },
  ];

  if (!cards) cards = defaultCards;

  return (
    <Container>
      <MiddleContainer>
        <Title>{"Contribution in Numbers"}</Title>
      </MiddleContainer>
      <Carousel />
      {/* <ThreeColumnContainer>
        {cards.map((card, i) => (
          <Column key={i}>
            <Card>
              <span className="cardContent">
                <ResponsiveCard card={card} />
              </span>
            </Card>
          </Column>
        ))}
        <VerticalSpacer />
        {description && <Description>{description}</Description>}
      </ThreeColumnContainer>
      <MiddleContainer>
        <LogoContainer logo={InforLogo} title={"title"} />
      </MiddleContainer> */}
      {/*  <PrimaryButton css={buttonRoundedCss}>
          <a href={primaryButtonUrl}>{primaryButtonText}</a>
        </PrimaryButton> */}
    </Container>
  );
};
