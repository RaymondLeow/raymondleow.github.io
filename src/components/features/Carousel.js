import { useState } from "react";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import ResponsiveCard from "components/features/ResponsiveCard.js";

const LiuLogo = require("../../images/liu-logo.png");
const LynesLogo = require("../../images/lynes-logo.svg");
const EuroneticsLogo = require("../../images/euronetics-logo.png");
const InforLogo = require("../../images/infor-logo.png");

const ThreeColumnContainer = styled.div`
  ${tw`z-10 relative flex flex-col items-center md:items-stretch md:flex-row flex-wrap md:justify-center max-w-screen-lg mx-auto h-[300px]`}
`;
const VerticalSpacer = tw.div`md:mt-10 w-full`;

const Column = styled.div`
  ${tw`sm:w-full md:w-1/2 lg:w-1/3 md:max-w-xs`}
`;
const Card = styled.div`
  ${tw`flex flex-col items-center sm:items-start text-center sm:text-left h-full mx-4 px-2`}

  .cardContent {
    ${tw`flex sm:flex-row md:flex-col`}
  }
  .imageContainer {
    ${tw`bg-white text-center rounded-full sm:w-12 md:w-20 sm:h-12 md:h-20 sm:p-3 md:p-2`}
    img {
      ${tw`sm:w-12 md:w-16 sm:w-12 md:h-16 rounded-full`}
    }
  }

  .textContainer {
    ${tw`sm:pl-6 md:pl-0 sm:mt-3 md:mt-6`}
  }

  .title {
    ${tw`tracking-wider font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-2 font-normal text-gray-400 leading-snug`}
  }
`;
const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const MiddleContainer = tw.div`flex items-center justify-center text-black`;
const Position = tw.div`text-black text-[20px] mb-10`;
const LogoContainer = ({ logo, title }) => {
  const renderContainer = () => {
    if (logo) {
      return (
        <img
          alt={title}
          src={logo.default || logo}
          style={{ height: "60px", backgroundSize: "cover" }}
        />
      );
    } else {
      return <div></div>;
    }
  };
  return renderContainer();
};
const Previous = tw.div`drop-shadow-md hover:shadow-outline border border-gray-400 text-black top-[calc(50%-20px)] absolute bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20 scale-x-[-1] left-[20px]`;
const Next = tw.div`drop-shadow-md hover:shadow-outline border border-gray-400 text-black top-[calc(50%-20px)] absolute bg-white rounded-full w-10 h-10 flex justify-center items-center select-none cursor-pointer font-bold text-lg z-20 right-[20px]`;
const carouselParts = [
  {
    imageSrc: InforLogo,
    position: "Demo Services Engineer (Front End)",
    cards: [
      {
        description: "Enterprise Apps Built, Optimized, and Documented",
        number: 50,
        postFix: "+",
        colors: ["#4263eb", "#d4191d"],
      },
      {
        description: "Companies Benefit from My Web & Mobile Applications",
        number: 800,
        postFix: "+",
        colors: ["#4263eb", "#d4191d"],
      },
      {
        description: "Cross-Functional Team Members Collaborated",
        number: 100,
        postFix: "+",
        colors: ["#4263eb", "#d4191d"],
      },
    ],
  },
  {
    imageSrc: EuroneticsLogo,
    position: "Full Stack Engineer",
    cards: [
      {
        description: "Page Load Time Reduction Across the Core Calendar Logic",
        number: 83,
        postFix: "%",
        colors: ["#3e973d", "#e0ab25"],
        direction: 90,
      },
      {
        description: "Boost in Productivity Using Automated Testing",
        number: 40,
        postFix: "%",
        colors: ["#e0ab25", "#e0ab25"],
      },
      {
        description: "Customer and Technical Support Satisfaction Rate",
        number: 100,
        postFix: "%",
        colors: ["#e0ab25", "#bc1432"],
        direction: 90,
      },
    ],
  },
  {
    imageSrc: LynesLogo,
    position: "Front End Developer",
    cards: [
      {
        description: "Increase in Test Coverage Using Puppeteer",
        number: 100,
        postFix: "%",
        colors: ["#da9695", "#fbb9b5"],
        direction: 90,
      },
      {
        description: "Reduction in Load Size with Grandstream Integration",
        number: 40,
        postFix: "%",
        colors: ["#fbb9b5", "#a9e0ed"],
        direction: 90,
      },
      {
        description:
          "Frame Rate Boost with WebRTC Client Using React and Janus SIP",
        number: 25,
        postFix: "%",
        colors: ["#a9e0ed", "#a0c4d3"],
        direction: 90,
      },
    ],
  },
  {
    imageSrc: LiuLogo,
    position: "Lab Assistant",
    cards: [
      {
        description: "Students Mentored in Python and Problem Solving",
        number: 100,
        postFix: "+",
        colors: ["#40b4e5", "#2dc9af"],
      },
      {
        description: "Students' Lab Assignments and Exams Graded",
        number: 400,
        postFix: "+",
        colors: ["#40b4e5", "#2dc9af"],
      },
      {
        description: "Students Used My Course Materials and Assignments",
        number: 800,
        postFix: "+",
        colors: ["#40b4e5", "#2dc9af"],
      },
    ],
  },
];

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Carousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const idx = wrap(0, carouselParts.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "500px",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        padding: 0,
        margin: 0,
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          style={{
            position: "absolute",
            maxWidth: "100vw",
          }}
        >
          <MiddleContainer>
            <Position>{carouselParts[idx].position}</Position>
          </MiddleContainer>
          <ThreeColumnContainer>
            {carouselParts[idx].cards.map((card, i) => (
              <Column key={i}>
                <Card>
                  <span className="cardContent">
                    <ResponsiveCard card={card} />
                  </span>
                </Card>
              </Column>
            ))}
            <VerticalSpacer />
            {/* {card.description && <Description>{card.description}</Description>} */}
          </ThreeColumnContainer>
          <MiddleContainer>
            <LogoContainer logo={carouselParts[idx].imageSrc} title={"title"} />
          </MiddleContainer>
        </motion.div>
      </AnimatePresence>
      <Next onClick={() => paginate(1)}>{"‣"}</Next>
      <Previous onClick={() => paginate(-1)}>{"‣"}</Previous>
    </div>
  );
};
