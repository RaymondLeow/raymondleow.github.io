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
  const { background, title } = location;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Section style={{ scrollSnapAlign: "center" }}>
      <ImageBorder width="600" ref={ref}>
        <ImageContainer src={background} />
      </ImageBorder>
      <H2 style={{ y, left: "calc(50% + 200px)" }}>{`${title}`}</H2>
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
    { title: "Infor", background: InforBackground },
    { title: "Euronetics", background: EuroneticsBackground },
    { title: "Linköping University", background: LiuBackground },
    { title: "Lynes (formerly Briteback)", background: LynesBackground },
    { title: "Teaching Assistant", background: LiuBackground2 },
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
