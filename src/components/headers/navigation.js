import React, { useState } from "react";
import tw from "twin.macro";
import { motion, useScroll, useTransform } from "framer-motion";

const Container = tw(
  motion.div
)`w-full h-[60px] fixed top-0 right-0 left-0 z-[99] bg-[rgba(0,183,255,0)] text-[rgba(21,21,21,1)] flex flex-row items-center justify-around px-[24px] font-bold text-[13px] tracking-[0.0200rem]`;
const Logo = tw.a`flex items-center justify-center bg-[rgba(255,255,255,1)] w-[40px] h-[40px] text-3xl rounded-full mr-auto text-black no-underline`;
const List = tw.ul`list-none flex items-center`;
const ListItem = tw.li`m-0 mx-[12px] text-[rgba(255,255,255,1)] hover:border-[rgba(255,255,255,1)] hocus:text-[rgba(255,255,255,1)] font-semibold tracking-wide transition duration-300
pb-1 border-b-2 border-transparent`;

const Navigation = () => {
  const [hash] = useState(window.location.hash);
  const { scrollY } = useScroll();
  const background = useTransform(
    scrollY,
    [0, 100],
    [
      hash.length === 0 ? "rgba(49, 130, 206, 0)" : "rgba(49, 130, 206, 1)",
      "rgba(49, 130, 206, 1)",
    ]
  );
  const height = useTransform(scrollY, [0, 100], [90, 60]);

  return (
    <Container
      style={{
        background,
        height,
      }}
    >
      <Logo href="/">R</Logo>
      <List>
        <ListItem>
          <a href="/#/portfolio">Portfolio</a>
        </ListItem>
        <ListItem>
          <a href="/#/about">About</a>
        </ListItem>
      </List>
    </Container>
  );
};

export default Navigation;
