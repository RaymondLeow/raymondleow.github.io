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

const Container = tw.div`relative -mx-8 text-gray-100 flex flex-col items-center`;
const LiuLogo = require("../../images/liu-logo.png");
const LynesLogo = require("../../images/lynes-logo.svg");
const EuroneticsLogo = require("../../images/euronetics-logo.png");
const InforLogo = require("../../images/infor-logo.png");

const MiddleContainer = tw.div`flex items-center justify-center`;
const Title = tw.div`text-black text-[32px] font-bold mb-10`;

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
      {/*  <PrimaryButton css={buttonRoundedCss}>
          <a href={primaryButtonUrl}>{primaryButtonText}</a>
        </PrimaryButton> */}
    </Container>
  );
};
