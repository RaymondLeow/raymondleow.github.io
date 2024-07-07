import React from "react";
import tw from "twin.macro";

import { Carousel } from "components/features/Carousel.js";

const Container = tw.div`relative -mx-8 text-gray-100 flex flex-col items-center`;
const MiddleContainer = tw.div`flex items-center justify-center`;
const Title = tw.div`text-black text-[32px] font-bold mb-20`;

export default () => {
  return (
    <Container>
      <MiddleContainer>
        <Title>{"Contribution in Numbers"}</Title>
      </MiddleContainer>
      <Carousel />
    </Container>
  );
};
