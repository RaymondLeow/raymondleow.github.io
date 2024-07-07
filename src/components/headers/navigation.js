import React from "react";
import tw from "twin.macro";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLocation } from "react-router-dom";
const Container = tw(
  motion.div
)`w-full h-[60px] fixed top-0 right-0 left-0 z-[99] inset-0 bg-white bg-size-4px bg-opacity-0 backdrop-blur-3 flex flex-col items-center justify-around px-[24px] font-bold text-[13px] tracking-[0.0200rem]`;
const List = tw.ul`list-none flex items-center`;
const ListItem = tw.li`my-[12px] mx-4 hocus:text-[rgba(0,0,0,1)] tracking-wide transition duration-300
border-b-2 border-transparent`;
const ListSelected = tw.li`py-[8px] px-4 m-1 text-white bg-primary-500 tracking-wide transition duration-300
border-b-2 border-transparent rounded-full font-bold`;
const ListContainer = tw.div`bg-white rounded-[24px] shadow-[0_5px_20px_0_rgba(0,0,0,0.05)] opacity-100 content-center items-center flex flex-none flex-row flex-nowrap gap-0 h-12 justify-center overflow-visible p-[3px] relative w-min`;
const FlexFiller = tw.div`flex-grow`;

const HighlightButton = ({ pathname, children }) => {
  const location = useLocation();
  const isSelected = location.pathname === pathname;
  return isSelected ? (
    <ListSelected>{children}</ListSelected>
  ) : (
    <ListItem>{children}</ListItem>
  );
};

const Navigation = () => {
  const { scrollY } = useScroll();
  const height = useTransform(scrollY, [0, 100], [80, 60]);

  return (
    <Container
      style={{
        height,
      }}
    >
      <FlexFiller />
      <ListContainer>
        <List>
          {/* <LogoLink /> */}
          <HighlightButton pathname={"/"}>
            <a style={{ color: "white" }} href="/">
              Home
            </a>
          </HighlightButton>
          <HighlightButton pathname={"/portfolio"}>
            <a href="/#/portfolio">Portfolio</a>
          </HighlightButton>
          <HighlightButton pathname={"/about"}>
            <a href="/#/about">About</a>
          </HighlightButton>
          <HighlightButton pathname={"/contact"}>
            <a href="/#/contact">Contact</a>
          </HighlightButton>
        </List>
      </ListContainer>
    </Container>
  );
};

export default Navigation;
