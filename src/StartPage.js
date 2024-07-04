import FirstPage from "./components/section/FirstPage";
import SecondPage from "./components/section/SecondPage";
import ThirdPage from "./components/section/ThirdPage";
import FourthPage from "./components/section/FourthPage";
import React from "react";
import tw from "twin.macro";
const Section = tw.div`overflow-x-hidden h-screen`;

const StartPage = () => {
  return (
    <>
      <Section>
        <FirstPage />
      </Section>
      <SecondPage />
      <Section>
        <ThirdPage />
      </Section>
      <Section>
        <FourthPage />
      </Section>
    </>
  );
};

export default StartPage;
