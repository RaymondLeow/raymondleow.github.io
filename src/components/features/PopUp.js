import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const PopUp = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start({
        y: "0%",
        opacity: 1,
        transition: {
          ease: "easeOut",
          duration: 0.5,
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      width={"100%"}
      initial={{ y: "90%" }}
      animate={controls}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};

export default PopUp;
