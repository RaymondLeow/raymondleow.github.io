import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import tw from "twin.macro";
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
const ImageBorder = tw.div`w-[600px] h-[400px] relative max-h-[90vh] m-[20px] bg-white overflow-hidden`;
const Section = tw.section`h-screen flex justify-center items-center relative`;
const H2 = tw(
  motion.h2
)`m-0 absolute text-[56px] font-bold tracking-[-3px] leading-tight`;
const MainContainer = tw.div``;

function Image({ image, location }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Section style={{ scrollSnapAlign: "center" }}>
      <ImageBorder ref={ref}>
        <ImageContainer src={image} />
      </ImageBorder>
      <H2 style={{ y, left: "calc(50% + 200px)" }}>{`${location}`}</H2>
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
    ["Infor", InforBackground],
    ["Euronetics", EuroneticsBackground],
    ["Linköping University", LiuBackground],
    ["Lynes (formerly Briteback)", LynesBackground],
    ["Teaching Assistant", LiuBackground2],
  ];
  return (
    <MainContainer>
      {locations.map(([location, image]) => (
        <Image image={image} location={location} />
      ))}
      <Progress style={{ scaleX }} />
    </MainContainer>
  );
}
