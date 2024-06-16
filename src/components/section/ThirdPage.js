import React from "react";
import tw from "twin.macro";

import { Carousel } from "components/features/Carousel.js";

const Container = tw.div`relative -mx-8 text-gray-100 flex flex-col items-center`;
const MiddleContainer = tw.div`flex items-center justify-center`;
const Title = tw.div`text-black text-[32px] font-bold mb-20`;

export default ({ buttonRounded = true }) => {
  const buttonRoundedCss = buttonRounded && tw`rounded-full`;

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
