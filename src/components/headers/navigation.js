import React from "react";
import tw from "twin.macro";
import { motion, useScroll, useTransform } from "framer-motion";
const Container = tw(
  motion.div
)`w-full h-[60px] fixed top-0 right-0 left-0 z-[99] inset-0 bg-white bg-size-4px bg-opacity-0 backdrop-blur-3 flex flex-col items-center justify-around px-[24px] font-bold text-[13px] tracking-[0.0200rem]`;
const List = tw.ul`list-none flex items-center`;
const ListItem = tw.li`m-0 mx-[12px] hocus:text-[rgba(0,0,0,1)] font-semibold tracking-wide transition duration-300
pb-1 border-b-2 border-transparent`;
const ListSelected = tw.li`p-[12px] text-white bg-primary-400 font-semibold tracking-wide transition duration-300
pb-1 border-b-2 border-transparent`;
const ListContainer = tw.div`bg-white rounded-[24px] shadow-[0_5px_20px_0_rgba(0,0,0,0.05)] opacity-100 content-center items-center flex flex-none flex-row flex-nowrap gap-0 h-12 justify-center overflow-visible p-[3px] relative w-min`;
const FlexFiller = tw.div`flex-grow`;

const Navigation = () => {
  const { scrollY } = useScroll();
  /* const background = useTransform(
    scrollY,
    [0, 100],
    ["rgba(49, 130, 206, 0)", "rgba(49, 130, 206, 0)"]
  ); */
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
          <ListSelected>
            <a href="/">Home</a>
          </ListSelected>
          <ListItem>
            <a href="/#/portfolio">Portfolio</a>
          </ListItem>
          <ListItem>
            <a href="/#/about">About</a>
          </ListItem>
          <ListItem>
            <a href="/#/contact">Contact</a>
          </ListItem>
        </List>
      </ListContainer>
    </Container>
  );
};

export default Navigation;
