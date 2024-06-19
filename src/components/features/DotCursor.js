import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";

const DotElement = tw(
  motion.div
)`fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-50 w-[24px] h-[24px] bg-primary-600`;

const DotCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX + 20, y: event.clientY - 10 });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <DotElement style={{ x: mousePosition.x, y: mousePosition.y }} />;
};

export default DotCursor;
