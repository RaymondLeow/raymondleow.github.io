import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import tw from "twin.macro";
import ResponsivePicture from "components/features/ResponsivePicture";

const Parallax = tw.div`overflow-hidden tracking-tight leading-[0.8] m-0 whitespace-nowrap flex flex-nowrap`;
const Scroller = tw(
  motion.div
)`font-semibold uppercase text-7xl flex whitespace-nowrap flex-nowrap  font-plaster`;
const Child = tw.span`block mr-[30px]`;
const Section = tw.div`relative flex justify-center items-center h-screen`;
const ParallaxSection = tw.div`absolute flex justify-center items-center flex-col`;
const ProfilePicture = tw(ResponsivePicture)`absolute`;
const TextFiller = tw.div`h-[170px]`;
const HeightFiller = tw.div`h-[66px]`;
const H1 = tw.h1`font-publicsans text-3xl md:text-5xl font-medium `;
const H2 = tw.h2`font-publicsans text-xl md:text-2xl font-medium text-gray-800 text-center w-calc-full-minus-30`;
const H3 = tw.h3`mb-1 font-publicsans text-lg md:text-xl text-gray-800`;
const Italic = tw.span`font-bold`;

function ParallaxText({ children, baseVelocity = 100 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(0, -20, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 4000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <Parallax>
      <Scroller style={{ x }}>
        <Child>{children} </Child>
        <Child>{children} </Child>
        <Child>{children} </Child>
        <Child>{children} </Child>
        <Child>{children} </Child>
      </Scroller>
    </Parallax>
  );
}

export default function FirstPage() {
  return (
    <Section>
      <ParallaxSection>
        <H1>
          Hello, I'm <Italic>Raymond</Italic>!
        </H1>
        <H3>Fullstack Engineer</H3>
        <TextFiller />
        <ParallaxText baseVelocity={-1}>Under Renovation</ParallaxText>
        <ParallaxText baseVelocity={1}>Please Hold On</ParallaxText>
        <TextFiller />
        <H2>
          The site is under complete renovation. Please hold on, phone owners!
        </H2>
        <HeightFiller />
      </ParallaxSection>
      <ProfilePicture></ProfilePicture>
    </Section>
  );
}
