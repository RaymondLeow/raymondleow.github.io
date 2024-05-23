import FirstPage from "./components/hero/FirstPage";
import SecondPage from "./components/hero/SecondPage";
import ThirdPage from "./components/features/ThirdPage";
import FourthPage from "./components/hero/FourthPage";
import React, { useEffect } from "react";
import ReactFullpage from "@fullpage/react-fullpage";

const StartPage = () => {
  const anchors = ["hello", "who_am_i", "experience", "contact"];

  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      anchors={anchors}
      scrollingSpeed={1000}
      autoScrolling={false}
      fitToSection={false}
      navigation
      navigationTooltips={anchors}
      render={({ fullpageApi }) => {
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
