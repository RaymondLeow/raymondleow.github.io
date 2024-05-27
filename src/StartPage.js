import FirstPage from "./components/hero/FirstPage";
import SecondPage from "./components/hero/SecondPage";
import ThirdPage from "./components/features/ThirdPage";
import FourthPage from "./components/hero/FourthPage";
import React from "react";
import tw from "twin.macro";
import ReactFullpage from "@fullpage/react-fullpage";

const StartPage = () => {
  const anchors = ["hello", "who_am_i", "experience", "contact"];
  const Section = tw.div`overflow-x-hidden`;
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      autoScrolling={false}
      fitToSection={false}
      navigation
      navigationTooltips={anchors}
      render={({ fullpageApi }) => {
        return (
          <>
            <div className="section">
              <Section>
                <FirstPage fullpageApi={fullpageApi} />
              </Section>
            </div>
            <div className="section">
              <Section>
                <SecondPage />
              </Section>
            </div>
            <div className="section">
              <Section>
                <ThirdPage />
              </Section>
            </div>
            <div className="section">
              <Section>
                <FourthPage />
              </Section>
            </div>
          </>
        );
      }}
    />
  );
};

export default StartPage;
