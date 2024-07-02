import React from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";

const DotElement = tw(
  motion.div
)`fixed top-0 left-0 w-4 h-4 bg-black rounded-full pointer-events-none z-50 w-[24px] h-[24px] bg-primary-600`;

class DotCursor extends React.Component {
  state = {
    mousePosition: { x: 0, y: 0 },
  };

  handleMouseMove = (event) => {
    this.setState({
      mousePosition: { x: event.clientX + 20, y: event.clientY - 10 },
    });
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.handleMouseMove);
  }

  componentWillUnmount() {
    window.removeEventListener("mousemove", this.handleMouseMove);
  }

  render() {
    const { mousePosition } = this.state;
    return <DotElement style={{ x: mousePosition.x, y: mousePosition.y }} />;
  }
}

export default DotCursor;
