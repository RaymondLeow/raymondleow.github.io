import FirstPage from "./components/section/FirstPage";
import SecondPage from "./components/section/SecondPage";
import ThirdPage from "./components/section/ThirdPage";
import FourthPage from "./components/section/FourthPage";
import React from "react";
import tw from "twin.macro";
import ReactFullpage from "@fullpage/react-fullpage";
import Navigation from "components/headers/navigation";
const Section = tw.div`overflow-x-hidden h-screen`;

const StartPage = () => {
  const anchors = ["hello", "who_am_i", "experience", "contact"];
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
  {
    /* <ReactFullpage
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
    </>
  ); */
  }
};

export default StartPage;
