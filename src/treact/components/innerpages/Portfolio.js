import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ReactComponent as SvgDotPatternIcon } from "../../images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import HeaderBase, { NavLinks, NavLink, PrimaryLink } from "../headers/light.js";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import Tilter from "../hero/Tilter.js";

import {BBIcon} from "../../images/briteback.png";
import {LIUIcon} from "../../images/liu-icon.png";
import {SBIcon} from "../../images/sb-icon.jpg";
import CV from "../../documents/CV.pdf";

const Container = tw.div`relative bg-gray-300 `;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Heading = tw(HeadingTitle)`w-full sm:text-4xl md:text-5xl xl:text-6xl`;

const Content = tw.div`mt-16`;

const Card = styled.div(props => [
  tw`mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row"
]);
const Image = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-contain bg-no-repeat bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`
]);
const Header = tw(HeaderBase)`max-w-none top-0`;
const Details = tw.div`mt-4 md:mt-0 md:max-w-md mx-4 sm:mx-8 md:mx-4 lg:mx-8`;
const Subtitle = tw.div`font-bold tracking-wide text-secondary-300`;
const Title = tw.h4`text-3xl font-bold text-gray-900`;
const Description = tw.p`mt-2 text-sm leading-loose text-gray-800`;
const Link = tw.a`inline-block mt-4 text-sm text-primary-500 font-bold cursor-pointer transition duration-300 border-b-2 border-transparent hover:border-primary-500`;
const PrimaryButton = tw(PrimaryButtonBase)`mt-4 inline-block w-56 tracking-wide text-center py-5 rounded-full`;
const FooterDescription = tw.div`mt-2 font-normal leading-snug`;
const FooterDisclaimer = tw.div`mt-2 text-sm font-normal text-gray-600 leading-snug`;
const VerticalSpacer = tw.div`md:mt-10 w-full`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const Icon = tw.img`rounded-full`;
const SBIconLoc = require("../../images/sb-icon.jpg");
const LIUIconLoc = require("../../images/liu-icon.png");
const BBIconLoc = require("../../images/briteback.png");
const InforIconLoc = require("../../images/infor-icon.png")

export default () => {
  const cards = [
    {
      imageSrc: require('../../images/infor-icon.png'),
      subtitle: "Infor",
      date: "2021 - NOW",
      title: "Demo Services Engineer",
      description: 
        "I currently build front-end demo components using Infor's technology tool.",
      url: "https://www.infor.com/sv-se",
      icon: InforIconLoc,
      position: "right"
    },
    {
      imageSrc: require('../../images/sb-logo.jpg'), 
      subtitle: "Euronetics",
      date: "2018 - 2021",
      title: "Full-stack Developer",
      description:
        "I'm developed a web-based scheduling tool, so called Schemabanken, for the public sector.",
      url: "https://schemabanken.se/#!/start",
      icon: SBIconLoc,
      position: "left"
    },
    {
      imageSrc: require('../../images/liu-logo.jpg'),
      subtitle: "Linköping University",
      date: "2018",
      title: "Master of Science in Engineering",
      description:
        "I received my master's degree in computer science and software engineering.",
      url: "https://liu.se/en",
      icon: LIUIconLoc,
      position: "right"
    },
    {
      imageSrc: require('../../images/briteback-logo.png'),
      subtitle: "Linköping University",
      date: "2018",
      title: "Master's Thesis",
      description:
        "In collaboration with Briteback I established a QoE evaluation of Janus, a WebRTC-based streaming plugin.",
      url: "https://liu.se/en",
      icon: null,
      position: "right"
    },
    {
      imageSrc: require('../../images/briteback-logo.png'),
      subtitle: "Briteback",
      date: "2018",
      title: "Front-end Developer",
      description:
        "I developed front-end components for the Briteback's communication tool. Regression tests were also developed during my time at Briteback.",
      url: "https://easytelefoni.se/",
      icon: BBIconLoc,
      position: "left"
    },
    {
      imageSrc: require('../../images/liu-logo.jpg'),
      subtitle: "Linköping University",
      date: "2016 - 2018",
      title: "Teaching Assistant",
      description:
        "I attended the first grade university students and corrected their assignments. I also helped in developing a new Python laboration with focus on basic image processing.",
      url: "https://www.ida.liu.se/~TDDD73/info/2016/kursinfo.shtml",
      icon: LIUIconLoc,
      position: "right"
    }
  ];
  const button = {
    description: "Want the portfolio in compact form?",
    text: "Get my CV!",
    disclaimer: "Swedish (Oct. 2020)"
  };
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="/">Start</NavLink>
      <NavLink href="/portfolio">Portfolio</NavLink>
      <NavLink href="/about">About</NavLink>
      <NavLink href="/#contact">Contact</NavLink>
    </NavLinks>
  ];
  return (
    <Container>
      <div className="section">
      <Header links={navLinks} />
      <SingleColumn>
        <HeadingInfoContainer>
          <Heading>Portfolio</Heading>
          <HeadingDescription>
            My past experiences 
          </HeadingDescription>
        </HeadingInfoContainer>

        <Content>
        <VerticalTimeline>
          {cards.map((card, i) => (
            <Tilter key={i.toString()} card={card}/>
          ))}
        </VerticalTimeline>
        </Content>
        <VerticalSpacer/>
        <FooterDescription>{button.description}</FooterDescription>
        <a href={CV} without rel="noopener noreferrer" target='_blank'>
        <PrimaryButton>
          {button.text}
        </PrimaryButton>
        </a>
        <FooterDisclaimer>{button.disclaimer}</FooterDisclaimer>
      </SingleColumn>
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
      </div>
    </Container>
  );
};
