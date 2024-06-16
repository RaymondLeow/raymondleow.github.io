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

import defaultCardImage from "../../images/shield-icon.svg";
import LIUIcon from "../../images/liu-icon.png";
import SBIcon from "../../images/sb-icon.jpg";
import InforIcon from "../../images/infor-icon.png";
import Counter from "components/features/Counter.js";
import ResponsiveCard from "components/features/ResponsiveCard.js";

const Container = tw.div`relative -mx-8 px-8 text-gray-100`;

const ThreeColumnContainer = styled.div`
  ${tw`z-10 relative flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto py-20 md:py-24`}
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
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2 py-8`}

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

export default ({
  cards = null,
  heading = "My role in numbers",
  subheading = "",
  description = "Want to know more?",
  buttonRounded = true,
  primaryButtonUrl = "/#/portfolio",
  primaryButtonText = "Check my portfolio!",
}) => {
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
      <ThreeColumnContainer>
        {subheading && <Subheading>{subheading}</Subheading>}
        <VerticalSpacer />
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
        <SmallVerticalSpacer />
        {/*  <PrimaryButton css={buttonRoundedCss}>
          <a href={primaryButtonUrl}>{primaryButtonText}</a>
        </PrimaryButton> */}
      </ThreeColumnContainer>
    </Container>
  );
};
