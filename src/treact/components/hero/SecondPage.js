import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "../misc/Headings.js";
import { SectionDescription } from "../misc/Typography.js";
import { Container, ContentWithVerticalPadding } from "../misc/Layouts.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/dot-pattern.svg"

const Row = tw.div`h-full flex flex-col lg:flex-row justify-between items-center px-16 max-w-screen-2xl mx-auto sm:px-8`;
const TextColumn = tw.div`lg:pl-16 lg:mr-auto sm:mt-8 md:mt-16 lg:mt-32 lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl`;
const Heading = tw(SectionHeading)`text-left text-primary-900 leading-tight sm:text-2xl md:text-4xl xl:text-6xl`;
const Description = tw(SectionDescription)`mt-4 lg:text-base text-gray-700 max-w-lg`;
const ImageColumn = tw.div`relative sm:w-full lg:w-auto sm:pl-16 sm:pl-0 lg:pl-32 md:mt-0 lg:mt-0 sm:ml-0 lg:ml-32`;
const ImageContainer = tw.div`relative z-40 transform lg:-translate-x-24 sm:-translate-y-16`;
const Image = tw.img`max-w-full sm:mt-8 md:mt-0 sm:w-56 lg:w-96 rounded-t sm:rounded-t-lg md:rounded relative z-20 sm:left-image md:left-0`;
const Offsetbackground = tw.div`absolute inset-0 bg-gray-300 rounded xl:-mb-8`
const ImageDecoratorBlob = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none z-10 absolute right-0 bottom-0 transform translate-x-10 
    translate-y-10 sm:h-16 sm:w-16 h-32 w-32 opacity-25 text-gray-900 fill-current`}
`;
const Testimonial = tw.div`max-w-full rounded absolute bottom-0 sm:invisible md:visible sm:translate-y-48 lg:translate-y-16 inset-x-0 z-20 px-8 py-6 sm:px-4 lg:px-10 
  sm:py-4 lg:py-8 bg-primary-900 text-gray-200 font-medium transform lg:-translate-x-32 sm:text-xs md:text-sm leading-relaxed md:-mr-16 xl:mr-0`
const Nameplate = tw.div`max-w-xs rounded sm:visible md:invisible text-center bg-primary-900 text-gray-100 text-2xl z-20 absolute w-64 left-nameplate`
const Quote = tw.span`font-bold`
const TextRow = tw.div`mt-4 `


export default ({
  heading = "Who am I?",
  name = "Raymond Leow",
  description = "I'm a 29 year old Linköping-based software developer who works with web programming for a living. I love everything involving creation. Whether it's drawing, cooking or creating a new high-end application, I'll be there!",
  imageSrc = require('../../images/profile_pic2.jpg'),
  imageDecoratorBlob = true,
  fastDesc = {
    name: ["Name:", "Raymond Leow"],
    likes: ["Likes: ", "Southeast Asian cuisine, body weight workout, karaoke"],
    dislikes: ["Dislikes: ", "Table knives, liquorice, food with lemon juice"],
    food: ["Favorite food:", "Stir-fried rice noodles"]
  }
}) => {
  return (
    <>
      <Container>
        <ContentWithVerticalPadding>
          <Row>
            <ImageColumn>
              <ImageContainer>
                <Image src={imageSrc} />
                {imageDecoratorBlob && <ImageDecoratorBlob />}
                <Testimonial>
                  <TextRow><Quote>{fastDesc.name[0]}</Quote> {fastDesc.name[1]}</TextRow>
                  <TextRow><Quote>{fastDesc.likes[0]}</Quote> {fastDesc.likes[1]}</TextRow>
                  <TextRow><Quote>{fastDesc.dislikes[0]}</Quote> {fastDesc.dislikes[1]}</TextRow>
                  <TextRow><Quote>{fastDesc.food[0]}</Quote> {fastDesc.food[1]}</TextRow>
                </Testimonial>
                <Nameplate>
                {name}
                </Nameplate>
              </ImageContainer>
              <Offsetbackground />
            </ImageColumn>
            <TextColumn>
              <Heading>{heading}</Heading>
              <Description>{description}</Description>
            </TextColumn>
          </Row>
        </ContentWithVerticalPadding>
      </Container>
    </>
  );
};
