import FirstPage from "./components/section/FirstPage";
import SecondPage from "./components/section/SecondPage";
import ThirdPage from "./components/section/ThirdPage";
import FourthPage from "./components/section/FourthPage";
import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import tw from "twin.macro";
const Section = tw.div`overflow-x-visible lg:overflow-x-hidden h-screen`;

const StartPage = () => {
  const bottomRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("contact") && bottomRef.current) {
      bottomRef.current.scrollIntoView();
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Section>
        <FirstPage />
      </Section>
      <SecondPage />
      <Section>
        <ThirdPage />
      </Section>
      <Section ref={bottomRef}>
        <FourthPage />
      </Section>
    </>
  );
};

export default StartPage;
