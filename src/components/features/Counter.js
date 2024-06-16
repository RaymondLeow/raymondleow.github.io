import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import tw from "twin.macro";

const TextContainer = tw.div`text-center max-w-xxs mx-auto`;
export default function Counter({ duration = 5, card }) {
  const { number, description, postFix } = card;
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      const animation = animate(count, number, { duration });

      const unsubscribe = rounded.onChange((latest) => {
        setDisplayValue(latest);
      });

      return () => {
        animation.stop();
        unsubscribe();
      };
    }
  }, [count, duration, number, rounded, inView]);

  return (
    <>
      <motion.h1
        style={{
          height: 100,
          width: 160,
          background: "transparent",
          fontFamily: "sofia-pro, sans-serif",
          fontWeight: 600,
          fontStyle: "normal",
          fontSize: "72px",
          fontWeight: 700,
          letterSpacing: "-1px",
          lineHeight: 1.2,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "flex-end",
          display: "flex",
        }}
        ref={ref}
      >
        {displayValue}
        {postFix}
      </motion.h1>
      <TextContainer>{description}</TextContainer>
    </>
  );
}
