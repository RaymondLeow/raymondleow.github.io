import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}
const LiuBackground = require("../../images/liu-background.jpg");
// const InforBackground = require("../../images/background-m3.png");
const EuroneticsBackground = require("../../images/background-schemabanken.png");
const LynesBackground = require("../../images/background-lynes-1.webp");
const LiuBackground2 = require("../../images/liu-background-2.jpg");

const LiuLogo = require("../../images/liu-logo.png");
const LynesLogo = require("../../images/lynes-logo.svg");
const EuroneticsLogo = require("../../images/euronetics-logo.png");
const InforLogo = require("../../images/infor-logo.png");

const Progress = tw(motion.div)`fixed left-0 right-0 h-[5px] bottom-[100px]`;
const ImageContainer = tw.img`inset-0 w-full bg-cover`;
const ImageBorder = styled.div(({ width = "600" }) => ({
  width: `${width}px`,
  ...tw`relative max-h-[90vh] m-[20px] bg-white overflow-hidden flex flex-col items-center ml-auto`,
}));
const OuterImageBorder = tw.div`flex items-center justify-center`;

const CompanyContainer = ({ logo, title }) => {
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

const Section = tw.section`h-screen flex justify-center items-center relative`;
const TextContainer = tw(motion.div)`w-[400px]`;
const H2 = tw(
  motion.h2
)`m-0 text-[56px] font-bold tracking-[-3px] leading-tight mb-[10px]`;
const MainContainer = tw.div``;

function Image({ location }) {
  const { background, title, text, logo, videoId } = location;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  //<TextContainer style={{ y, left: "calc(50% + 200px)" }}>
  return (
    //<Section style={{ scrollSnapAlign: "center" }}>
    <Section
      style={{
        scrollSnapAlign: window.innerWidth >= 768 ? "center" : "none", // Apply scroll-snap-align only on md screens and larger
      }}
    >
      <OuterImageBorder>
        <ImageBorder width="600" ref={ref}>
          {videoId && <YouTubeEmbed videoId={videoId} />}
          {!videoId && <ImageContainer src={background} />}
          <CompanyContainer logo={logo} title={title} />
        </ImageBorder>
      </OuterImageBorder>
      <TextContainer
        style={{
          y: window.innerWidth >= 768 ? y : "auto",
          left: "calc(50% + 200px)",
        }}
        className="md:left-[calc(50%_+_200px)]"
      >
        <div>
          <H2>{`${title}`}</H2>
        </div>
        <div>{text}</div>
      </TextContainer>
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
      title: "AI-Driven Descriptions Widget",
      text: `I created a widget using generative AI to generate multilingual descriptions for around 800,000 items. 
        What would’ve taken about 7.6 years to do manually now takes just 6 months, cutting down the workload by 95% and saving GMM Pfaudler 1-2 million euros. 
        Everything demonstrated in the video — from design to deployment — is done by me.
        It was a big project, but seeing how much time and effort it saves makes it worth every bit.`,
      // background: InforBackground,
      videoId: "EK9okHOF8Jk",
      logo: InforLogo,
      id: 1,
    },
    {
      title: "High-Performing Single-Page Apps",
      text: `With my experience leading the development of a flexible scheduling tool at Euronetics, I'm here to help you build scalable web components from the ground up. 
        I bring a wealth of full-stack development expertise, particularly in database design and crafting detailed web component animations. 
        Through my work on various single-page applications, I aim to deliver solutions that are not only scalable but also visually appealing.`,
      background: EuroneticsBackground,
      logo: EuroneticsLogo,
      id: 2,
    },
    {
      title: "Strong Fundamentals in Front-End Technologies",
      text: `With a Master's degree in Computer Science from Linköping University, 
        I have a solid foundation in software engineering and advanced skills in full-stack development. 
        Over time, my passion has gravitated towards front-end frameworks. 
        I have hands-on experience with AngularJS, Angular, React, and even Ruby on Rails, among others.`,
      background: LiuBackground,
      logo: LiuLogo,
      id: 3,
    },
    {
      title: "Open-Source and Integration Expert",
      text: `At Lynes (formerly Briteback), I embarked on my journey into API integration, laying the foundation for years of experience. 
      Since then, I have successfully integrated a variety of Open Source projects including Grandstream, Janus WebRTC, FullCalendar, SIP.js, and Frappe Gantt. 
      If you have any integration needs for your product, I'm here to ensure seamless integration and reliable support for your next project.`,
      background: LynesBackground,
      logo: LynesLogo,
      id: 4,
    },
    {
      title: "Programming Mentor",
      text: `During my tenure as a teaching assistant at Linköping University, 
        I have honed my skills in instructing students in both functional and imperative programming paradigms. 
        I firmly believe in a hands-on approach to learning, coupled with a collaborative mindset. 
        My philosophy emphasizes empowerment and a growth-oriented environment, where every individual can cultivate their potential and excel.`,
      background: LiuBackground2,
      logo: LiuLogo,
      id: 5,
    },
  ];
  return (
    <MainContainer>
      {locations.map((location) => (
        <Image alt={location.title} key={location.id} location={location} />
      ))}
      <Progress style={{ scaleX }} />
    </MainContainer>
  );
}

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div>
      <iframe
        width="600"
        height="400"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
