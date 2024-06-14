import React, { useState } from "react";
import { motion, useSpring, useMotionTemplate, transform } from "framer-motion";
import Counter from "./Counter";
export default function ResponsiveCard() {
  /* State */
  const [frame, setFrame] = useState({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
  });

  /* Constants */
  const rotateValue = 15;
  const transformValue = rotateValue * 2;
  const springValue = { stiffness: 400, damping: 30 };

  /* UseSpring MotionValues */
  const rotateX = useSpring(0, springValue);
  const rotateY = useSpring(0, springValue);
  const x = useSpring(0, springValue);
  const y = useSpring(0, springValue);
  const shadowX = useSpring(0, springValue);
  const shadowY = useSpring(30, springValue);

  const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0, 0, 68, 0.7))`;

  /* Convert cursor position values */
  const convertCursorPosition = (e) => {
    const objectX = (e.nativeEvent.clientX - frame.left) / frame.width;
    const objectY = (e.nativeEvent.clientY - frame.top) / frame.height;

    rotateX.set(transform(objectY, [0, 1], [rotateValue, -rotateValue]));
    rotateY.set(transform(objectX, [0, 1], [-rotateValue, rotateValue]));
    x.set(transform(objectX, [0, 1], [-transformValue, transformValue]));
    y.set(transform(objectY, [0, 1], [-transformValue, transformValue]));

    shadowX.set(transform(objectX, [0, 1], [20, -20]));
    shadowY.set(transform(objectY, [0, 1], [60, 20]));
  };

  /* On Mouse Enter, get object frame and convert values */
  const handleMouseEnter = (e) => {
    const currentElement = e.target.getBoundingClientRect();

    setFrame({
      width: currentElement.width,
      height: currentElement.height,
      top: currentElement.top,
      left: currentElement.left,
    });

    convertCursorPosition(e);
  };

  /* On Mouse Move, convert values */
  const handleMouseMove = (e) => {
    convertCursorPosition(e);
  };

  /* On Mouse Leave, reset */
  const handleMouseLeave = (e) => {
    rotateX.set(0);
    rotateY.set(0);
    x.set(0);
    y.set(0);
    shadowX.set(0);
    shadowY.set(40);
  };

  return (
    <motion.div
      style={{
        width: "100vw",
        height: "100px",
        display: "flex",
        perspective: 1200,
      }}
    >
      <motion.div
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          width: 400,
          height: 400,
          cursor: "pointer",
        }}
      >
        <motion.div
          style={{
            width: 250,
            height: 250,
            borderRadius: 72,
            rotateX,
            rotateY,
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            background: "white",
          }}
        >
          <motion.div
            style={{
              x,
              y,
              filter,
              height: 160,
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
              color: "black",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Counter duration={10} number={100} />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
