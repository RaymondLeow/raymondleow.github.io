import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const LiuBackground = require("../../images/liu-background.jpg");
const InforBackground = require("../../images/background-m3.png");
const EuroneticsBackground = require("../../images/background-schemabanken.png");
const LynesBackground = require("../../images/background-lynes-1.webp");
const LiuBackground2 = require("../../images/liu-background-2.jpg");

const Progress = tw(motion.div)`fixed left-0 right-0 h-[5px] bottom-[100px]`;
const ImageContainer = tw.img`absolute inset-0 w-full h-full`;
const ImageBorder = styled.div(({ width = "600" }) => ({
  width: `${width}px`,
  ...tw`h-[400px] relative max-h-[90vh] m-[20px] bg-white overflow-hidden`,
}));
const Section = tw.section`h-screen flex justify-center items-center relative`;
const H2 = tw(
  motion.h2
)`m-0 absolute text-[56px] font-bold tracking-[-3px] leading-tight`;
const MainContainer = tw.div``;

function Image({ location }) {
  const { background, title, text } = location;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Section style={{ scrollSnapAlign: "center" }}>
      <ImageBorder width="600" ref={ref}>
        <ImageContainer src={background} />
      </ImageBorder>
      <H2 style={{ y, left: "calc(50% + 200px)" }}>{`${title}`}</H2>
      <div>{text}</div>
    </Section>
  );
}

export default function SecondPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const locations = [
    {
      title: "Fast and Efficient Development",
      text: "As a Demo Services Engineer, I develop innovative front-end prototypes, highlighting Infor's capabilities to adapt to the customer's needs. Do you have an idea for the next-gen warehouse management system or perhaps a highly interactive Gantt Chart with your website? Sign me up!",
      background: InforBackground,
    },
    {
      title: "High-Performing Single-Page Apps",
      text: "With an abudance of experience in full-stack development, I can help you build scaling web components from scratch. Having built numerous single-page applications, I can help you bring scaling and aesthetically pleasing to life.",
      background: EuroneticsBackground,
    },
    {
      title: "Strong Fundamentals in Computer Science",
      text: "With a Master's degree in computer science, I know the basics and the advanced of software engineering, and front-end technologies at that.",
      background: LiuBackground,
    },
    {
      title: "Open-Source and Integration Expert",
      text: "What do you need to integrate to your product? Having integrated a plethora of Open Source projects, such as Grandstream, Janus WebRTC, FullCalendar, SIP.js, and Frappe Gantt, I'll be the one you can count on for the next integration.",
      background: LynesBackground,
    },
    {
      title: "Programming mentor",
      text: "As a teaching assistant at Linköping University, I have gathered the proficiency in teaching students in functional and imperative programming.",
      background: LiuBackground2,
    },
  ];
  return (
    <MainContainer>
      {locations.map((location) => (
        <Image location={location} />
      ))}
      <Progress style={{ scaleX }} />
    </MainContainer>
  );
}
