import React, { useState } from "react";
import { motion, useSpring, useMotionTemplate, transform } from "framer-motion";
import BackgroundImage from "../../images/profile_pic.png";

export default function ResponsivePicture() {
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

  const filter = useMotionTemplate`drop-shadow(${shadowX}px ${shadowY}px 20px rgba(0, 0, 68, 0.5))`;

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
        placeItems: "center",
        placeContent: "center",
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
            width: 400,
            height: 400,
            borderRadius: 92,
            rotateX,
            rotateY,
            display: "flex",
            placeItems: "center",
            placeContent: "center",
            background: "linear-gradient(180deg, #0CF 0%, #86F 100%)",
          }}
        >
          <motion.div
            style={{
              x,
              y,
              filter,
              backgroundImage: `url(${BackgroundImage})`,
              height: 320,
              width: 320,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 5,
            }}
          ></motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
