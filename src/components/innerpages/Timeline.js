import React from "react";
import tw from "twin.macro";
import { SectionHeading as HeadingTitle } from "../misc/Headings.js";
import HeaderBase from "../headers/light.js";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
import Tilter from "../features/Tilter.js";

import CV from "../../documents/CV.pdf";

const Container = tw.div`relative bg-gray-300 `;

const SingleColumn = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center max-w-sm`;
const Heading = tw(HeadingTitle)`w-full sm:text-4xl md:text-5xl xl:text-6xl`;

const Content = tw.div`mt-16`;
const Header = tw(HeaderBase)`max-w-none top-0`;
const PrimaryButton = tw(
  PrimaryButtonBase
)`mt-4 inline-block w-56 tracking-wide text-center py-5 rounded-full`;
const FooterDescription = tw.div`mt-2 font-normal leading-snug`;
const FooterDisclaimer = tw.div`mt-2 text-sm font-normal text-gray-600 leading-snug`;
const VerticalSpacer = tw.div`md:mt-10 w-full`;
const FooterContainer = tw.div`flex items-center justify-center h-full`;
const FootTextContainer = tw.div`text-center`;

const SBIconLoc = require("../../images/sb-icon.jpg");
const LIUIconLoc = require("../../images/liu-icon.png");
const BBIconLoc = require("../../images/briteback.png");
const InforIconLoc = require("../../images/infor-icon.png");

export default () => {
  const cards = [
    {
      imageSrc: require("../../images/infor-icon.png"),
      subtitle: "Infor",
      date: "2021 - NOW",
      title: "Demo Services Engineer",
      description:
        "I currently build front-end demo components using Infor's technology tool.",
      url: "https://www.infor.com/sv-se",
      icon: InforIconLoc,
      position: "right",
    },
    {
      imageSrc: require("../../images/sb-logo.jpg"),
      subtitle: "Euronetics",
      date: "2018 - 2021",
      title: "Full-stack Developer",
      description:
        "I'm developed a web-based scheduling tool, so called Schemabanken, for the public sector.",
      url: "https://schemabanken.se/#!/start",
      icon: SBIconLoc,
      position: "left",
    },
    {
      imageSrc: require("../../images/liu-logo.jpg"),
      subtitle: "Linköping University",
      date: "2018",
      title: "Master of Science in Engineering",
      description:
        "I received my master's degree in computer science and software engineering.",
      url: "https://liu.se/en",
      icon: LIUIconLoc,
      position: "right",
    },
    {
      imageSrc: require("../../images/briteback-logo.png"),
      subtitle: "Linköping University",
      date: "2018",
      title: "Master's Thesis",
      description:
        "In collaboration with Briteback I established a QoE evaluation of Janus, a WebRTC-based streaming plugin.",
      url: "https://liu.se/en",
      icon: null,
      position: "right",
    },
    {
      imageSrc: require("../../images/briteback-logo.png"),
      subtitle: "Briteback",
      date: "2018",
      title: "Front-end Developer",
      description:
        "I developed front-end components for the Briteback's communication tool. Regression tests were also developed during my time at Briteback.",
      url: "https://easytelefoni.se/",
      icon: BBIconLoc,
      position: "left",
    },
    {
      imageSrc: require("../../images/liu-logo.jpg"),
      subtitle: "Linköping University",
      date: "2016 - 2018",
      title: "Teaching Assistant",
      description:
        "I attended the first grade university students and corrected their assignments. I also helped in developing a new Python laboration with focus on basic image processing.",
      url: "https://www.ida.liu.se/~TDDD73/info/2016/kursinfo.shtml",
      icon: LIUIconLoc,
      position: "right",
    },
  ];
  const button = {
    description: "Want the timeline in compact form?",
    text: "Get my resume!",
    disclaimer: "Swedish (Oct. 2020)",
  };
  return (
    <Container>
      <div className="section">
        <Header />
        <SingleColumn>
          <HeadingInfoContainer>
            <Heading>Timeline</Heading>
            <HeadingDescription>My past experiences</HeadingDescription>
          </HeadingInfoContainer>

          <Content>
            <VerticalTimeline>
              {cards.map((card, i) => (
                <Tilter key={i.toString()} card={card} />
              ))}
            </VerticalTimeline>
          </Content>
          <VerticalSpacer />
          <FooterContainer>
            <FootTextContainer>
              <FooterDescription>{button.description}</FooterDescription>
              <a
                href={CV}
                without="true"
                rel="noopener noreferrer"
                target="_blank"
              >
                <PrimaryButton>{button.text}</PrimaryButton>
              </a>
              <FooterDisclaimer>{button.disclaimer}</FooterDisclaimer>
            </FootTextContainer>
          </FooterContainer>
        </SingleColumn>
      </div>
    </Container>
  );
};
