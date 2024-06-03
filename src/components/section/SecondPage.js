import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import tw from "twin.macro";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const Progress = tw(motion.div)`fixed left-0 right-0 h-[5px] bottom-[100px]`;
const ImageContainer = tw.img`absolute inset-0 w-full h-full`;
const ImageBorder = tw.div`w-[300px] h-[400px] relative max-h-[90vh] m-[20px] bg-white overflow-hidden`;
const Section = tw.section`h-screen flex justify-center items-center relative`;
const H2 = tw(
  motion.h2
)`m-0 absolute text-[56px] font-bold tracking-[-3px] leading-tight`;
const MainContainer = tw.div`h-screen overflow-y-scroll scroll-snap-y-mandatory`;

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <Section style={{ scrollSnapAlign: "center", perspective: "500px" }}>
      <ImageBorder ref={ref}>
        <ImageContainer src={`/${id}.jpg`} />
      </ImageBorder>
      <H2 style={{ y, left: "calc(50% + 130px)" }}>{`#00${id}`}</H2>
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

  return (
    <MainContainer>
      {[1, 2, 3, 4, 5].map((image) => (
        <Image id={image} />
      ))}
      <Progress style={{ scaleX }} />
    </MainContainer>
  );
}
