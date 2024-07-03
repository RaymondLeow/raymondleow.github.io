import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  AnimatePresence,
  frame,
} from "framer-motion";
import tw from "twin.macro";

const DotElement = tw(
  motion.div
)`fixed top-0 left-0 bg-primary-600 text-white font-bold rounded-full pointer-events-none z-50 p-4 whitespace-nowrap`;

const DotCursor = ({ text }) => {
  const ref = useRef(null);
  const spring = { damping: 5, stiffness: 50, restDelta: 0.001 };
  const xPoint = useMotionValue(0);
  const yPoint = useMotionValue(0);
  const x = useSpring(xPoint, spring);
  const y = useSpring(yPoint, spring);

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }) => {
      /* const element = ref.current; */
      const element = document.querySelector(".dot-element");

      // Update motion values to the pointer position relative to the element
      xPoint.set(clientX + 20 - element.offsetLeft);
      yPoint.set(clientY - element.offsetTop - element.offsetHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [xPoint, yPoint]);

  return (
    <AnimatePresence>
      <DotElement
        ref={ref}
        className="dot-element"
        key={text}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ x, y }}
      >
        {text}
      </DotElement>
    </AnimatePresence>
  );
};

export default DotCursor;
