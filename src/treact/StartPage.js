import FirstPage from "./components/hero/FirstPage";
import SecondPage from "./components/hero/SecondPage";
import ThirdPage from "./components/features/ThirdPage";
import FourthPage from "./components/hero/FourthPage";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const StartPage = () => {
  const anchors = ["hello", "who_am_i", "experience", "contact"];

  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={1000}
      anchors={anchors}
      autoScrolling={false}
      fitToSection={false}
      navigation
      navigationTooltips={anchors}
      render={({ state, fullpageApi }) => {
        return (
          <>
            <div className="section">
              <FirstPage fullpageApi={fullpageApi} />
            </div>
            <div className="section">
              <SecondPage />
            </div>
            <div className="section">
              <ThirdPage />
            </div>
            <div className="section">
              <FourthPage />
            </div>
          </>
        );
      }}
    />
  );
};

export default StartPage;
